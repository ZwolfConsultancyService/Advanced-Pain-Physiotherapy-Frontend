import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {

    // ✅ STEP 1: Yahan apni actual IDs daalo
    // Tawk.to dashboard → Administration → Property Settings → copy karo
    const propertyId = "YAHAN_PROPERTY_ID_DAALO";   // jaise: 64abc123def456789
    const widgetId   = "default";                    // mostly "default" hi hota hai

    // Already loaded check
    if (document.getElementById("tawk-script")) return;

    window.Tawk_API       = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id    = "tawk-script";
    script.async = true;
    script.src   = `https://embed.tawk.to/${propertyId}/${widgetId}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);

    script.onload = () => console.log("✅ Tawk.to loaded successfully!");
    script.onerror = () => console.error("❌ Tawk.to failed to load. Check Property ID.");

  }, []);

  return null;
}