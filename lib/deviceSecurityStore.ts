import fs from "fs";
import path from "path";

export interface DeviceLimitRecord {
  deviceId: string;
  count: number;
  maxAllowed: number;
  isBlocked: boolean;
  registrationIds: string[];
  phones: string[];
  ipAddresses: string[];
  firstSeen: string;
  lastAttempt: string;
}

export const MAX_REGISTRATIONS_PER_DEVICE = 3;

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "device_registration_limits.json");

// In-memory cache for fast lookups
const deviceMap = new Map<string, DeviceLimitRecord>();
let isStoreInitialized = false;

function initStore() {
  if (isStoreInitialized) return;
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      if (content) {
        const records: DeviceLimitRecord[] = JSON.parse(content);
        if (Array.isArray(records)) {
          deviceMap.clear();
          for (const rec of records) {
            if (rec && rec.deviceId) {
              deviceMap.set(rec.deviceId.toLowerCase().trim(), {
                ...rec,
                maxAllowed: MAX_REGISTRATIONS_PER_DEVICE,
                isBlocked: (rec.count || 0) >= MAX_REGISTRATIONS_PER_DEVICE,
              });
            }
          }
        }
      }
    }
    isStoreInitialized = true;
  } catch (err) {
    console.error("[DeviceSecurityStore] Storage init error:", err);
  }
}

function persistStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const records = Array.from(deviceMap.values());
    fs.writeFileSync(DATA_FILE, JSON.stringify(records, null, 2), "utf-8");
  } catch (err) {
    console.error("[DeviceSecurityStore] Persist error:", err);
  }
}

/**
 * Check if a device has reached or exceeded the 3 registration limit.
 */
export function getDeviceRegistrationStatus(deviceId: string, ip?: string): {
  deviceId: string;
  count: number;
  maxAllowed: number;
  remaining: number;
  isBlocked: boolean;
  allowed: boolean;
  reason?: string;
} {
  initStore();

  const cleanId = (deviceId || "").toLowerCase().trim();
  const defaultStatus = {
    deviceId: cleanId,
    count: 0,
    maxAllowed: MAX_REGISTRATIONS_PER_DEVICE,
    remaining: MAX_REGISTRATIONS_PER_DEVICE,
    isBlocked: false,
    allowed: true,
  };

  if (!cleanId) {
    return defaultStatus;
  }

  const existing = deviceMap.get(cleanId);
  if (!existing) {
    return defaultStatus;
  }

  const count = existing.count || 0;
  const isBlocked = count >= MAX_REGISTRATIONS_PER_DEVICE;
  const remaining = Math.max(0, MAX_REGISTRATIONS_PER_DEVICE - count);

  return {
    deviceId: cleanId,
    count,
    maxAllowed: MAX_REGISTRATIONS_PER_DEVICE,
    remaining,
    isBlocked,
    allowed: !isBlocked,
    reason: isBlocked
      ? `Security Alert: The maximum registration limit (${MAX_REGISTRATIONS_PER_DEVICE} registrations) for this mobile device has already been reached. No further registrations can be submitted from this device. Please contact helpline at +91 9203544140 for assistance.`
      : undefined,
  };
}

/**
 * Record a new confirmed registration for this device.
 */
export function recordDeviceRegistration(params: {
  deviceId: string;
  registrationId: string;
  phone: string;
  ip?: string;
}): {
  success: boolean;
  newCount: number;
  remaining: number;
  isBlocked: boolean;
  error?: string;
} {
  initStore();

  const cleanId = (params.deviceId || "").toLowerCase().trim();
  if (!cleanId) {
    return {
      success: false,
      newCount: 0,
      remaining: MAX_REGISTRATIONS_PER_DEVICE,
      isBlocked: false,
      error: "Device ID missing.",
    };
  }

  const now = new Date().toISOString();
  let record = deviceMap.get(cleanId);

  if (!record) {
    record = {
      deviceId: cleanId,
      count: 0,
      maxAllowed: MAX_REGISTRATIONS_PER_DEVICE,
      isBlocked: false,
      registrationIds: [],
      phones: [],
      ipAddresses: [],
      firstSeen: now,
      lastAttempt: now,
    };
  }

  // If already at or over limit, reject
  if (record.count >= MAX_REGISTRATIONS_PER_DEVICE) {
    return {
      success: false,
      newCount: record.count,
      remaining: 0,
      isBlocked: true,
      error: `Security Limit Exceeded: Maximum ${MAX_REGISTRATIONS_PER_DEVICE} registrations have already been completed from this mobile device.`,
    };
  }

  // Increment count
  record.count += 1;
  record.lastAttempt = now;
  if (params.registrationId && !record.registrationIds.includes(params.registrationId)) {
    record.registrationIds.push(params.registrationId);
  }
  if (params.phone && !record.phones.includes(params.phone)) {
    record.phones.push(params.phone);
  }
  if (params.ip && !record.ipAddresses.includes(params.ip)) {
    record.ipAddresses.push(params.ip);
  }

  record.isBlocked = record.count >= MAX_REGISTRATIONS_PER_DEVICE;

  deviceMap.set(cleanId, record);
  persistStore();

  return {
    success: true,
    newCount: record.count,
    remaining: Math.max(0, MAX_REGISTRATIONS_PER_DEVICE - record.count),
    isBlocked: record.isBlocked,
  };
}

/**
 * Get all tracked devices (for administrative verification if needed)
 */
export function getAllTrackedDevices(): DeviceLimitRecord[] {
  initStore();
  return Array.from(deviceMap.values());
}
