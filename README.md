# DavFXStudio

A complete, buildless creative portfolio for David. HTML, CSS, JavaScript, local SVG artwork and one locally stored stock photograph. No npm installation, paid service, analytics, cookies, or backend required.

## Edit the site

- **Projects:** edit `js/content.js`. Each object in `projects` controls its title, category, image, alt text, short summary, expanded description and credits. Move an object to reorder, remove it to delete, or duplicate it with a unique `id` to add a project. Categories and the navigation count update automatically.
- **Images:** upload your own files to `assets/`, then change the project's `image` path. Use relative paths such as `assets/my-project.webp` (no leading slash). Use descriptive alt text. WebP or JPEG around 1400px wide is a good starting point. The grid crops images; the detail preview shows the full image.
- **Real work:** all launch projects are clearly labeled placeholders. Once you replace one with David's real work, set `placeholder: false`, update its copy and credit, and optionally add `url: 'https://...'`. Remove or rewrite the preview notice in `index.html` when appropriate. No sample is a claim of completed work.
- **Contact:** replace `email` in `js/content.js`, then set `emailIsPlaceholder: false`. `hello@example.com` is a reserved example address, not a working contact. The site uses a mailto link; there is no contact form or email service.
- **Social links:** add objects to `socials`, e.g. `{ label: 'Instagram', url: 'https://www.instagram.com/YOUR_HANDLE/' }`, replacing the URL with David's actual profile. No social handles have been invented. The coming-soon text disappears when valid links exist.
- **Hero / about:** edit `index.html`. Replace `assets/featured.svg` or change the hero image's `src` and `alt`.
- **Appearance:** `css/style.css` contains colors, typography, layout and responsive breakpoints. It uses system sans-serif fonts, so no font service is required.
- **Year:** the footer updates automatically.

## Preview

Open `index.html` directly in a modern browser. For an HTTP preview, run `python -m http.server 8080` in this folder and visit `http://localhost:8080`. No build step is needed.

## GitHub Pages deployment

This project is intended for https://github.com/Lucidiscool/portfolio and https://lucidiscool.github.io/portfolio/.

1. Upload all files and the `assets`, `css`, and `js` folders to the repository root on `main`. Keep the empty `.nojekyll` file. `index.html` must be at the root, not inside another folder.
2. Open the repository's **Settings → Pages**.
3. Choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
4. Wait for the **pages build and deployment** workflow to finish. GitHub displays the live address in Settings → Pages.
5. Future commits to `main` deploy automatically. A hard refresh may be needed after publication.

No custom domain is required. Relative asset paths support the `/portfolio/` subdirectory. See [GitHub's deployment instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Assets and reference

The visual direction was informed by https://www.derrickjoseph.media/: restrained navigation, whitespace, large imagery, concise project categories, and a dark closing section. Its artwork, personal information, project claims, code and photography are not included.

`assets/featured.svg`, `graphic.svg`, `world.svg`, `website.svg`, `experiment.svg`, and `favicon.svg` were made for this website as original placeholder artwork. The environment illustration is not a Roblox screenshot; the website mockup is not a client project.

`assets/architecture.jpg` is a temporary Unsplash stock image, downloaded from https://images.unsplash.com/photo-1486406146926-c627a92ad1ab under the [Unsplash License](https://unsplash.com/license). It is explicitly not David's photography. Replace it with his own work before treating the gallery as a completed portfolio.

## Accessibility and behavior

Semantic sections, one H1, skip link, descriptive image alternatives, keyboard-visible focus, native modal focus containment and Escape dismissal, responsive navigation, category filters with pressed states and live result counts, and reduced-motion support. Core page content and contact remain accessible without JavaScript; the editable portfolio gallery requires JavaScript.
