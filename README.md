# Gnomin Around landing page

Static marketing landing page for **Gnomin Around**, designed to deploy directly on GitHub Pages with no build step.

## What's included

- Responsive single-page marketing site
- Mobile navigation
- Lightweight scroll reveals
- FAQ using native HTML details/summary controls
- SEO metadata and `VideoGame` schema markup
- Clearly labelled placeholders for the final logo, key art, character render and gameplay screenshots
- Copy written from the current Gnomin Around product blueprint rather than invented feature promises

## Run locally

You can open `index.html` directly, or serve the folder with any simple static web server.

For example:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy with GitHub Pages

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)` folder.
4. Save.

No GitHub Action or package install is required.

## Replacing the placeholders

The placeholder panels are regular HTML elements with the class `media-placeholder`. When final visuals are ready, replace the panel contents with an `<img>` or `<picture>` element and keep useful `alt` text.

Suggested first assets:

- Hero key art or strongest gameplay screenshot
- One screenshot for each Garden Incident
- Oversized-garden environment shot
- Clean gnome character render
- Final Gnomin Around logo

## Public links still intentionally blank

The Discord, Meta Quest, wishlist/playtest and creator links are presented as **coming soon** because no final public URLs are currently wired into the site. Replace these once those destinations are confirmed.

## Custom domain

The page metadata assumes the intended public URL is `https://gnominaround.com/`, but this repository does **not** include a `CNAME` file and does not change DNS. Add the custom domain only when the site is ready to go public.
