# GitHub Pages Deployment Instructions

## Option A: Deploy to https://username.github.io/ (User/Organization Site)

If your repository is named `username.github.io`, keep the base path as `/` in `vite.config.ts`.

## Option B: Deploy to https://username.github.io/repository-name/ (Project Site)

If your repository has a different name (e.g., `favored-events`), you need to update the base path:

In `vite.config.ts`, change:
```typescript
base: '/',
```

To:
```typescript
base: '/your-repository-name/',
```

For example, if your repo is `favored-events`:
```typescript
base: '/favored-events/',
```

---

## Steps to Deploy:

### 1. Push your code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on every push to main

### 3. Access your site
Your site will be available at:
- User site: `https://username.github.io/`
- Project site: `https://username.github.io/repository-name/`

---

## Manual Build (Optional)

If you want to build locally and see the output:

```bash
npm install
npm run build
```

The built files will be in the `dist` folder.

---

## Troubleshooting

### 404 errors on routes
If you get 404 errors when navigating directly to routes (not the homepage), GitHub Pages needs a 404.html file that redirects to index.html. This is already handled by the deployment, but if you have issues, you can add a `404.html` file to your `public` folder.

### Images not loading
Make sure all image URLs are relative or use the correct base path.

### Base path issues
If links don't work after deployment:
1. Double-check your `base` setting in `vite.config.ts`
2. Make sure it matches your repository name (with slashes)
3. Rebuild and redeploy

---

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings
