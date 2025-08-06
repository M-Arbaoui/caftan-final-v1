# YAQOUT - Timeless Moroccan Caftans

A luxury Moroccan caftan e-commerce website built with React, TypeScript, and Tailwind CSS. Showcasing handcrafted Moroccan caftans where heritage meets haute couture.

## 🌟 Features

- **Luxury Design**: Elegant Moroccan-inspired design with gold accents
- **Responsive**: Perfect experience on desktop, tablet, and mobile
- **Performance Optimized**: Fast loading with lazy loading and optimizations
- **SEO Ready**: Complete meta tags and structured data
- **Smooth Animations**: Beautiful micro-interactions and transitions
- **Loading States**: Elegant loading animations with progress indicators

## 🎨 Design System

### Color Palette
- **Ivory**: `#faf9f6` - Clean backgrounds
- **Sand**: `#e6d7b8` - Warm accents
- **Soft Gold**: `#d4af37` - Luxury highlights
- **Deep Ruby**: `#c53030` - Primary brand color
- **Emerald**: `#2d4630` - Rich accents
- **Warm Charcoal**: `#1a1a1a` - Text and dark elements

### Typography
- **Display Font**: Cormorant Garamond (elegant headings)
- **Body Font**: Inter (clean, readable text)

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/caftan-final-v1.git
   cd caftan-final-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── LoadingSpinner.tsx
│   └── PageLoader.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Shop.tsx        # Shop page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Key Components

### LoadingSpinner
Beautiful Moroccan-inspired loading animation with customizable sizes and colors.

### PageLoader
Full-screen loading experience with progress bar and brand elements.

### Header
Dynamic navigation that adapts to scroll position and page context.

## 🌐 Deployment

### Vercel Deployment

1. **Connect to GitHub**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel --prod
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts` and `src/index.css`

### Fonts
Modify font imports in `src/index.css`

### Animations
Custom animations are defined in `src/index.css`

## 📄 Pages

### Home Page (`/`)
- Hero section with caftan showcase
- Featured categories
- Brand story
- Customer testimonials
- Contact information
- Newsletter signup

### Shop Page (`/shop`)
- Product grid with filtering
- Category navigation
- Product details

### About Page (`/about`)
- Brand story and heritage
- Mission and values

### Contact Page (`/contact`)
- Contact form
- Business information
- WhatsApp integration

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- Tailwind CSS for styling
- Functional components with hooks
- Consistent naming conventions

## 📞 Contact

- **WhatsApp**: +212 677 196 185
- **Email**: contact@yaqout.com
- **Location**: Morocco

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**YAQOUT** - Where Moroccan heritage meets modern elegance ✨
