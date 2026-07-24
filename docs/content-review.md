# Atlas — Marketing Content Review

**Date:** 2026-07-24
**Scope reviewed:** the live landing site (`src/`), the three demo/marketing kits (Demo Script, Instagram Outreach, PT & Studio Sales Pitch), the strategy docs, and the product user-stories.
**Method:** a 6-hat adversarial review panel (truthfulness/claims, brand & positioning, conversion/CRO, skeptical B2B buyer, SEO/technical, GDPR/compliance). Each hat reviewed the whole corpus in parallel; **every** finding was then independently verified by a separate agent instructed to *refute* it. 48 agents total → **35 confirmed, 7 rejected**. Findings below are **deduplicated** (several were caught by multiple hats — noted as "flagged by N hats", which raises confidence).

> The single sales kit is treated as **source of truth** for what is real. Its "Do NOT claim / not built" list and "what's live" table are the yardstick.

---

## TL;DR — fix these first

1. **🔴 "1,900+ HD video exercises" over-claims video coverage** — flagged by **5 of 6 hats**, the clearest issue in the corpus. *This is a regression from the recent content refresh (my edit).* Quick copy fix.
2. **🔴 "Instantly" / push-to-members promised as proven** — the kit says push is coded-but-not-device-confirmed; don't promise instant delivery.
3. **🔴 B2C leak** — the Solo-Athletes tab + hero "track free" link route primary-goal traffic to `/download` instead of the application.
4. **🔴 Pixels fire with no consent** (= tracked issue **#13**) and **🔴 every page canonicalizes to the homepage** (= **#14**) — already ticketed from the earlier review, still live.

Several High/Medium items are **quick copy edits** I can apply immediately; others (consent banner, screenshots, form changes) are larger.

---

## HIGH

### H1 · "1,900+ HD video exercises" over-claims video coverage  ★ flagged by 5 hats
**Where:** `Hero.astro` (hero sub), `FoundingPartner.astro` (feature label + proof strip), `Layout.astro` (meta description + JSON-LD). *Note:* `PersonaSwitcher.astro` and `FeatureShowcase.astro` already use the sanctioned form "exercises with HD video demos" — so the fix is targeted, not site-wide.
**Why:** The phrase "1,900+ **HD video exercises**" reads as *every* exercise having HD video. The kit (source of truth, "Do NOT claim" line 107) says only **the vast majority** have video — a few are text-only — and to never state a hard count as video count. The catalogue is ~1,918 exercises but ~1,869 have video clips (≈49 text-only), which corroborates the kit exactly. A prospect who opens the app, finds a text-only entry, and feels baited is the precise trust-erosion that kills a founding-partner close. It's also baked into the SEO meta description and Schema.org data (machine-readable claims).
**Fix:** Decouple catalogue size from video coverage. "1,900+" as a *catalogue size* is fine (the IG kit uses it too); change the coverage phrasing to **"1,900+ exercises, with HD video demos on the vast majority"** or **"a huge HD video exercise library"**. Apply to the 5 violating spots incl. meta + JSON-LD.

### H2 · "Instantly" and push-to-members presented as proven  ★ flagged by 2 hats
**Where:** `FeatureShowcase.astro` ("They see it instantly"), `PersonaSwitcher.astro` ("every member sees them instantly"), `FoundingPartner.astro` ("see instantly" + the "Push notifications — straight to members" benefit).
**Why:** The kit's "Do NOT claim" list (line 109): push is *coded but not device-confirmed — don't promise instant delivery.* The demo script itself relies on **pull-to-refresh**, i.e. delivery isn't guaranteed-instant. Listing push as a delivered Pro benefit compounds it.
**Fix:** Drop "instantly" (use "members see it next time they open the app" / "members are notified"). Soften the push benefit to "Notify members of new programs and challenges", or verify on-device delivery before claiming it.

### H3 · B2C cannibalises the primary B2B goal
**Where:** `PersonaSwitcher.astro` Solo-Athletes tab (a full 4th tab with a "Download Free" → `/download` **button**); `Hero.astro` "Or track workouts free" link.
**Why:** The homepage's one job is founding-partner applications (strategy §1/§8: "one primary … never let it dilute the studio pitch"). A 4-way switcher gives a non-buyer equal billing with paying personas and hands one quarter a competing conversion (install). *Caveat from verification:* the hero link is already a low-emphasis text link (that part is fine, matches the sanctioned "secondary journey"); the real issue is the **button** in the primary switcher.
**Fix:** Keep the primary switcher B2B-only (gyms / coaches / physio → all CTAs to `#apply`); demote the free-tracker story to a single subordinate block lower down, or make its CTA a low-emphasis text link, not a button.

### H4 · Marketing pixels fire with no consent gate  — = tracked issue #13
**Where:** `Layout.astro` (Meta + TikTok pixels init + track on load).
**Why:** Target market is CY/GR/UK (form defaults to Cyprus) — all GDPR/PECR jurisdictions requiring **prior opt-in**. Firing on load contradicts the privacy policy, which names *Consent* as the lawful basis. (TikTok's snippet even exposes `holdConsent`/`grantConsent` and never calls them.) Live exposure, not hypothetical.
**Fix:** Consent banner gating both pixels (don't init until opt-in); reconcile the privacy policy. Already tracked — **prioritize #13**.

### H5 · Every page canonicalizes + og:urls to the homepage  — = tracked issue #14
**Where:** `Layout.astro` hardcoded `canonical` + `og:url`.
**Why:** `/privacy`, `/terms`, `/support`, `/account-deletion` all tell Google they're duplicates of `/` → dropped from the index, can't rank for their own queries.
**Fix:** Per-page canonical from `Astro.url`/`Astro.site`. Already tracked — **#14**.

---

## MEDIUM

### M1 · Primary persona leads with admin, buries the wedge
`PersonaSwitcher.astro` Gym-Owners tab opens on booking/passes/refunds — the back-office framing the confirmed positioning explicitly rejects. The engagement wedge (members actually open it) is demoted to bullets 3–4. **Fix:** reorder so the member-engagement bullet leads; let the Booking pillar carry the admin story.

### M2 · Footer tagline reverts to generic "fitness platform"
`Footer.astro`: "The fitness platform for gyms, coaches, and rehab professionals" — the exact generic framing strategy §2 rejects, and it's the last impression on every page. **Fix:** a wedge-carrying line, e.g. "Runs your classes — and gives every member an app they actually open."

### M3 · Physio persona claims filters that don't exist
`PersonaSwitcher.astro` physio tab: "filter by muscle group, **equipment, movement pattern**." Product truth: only muscle-group filtering is verified; equipment is untested; "movement pattern" isn't a shipped filter. Stated to the persona most likely to test it. **Fix:** trim to "filter by muscle group" (+ "discipline" only if the chip UI is live).

### M4 · Persona switcher shows the same screenshot for 3 of 4 tabs  ★ flagged by 3 hats
`PersonaSwitcher.astro`: the runtime screenshots array is `[gym_member, gym_member, gym_member, solo_athletes]`, so switching Owners/Coaches/Physio never changes the phone image; the per-persona `screenshotAlt` fields are also unused (generic alt shipped). Reads as broken/placeholder in the section meant to convert the primary buyer. **Fix:** distinct screenshot per B2B persona (owner Manage hub, program builder, roster) wired from each persona's own field + its alt; or drop the swap and fix the alt.

### M5 · "Free for everyone" vs "Free for 12 months" — mixed offer above the fold  ★ flagged by 2 hats
`Hero.astro`: the sub ends "Free for everyone" (member app, free forever) directly above a "Free for 12 months" badge (studio Pro offer). Adjacent, undelineated → reads as bait-and-switch or all-free-forever. **Fix:** scope each — "the member app is free, forever" vs "Studios: free for 12 months".

### M6 · Phone is a hard-required field with blocking validation
`FoundingPartner.astro`: phone is `required` and submit is blocked unless `iti.isValidNumber()` passes; 5 mandatory fields total. Top silent-abandonment risk on the only conversion page. **Fix:** make phone optional (validate only if entered) or reduce required to Name + Email + Gym name. *Caveat:* backend returns `phone_already_registered`, so phone may be a dedup key — coordinate with backend.

### M7 · Founding offer never states "what happens after 12 months / the catch"
`Hero.astro` + `FoundingPartner.astro` say "free for 12 months, no commitment" and stop. The kit treats "what's the catch / cost after?" as a **top objection** and answers it. Unhandled at the conversion point. **Fix:** a short reassurance/mini-FAQ near the form — why it's free, what happens after (normal plan, founding rate, reminder before lapse), no lock-in, you keep your data.

### M8 · No sitemap.xml / robots.txt  — = tracked issue #15
Crawlers discover pages by links only; no sitemap reference. **Fix:** `@astrojs/sitemap` + `public/robots.txt`, excluding noindex pages. Already tracked — **#15**.

### M9 · SoftwareApplication JSON-LD injected on every page
`Layout.astro`: legal pages declare themselves as the Atlas app with a $0 offer — inaccurate markup that compounds the duplicate-canonical problem. **Fix:** emit the JSON-LD on the homepage only (Layout prop or move into `index.astro`).

### M10 · Key value props aren't real headings
`PersonaSwitcher.astro` / `FeatureShowcase.astro`: the most keyword-bearing lines are paragraphs, not `<h2>`/`<h3>` — weak heading outline for a page whose job is to convert studio searches. **Fix:** give the persona section a real `<h2>`; promote each feature headline to a heading (keep one h1).

### M11 · Physio "patients/protocols" + HealthApplication schema vs "not medical software"
`PersonaSwitcher.astro` physio tab + `Layout.astro` JSON-LD `HealthApplication`. "Patients"/"recovery protocols" + a health-app category pulls toward medical-device regulatory scope, contradicting the "not medical software" disclaimer. **Fix:** soften ("clients", "guided exercise plans"); change JSON-LD category to `SportsApplication`/`LifestyleApplication`.

### M12 · Lead form has no privacy notice at the point of collection
`FoundingPartner.astro`: collects name/email/phone with no privacy link or consent affordance (GDPR Art. 13), and fires a Meta/TikTok conversion on submit. **Fix:** a short line under the button — "By applying you agree to our Privacy Policy" (link `/privacy`) — and only fire conversion events after consent.

### M13 · Under-claiming: two live, distinctive features omitted
The site never mentions **automatic gym-branded member receipts** (every pass action → branded receipt) or the **anatomy-view start/end illustrations** (a lead selling point in the kit) — both confirmed-live. **Fix:** add a receipts point to the Booking pillar; expand library copy to "anatomy-view muscle maps + HD video demos".

---

## LOW

- **L1 · Attendance implied in the member app** — `Booking.astro` sub-copy bundles "attendance" into "the same app your members already open"; attendance is a staff action (web admin / pilot mobile). Reword to separate member app from staff surface.
- **L2 · "Publish to Discover" is moderated, not self-serve** — `PersonaSwitcher.astro` / `FoundingPartner.astro`; product has an approve/reject gate (US-68). Soften to "Submit to Discover".
- **L3 · CTA label incongruity** — every entry CTA says "Get Free Early Access"; the submit button says "Apply Now". Match the button to the promise (keep selectivity in surrounding copy).
- **L4 · Weak proof at the form** — only a founder self-quote; the "proof strip" is feature claims. Add pre-submit reassurance microcopy ("We reply within 24h · we set your gym up · no spam") + concrete scarcity. (Pilot testimonial still deferred per strategy §8.)
- **L5 · Duplicate CTA bridge** — `index.astro` cta-bridge sits directly above the identically-titled form section. Remove it, or move it earlier (after the Booking pillar) as a mid-page CTA.
- **L6 · /download SEO gaps** — no self-canonical/OG tags; description omits Google Play though Android is live. Add canonical + OG; mention both stores.
- **L7 · Terms unpublished** — `terms.astro` is a placeholder while a live service collects PII and offers a free-to-paid plan; the privacy policy leans on "Contract" as a lawful basis. Publish a minimal complete T&Cs.

---

## Rejected by verification (7) — recorded for transparency

These were raised by a hat but a refutation agent rejected them (false positive / already handled / out of scope):
- "Site never discloses payments are offline" — the site correctly *doesn't* claim in-app payments; disclosing "payments offline" on the landing isn't required and the kit handles it in-call.
- "Founding section leads with gym-scale limits (100 members / 5 trainers)" — those are plan-inclusion bullets, not the lead; not the "for big gyms" trigger.
- "Physio persona not grounded in the kit" — physio is a supported audience in the personas by design.
- Two duplicate re-raises of the "instantly/push" and "free-for-everyone" issues already captured above (H2, M5).
- "IG kit drops 'platform' for 'app'" — deliberate B2C voice for IG, per strategy.
- "'See it in action' opens on program-publishing, not the video library" — ordering preference, not a defect.

---

## Suggested sequencing

1. **Now (quick copy, low risk):** H1, H2, M1, M2, M3, M5, L1, L2, L3 — all text edits I can apply in one pass.
2. **Ticketed already:** H4 (#13), H5 (#14), M8 (#15) — the earlier review's High/Major items; do the consent banner + canonical work.
3. **Needs assets/decisions:** M4 (per-persona screenshots — pairs with the video shoot), H3 + M6 (structural/form changes), M7/M12/M13 (new copy blocks), M9/M10/M11/L6 (SEO/schema), L4/L5/L7.
