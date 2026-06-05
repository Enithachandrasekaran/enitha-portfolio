# Put your portfolio on GitHub & LinkedIn

Live site URL (after setup):

**https://enithachandrasekaran.github.io/enitha-portfolio/**

GitHub profile: [github.com/Enithachandrasekaran](https://github.com/Enithachandrasekaran)

---

## Step 1 — Create the repository on GitHub

1. Sign in at [github.com](https://github.com).
2. Open **[github.com/new](https://github.com/new)**.
3. **Owner:** `Enithachandrasekaran`
4. **Repository name:** `enitha-portfolio` (exactly this name)
5. **Public**
6. Do **not** tick “Add a README”
7. Click **Create repository**

---

## Step 2 — Push your code from your PC

Open PowerShell:

```powershell
cd C:\Users\harin\Enitha
git push -u origin main
```

**If Git asks you to sign in:**

- Username: `Enithachandrasekaran`
- Password: use a **Personal Access Token**, not your GitHub password  
  Create one: [github.com/settings/tokens](https://github.com/settings/tokens) → **Generate new token (classic)** → enable **repo** → copy the token and paste it when asked for password.

**If you see “Repository not found”:** Step 1 was not done or the repo name is different. Fix the name or run:

```powershell
git remote set-url origin https://github.com/Enithachandrasekaran/YOUR-REPO-NAME.git
git push -u origin main
```

---

## Step 3 — Turn on GitHub Pages (free hosting)

The workflow builds your site and publishes the **`dist`** folder to the **`gh-pages`** branch.

1. Open **https://github.com/Enithachandrasekaran/enitha-portfolio**
2. **Settings** → **Pages**
3. **Source:** **Deploy from a branch**
4. **Branch:** **`gh-pages`** · folder **`/ (root)`** → **Save**
5. **Do not** use **`main`** — that serves raw source and causes **404** errors (`/src/main.jsx` not found).
6. Wait 2–5 minutes. **Actions** → “Deploy portfolio to GitHub Pages” should be green.
7. Visit **https://enithachandrasekaran.github.io/enitha-portfolio/**

### If you see 404 / blank page

Your Pages source is probably still **`main`**. Switch it to **`gh-pages`** as above, then hard-refresh (Ctrl+Shift+R).

---

## Step 4 — Contact form on the live site (optional)

GitHub cannot read your local `.env`. Add secrets so the build includes your form keys:

1. Repo → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret:**
   - `VITE_CONTACT_RECEIVER_EMAIL` = `enitha2002c@gmail.com`
   - `VITE_WEB3FORMS_ACCESS_KEY` = your key from [web3forms.com](https://web3forms.com)
3. **Actions** → re-run the latest workflow (or push any small change)

---

## Step 5 — Add the live link on LinkedIn

1. Open [linkedin.com](https://www.linkedin.com) → your profile → **Edit**
2. **Add profile section** → **Recommended** → **Add featured**
   - **Title:** Portfolio — Enitha C  
   - **URL:** `https://enithachandrasekaran.github.io/enitha-portfolio/`
3. Also set **Contact info** → **Website** → same URL (label: Portfolio)
4. In **About**, add a line:  
   `Portfolio: https://enithachandrasekaran.github.io/enitha-portfolio/`
5. Optional post: “My developer portfolio is live — WordPress & React projects, experience, and contact form.” + the link + `#WebDeveloper` `#WordPress` `#React`

---

## Quick checklist

| Step | Done? |
|------|--------|
| Created repo `enitha-portfolio` on GitHub | ☐ |
| `git push -u origin main` succeeded | ☐ |
| Pages → Source = GitHub Actions | ☐ |
| Actions workflow passed | ☐ |
| Site opens in browser | ☐ |
| Link added on LinkedIn | ☐ |

---

## Easier alternative (Netlify)

If GitHub Pages is difficult:

1. Push to GitHub (Steps 1–2)
2. [netlify.com](https://www.netlify.com) → **Add new site** → **Import from GitHub** → select `enitha-portfolio`
3. Build command: `npm run build` · Publish directory: `dist`
4. Add env vars in Netlify (same as `.env`)
5. Use the Netlify URL on LinkedIn instead

For Netlify, change `vite.config.js` `base` back to `'/'` or the site assets will break.
