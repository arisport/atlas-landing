# Atlas Landing — Video Shot-list (lean update)

**Goal:** record the **two MUST clips** whose pillars currently have no footage — the **Booking flow** and the **HD exercise library**. Everything else on the homepage reuses existing captures. This is the homepage cut; Instagram cuts differ (captions + hooks — see §5).

**Record against:** Atlas Demo Gym on prod. Client sim = `appreview+member` (password in the Sales Pitch Kit — internal). It already holds a 1:1 10-session pass (shows **10 remaining**), a Functional pass, an Open Gym unlimited pass, the assigned "Demo Member's Strength Plan", 6 progressive workouts, and a place on the challenge. Nothing is pre-booked — book live.

**Golden rule (from the Sales Pitch Kit claims audit):** only film what is live on the demo phone. Confirm HD video plays and owner "Manage" mode is on the build before recording. Don't show anything the kit flags as pending.

---

## Capture specs (both clips)

| Spec | Value |
|---|---|
| Device | the actual demo phone (screen recording), not a simulator, so the HD video is real |
| Orientation / ratio | portrait, tight app aspect (~**600 × 1303**, matches the existing site screenshots + phone-frame) |
| Web export | MP4 (H.264), ~1080p downscaled, 24–30 fps, **muted**, **loop**, `playsinline`; target **< 2 MB** per clip |
| Poster | export the first clean frame as a `.jpg` (the site's `<video>` needs a `poster`) |
| Audio | none for web (sections carry the copy); add captions only for the IG cut |
| Filenames | `booking_flow.mp4` + `booking_flow_poster.jpg`; `exercise_library.mp4` + `exercise_library_poster.jpg` (matches the `/public/images/videos/` + `_poster` convention the code already uses) |

Site plumbing already supports this: `FeatureShowcase.astro` lazy-loads `data-src` videos with a poster and `muted loop playsinline`. New clips drop straight in.

---

## Clip 1 — Booking + pass counts down + auto-refund  ★ MUST

**Pillar:** the new **Booking & passes** section. Covers 3 of its 4 cards in one continuous take (holiday closure is Clip 3).
**Source scenario:** Demo Script S3 + S4. **Length:** 12–18s.

| Beat | Time | On screen (Client sim) | IG caption overlay (skip for web) |
|---|---|---|---|
| 1 | 0–3s | Class list / calendar — small scroll, land on an upcoming **1:1 Personal Training** slot (>2h away, so it's cancellable) | "book in a tap" |
| 2 | 3–7s | Tap the slot → booking detail showing **"Uses 1 of your 10 remaining sessions"** | — |
| 3 | 7–11s | Confirm → success → the pass card now reads **9 remaining** (hold on it) | "your pack counts itself down" |
| 4 | 11–17s | Open the booking → **Cancel** (still >2h before) → confirm → "returned to your account", pass back to **10** | "cancel in time? refunded automatically" |

**Notes:** start with the pass at 10 and the member with zero existing bookings. Book and cancel **live**. For a **studio** variant, swap the 1:1 slot for a group class (e.g. Functional cap 6) and have a second member (`appreview+sam`) fill the roster.
**Wiring:** once shot, add a phone-frame video to `Booking.astro` (or add a "Bookings & passes" row to `FeatureShowcase.astro`).

---

## Clip 2 — The HD exercise library (the "wow")  ★ MUST

**Pillar:** the differentiator — "1,900+ HD video exercises." **Source:** Demo Script S1. **Length:** 8–12s.

| Beat | Time | On screen (Client sim) | IG caption overlay (skip for web) |
|---|---|---|---|
| 1 | 0–2s | Open the exercise library / add-exercise | "1,900+ exercises" |
| 2 | 2–5s | Tap a **muscle chip** (e.g. Chest) → list filters; optionally tap a **discipline chip** (Yoga / Mobility) to show range | "filter by muscle or discipline" |
| 3 | 5–8s | Open an exercise → show the **anatomy-view start/end illustrations** | — |
| 4 | 8–12s | Tap **"Watch video demonstration"** → **HD 1080p** plays; hold on the playing video | "real HD video demos" |

**Notes:** pick a visually strong exercise with both a good illustration and video. **Play it fresh** — demo video links expire after a few minutes, so don't pre-load and wait. Do **not** overlay an exercise count inside the app (the app shows no number; the "1,900+" lives only in marketing text).
**Wiring:** strongest as a new `FeatureShowcase` row at the **top** of the showcase, or as the hero visual (swap the static screenshot for this loop).

---

## Clip 3 — One-tap holiday closure  ◇ NICE (and your best IG clip)

**Source:** Demo Script O5. **Length:** 10–12s. Owner sim (or web admin if owner mode isn't on the build).

| Beat | Time | On screen | IG caption |
|---|---|---|---|
| 1 | 0–3s | Owner → Holidays / close gym → pick a date range | "going away?" |
| 2 | 3–8s | The **preview**: sessions cancelled, members refunded, passes extended | "close the dates. one tap." |
| 3 | 8–12s | Confirm | "everyone refunded. passes extended. one message each." |

Relatable + shareable — record it while you're in owner mode for Clip 1's studio variant.

---

## Reuse — no shoot needed

| Homepage need | Existing asset |
|---|---|
| Program in their pocket + logging (retention: previous weight, PR, streak) | `workout_screen.mp4`, `assigned_programs.mp4` |
| Challenges & leaderboards | `challenges_screen.mp4` |
| Onboarding / gym code | `verify_gym_code.mp4` |
| (Spare, unused) | `daily_programs.mp4`, `template_discovery.mp4` |

---

## 5. Instagram cuts (separate deliverable)

The IG 60-sec clip (IG Kit §3) is one continuous flow: library → program+log → book+countdown → "free for founding partners · DM Atlas". Vertical 9:16, **captions on** (most watch muted), hook in the first 3s. The homepage clips above are the raw material — just add captions and the DM CTA. The holiday-closure clip (Clip 3) doubles as the bonus 15s Reel.

---

## What to skip (don't film for the site)

Per the Sales Pitch Kit, these are live-call / demo-menu material, **not** homepage content: two-pricing-models side by side, multi-discipline combo passes, "assign to many", empty-handed-client → grant a pass, onboard-by-text. They dilute the four-pillar homepage story.
