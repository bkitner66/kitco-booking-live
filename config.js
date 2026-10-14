// Booking page settings.
//
// DEMO MODE: while apiKey is empty, the page uses sample availability and does not create real bookings.
// LIVE MODE: paste the API key from SimplyBook (Custom Features > API) below. Bookings then go straight into
// kitco.simplybook.me, so they appear for Agent1 / Outlook and SimplyBook sends its usual emails.
window.KITCO_BOOKING = {
  companyLogin: "kitco",
  apiKey: "",

  // SimplyBook service IDs for each choice on step 1 (from kitco.simplybook.me)
  services: {
    buy:  { 30: 1, 60: 4, 120: 7 },
    sell: { 30: 2, 60: 5, 120: 8 },
  },
  // When both Buy and Sell are ticked, book this service and note "Buy & Sell" in the details.
  buyAndSell: "buy",
};
