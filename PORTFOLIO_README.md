# Deepesh Singh Rathore - Portfolio

A professional, minimal portfolio website showcasing expertise in Rust, Solana blockchain development, and full-stack web applications.

## 🎨 Design

- **Theme**: Black & White Matte
- **Typography**: Monospace (JetBrains Mono, Fira Code fallbacks)
- **Style**: Professional, sleek, minimal
- **Responsive**: Fully responsive across all devices

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   └── button.tsx          # Reusable button component
│   ├── Navigation.tsx           # Fixed navigation with mobile menu
│   ├── Hero.tsx                 # Landing section
│   ├── About.tsx                # About & tech stack section
│   ├── Projects.tsx             # Featured projects grid
│   └── Contact.tsx              # Contact & footer section
├── lib/
│   └── utils.ts                 # Utility functions
├── App.tsx                      # Main app component
├── main.tsx                     # App entry point
└── index.css                    # Global styles & theme

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📝 Customization

### Update Personal Information

1. **Contact Links** - Update in `src/components/Hero.tsx` and `src/components/Contact.tsx`:
   - GitHub: Replace `https://github.com/deepesh-sr`
   - LinkedIn: Replace `https://linkedin.com/in/deepesh-sr`
   - Email: Replace `deepesh@example.com`

2. **Projects** - Edit `src/components/Projects.tsx`:
   - Add/remove projects in the `projects` array
   - Update GitHub links, descriptions, and tags

3. **About Section** - Modify `src/components/About.tsx`:
   - Tech stack items
   - Core strengths
   - Bio description

### Theme Colors

Colors are defined in `src/index.css` under the `:root` section:

```css
--background: 0 0% 8%;        /* Dark background */
--foreground: 0 0% 95%;       /* Light text */
--muted: 0 0% 15%;           /* Muted background */
--border: 0 0% 20%;          /* Border color */
```

## 🎯 Features

- ✅ Smooth scroll navigation
- ✅ Responsive mobile menu
- ✅ Fixed navigation with scroll effect
- ✅ Professional matte button styles
- ✅ SEO-friendly structure
- ✅ Fast Vite build
- ✅ TypeScript for type safety
- ✅ Accessible components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### GitHub Pages

1. Update `vite.config.ts` with base path:
```ts
export default defineConfig({
  base: '/repository-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use.

---

Built with ❤️ using React, Vite, and Tailwind CSS
