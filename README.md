# Sunny Sky — Direct Booking Landing Page

This folder is ready to deploy as a website.

## Quick start (no coding)

1) Create two accounts:
   - GitHub.com (free)
   - Vercel.com (free hosting)

2) Upload this folder to GitHub:
   - On GitHub, click **New repository** → name it `sunnysky-landing` → **Create**.
   - Click **Add file → Upload files** → drag all files and folders from this zip.
   - **Commit** the changes.

3) Deploy with Vercel:
   - In Vercel, click **Add New → Project** → **Import Git Repository**.
   - Pick `sunnysky-landing` → Framework auto-detects **Next.js** → click **Deploy**.

4) Open your site:
   - Vercel gives you a live URL like `https://sunnysky-landing.vercel.app`.

5) Connect your domain (optional now, recommended later):
   - Buy or use your domain (e.g., `sunnysky.house`).
   - In Vercel → **Domains** → Add your domain → follow their DNS steps.

## Edit the essentials

- Open `pages/index.tsx` on GitHub and click the pencil icon to edit.
- Change:
  - `PHONE_WHATSAPP` (your number)
  - `EMAIL`
  - Each villa `bookingLink` (your direct checkout or Guesty link)
  - Replace gallery image paths with your real photos in `/public/images/`

## Add your photos

1) On GitHub, open the `public` folder → **Create new folder** called `images`.
2) Upload JPG or WebP photos (1600–2400 px wide is great for quality).
3) Update the gallery arrays in `pages/index.tsx` so each image path starts with `/images/...`.

## SEO basics included

- Page title and description
- Open Graph tags (link previews)
- JSON-LD (LodgingBusiness) for Google
- `robots.txt` and `sitemap.xml` in `/public`
- Internal links and clean structure

After you connect your domain, add your site to **Google Search Console** and submit the sitemap URL:
`https://YOUR-DOMAIN/sitemap.xml`

## How direct booking works

- The **Book** buttons go to the `bookingLink` for each villa.
- If you use Guesty, paste each villa's direct booking link there.
- If you take payment by Stripe, create a Stripe **Payment Link** and paste it as `bookingLink` for now.

## Need help?

- Edit small text or links directly in GitHub → the site redeploys itself.
- To add more sections (Reviews, FAQ), just ask ChatGPT to generate the code.
