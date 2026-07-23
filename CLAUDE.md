# Power Rock Painting App — Standing Rules

## Who I'm working with

Ferdi is non-technical. Always explain in plain language, no jargon, one step at a time.

## The app

- The whole app is one file: `index.html`
- Live at: https://fengelbrec.github.io/POWER-ROCK-APP/
- Phone-first: every screen must work well on a phone before anything else.

## Branches — read this before touching anything

- `main` = the LIVE app (https://fengelbrec.github.io/POWER-ROCK-APP/).
  `agent-work` = where changes are built.
- **Standing approval (set 2026-07-23):** while it is just Ferdi and Henk using the
  app, tested changes go **straight to `main` (live)** in the same step — no separate
  "make it live" round-trip. Ferdi prefers to test on the live app, because testing
  edits off-line is impractical for him.
- Still required every time before pushing live: build on `agent-work`, **test the
  change** (browser check + `node --check`/syntax), and only then fast-forward `main`
  and push. Never push untested code live.
- For a **big or risky change** (data migrations, financial logic, the embedded
  leader portal, anything that could break what Henk or Ferdi rely on daily),
  describe the plan in plain words and get a "yes" before deploying.
- **When the four team leaders come onto the app for real** (so it is no longer just
  Ferdi and Henk), revisit this and return to explicit per-change approval, since a
  live break would then hit the whole crew.

## Data

Data lives in Supabase. Tables:

- `sites`
- `daily_updates`
- `paint_stock`
- `stock_usage`
- `material_invoices`
- `payments`
- `split_payouts`
- `invoice_inbox`

**Bulletproof principle:** never reject or lose data — capture everything, flag anything odd
for review in the app.

## Team PINs

| PIN | Person | Notes |
|------|---------|-------|
| 1010 | Ferdi | Door 1, owner financials — access code for the locked owner door |
| 5555 | Henk | Door 2, ops manager |
| 1111 | Joe | |
| 2222 | Costa | |
| 3333 | Daniel | |
| 4444 | Talent | |

**Owner door locked:** Door 1 is closed (`LOCKED_DOORS = { 1: true }` in `index.html`)
so Henk can test his side without wandering into the owner financials. It opens only
with Ferdi's code **1010** (`DOOR_UNLOCK = { 1: '1010' }`). The old `0000` no longer
opens it. Set `LOCKED_DOORS[1]` to `false` to reopen the door for everyone.

**Known issue:** PINs are visible in the public code — proper logins are a future task.
The 1010 lock deters casual scrolling but is not truly secret for the same reason.

## How to work with Ferdi

- Before any big change, describe the plan in simple words and wait for his go-ahead.
- After every change, explain in plain language what changed and how he tests it on his phone.
