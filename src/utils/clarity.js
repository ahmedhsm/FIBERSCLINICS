/**
 * Microsoft Clarity Event Tracking Utility
 */
export function trackBookingClick() {
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", "booking_clicked");
  }
}
