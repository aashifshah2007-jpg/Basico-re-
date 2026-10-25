# Changelog
## 2.0
- Split index.html into css/, js/config.js, js/products.js, js/payments.js, js/app.js.
- Configurable delivery, payment methods and advance rules (fixed, percent with min and max, tiers, full, none); sale prices, stock, featured, visible.
- Product, category and campaign links (`?p=`, `?c=`, `?campaign=`).
- Order numbers shortened (for example BC-K3F9A2X1).
- The checkout now reads the server reply and shows the real result; a bag is kept when an order is rejected.
- Code.gs v2: server recalculates prices from the store's catalog, lock plus duplicate check, upload type and size limits, mail failure no longer loses the order, safe `setup`, new Orders columns S to V, corrected dashboard, validated sharing.
- Migration: run `setup` again, fill Settings!B4, add the new site files. Old rows keep working; column N is now "Claimed via QR".
## Known limits
The key in config.js is public. The Owner view PIN in the page is cosmetic. Real owner access is the Google Sheet.
