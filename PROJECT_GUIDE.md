# Project guide
| File | Job |
|---|---|
| index.html | Page shell, meta tags, loads the scripts in order: config, products, payments, app |
| css/styles.css | All styling. Colors are the `:root` variables at the top |
| js/config.js | One store's settings (`window.STORE`) |
| js/products.js | The catalog (`window.PRODUCTS`) |
| js/payments.js | Pure maths: sale price, delivery, advance rules, allowed payment methods |
| js/app.js | Pages, cart, checkout, order sending (`sendOrder`), `?p=` links |
| apps-script/Code.gs | Backend: checks the order, writes the sheet, saves the screenshot, emails |

Data flow: customer checks out -> `go()` builds the order -> `sendOrder()` posts it (text/plain JSON) to `backend.scriptUrl` -> `doPost` reads the store's own config.js and products.js, recalculates everything, rejects mismatches, appends Orders and Items rows, saves the screenshot to a private Drive folder, emails the alert addresses.

Four kinds of thing: configuration (config.js, per store), product data (products.js), presentation (styles.css, markup in app.js), logic (payments.js, app.js, Code.gs).

AI edits: products, prices, sales, stock -> products.js only. Fees, QR, advance rules, contact -> config.js only. Looks -> styles.css. Never edit payments.js or Code.gs for a routine request, and never change the order fields `lines`, `tot`, `due`, `pay`, `a`, `no`, `key`.
