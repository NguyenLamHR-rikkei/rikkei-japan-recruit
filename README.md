# Rikkei Japan Career (front-end prototype)

Static site: HTML + CSS + vanilla JS. No build step. **All jobs, news and numbers are SAMPLE/placeholder content.**
It is **not** connected to tuyendung.rikkeisoft or any backend.

## Files
- `index.html` – page shell. `styles.css` – design (colors at top, `--r` = Rikkei red).
- `script.js` – routing, UI text (JA/VI in the `I` object), filtering. `data.js` – jobs and news.
- `assets/` – put approved logo/photos here (none included; photo areas are placeholders).

## Open locally
Double-click `index.html`. (Everything works from `file://`, since data is a normal script, not fetched JSON.)

## Edit
- Text: edit the `I.ja` / `I.vi` objects in `script.js`.
- Jobs: edit `data.js`. Each job needs `content.ja` and/or `content.vi`.
- Visibility rule: a job shows only if `targetNationalities` contains the audience of the current language (`ja`→"Japanese", `vi`→"Vietnamese"), `displayLanguages` contains the language, `status` is `"open"`. Job titles/keywords are never used. `requiredLanguages` (skill) is separate from nationality.
- Application link: set `applicationUrl`; if empty, the button shows a placeholder message.
- Colors: change `--r` etc. in `styles.css`. Logo: replace the text lockup in `shell()` in `script.js` with an `<img src="assets/logo.svg">` once an authorized asset exists.

## GitHub Pages
1. Create a repository; upload all files (keep `index.html` at the root).
2. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
3. Open `https://USERNAME.github.io/REPO/` after a minute or two. All paths are relative, and routes use `#/…`, so subpaths work.

## Troubleshooting
- 404: `index.html` is not in the repository root, or Pages is not enabled yet.
- Unstyled page: file names are case-sensitive (`styles.css`).
- Old content after edit: hard-refresh (Ctrl/Cmd+Shift+R).

## Limitations
- Static hosting has no secure database or application processing; do not collect candidate data here. Connect `applicationUrl` to a real system.
- Hash routes (`#/jobs/ID`) are shareable but not indexed individually by search engines.
- Not included yet: salary filter (no confirmed salary data), pagination (few jobs), news detail pages, photo gallery, English.
- Hiding jobs by nationality is client-side display logic only; the data in `data.js` is publicly readable. Real restriction must be enforced server-side.

## Images and logo (v2)
Put files in `assets/` with these exact names; if a file is missing, a gray placeholder is shown instead:
`logo.png` (official Rikkei logo, ~30px high works best), `hero.jpg`, `about.jpg`, `culture-1.jpg` … `culture-4.jpg`.
Photos zoom slightly on hover (disabled for users who prefer reduced motion).
Apply buttons open `RJ_APPLY_URL` in `data.js` (Facebook recruitment page); set `applicationUrl` on a job to override.
The "About" links point to https://rikkeisoft.com/ja/. Nationality is used only for filtering and is no longer shown on job pages.
