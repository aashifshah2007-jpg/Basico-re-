# Store template (static site + Google Apps Script)

Plain HTML, CSS and JavaScript on Netlify. Orders go to the client's own Google Sheet through `apps-script/Code.gs`. No build step.

## Run it locally
In this folder run `python3 -m http.server 8000`, then open http://localhost:8000 . (Open `?p=t2` after it to test a product link.)

## Deploy
Netlify > your site > Deploys > drag the whole folder in (not just index.html).

## I want to... (edit only this file and field)
| Task | File | Field |
|---|---|---|
| Add a product | js/products.js | copy a line, change `id` (unique), `name`, `price`, `images`; put photos in img/ |
| Hide or remove a product | js/products.js | `"visible": false` |
| Change a price | js/products.js | `price` |
| Add a sale price | js/products.js | `salePrice` (lower than `price`; null = no sale) |
| Change stock | js/products.js | `stock` (null = not tracked, 0 = sold out) |
| Sizes and colors (shown on the product page) | js/products.js | `sizes`, `colors` |
| Feature on the homepage | js/products.js | `"featured": true` |
| New category | js/config.js `categories` AND each product's `category` | |
| Logo, QR image | img/ folder, then js/config.js `assets` | `logo`, `qr` |
| Payment instructions | js/config.js | `payment.instructions` |
| Switch payment methods on or off | js/config.js | `payment.methods` |
| Advance rules | js/config.js | `payment.advance` (examples are in the file) |
| Delivery fees | js/config.js | `delivery.in.fee`, `delivery.out.fee` |
| WhatsApp, email, address | js/config.js | `contact` |
| Homepage words and images | js/config.js | `homepage` |
| Campaign page | js/config.js | `campaigns` (open with `/?campaign=slug`) |
| Connect a backend | js/config.js | `backend.scriptUrl`, `key`, `sheetUrl` |

Product links: `/?p=t2` opens a product, `/?c=Hoodies` opens a category. Netlify serves index.html for `/`, so a refresh or a shared link works. Per-product social previews are NOT supported: WhatsApp and Instagram read the static tags in index.html, which are for the whole store.

## After changing prices or fees
The server checks every order against the live js/config.js and js/products.js (cached 10 minutes). In the sheet use Store > Refresh price list now.

## Test checklist
1. Home page, category tiles, search select, product gallery all load.
2. COD order inside the Valley, then a QR order outside it. Check the totals.
3. Sheet: new row in Orders, rows in Items, email received, screenshot link opens for the owner only.
4. Change Payment status and Verified received, check the Dashboard tab.
5. Delete the test rows.
