# Aasara — Full Code Audit Report

**Date:** June 28, 2026  
**Audited by:** Kiro  
**Scope:** All files in `app/`, `components/`, `lib/`, `next.config.mjs`, `globals.css`

---

## Summary Table

| # | File | Category | Severity |
|---|------|----------|----------|
| 1 | `next.config.mjs` | Dead commented code + hardcoded machine path | Medium |
| 2 | `next.config.mjs` | TypeScript errors suppressed globally | **High** |
| 3 | `next.config.mjs` | Image optimization disabled as blanket workaround | Medium |
| 4 | `app/layout.tsx` | Lora font loaded — check if actually rendering vs shadowed | Low |
| 5 | `app/layout.tsx` | Analytics NODE_ENV guard is redundant (harmless) | Low |
| 6 | `app/page.tsx` | Unused imports: `AlertCircle`, `Users`, `Shield` | Low |
| 7 | `app/page.tsx` | Lead capture form submits nowhere — no API call | **Critical** |
| 8 | `app/page.tsx` | `<img>` instead of `<Image>` throughout | Medium |
| 9 | `app/contact/page.tsx` | Contact form submits nowhere — no API call | **Critical** |
| 10 | `app/contact/page.tsx` | Placeholder phone number in production | **Critical** |
| 11 | `app/plans/page.tsx` | Checkout modal submits nowhere — no payment gateway | **Critical** |
| 12 | `app/plans/page.tsx` | Coupon codes hardcoded in client-side JS | High |
| 13 | `app/servostay/page.tsx` | Booking form submits nowhere — no API call | **Critical** |
| 14 | `app/servostay/page.tsx` | `dates` field in state has no matching `<input>` | Low |
| 15 | `app/servostay/page.tsx` | `Calendar` imported but never used | Low |
| 16 | `app/servostay/page.tsx` | `scale-103` invalid Tailwind class — hover zoom never fires | Medium |
| 17 | `app/services/page.tsx` | `scale-103` invalid Tailwind class ×2 | Medium |
| 18 | `app/services/page.tsx` | `Reveal` + `useInView` redefined locally — duplicates `lib/useReveal` | Medium |
| 19 | `app/services/page.tsx` | `Users`, `AlertCircle` imported but unused | Low |
| 20 | `app/services/page.tsx` | `isLast` prop on `QuestionPanel` accepted but never used | Low |
| 21 | `app/locations/page.tsx` | City checker displays un-normalised search term in result string | Low |
| 22 | `components/sections/Header.tsx` | `text-bright-green` used for active nav — defined in CSS, works fine | Note |
| 23 | `components/sections/Footer.tsx` | Placeholder phone number in production | **Critical** |
| 24 | `components/sections/PremiumSlideshow.tsx` | `isPaused` state never set to `true` — pause feature fully broken | Medium |
| 25 | `components/sections/PremiumSlideshow.tsx` | `currentSlide` in `useEffect` deps resets timer on every nav click | **Bug** |
| 26 | `components/sections/StoryPlayer.tsx` | `eslint-disable` hides missing dep — stale closure risk | Medium |
| 27 | `components/sections/StoryPlayer.tsx` | `intervalRef` typed as `setInterval`, used as `setTimeout` — misleading | Low |
| 28 | `components/Chatbot.tsx` | `Sparkles` imported but never used | Low |
| 29 | `components/Chatbot.tsx` | Placeholder phone number baked into chatbot responses | **Critical** |
| 30 | `components/Chatbot.tsx` | Plan names in responses don't match actual plan names on plans page | High |
| 31 | `components/ui/button.tsx` | Component never imported or used anywhere in the project | Low |
| 32 | `components/ui/button.tsx` | `[a]:hover:bg-primary/80` — invalid Tailwind selector in variant | Low |
| 33 | `lib/sanity.ts` | `console.warn` fires in production when Sanity is unavailable | Low |
| 34 | `lib/sanity.ts` | Sanity fully scaffolded, but zero pages import or use it | Medium |
| 35 | `lib/useReveal.tsx` | `StaggerReveal` exported but never imported by any page | Low |
| 36 | `app/globals.css` | Dark mode CSS variables defined — dark mode never activated in UI | Low |
| 37 | `app/globals.css` | Sidebar CSS variables from shadcn template — no sidebar in project | Low |

---

## Issues — Full Detail

---

### Issue 1 — `next.config.mjs`: Dead commented-out code block

**File:** `next.config.mjs` lines 1–32

The entire top of the file is a commented-out block of asset-copy logic referencing a hardcoded absolute path from a previous developer's machine:

```js
// const assetsSource = '/Users/venkatkarthik/.gemini/antigravity/brain/f08dfa25...'
```

This will never run on any other machine. The `import fs from 'fs'` and `import path from 'path'` at the top are only used inside this dead block, making them orphaned imports. The block adds noise, confusion, and unnecessary imports.

**Fix:** Remove the two dead imports and the entire commented-out block.

---

### Issue 2 — `next.config.mjs`: TypeScript errors globally suppressed 🔴

**File:** `next.config.mjs` line 30

```js
typescript: {
  ignoreBuildErrors: true,
}
```

This silences every TypeScript error during `next build`. Any type error — broken imports, wrong prop types, missing returns — will be ignored and the build will succeed regardless. This was added as a quick workaround and never cleaned up.

**Fix:** Remove the `typescript` block entirely so errors surface correctly.

---

### Issue 3 — `next.config.mjs`: Image optimization disabled as blanket workaround

**File:** `next.config.mjs` line 33

```js
images: {
  unoptimized: true,
}
```

This disables Next.js image optimization globally (no WebP conversion, no lazy loading, no responsive sizing). It was added because the project uses raw `<img>` tags instead of Next.js `<Image>` throughout — so rather than fix the root cause, optimization was disabled entirely.

**Fix:** Replace `<img>` with `<Image>` from `next/image` in key places, then remove `unoptimized: true`. (Lower priority — the `<img>` swap is a larger refactor.)

---

### Issue 4 — `app/layout.tsx`: Lora font may be shadowed by Playfair Display

**File:** `app/layout.tsx` lines 13–18

```ts
const lora = Lora({ variable: '--font-display', ... })
```

`--font-display` is used on labels/form text in contact and servostay pages via `font-display` class. However, `--font-serif` (Playfair Display) is set on `font-serif` and both are closely related. Worth confirming Lora renders where intended and isn't being overridden by Playfair in practice.

**Status:** Note — not a breaking issue.

---

### Issue 5 — `app/layout.tsx`: Redundant Analytics guard

```tsx
{process.env.NODE_ENV === 'production' && <Analytics />}
```

`@vercel/analytics/next` is already a no-op outside Vercel deployments. The guard is harmless but unnecessary.

---

### Issue 6 — `app/page.tsx`: Unused imports

**File:** `app/page.tsx` line 8

```ts
import { Heart, Home, AlertCircle, Users, Shield, Check, ... } from 'lucide-react'
```

`AlertCircle`, `Users`, and `Shield` are imported but never referenced in JSX or logic. These add to the bundle and create noise.

**Fix:** Remove `AlertCircle`, `Users`, `Shield` from the import.

---

### Issue 7 — `app/page.tsx`: Lead capture form submits nowhere 🔴

**File:** `app/page.tsx` lines 28–32

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitted(true)                          // ← just flips a flag
  setFormData({ name: '', email: '', phone: '', message: '' })
}
```

The homepage lead capture form collects name, email, phone, and message — but sends the data nowhere. No `fetch`, no API route, no webhook, no email service. Real users who fill out this form receive no follow-up.

**Fix:** Connect to an API route (`/api/contact`) or a third-party service (Resend, Formspree, EmailJS) to actually send the enquiry.

---

### Issue 8 — Multiple pages: `<img>` instead of `<Image>`

**Files:** `app/page.tsx`, `app/servostay/page.tsx`, `app/services/page.tsx`, `components/sections/StoryPlayer.tsx`, others

Raw `<img>` tags are used throughout instead of `next/image`'s `<Image>`. This bypasses lazy loading, automatic WebP conversion, and responsive size hints. This is also the root cause of `images: { unoptimized: true }` in the config.

**Fix:** Replace with `<Image>` where performance matters most (hero images, slideshow, story player).

---

### Issue 9 — `app/contact/page.tsx`: Contact form submits nowhere 🔴

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitted(true)   // ← no API call
}
```

The contact form collects name, email, phone, city, service interest, and message. None of it goes anywhere. Users who submit an enquiry receive the success screen but nothing is sent to the team.

**Fix:** Same as Issue 7 — wire up to an API route or email service.

---

### Issue 10 — Multiple files: Fake placeholder phone number in production 🔴

**Files:** `Footer.tsx`, `app/contact/page.tsx`, `app/page.tsx`, `components/Chatbot.tsx`, `app/plans/page.tsx`

```
+91 91234 56789
wa.me/919123456789
```

`91234 56789` is clearly a placeholder number (not a valid Indian mobile number). It appears in clickable `tel:` and `wa.me/` links throughout the site and in chatbot responses. Users who tap these links on mobile will call/message a non-existent number.

**Fix:** Replace with the real business phone number once available.

---

### Issue 11 — `app/plans/page.tsx`: Checkout modal submits nowhere, no payment 🔴

```ts
const handleRequestSubscription = (e: React.FormEvent) => {
  e.preventDefault()
  setRequestSubmitted(true)   // ← no API call, no payment gateway
}
```

The checkout modal collects name and phone number and shows a "Request Received" screen, but makes zero API calls. No Razorpay, Stripe, or any other payment gateway is integrated. No backend call records the subscription request. Users who click "Request NRI Prime — ₹20,000/mo" receive a success screen, but nothing happens.

**Fix:** Integrate Razorpay (or equivalent) and/or wire up to a backend route that records the lead and triggers an advisor follow-up.

---

### Issue 12 — `app/plans/page.tsx`: Coupon codes hardcoded client-side

```ts
if (code === 'AASARA15') { ... }
else if (code === 'WELCOME500') { ... }
```

Discount codes are validated entirely in the browser. Anyone can open DevTools and read the codes. More critically, since there's no backend, the "discount" is purely cosmetic — it updates the displayed total but affects nothing since no payment is processed.

**Fix:** Move coupon validation to the backend. The displayed total is only meaningful once payment processing is real.

---

### Issue 13 — `app/servostay/page.tsx`: Booking form submits nowhere 🔴

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  alert('Thank you for your Servostay enquiry! ...')
  setFormData({ ... reset ... })
}
```

The Servostay booking form uses a browser `alert()` as the success response and resets the form — no API call, no data recorded.

**Fix:** Replace `alert()` with a proper success state and wire up to an API route.

---

### Issue 14 — `app/servostay/page.tsx`: `dates` field in state is orphaned

```ts
const [formData, setFormData] = useState({
  ..., dates: '', ...   // ← no <input name="dates"> in the form
})
```

The `dates` key exists in state but the form has no input with `name="dates"`. The textarea is named `message` and doubles as a dates+message field. The `dates` state key is never written to.

**Fix:** Either add a dedicated date input for `dates`, or remove `dates` from the state object.

---

### Issue 15 — `app/servostay/page.tsx`: `Calendar` imported but never used

```ts
import { Check, Calendar, MapPin, ... } from 'lucide-react'
```

`Calendar` is in the import but never referenced in JSX.

**Fix:** Remove `Calendar` from the import.

---

### Issue 16 — `app/servostay/page.tsx`: `scale-103` invalid Tailwind class

```tsx
className="... group-hover:scale-103"
```

`scale-103` is not a valid Tailwind utility (valid: `scale-100`, `scale-105`, `scale-110`, etc.). The hover zoom effect silently never fires.

**Fix:** Replace with `group-hover:scale-105`.

---

### Issue 17 — `app/services/page.tsx`: `scale-103` invalid Tailwind class ×2

Same as Issue 16. Found on two image hover instances in the services spotlight grid.

**Fix:** Replace both with `group-hover:scale-105`.

---

### Issue 18 — `app/services/page.tsx`: `Reveal` + `useInView` duplicated from `lib/useReveal`

`services/page.tsx` defines its own local `useInView` and `Reveal` functions (lines ~75–110) instead of importing from `@/lib/useReveal`. The implementations are nearly identical. Any change to animation behaviour needs to be made in two places.

**Note:** The local version adds spring easing (`cubic-bezier(0.22,1,0.36,1)`) which `useReveal.tsx` also uses — so they're functionally equivalent. The local redefinition is redundant.

**Fix:** Remove the local definitions and use `import { Reveal } from '@/lib/useReveal'`.

---

### Issue 19 — `app/services/page.tsx`: Unused imports

```ts
import { Heart, Users, Home, Shield, AlertCircle, Check, ArrowRight, ChevronDown } from 'lucide-react'
```

`Users` and `AlertCircle` are imported but not used in this file.

**Fix:** Remove both from the import.

---

### Issue 20 — `app/services/page.tsx`: `isLast` prop never used

```ts
function QuestionPanel({ scene, isLast }: { scene: typeof scenes[0]; isLast: boolean }) {
```

`isLast` is accepted as a prop but never referenced inside the component body.

**Fix:** Remove the `isLast` prop from the component signature and its call sites.

---

### Issue 21 — `app/locations/page.tsx`: City checker shows un-normalised input

```ts
setCheckerResult({ message: `We are fully active in ${searchTerm}` })
```

If a user types "guntur" (lowercase), the result reads "We are fully active in guntur". Minor UX issue.

**Fix:** Use `searchTerm` with `.trim()` and display with proper capitalisation, e.g. `searchTerm.trim().charAt(0).toUpperCase() + searchTerm.trim().slice(1)`.

---

### Issue 22 — `components/sections/Header.tsx`: `text-bright-green` usage

`bright-green` is defined in `globals.css` as `--color-bright-green: #10B981`. Used for active nav links. This works correctly — just noting it's a custom token, not a standard Tailwind colour.

**Status:** Not an issue.

---

### Issue 23 — `components/sections/Footer.tsx`: Placeholder phone number

Same as Issue 10. The footer renders `+91 91234 56789` in a clickable `tel:` link and a `wa.me/` WhatsApp link.

---

### Issue 24 — `components/sections/PremiumSlideshow.tsx`: `isPaused` never set to `true`

```ts
const [isPaused, setIsPaused] = useState(false)
```

`isPaused` controls the CSS `animationPlayState` of the progress bar and the `useEffect` interval guard. However, no UI element — no hover handler, no pause button — ever calls `setIsPaused(true)`. The state is declared and read but never written after initialisation.

The progress bar will always show `animationPlayState: 'running'` and the interval will never pause, regardless of user interaction.

**Fix:** Add `onMouseEnter={() => setIsPaused(true)}` and `onMouseLeave={() => setIsPaused(false)}` to the `<section>` element.

---

### Issue 25 — `components/sections/PremiumSlideshow.tsx`: `currentSlide` in `useEffect` deps resets timer on every nav click 🔴

```ts
useEffect(() => {
  if (isPaused) return
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, 5000)
  return () => clearInterval(interval)
}, [currentSlide, isPaused])  // ← currentSlide here is the bug
```

`currentSlide` being in the dependency array means the interval is torn down and recreated every time the slide changes — including when the user clicks Prev/Next. After any manual click, the 5-second auto-play timer resets to zero. The interval's callback uses the functional updater `(prev) => ...` so it never reads `currentSlide` directly — it has no reason to be a dependency.

**Fix:** Change to `}, [isPaused])`.

---

### Issue 26 — `components/sections/StoryPlayer.tsx`: `eslint-disable` hiding missing dependency

```ts
useEffect(() => {
  startProgress()
  return clearTimers
}, [currentBeat, isPlaying, activeStory]) // eslint-disable-line react-hooks/exhaustive-deps
```

`startProgress` is not in the deps array and is suppressed with `eslint-disable`. `startProgress` is a `useCallback` that depends on `story`, `currentBeat`, `isPlaying`, `advanceBeat`, and `clearTimers`. Omitting it risks stale closure bugs if the component logic changes. The `eslint-disable` is masking the real fix.

**Status:** The current code works in practice because `currentBeat`, `isPlaying`, and `activeStory` (which changes `story`) are all included. But the suppression is a fragile workaround.

**Fix:** Add `startProgress` to the deps array and let React handle it, or restructure to avoid the need for `eslint-disable`.

---

### Issue 27 — `components/sections/StoryPlayer.tsx`: `intervalRef` misleadingly named and typed

```ts
const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
...
intervalRef.current = setTimeout(advanceBeat, beat.duration)  // setTimeout, not setInterval
```

The ref is named `intervalRef` and typed as `setInterval`, but it stores a `setTimeout` handle. Functionally it works (both return `number`), but the naming and type mismatch is misleading.

**Fix:** Rename to `timeoutRef` and retype as `ReturnType<typeof setTimeout>`.

---

### Issue 28 — `components/Chatbot.tsx`: `Sparkles` imported but unused

```ts
import { MessageSquare, X, Send, ShieldCheck, Sparkles } from 'lucide-react'
```

`Sparkles` is in the import but never used in JSX.

**Fix:** Remove `Sparkles` from the import.

---

### Issue 29 — `components/Chatbot.tsx`: Placeholder phone number in responses

```ts
response: "...email us at care@aasara.in, call/WhatsApp us at +91 91234 56789..."
```

Same fake placeholder number (Issue 10) baked into chatbot automated responses.

---

### Issue 30 — `components/Chatbot.tsx`: Plan names in chatbot don't match plans page

**Chatbot preset response mentions:**
- "Essential Care (₹4,999/mo)"
- "Family Care (₹7,999/mo)"

**Actual plan names on `/plans` page:**
- "Basic Care (₹4,999)"
- "Premium Care (₹7,999)"

These names don't match. A user who asks the chatbot about plans and then navigates to `/plans` will not find plans named "Essential Care" or "Family Care".

**Fix:** Update chatbot responses to use the actual plan names: Basic Care, Premium Care, Complete Care, NRI Prime.

---

### Issue 31 — `components/ui/button.tsx`: Component never used anywhere

`Button` and `buttonVariants` are exported from `components/ui/button.tsx` but no file in `app/` or `components/` imports from this path. It is leftover scaffold from `shadcn/ui` initialisation.

**Fix:** Either use the component where native `<button>` or `<Link>` styled elements exist, or remove the file if shadcn/ui is not being used.

---

### Issue 32 — `components/ui/button.tsx`: Invalid Tailwind selector

```ts
default: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
```

`[a]:hover:bg-primary/80` is not valid Tailwind CSS syntax. The correct Tailwind v4 arbitrary variant syntax does not use `[a]:` as an element selector this way. This will produce no output CSS and may log a warning.

---

### Issue 33 — `lib/sanity.ts`: `console.warn` in production

```ts
console.warn('[Aasara CMS] Sanity fetch error, using local fallback data:', error)
```

This fires in production whenever Sanity is unavailable (which is always, since `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set). It leaks debug output to the browser console on every page load that calls `getSanityContent`.

**Status:** Currently harmless since no page calls `getSanityContent`, but would be an issue once CMS is wired in.

---

### Issue 34 — `lib/sanity.ts`: Sanity set up but not connected to any page

`sanity.ts` exports a working client and `getSanityContent` helper. `sanity-schemas/` has full schemas. But no page imports from `@/lib/sanity` — all content is hardcoded inline. The CMS integration is fully scaffolded but not wired in.

**Status:** Intentional for future use. Not a bug.

---

### Issue 35 — `lib/useReveal.tsx`: `StaggerReveal` exported but never used

`StaggerReveal` is exported from `useReveal.tsx` but no page or component imports it.

**Status:** Dead export — minor. Remove if not planned for use.

---

### Issue 36 — `app/globals.css`: Dark mode CSS variables — dark mode never activated

```css
.dark {
  --background: oklch(...);
  /* ... extensive dark theme ... */
}
```

A complete dark theme is defined, but there is no dark mode toggle in the UI and the `html` element never receives a `dark` class. The entire `.dark` block is dead CSS shipped to every user.

---

### Issue 37 — `app/globals.css`: Sidebar CSS variables — no sidebar in project

```css
--sidebar: oklch(0.205 0 0);
--sidebar-foreground: ...;
--sidebar-primary: ...;
```

These are `shadcn/ui` sidebar component variables from a template init. There is no sidebar anywhere in the project. Dead CSS.

---

## Fix Plan — Priority Order

### 🔴 Main 5 Fixes (to be applied now)

| # | File | Change |
|---|------|--------|
| **F1** | `next.config.mjs` | Remove dead `fs`/`path` imports + entire commented-out block + `ignoreBuildErrors: true` |
| **F2** | `components/sections/PremiumSlideshow.tsx` | Fix `useEffect` deps: remove `currentSlide`; wire up `isPaused` to mouse hover |
| **F3** | `components/Chatbot.tsx` | Remove unused `Sparkles` import; fix plan names to match plans page |
| **F4** | `app/servostay/page.tsx` | Remove unused `Calendar` import; fix `scale-103` → `scale-105`; remove orphaned `dates` state field |
| **F5** | `app/services/page.tsx` | Fix `scale-103` → `scale-105` ×2; remove unused `Users` + `AlertCircle` imports |

### 🟡 Backlog (require business decisions or larger refactors)

| Priority | Change |
|----------|--------|
| High | Replace placeholder phone number across all files with real number |
| High | Wire forms (homepage, contact, servostay) to an API route or email service |
| High | Integrate real payment flow on plans checkout |
| Medium | Replace `<img>` with `<Image>` for hero/slideshow images; remove `unoptimized: true` |
| Medium | Remove local `Reveal`/`useInView` from `services/page.tsx`, import from `lib/useReveal` |
| Medium | Fix `StoryPlayer.tsx` `eslint-disable` — add `startProgress` to deps or restructure |
| Medium | Rename `intervalRef` → `timeoutRef` in `StoryPlayer.tsx` |
| Low | Remove unused `button.tsx` component or start using it |
| Low | Remove `StaggerReveal` export from `useReveal.tsx` if not planned |
| Low | Remove dark mode + sidebar dead CSS from `globals.css` |
| Low | Fix city checker capitalisation in `locations/page.tsx` |
| Low | Remove `dates` orphaned field from servostay form state |

---

*All fixes marked F1–F5 are non-breaking and preserve current visual design and functionality.*
