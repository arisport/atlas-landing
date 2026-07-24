# Atlas Landing — Relaunch Plan (video-first, launch-aligned)

**Status:** proposal for owner decision. The *video-first cinematic relaunch* below is **not built** — deliberately deferred (see `marketing-strategy.md` §9).
**Update (2026-07-24):** the **lean subset shipped** instead — new positioning, a live Booking & passes pillar, and the "870+" → "1,900+ HD video exercises" flip. This doc remains the reference for the fuller video-first relaunch when the pilot is proven and there's budget.
**Trigger (historical):** apps are live in the stores; the exercise-catalog switchover (#352) has since activated and is live on prod.

---

## 1. Timing — one relaunch, aligned to the flip

Both headline pillars become real inside a 2-day window:

- **Booking system** — fully shipped and live *now* (class scheduling, member booking, passes, attendance, notifications, multi-gym).
- **Exercise library upgrade** — the ~1,918-exercise catalog with pro video demos + start/end illustrations + discipline categories goes live *at the flip* (~2 days). Until the flip, the live catalog is the ~874 wger set with **no videos**.

So we build the full relaunch once, and gate exactly two things on the flip: the **exercise count/quality copy** and the **video-demo claims**. Everything else (booking, the new structure, the videos we record) can ship immediately. A single "flip-day copy toggle" flips the exercise numbers on — no second rebuild.

**Do NOT advertise pre-flip:** "1,900+", "video demonstrations of every exercise," "Yoga/Mobility/Weightlifting filtering" (the category chip UI is also T10-deferred even post-flip). The current "870+" copy stays truthful until flip day.

---

## 2. Creative direction — the big idea

**Stop describing the product; show it moving.**

Atlas is a genuinely two-sided platform, and the current landing undersells both sides:
1. It **runs a gym's classes** — scheduling, bookings, passes, attendance — a whole pillar the site doesn't mention today.
2. It gives **every member a real training app** — a 1,900-exercise library with professional video demos, offline-first, free.

That combination *is* the pitch, and it's inherently visual. The relaunch should feel like a product film, not a feature list. Three signature moves carry it:

- **A) Ambient video-montage hero** — motion in the first viewport instead of a static screenshot.
- **B) "The exercise library that plays"** — an interactive/video showcase built from the *actual* exercise-demo assets (we already have 1,869 pro clips in R2 — this is real content, not mockups). This is the "wow" and a hard differentiator vs competitors still shipping GIFs.
- **C) The two-sided split** — one section that shows the gym-owner side and the member side at once, so "platform, not just an app" lands instantly.

Guiding principle: **don't be constrained by the current section layout.** Sections below replace, merge, or reorder freely.

---

## 3. Proposed information architecture

> Keep the good bones untouched: Universal Links / App Links, legal pages, the founding-partner form, deep-link fallbacks. This is a content + narrative rebuild on top of solid plumbing.

**1. Hero — motion-first**
Headline reframed to the two-sided platform (e.g. *"Run your classes. Give every member a real training app."*). Behind/beside it: an **ambient looping montage** (§4 V1) — quick muted cuts of a class being booked, an exercise demo playing, a set being logged, a program published. Dual CTA: *Get Free Early Access* + *See the exercise library* (anchor to §4).

**2. The two-sided platform** *(evolves the current PersonaSwitcher)*
A split view — **Run your studio** (gym/coach/rehab) vs **Train anywhere** (member/solo). Each side has a short looping screen-capture (§4 V2a/V2b). This replaces the tab-switcher with something you can see at a glance.

**3. Booking & classes — NEW pillar (live now)**
The missing headline feature. Frame it as a *living calendar*: publish recurring class schedules, members book with passes, holidays auto-cancel + refund, trainers mark attendance from a roster. **Video: the booking flow, both sides** (§4 V3 member, V4 gym). Copy leans on what's real: recurring RRULE schedules, token + unlimited passes, cancellation windows, no-show tracking, multi-gym.

**4. The exercise library that plays — the showcase (flip-aligned)**
A signature interactive block. A filterable gallery of real exercises — tap an illustration and the **demo video plays inline** (§4 V5, using the actual R2 demo clips). Copy at flip: *"1,900+ exercises. Professional video demos. Start/end illustrations. Filter by muscle, discipline, or equipment."* Pre-flip fallback: this section runs in a reduced "coming this week" state or is copy-gated to the current library.

**5. Programming & challenges** *(refresh existing)*
Daily programs, assigned programs, templates, Discover, challenges + leaderboards. Mostly reuses existing footage (§4 V6/V7).

**6. Built for members too — the free tracker**
The solo-athlete story: free workout tracker, offline-first sync, the full exercise library, community templates, no subscription. Video: logging a set + history (§4 V8, reuse).

**7. Founding-partner offer + application form** *(keep — the conversion engine)*
Unchanged mechanics; refresh the feature bullets to include booking + the upgraded library; bump "870+" → "1,900+" on flip day.

**8. Proof strip** — updated numbers: *1,900+ exercises · pro video demos · live class booking · offline-first · live admin demo*.

**9. Footer** *(keep)*.

---

## 4. Video plan — new use cases

Three asset sources — most of the "wow" needs no new recording:

- **(R) Reuse existing** landing captures: programs, challenges, workout, template discovery, daily programs, gym-code.
- **(A) Reuse real product assets** — the proprietary **exercise demo clips already in R2** (1,869 of them, 720/1080, male/female). These can play directly on the landing. This is the library showcase's content — zero recording.
- **(N) New screen-captures you record** from the live app — the booking flows especially.

| ID | Section | Use case | Source | Priority |
|----|---------|----------|--------|----------|
| V1 | Hero | Ambient montage: book-a-class → exercise demo → log-a-set → publish-program | Assembled from N+A+R | Must |
| V2a | Two-sided | Gym side: schedule/calendar + roster, ~6s loop | **New (N)** | Must |
| V2b | Two-sided | Member side: browse + book + track, ~6s loop | **New (N)** | Must |
| V3 | Booking | Member: browse class calendar → book → confirmation → "My Bookings", pass token decrements | **New (N)** | Must |
| V4 | Booking | Gym: create a recurring schedule / view the class calendar + trainer marks a roster | **New (N)** | Must |
| V5 | Library | The new catalog: filter chips → open an exercise → **demo video plays** + start/end illustration | **New (N)** + real demo clips (A) | Must (flip) |
| V6 | Programming | Publish a daily program → member sees it | Reuse (R) | Nice |
| V7 | Challenges | Challenge + leaderboard | Reuse (R) | Nice |
| V8 | Tracker | Log a set + history | Reuse (R) | Nice |

**New captures you actually need to record: V2a, V2b, V3, V4** (all booking/two-sided) **+ V5** (the flipped catalog). Everything else is reuse or existing assets. That's a tight, achievable list.

**Out-of-the-box video ideas worth considering:**
- **The library as its own carousel** — a horizontally-scrolling wall of looping exercise demo clips (real R2 assets), muted, that visually *proves* the 1,900 number rather than stating it.
- **A "day at your gym" narrative strip** — morning: owner publishes today's program + schedule → members book → trainer checks the roster → members follow the exercise videos → evening: challenge leaderboard updates. One storyline threading every feature, a clip per beat.
- **Split-screen synced video** in §2 — gym admin action on the left triggering the member's app on the right (publish a class → it appears in the member's calendar).

---

## 5. Positioning / copy shifts

- **Add booking as a co-headline pillar** — it's the strongest gym-facing hook and it's absent today.
- **Two-journey framing** — "run your studio" and "train anywhere / free tracker" as parallel stories.
- **Numbers, flip-gated:** "870+" → "1,900+ exercises"; add "professional video demos" + "start/end illustrations" — all switch on at flip.
- **Lean on what's genuinely differentiated:** a large *illustrated + video* exercise library, and an integrated booking+passes+attendance system, in one platform with a free member app.

---

## 6. Flip-day coordination (~2 days out)

Everything ships at relaunch; only these switch on when `switchover_exercise_catalog --apply` runs:
1. Exercise count "870+" → "1,900+".
2. "Video demonstrations" + "illustrations" claims + the V5 library-showcase copy.
3. (Later, when the category-chip UI ships) discipline-filtering messaging.

Keep it a single copy toggle (a build-time flag or a one-line edit + redeploy) so there's no scramble on flip day and nothing over-promises before it's live.

---

## 7. Build notes

- **Fold in the review fixes** while rebuilding rather than as separate work: per-page canonical/og:url, consent-gated pixels (GDPR), `@astrojs/sitemap` + `robots.txt`.
- **Video hygiene:** every clip `muted playsinline` + lazy + poster; consider a lightweight inline lightbox for the library. No autoplay-with-sound.
- **Interactive library — two options:** (a) *curated static set* — ~12 hand-picked exercise demo clips + illustrations bundled with the site (fast, safe, recommended for launch); (b) *live* — query the public exercise API for real content (needs a verified public read endpoint; richer but more moving parts). Default (a) for the relaunch.
- Performance budget: a video-heavy landing must stay fast — lazy-load below the fold, compress aggressively, poster-first.

---

## 8. Open decisions for Aris

1. **How bold on the hero** — full-bleed ambient video vs a contained motion panel beside copy.
2. **Interactive library** — curated static set (recommended) vs live-API.
3. **"Day at your gym" narrative section** — include it, or keep the cleaner feature-section structure?
4. **Scope for launch day** — ship the full relaunch at the flip, or ship the booking-pillar + restructure now and flip the exercise copy in 2 days? (Both work; the copy-toggle makes "ship now, flip copy in 2 days" low-risk.)
