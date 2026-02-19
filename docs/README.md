# Fervtech Project README

## Overview

Fervtech is a modern, responsive single-page application (SPA) built with Vue 3, showcasing next-generation technology solutions. It features a sleek glassmorphism design, animated backgrounds with particles, scroll-triggered reveals, and modular components for services, products, testimonials, team, and contact forms. The site is fully navigable via Vue Router, with pages for Home, Services (sub-pages), Products, About, and Contact.

This project was refactored from a single HTML file into a structured Vue + Vite setup, preserving all original animations, styles, and interactions. It's optimized for development, testing, and production deployment (e.g., Vercel/Netlify).

![Fervtech Hero Preview](https://via.placeholder.com/1200x600/020617/818cf8?text=Fervtech+Hero) *(Replace with actual screenshot)*

## Tech Stack

| Category          | Technologies/Tools                          | Purpose                              |
|-------------------|---------------------------------------------|--------------------------------------|
| **Framework**     | Vue 3, Vue Router 4                        | Core SPA logic, routing              |
| **Build Tool**    | Vite 5.x                                   | Fast dev server, bundling, HMR       |
| **Styling**       | Custom CSS (PostCSS, no Tailwind)          | Glassmorphism, gradients, animations |
| **Icons/Effects** | Font Awesome 6, Particles.js 2.0           | Icons, animated backgrounds          |
| **Testing**       | Vitest, @vue/test-utils                    | Unit/integration tests               |
| **Deployment**    | Vercel/Netlify (static export)             | Easy hosting                         |

## Quick Start

### Prerequisites
- Node.js >= 18 (LTS recommended)
- npm >= 9

### Installation
1. Clone or download the repo:
   ```
   git clone <repo-url>
   cd fervtech-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the dev server:
   ```
   npm run dev
   ```
    - Opens at http://localhost:5173
    - Hot Module Replacement (HMR) for live edits

### Build & Preview
- Build for production:
  ```
  npm run build
  ```
    - Outputs to `/dist` folder (static assets ready for hosting)

- Preview the build:
  ```
  npm run preview
  ```
    - Serves `/dist` at http://localhost:4173

### Scripts
| Script     | Description                          |
|------------|--------------------------------------|
| `npm run dev` | Start dev server with HMR            |
| `npm run build` | Build for production (`/dist`)      |
| `npm run preview` | Local preview of built app          |
| `npm run lint` | Run ESLint (if enabled)              |
| `npm test` | Run Vitest tests                     |

## Project Structure

```
fervtech-project/
├── public/                 # Static assets (index.html, favicon.ico)
├── src/
│   ├── assets/             # CSS, images, JS utils
│   │   ├── css/main.css    # Global styles (variables, animations, responsive)
│   │   ├── images/         # Logos, team photos (e.g., logo.png, Team4.jpg)
│   │   └── js/             # Shared utils (scroll-animations.js, particles-config.js)
│   ├── components/         # Reusable UI (common, navigation, sections, forms)
│   │   ├── common/         # LoadingSpinner.vue, GlassCard.vue, etc.
│   │   ├── navigation/     # Header.vue, MobileMenu.vue
│   │   ├── sections/       # HeroSection.vue, StatsGrid.vue, Footer.vue, etc.
│   │   └── forms/          # ContactForm.vue
│   ├── views/              # Page-level components (router-view targets)
│   │   ├── Home.vue        # Hero, services, stats, etc.
│   │   ├── Services/       # Sub-views (WebDevelopment.vue, etc.)
│   │   ├── Products.vue    # Full products grid
│   │   ├── About.vue       # Story, team section
│   │   └── Contact.vue     # Info + form
│   ├── router/             # Vue Router config (index.js)
│   ├── utils/              # Helpers (particles.js for CDN load)
│   ├── App.vue             # Root component (particles, header, router-view, footer)
│   └── main.js             # App entry (mount, plugins)
├── docs/                   # Documentation (below)
├── tests/                  # Vitest setup
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config (aliases, plugins)
└── index.html              # Entry HTML (mounts #app)
```

## Key Features
- **Responsive Design**: Mobile-first (grids flex, nav collapses to burger menu <768px).
- **Animations**: Scroll reveals (IntersectionObserver), particles BG, hover effects (transforms, gradients).
- **Routing**: Hash history (#/services/web-development)—SEO-friendly for SPA.
- **Forms**: Simulated submission (contact/newsletter) with loading/success states.
- **Accessibility**: Semantic HTML, ARIA labels on icons/forms (add more as needed).
- **Performance**: Vite HMR, lazy-loaded routes, optimized assets.

## Deployment
1. **Build**: `npm run build` → `/dist` ready.
2. **Vercel/Netlify**: Drag `/dist` or connect Git repo (auto-builds on push).
3. **Custom Domain**: Set in platform dashboard (e.g., fervtech.com).
4. **Env Vars**: None needed (all static).

## Contributing
1. Fork & clone.
2. Install: `npm install`.
3. Branch: `git checkout -b feature/add-new-service`.
4. Commit: Conventional commits (e.g., `feat: add testimonials slider`).
5. PR: Target `main`—include tests/docs updates.

## License
MIT License—free for use/modification. © 2026 Fervtech.

## Support
- Issues: GitHub repo.
- Questions: [your-contact@fervtech.com].

---



---
