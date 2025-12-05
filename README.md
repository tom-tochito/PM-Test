# Premier Markets Landing Page

A responsive landing page for Premier Markets forex trading platform, built with Next.js 14, TypeScript, and CSS Modules.

**Repository:** [https://github.com/tom-tochito/PM-Test](https://github.com/tom-tochito/PM-Test)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Package Manager**: pnpm
- **Fonts**: Gilroy (local), Urbanist & Roboto (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd PM-Test
```

2. Install dependencies:
```bash
pnpm install
```

3. Add Gilroy font files (required):
   Place the following font files in `/public/assets/fonts/`:
   - `Gilroy-Bold.woff2` / `Gilroy-Bold.woff`
   - `Gilroy-SemiBold.woff2` / `Gilroy-SemiBold.woff`
   - `Gilroy-Medium.woff2` / `Gilroy-Medium.woff`
   - `Gilroy-Regular.woff2` / `Gilroy-Regular.woff`

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Home page composition
├── components/
│   ├── Header/          # Navigation with dropdown menus
│   ├── Hero/            # Hero section with CTA
│   ├── AccessMarkets/   # Markets statistics section
│   ├── JoinTraders/     # Trust section with trading preview
│   ├── OurMarkets/      # Market categories & trading cards
│   ├── EmpowerTrading/  # Features grid section
│   ├── SeamlessWithdrawals/  # Mobile app promotion
│   ├── DailyUpdates/    # Blog/news section
│   ├── Testimonials/    # Client testimonials carousel
│   ├── CTASection/      # Steps to get started
│   ├── Footer/          # Site footer with links
│   └── ui/
│       └── Button/      # Reusable button component
```

## Assumptions Made

1. **Font Files**: The design uses Gilroy font which is a commercial font. The project expects the font files to be provided and placed in `/public/assets/fonts/`. Without these files, the headings will fall back to system fonts.

2. **Static Content**: All content is hardcoded as this is a static landing page. In a production environment, this would likely be fetched from a CMS.

3. **Placeholder Links**: Navigation links and CTAs point to `#` as no routing was specified.

4. **Dropdown Content**: The dropdown menu items are representative placeholders based on typical forex trading site structure.

5. **Market Data**: Trading data shown (prices, percentages) is static placeholder data for demonstration.

6. **Images**: Images were exported from Figma where available. Some decorative elements use CSS gradients instead.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- **Desktop**: 1440px (design base)
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## What I Would Improve With More Time

1. **Animations**: Add scroll-triggered animations using Framer Motion or CSS animations for a more polished feel.

2. **Image Optimization**: Implement proper image formats (WebP, AVIF) with responsive srcsets for better performance.

3. **Accessibility**:
   - Add skip links
   - Improve focus states
   - Add ARIA live regions for dynamic content
   - Test with screen readers

4. **Testing**:
   - Unit tests with Jest/Vitest
   - Component tests with React Testing Library
   - E2E tests with Playwright

5. **Performance**:
   - Lazy load below-the-fold images
   - Code splitting for non-critical components
   - Add loading states

6. **Internationalization**: Set up next-intl for multi-language support.

7. **Dark Mode**: Implement a dark theme toggle using CSS custom properties.

8. **Component Documentation**: Add Storybook for component documentation and visual testing.

9. **SEO**: Add structured data (JSON-LD), Open Graph tags, and sitemap generation.

10. **Error Boundaries**: Add error boundaries for graceful error handling.
