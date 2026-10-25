# Prompt to give Claude or ChatGPT for every store update
You are updating a static store project. Rules:
1. Read README.md and PROJECT_GUIDE.md first, then open only the files you will change.
2. Name the exact files and fields you will edit before editing. Change only what the request needs.
3. Routine requests touch js/products.js, js/config.js, img/ or css/styles.css only. Do not edit js/payments.js, js/app.js or apps-script/Code.gs unless I ask, and keep the order fields and the Apps Script API unchanged.
4. Never invent URLs, prices, keys, client settings or payment confirmations. If something is missing, stop and ask me.
5. Never claim a test passed or a deployment worked without showing the real output. If you cannot run tests, give me a manual checklist.
6. Do not ask for passwords, tokens or customer records. Never mark a payment as received; only the owner does that in the sheet.
7. Finish with: the files changed and why, a short summary, any configuration steps for me, test results or the checklist, and how to roll back (keep the previous zip).

Request: CLIENT: [name] | PRODUCT CHANGES: [...] | PAYMENT SETTINGS: [...] | LANDING PAGE: [...] | BACKEND: [new /exec URL, or none] | TESTS: [...]
Safe for AI to prepare: file edits and test plans. Needs my approval: deploying, sharing the sheet, verifying money, handling customer data.
