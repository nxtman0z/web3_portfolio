# 🚀 GitHub Pages Deployment Guide

Your portfolio is now configured for GitHub Pages deployment!

## 📋 Prerequisites

1. Make sure your code is in a GitHub repository
2. The repository should be named `my-portfolio` or update the `base` in `vite.config.ts`

## 🔧 What's Been Configured

### 1. Vite Config
- Added `base: '/my-portfolio/'` for proper asset paths on GitHub Pages

### 2. Package.json Scripts
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 3. GitHub Actions Workflow
- Auto-deploys on push to `main` branch
- Located at `.github/workflows/deploy.yml`

## 🚀 Deployment Options

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select `GitHub Actions`
   
3. **Done!** Your site will automatically deploy on every push to main

Your site will be available at: `https://deepesh-sr.github.io/my-portfolio/`

### Option 2: Manual Deployment

If you prefer manual control:

```bash
# Build and deploy manually
npm run deploy
```

Then enable GitHub Pages:
- Go to Settings → Pages
- Source: Select `Deploy from a branch`
- Branch: Select `gh-pages` and `/ (root)`

## 📝 Important Notes

### If Your Repo Has a Different Name

Update `vite.config.ts`:
```typescript
base: '/your-repo-name/',
```

### For Custom Domain

1. Add a `CNAME` file to the `public/` folder with your domain
2. Update `vite.config.ts`:
   ```typescript
   base: '/',
   ```

### Local Preview

Preview the production build locally:
```bash
npm run preview
```

## 🔍 Troubleshooting

### Assets Not Loading
- Check that `base` in `vite.config.ts` matches your repo name
- Ensure GitHub Pages is enabled in repository settings

### Build Fails
- Run `npm run build` locally to check for errors
- Check the Actions tab on GitHub for detailed logs

## 📦 What Gets Deployed

The `dist/` folder containing:
- Optimized JavaScript bundles
- Minified CSS
- Static assets
- `index.html`

## 🎯 Next Steps

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Wait 2-3 minutes for the first deployment
4. Visit `https://deepesh-sr.github.io/my-portfolio/`

---

**Your portfolio is production-ready!** 🎉

To deploy now, run:
```bash
git add .
git commit -m "Setup portfolio with GitHub Pages"
git push origin main
```
