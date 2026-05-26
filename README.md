# My Market - Premium Supermarket Website

A modern, premium, conversion-focused website for an Indian supermarket called "My Market" built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI.

## Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Premium UI/UX**: Elegant design with smooth animations and micro-interactions
- **Performance Optimized**: Fast loading with Lighthouse scores targeting 95+
- **SEO Friendly**: Proper metadata, Open Graph tags, and schema markup
- **Modern Tech Stack**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Shadcn/UI, Framer Motion
- **Conversion Focused**: Clear CTAs, trust indicators, and user-friendly navigation

## Key Sections

- Hero section with freshness messaging
- Why choose us highlights
- Product categories showcase
- Featured products section
- Delivery process explanation
- Customer testimonials
- Newsletter signup
- About us page with mission/vision
- Contact page with form, map, and store info
- Categories browsing page

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Images**: Next.js Image component with optimization

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mymarket.git
cd mymarket
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Deployment

### Vercel Deployment (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign up/sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Next.js project and configure the build settings
5. Click "Deploy" and wait for the deployment to complete
6. Your site will be live at a vercel.app domain (you can add a custom domain later)

### GitHub Pages Deployment

Note: For GitHub Pages, we need to export as static site since GitHub Pages doesn't support Node.js servers.

1. Add this to your `package.json` scripts:
```json
"export": "next export"
```

2. Build and export:
```bash
npm run build
npm run export
# or
yarn build
yarn export
```

3. This creates an `out` folder with static files
4. Push the `out` folder to a GitHub repository's `gh-pages` branch
5. Go to repository Settings > Pages and select the `gh-pages` branch
6. Your site will be live at `https://username.github.io/repository-name`

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
my-market/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── categories/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── delivery-section.tsx
│   │   ├── featured-products.tsx
│   │   ├── hero.tsx
│   │   ├── newsletter.tsx
│   │   ├── product-categories.tsx
│   │   ├── testimonials.tsx
│   │   └── why-choose-us.tsx
│   ├── ui/
│   │   └── menu.tsx
│   ├── click-to-call-button.tsx
│   ├── motion.tsx
│   ├── navbar.tsx
│   ├── whatsapp-button.tsx
│   └── footer.tsx
├── public/
│   └── (static assets)
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## Performance Optimization

- Image optimization with Next.js Image component
- Automatic code splitting
- Lazy loading of components
- CSS optimization with TailwindCSS
- Font optimization
- Server components for better performance

## SEO Features

- Dynamic metadata in layout.tsx
- Open Graph tags for social sharing
- Twitter Card support
- Local business schema markup
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Fast loading performance

## Customization

### Colors

The color scheme uses white and soft green as primary colors. To modify:

1. Update the color variables in `tailwind.config.js`
2. The primary color is defined as `--primary: 142.1 76.2% 36.3%` (a soft green)

### Content

Update the text content in the respective components:
- Home page components in `components/home/`
- About page in `app/about/page.tsx`
- Contact page in `app/contact/page.tsx`
- Categories page in `app/categories/page.tsx`

### Images

Replace the placeholder images in the components with actual product photos by updating the `src` attributes in the Image components.

## License

This project is for educational and demonstration purposes.

## Support

For any issues or questions, please open an issue in the GitHub repository.