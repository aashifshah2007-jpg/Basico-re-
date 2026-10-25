# New client setup

**Ownership model:** the client owns the Google Sheet, the script and the Drive folder. You are added as an Editor so you can maintain it. If they leave, they keep everything. Make the copy while signed in as the client (on a call, or on their phone), or have them open your template's copy link in their account.

Making a copy in your Drive and sharing it means you own it and they only borrow it. Transferring ownership later works for the file and its script, but triggers, deployments and authorization belong to whoever created them and must be recreated.

## Steps
1. **Master:** keep one "Store template" sheet with Code.gs pasted in and no orders. Update it first when you improve anything.
2. **Copy (as the client):** File > Make a copy. This copies the tabs and the attached script. It does NOT copy the web app deployment, triggers, authorization, the Drive folder, the key or the website address.
3. **Authorize:** Extensions > Apps Script, pick `setup`, Run. Accept the permissions (Advanced > Go to project > Allow).
4. **Settings tab:** B1 the client's alert emails (comma separated), B2 a long random key (new for every client), B4 the client's website address. Leave B3 empty; the private screenshot folder is created in the client's Drive on the first screenshot.
5. **Deploy:** Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone. Copy the URL ending in /exec.
6. **Website:** copy the store folder. Edit js/config.js (`backend.scriptUrl`, `key` = B2, `sheetUrl`, contact, delivery, payment), js/products.js, img/ and the QR. Deploy a new Netlify site for this client.
7. **Test:** in the sheet use Store > Refresh price list now, then run `testOrder` (adds a TEST row and sends an email). Then place a COD and a QR order from the live site and check the Orders, Items and Dashboard tabs. Delete the test rows.

## Troubleshooting
| Problem | Check |
|---|---|
| No row appears | key equals B2; URL ends /exec; access is Anyone; B4 is filled; js/config.js and js/products.js open in a browser |
| Order rejected "prices changed" | refresh the site; use Store > Refresh price list now after edits |
| No email | run `testOrder` from the editor and accept permissions; check B1 for typos and the spam folder; free Gmail allows about 100 emails a day |
| Status emails missing | run `setup` again, then open the Triggers page: exactly one `onStatus` |
| Code change has no effect | Deploy > Manage deployments > Edit > New version (the URL stays the same) |
| Two rows for one order | the server rejects a repeated order number, so check for manual copy and paste |

## Sharing safely
Anyone with access sees every customer's name, phone and address in Orders. Share view-only when you can. For staff who only need totals, make a separate sheet that pulls only the Dashboard numbers with IMPORTRANGE.
