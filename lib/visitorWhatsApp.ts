/**
 * Visitor Intelligence for WhatsApp Floating / Sticky Widget
 * Distinguishes whether a message is originating from a:
 * - NEW VISITOR (First-time visitor)
 * - RETURNING / OLD USER (Previous visitor / visit count / returning farmer)
 * Formats the pre-filled message cleanly in English with page and context.
 */

export interface VisitorStatusInfo {
  isReturning: boolean;
  visitCount: number;
  userName?: string;
  phone?: string;
  firstVisitDate?: string;
}

export function detectVisitorStatus(): VisitorStatusInfo {
  if (typeof window === "undefined") {
    return { isReturning: false, visitCount: 1 };
  }

  try {
    // 1. Check cookies for saved user name or phone
    let userName = "";
    let phone = "";
    const nameMatch = document.cookie.match(/omf_usr_nm=([^;]+)/);
    if (nameMatch) {
      userName = decodeURIComponent(nameMatch[1]);
    }
    const phoneMatch = document.cookie.match(/omf_usr_ph=([^;]+)/);
    if (phoneMatch) {
      phone = decodeURIComponent(phoneMatch[1]);
    }

    // 2. Check form draft in localStorage if not in cookie
    if (!userName || !phone) {
      const draftStr = localStorage.getItem("omf_training_form_draft");
      if (draftStr) {
        try {
          const draft = JSON.parse(draftStr);
          if (!userName && draft.fullName) userName = draft.fullName;
          if (!phone && draft.phone) phone = draft.phone;
        } catch {}
      }
    }

    // 3. Check previously registered slip on this device
    const registeredPhone = localStorage.getItem("omf_registered_phone");
    const registeredId = localStorage.getItem("omf_registered_id");
    if (!phone && registeredPhone) {
      phone = registeredPhone;
    }

    // 4. Session & visit count calculation
    let storedVisits = parseInt(localStorage.getItem("omf_wa_visits") || "0", 10);
    const sessionActive = sessionStorage.getItem("omf_wa_session_active");

    if (!sessionActive) {
      // New session opened
      sessionStorage.setItem("omf_wa_session_active", "1");
      storedVisits = storedVisits + 1;
      localStorage.setItem("omf_wa_visits", String(storedVisits));

      if (storedVisits === 1) {
        localStorage.setItem("omf_wa_first_date", new Date().toISOString().split("T")[0]);
      }
    } else {
      // Ongoing session
      if (storedVisits === 0) {
        storedVisits = 1;
        localStorage.setItem("omf_wa_visits", "1");
      }
    }

    const firstDate = localStorage.getItem("omf_wa_first_date") || undefined;
    const isReturning =
      storedVisits > 1 ||
      Boolean(registeredPhone) ||
      Boolean(registeredId);

    return {
      isReturning,
      visitCount: Math.max(1, storedVisits),
      userName: userName ? userName.trim() : undefined,
      phone: phone ? phone.trim() : undefined,
      firstVisitDate: firstDate,
    };
  } catch {
    return { isReturning: false, visitCount: 1 };
  }
}

export function getFriendlyPageName(pathname: string): string {
  if (!pathname || pathname === "/") return "Home Page";
  const clean = pathname.replace(/^\//, "").split("?")[0];

  if (clean.includes("mushroomtrainingregistrationform")) return "Training Registration Form";
  if (clean.includes("book-consultant")) return "Book Consultant";
  if (clean.includes("spawn-seed") || clean.includes("spawn") || clean.includes("seed")) return "Spawn / Seeds Catalog";
  if (clean.includes("training")) return "Training Courses";
  if (clean.includes("turnkey")) return "Turnkey Projects";
  if (clean.includes("franchise")) return "Franchise Opportunity";
  if (clean.includes("equipment")) return "Growing Equipment & Bags";
  if (clean.includes("business-plan")) return "Business Plan";
  if (clean.includes("marketplace")) return "Marketplace";
  if (clean.includes("faq")) return "FAQ";
  if (clean.includes("contact")) return "Contact Us";
  if (clean.includes("about")) return "About Us";
  if (clean.includes("gallery")) return "Gallery / Farm Tour";

  return clean
    .split(/[-_/]/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Builds the WhatsApp redirect URL with short, polite English message
 * clearly letting you know if the person is a New User or Old User.
 */
export function buildVisitorWhatsAppUrl(
  whatsappNumber: string = "919203544140",
  pathname: string = "/",
  customInquiry?: string
): string {
  const status = detectVisitorStatus();

  let message = "";
  if (status.isReturning) {
    message = customInquiry
      ? `Hello! I’m back to learn more about mushroom farming. ${customInquiry}`
      : `Hello! I’m back to learn more about mushroom farming. Please share the latest training details, course information, and available support.`;
  } else {
    message = customInquiry
      ? `Hello! I’m exploring mushroom farming. ${customInquiry}`
      : `Hello! I’m exploring mushroom farming and would like to know more about your mushroom farming training, courses, and available support.`;
  }

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
