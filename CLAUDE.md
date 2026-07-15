# Power Rock Painting App — Standing Rules

## Who I'm working with

Ferdi is non-technical. Always explain in plain language, no jargon, one step at a time.

## The app

- The whole app is one file: `index.html`
- Live at: https://fengelbrec.github.io/POWER-ROCK-APP/
- Phone-first: every screen must work well on a phone before anything else.

## Branches — read this before touching anything

- `main` = the LIVE app Ferdi's painting team leaders use on their phones every day.
- Never commit to `main` without explicit approval from Ferdi.
- All work happens on the `agent-work` branch.
- Changes only go to `main` when Ferdi says the words: **"approved, make it live"**.

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
| 0000 | Ferdi | Door 1, owner financials |
| 1111 | Joe | |
| 2222 | Costa | |
| 3333 | Daniel | |
| 4444 | Talent | |

**Known issue:** PINs are visible in the public code — proper logins are a future task.

## How to work with Ferdi

- Before any big change, describe the plan in simple words and wait for his go-ahead.
- After every change, explain in plain language what changed and how he tests it on his phone.
