/** @OnlyCurrentDoc */

// Google Apps Script for the "Website Leads" sheet.
// Columns: Name | Email | Message | Date
// Deploy: Extensions → Apps Script → paste → Deploy → New deployment →
// Web app, execute as "Me", access "Anyone". Put the /exec URL in
// `contact.leadsEndpoint` (lib/site.ts).

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const name = clean(data.name);
  const email = clean(data.email);
  const message = clean(data.message);

  if (!name || !email || !message) {
    return json({ ok: false, error: "Name, email and message are required" });
  }

  SpreadsheetApp.getActiveSpreadsheet()
    .getSheets()[0]
    .appendRow([name, email, message, new Date()]);

  return json({ ok: true });
}

// Trim, and stop values starting with = + - @ from running as formulas.
function clean(value) {
  const text = String(value || "").trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
