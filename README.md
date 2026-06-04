# Enitha C — Portfolio

Personal portfolio site (Vite + React) with WordPress/React developer profile, projects, experience, and contact form.

## Setup

```bash
npm install
cp .env.example .env
# Add your Web3Forms key: https://web3forms.com
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Contact form

Copy `.env.example` to `.env` and set:

- `VITE_CONTACT_RECEIVER_EMAIL`
- `VITE_WEB3FORMS_ACCESS_KEY`

Never commit `.env` (it is in `.gitignore`).

## Deploy (GitHub Pages + LinkedIn)

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step: create repo, push, go live, add link on LinkedIn.

**Live URL:** https://enithachandrasekaran.github.io/enitha-portfolio/

## Author

**Enitha C** — [GitHub](https://github.com/Enithachandrasekaran) · [LinkedIn](https://www.linkedin.com/in/enitha-c-2174a6230/)
