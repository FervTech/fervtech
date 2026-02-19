# Fervtech Project Documentation

## Architecture Overview

Fervtech is a Vue 3 SPA using Vite for bundling. Core flow: `main.js` mounts `App.vue` (global layout: particles, header, router-view, footer). Routes load views (e.g., `Home.vue`), which compose reusable components (e.g., `ServicesGrid.vue`).

### Data Flow
- **Props/Emits**: Components pass data down (e.g., `stats` prop to `StatsGrid`), events up (e.g., form submit emits to parent).
- **State**: Local `ref()` in components; no global store (Pinia optional for scaling).
- **Async**: Particles CDN load on mount; form sim with `setTimeout`.

### Asset Handling
- **Images**: `src/assets/images/`—use `new URL('../assets/images/logo.png', import.meta.url).href` for dynamic paths.
- **CSS**: Global in `main.css` (variables: `--primary: #6366f1;`, animations: `@keyframes fadeInUp`).
- **Fonts/Icons**: Google Fonts (Inter, Space Grotesk) + Font Awesome CDN.

## Component Library

| Component/Path                  | Props/Emits                          | Description/Usage |
|---------------------------------|--------------------------------------|-------------------|
| **App.vue** (`src/App.vue`)    | N/A                                  | Root: Particles init, scroll listener, router-view. |
| **Header.vue** (`components/navigation/`) | `scrolled`, `mobileMenuOpen`, `servicesDropdownOpen` / `@toggle-menu`, etc. | Fixed nav with dropdown, mobile toggle. Usage: `<Header @toggle-menu="..." />`. |
| **Footer.vue** (`components/sections/`) | `@subscribe` (email)                 | Full footer (about, links, social, newsletter). Usage: `<Footer @subscribe="handleSub" />`. |
| **LoadingSpinner.vue** (`common/`) | `loading` (bool)                     | Spinner overlay. Usage: `<LoadingSpinner :loading="isLoading" />`. |
| **GlassCard.vue** (`common/`)  | N/A (wrapper)                        | Glassmorphic card with hover. Usage: `<GlassCard><p>Content</p></GlassCard>`. |
| **ServicesGrid.vue** (`sections/`) | `services` (array)                   | Card grid with icons/links. Usage: Pass array `{id, icon, title, description, link}`. |
| **StatsGrid.vue** (`sections/`) | `stats` (object)                     | Number counters (e.g., `{projects: 250}`). Usage: Transforms to array internally. |
| **TeamSection.vue** (`sections/`) | `team` (array)                       | Hover cards with images/socials. Usage: `{id, name, position, image, social: [{url, icon}]}`. |
| **ContactForm.vue** (`forms/`) | `@submit` (formData)                 | Validation + sim submit. Usage: `<ContactForm @submit="handleSubmit" />`. |
| **NewsletterForm.vue** (`sections/`) | `@subscribe` (email)                 | Email input + alert. Usage: `<NewsletterForm @subscribe="logEmail" />`. |

### Custom Hooks/Utils
- `src/utils/particles.js`: CDN load + config (export `initParticles()`).
- `src/assets/js/scroll-animations.js`: IntersectionObserver for `.reveal` classes (export `initScrollAnimations()`).

## Routing

`src/router/index.js`—Hash history (e.g., `/#/about`). Key routes:
- `/` → Home.vue (hero, services, stats, etc.)
- `/services` → Services/Overview.vue (grid overview)
- `/services/:type` → Services/[Type].vue (detail pages, e.g., WebDevelopment.vue)
- `/products` → Products.vue
- `/about` → About.vue (story + team)
- `/contact` → Contact.vue (info + form)

Add guards/middleware in router for auth if needed.

## Styling Guide
- **Variables**: `:root { --primary: #6366f1; --glass-bg: rgba(255,255,255,0.05); }` (gradients, transitions).
- **Animations**: `@keyframes fadeInUp` (scroll reveals), `marquee` (tech stack).
- **Responsive**: Media queries (@1024px, @768px, @480px)—grids flex, nav collapses.
- **Best Practices**: BEM-ish classes (e.g., `.service-card`), no !important.

## Testing
- **Unit**: `npm test` (Vitest)—e.g., `tests/components/Header.test.js` mounts & checks logo.
- **E2E**: Add Cypress if needed (`npm i -D cypress`).
- Coverage: Run `npm test -- --coverage`.

## Common Tasks
- **Add Page**: New `views/NewPage.vue` + route in `router/index.js`.
- **New Component**: `components/sections/NewSection.vue`—import in view.
- **Image**: Drop in `assets/images/`—use `new URL()` for src.
- **Styles**: Add to `main.css`—import in `main.js`.
- **Deploy**: `npm run build` → Upload `/dist` to host.

## Troubleshooting
- **Import Errors**: Check `vite.config.js` alias (`@` → `./src`).
- **Particles Blank**: CDN blocked? Fallback to npm import.
- **HMR Fails**: Restart `npm run dev`.
- **Build Issues**: `npm run build`—check `/dist` for missing assets.

## Future Enhancements
- **State Management**: Pinia for global (e.g., user prefs).
- **SSR**: Nuxt 3 for SEO.
- **Backend**: Integrate API (e.g., Supabase for forms).
- **i18n**: vue-i18n for multi-lang.

*Docs last updated: Jan 24, 2026. Contribute via PRs!*