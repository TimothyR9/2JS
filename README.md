# 2JS Detailing — Premium Website Redesign

A responsive, multi-page static website concept for 2JS Detailing. Built with plain HTML, CSS and JavaScript: no build step, package install or framework required. It is designed to be easy to preview locally and deploy through GitHub Pages or another static host.

## Pages

- `index.html` — full home page, services overview, customer comments, locations, FAQs and WhatsApp enquiry form
- `services.html` — detailed service descriptions and enquiry links
- `about.html` — brand / approach page
- `contact.html` — contact details, both locations and WhatsApp enquiry form
- `shop.html` — premium shop landing page linked to the existing WooCommerce store
- `404.html` — branded not-found page

## Preview

Open `index.html` in a browser, or run a local static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages

1. Extract the ZIP.
2. Upload the contents of the `2js-premium-site` folder into the root of a GitHub repository (the files `index.html`, `services.html`, etc. should be at repository root).
3. In GitHub, open **Settings → Pages** and publish from the `main` branch, root (`/`).
4. Add the production domain under the GitHub Pages custom-domain setting only after DNS is ready. Configure the DNS records recommended by GitHub and enable HTTPS.
5. Before changing the live 2js.co.za domain, complete the launch checklist below.

## Functionality

- Responsive desktop / mobile navigation
- Scroll-triggered content reveals and reduced-motion support
- Accessible FAQ accordion
- Responsive service cards and section layouts
- Contact forms prepare a WhatsApp message to **083 441 7085**. They do **not** create a confirmed booking, submit to a server, or store customer information.
- Phone and email links open the relevant device/app
- Map links open Google Maps search for each published branch address

## Business details used

Details were taken from the public 2JS website and the supplied earlier website concept. Please confirm with the company before launch:

- General detailing enquiries: **083 441 7085**
- Paint workshop: **083 271 1960**
- Email: **Johan@2js.co.za** and **Janca@2js.co.za**
- Vanderbijlpark: **89 Barrage Road, Building 6, Vanderbijlpark**
- Menlyn, Pretoria: **25 Kirlin Place, Menlyn, Pretoria**
- Instagram: https://www.instagram.com/2js_detailing/
- Existing online store: https://2js.co.za/shop/

## Important launch checklist

This is a complete front-end website, not a migration of the existing WordPress / WooCommerce backend. Before replacing the live site:

1. **Photography:** The current design uses atmospheric stock photography hosted by Unsplash. Replace it with 2JS-owned or properly licensed, approved workshop / vehicle photographs. The stock images are illustrative and must not be represented as actual 2JS customer work.
2. **Shop:** The shop page links to the existing WooCommerce store. Preserve or migrate the catalogue, products, stock, cart, checkout, payment gateway, shipping rules, customer accounts and order emails before retiring WordPress. Update the shop link if its URL changes.
3. **Business details:** Confirm phone numbers, emails, exact branch addresses, hours, current services, service availability and correct route / map pins.
4. **Reviews:** Confirm that the selected review excerpts and reviewer attributions may be republished. The quotes were selected from comments displayed on the existing 2JS website.
5. **Booking:** The form opens WhatsApp with a prefilled message. For confirmed bookings, connect an appointment / CRM service or build a secure backend.
6. **Legal and privacy:** The footer links to the currently published 2JS privacy policy and terms / returns pages. Keep these accessible or migrate approved current legal copy to the replacement site. Configure cookie consent before adding analytics or advertising trackers.
7. **SEO migration:** Map important existing WordPress URLs to the new pages and apply 301 redirects where URLs change. Verify canonical URLs, sitemap, Search Console, analytics and structured business data.
8. **Accessibility / QA:** Test on actual mobile devices, keyboard navigation, colour contrast, form flows and all external destinations before launch.
9. **Domain / hosting:** GitHub Pages supports static files only. Use an appropriate host / backend if the company needs dynamic bookings, login accounts, payments or a fully integrated shop.

## Design / technical notes

- Typography: Barlow Condensed + DM Sans (Google Fonts) with system fallbacks.
- Main stylesheet: `assets/site.css`
- Interaction layer: `assets/site.js`
- Brand mark / favicon: `assets/mark.svg`, `assets/favicon.svg`
- No external JavaScript libraries or build tools.
- If network access is unavailable, the layout remains styled; hosted font and photography assets may not load.
