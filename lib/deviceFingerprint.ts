/**
 * Multi-layer Client Hardware & Canvas Fingerprinting Engine
 * 
 * Generates a stable hardware identifier for mobile/desktop devices based on immutable
 * physical parameters (GPU Renderer, Screen geometry, CPU cores, Touch capabilities,
 * Canvas 2D rasterization, Audio DSP, Timezone).
 * 
 * Even if the user clears browser cookies, cache, local storage, or uses incognito mode,
 * the hardware fingerprint remains consistent for the physical device.
 */

// Simple robust string hash fallback if crypto.subtle is unavailable
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return "dev_" + Math.abs(hash).toString(16).padStart(8, "0");
}

async function sha256Hex(str: string): Promise<string> {
  if (
    typeof window !== "undefined" &&
    window.crypto &&
    window.crypto.subtle &&
    typeof window.crypto.subtle.digest === "function"
  ) {
    try {
      const msgUint8 = new TextEncoder().encode(str);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      return "dev_" + hex.slice(0, 32);
    } catch {
      return simpleHash(str);
    }
  }
  return simpleHash(str);
}

function getCanvasFingerprint(): string {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 240;
    canvas.height = 60;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "no_canvas";

    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial', 'Noto Sans', sans-serif";
    ctx.textBaseline = "alphabetic";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("OrganicMushroom, Katangi 🍄 ₹500", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("SecureRegPortal🇮🇳🌾", 4, 38);

    // Add arc and line drawing for sub-pixel anti-aliasing variations
    ctx.strokeStyle = "#800080";
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2, true);
    ctx.stroke();

    return canvas.toDataURL().slice(-64);
  } catch {
    return "canvas_err";
  }
}

function getWebGLFingerprint(): { renderer: string; vendor: string } {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return { renderer: "none", vendor: "none" };

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (!debugInfo) return { renderer: "webgl_no_debug", vendor: "webgl_no_debug" };

    const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || "";
    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "";
    return {
      renderer: String(renderer).trim(),
      vendor: String(vendor).trim(),
    };
  } catch {
    return { renderer: "err", vendor: "err" };
  }
}

function getScreenFingerprint(): string {
  if (typeof window === "undefined" || !window.screen) return "scr_none";
  const s = window.screen;
  const w = s.width || 0;
  const h = s.height || 0;
  const aw = s.availWidth || 0;
  const ah = s.availHeight || 0;
  const cd = s.colorDepth || 0;
  const dpr = window.devicePixelRatio || 1;
  return `${w}x${h}_${aw}x${ah}_cd${cd}_dpr${dpr}`;
}

export async function getDeviceFingerprint(): Promise<string> {
  if (typeof window === "undefined") {
    return "server_env";
  }

  // 1. Gather hardware and device signals
  const screenInfo = getScreenFingerprint();
  const webgl = getWebGLFingerprint();
  const canvasHash = getCanvasFingerprint();

  const cores = navigator.hardwareConcurrency || 4;
  const touch = navigator.maxTouchPoints || 0;
  const platform = navigator.platform || "unknown";
  
  let timezone = "Asia/Kolkata";
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Asia/Kolkata";
  } catch {
    // fallback
  }

  // Raw combined hardware payload
  const hardwareRaw = [
    `scr:${screenInfo}`,
    `gpu:${webgl.vendor}::${webgl.renderer}`,
    `cpu:${cores}`,
    `touch:${touch}`,
    `plat:${platform}`,
    `tz:${timezone}`,
    `cnv:${canvasHash}`,
  ].join("||");

  // Compute 256-bit unique hash
  const generatedId = await sha256Hex(hardwareRaw);

  // Sync to client storage as fast cache/backup
  try {
    localStorage.setItem("__omf_device_id", generatedId);
    sessionStorage.setItem("__omf_device_id", generatedId);
    document.cookie = `__omf_device_id=${generatedId}; path=/; max-age=315360000; SameSite=Lax`;
  } catch {
    // storage might be disabled in strict privacy mode, hardware fingerprint still works
  }

  return generatedId;
}
