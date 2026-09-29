# Email images — do not rename or delete

Everything under this folder is linked by **absolute URL** from emails that have already been sent (for example `https://myatlas.fit/images/email/pilates-2026-10/sales.png`). Gmail's image proxy fetches these files when a recipient opens an email, possibly months after it was sent.

- **Never rename, move or delete a file here.** A missing image does not 404: this site answers an unknown path with `200` and the home page's HTML, so the email just shows a broken image and nothing warns you.
- **Add a new dated folder for each campaign** (`<topic>-<yyyy>-<mm>/`), rather than overwriting an existing one.
- **After deploying new images, check each URL returns `content-type: image/png`.** A `200` alone proves nothing:
  ```
  curl -s -o /dev/null -w "%{http_code} %{content_type}\n" https://myatlas.fit/images/email/<folder>/<file>.png
  ```
- **Where they're used:** the backend's outreach templates, `backend/communications/templates/emails/outreach/` in `arisport/atlas`, sent with `manage.py send_outreach_email`.
