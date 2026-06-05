/** Public folder paths with correct Vite base (e.g. /enitha-portfolio/ on GitHub Pages). */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL
  const file = path.startsWith('/') ? path.slice(1) : path
  return `${base}${file}`
}
