// STORE SETTINGS: the only file you edit for a new client's branding, contact details, fees and payment rules.
// Keep it valid JSON (quoted keys, no trailing commas). Whole-line // comments are allowed. Code.gs reads this file too.
window.STORE = {
  "name": "BASEIC Clothing",
  "orderPrefix": "BC",
  "currency": "Rs",
  "categories": ["T-shirts", "Hoodies", "Pants"],
  "seo": {"title": "BASEIC Clothing | Everyday minimal streetwear, Kathmandu", "description": "Free-size streetwear from Kathmandu. Order online, pay by QR or on delivery."},
  "assets": {"logo": "img/logo.png", "qr": "img/qr.jpg"},
  "contact": {"whatsapp": "9779800000000", "email": "aashifshah2007@gmail.com", "instagram": "baseic.clo", "address": "Swayambhu, Kimdol, Kathmandu", "hours": "Store 11 AM to 7 PM · WhatsApp replies 1 PM to 10 PM"},
  "backend": {"scriptUrl": "https://script.google.com/macros/s/AKfycbyAHgnqR2mG2HQwMbzw2wkGV-fYu4qndvXEVpF8ilpuyUJVlqtpKe80R62rkIrSXAEi/exec", "key": "change-me", "sheetUrl": "https://docs.google.com/spreadsheets/d/10A7OOEJsuoVGIH-vhFRdoVrJQsakYIDpacNoj3WknHc/edit?gid=262618318#gid=262618318"},
  // Delivery: add or rename areas here. "fee" is added to every order for that area.
  "delivery": {
    "in": {"label": "Inside the Valley (Kathmandu, Lalitpur, Bhaktapur)", "fee": 100},
    "out": {"label": "Outside the Valley", "fee": 200}
  },
  // Payment rules. "methods" switches options on or off. "advance.appliesTo" lists the areas that must pay an advance.
  // rule examples (replace the "rule" value):
  //  A fixed 200:        {"type": "fixed", "amount": 200}
  //  B 20 percent:       {"type": "percent", "percent": 20, "min": 100, "max": 1500}
  //  C tiers:            {"type": "tiers", "tiers": [{"upTo": 2000, "rule": {"type": "fixed", "amount": 200}}, {"rule": {"type": "percent", "percent": 30}}]}
  //  D full QR payment:  {"type": "full"}
  //  E COD, no advance:  set "appliesTo": [] (or remove the advance block)
  "payment": {
    "methods": {"cod": true, "advance": true, "full": true},
    "instructions": "Scan with your mobile banking or wallet app.",
    "advance": {"appliesTo": ["out"], "rule": {"type": "fixed", "amount": 500}}
  },
  "homepage": {
    "eyebrow": "BASEIC CLOTHING · KATHMANDU", "headline": "Everyday minimal,<br><i>comfortable</i> fits.", "subline": "Free-size streetwear. Pick it, pay it, done.",
    "marquee": "FREE SIZE · COD INSIDE THE VALLEY · 24-HOUR EXCHANGE · NEW DROPS · ",
    "heroImage": "t4", "storyImage": "h4b", "tiles": [["T-shirts", "t2"], ["Hoodies", "h2a"], ["Pants", "s2"]],
    "storyTitle": "Made to be worn every day.", "storyText": "One free size, soft everyday fabrics and prints that do the talking. Order in a minute, pay on delivery inside the Valley, and exchange within 24 hours if the fit isn’t right."
  },
  // Campaign landing pages: open them with yoursite.com/?campaign=new-hoodies
  "campaigns": [{"slug": "new-hoodies", "title": "The hoodie collection", "text": "Four prints, one relaxed free-size fit.", "productIds": ["h1", "h2", "h3", "h4"]}]
}
