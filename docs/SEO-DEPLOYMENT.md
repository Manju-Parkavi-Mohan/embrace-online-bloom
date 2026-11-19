# November SEO content deployment

## What changed

- Five existing service URLs now have the supplied search titles, descriptions, keywords, page headings and expanded content. The software/training page remains unchanged.
- Homepage copy includes mobile fleet diagnostic support and trucks, buses, construction equipment and industrial engines.
- ECU Repair, Command Unit Repair and Diagnostics have visible FAQs (5, 8 and 4 respectively), using the existing accordion controls.
- Contextual service links complement the existing other-services navigation.
- Existing Service and BreadcrumbList graphs retain their identifiers and reflect the current page heading and description.
- Canonicals remain self-referencing `https://autodome.ae` URLs. No service URL or menu label was renamed.

## Accuracy adjustments

The supplied document is the source of the new business content, including the AED 200 starting price. Repair suitability, turnaround and compatibility are vehicle-dependent. Unqualified performance guarantees, a universal ground-resistance limit, a thermal failure-rate statistic and an unsupported particulate-removal percentage were not retained. The facility remains in Sharjah, serving Dubai; copy does not invent a Dubai branch. Emissions-system deletion is not presented as legal or compliant; repair and calibration must follow manufacturer specifications and applicable requirements.

Visible FAQs are included for visitors. New FAQPage markup is deliberately not added as a search-results enhancement: it does not promise Google FAQ rich results for this commercial workshop.

## Redeploy to the existing VPS

From the current source checkout on the VPS:

```sh
cd /var/www/autodome
npm install
npm run build:node
pm2 restart autodome
pm2 status
```

Preserve the real `.env`, PM2 configuration and SSL certificates. Do not copy source files into `public_html` and expect the contact form to run. If deploying a prebuilt ZIP instead, use a newly built package; the previous October ZIP does not contain these changes.

## www → non-www redirect (VPS action required)

On November 19, 2026, `https://www.autodome.ae/` returned HTTP 200 rather than redirecting. This repository cannot change your VPS Nginx configuration remotely.

1. Run `sudo nginx -T` and locate the active AutoDome server blocks. Back up the configuration before editing.
2. Keep the HTTPS application block listening for `autodome.ae` only, with its existing proxy settings.
3. Route HTTP for both hostnames to the non-www HTTPS host:

```nginx
server {
    listen 80;
    server_name autodome.ae www.autodome.ae;
    return 301 https://autodome.ae$request_uri;
}
```

4. Give HTTPS www its own redirect block, using the same certificate paths as the existing site. The certificate must cover both hostnames; confirm with Certbot before applying:

```nginx
server {
    listen 443 ssl;
    server_name www.autodome.ae;
    ssl_certificate /etc/letsencrypt/live/autodome.ae/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/autodome.ae/privkey.pem;
    return 301 https://autodome.ae$request_uri;
}
```

Use the existing site's IPv6 listen directives too, if configured. Remove conflicting/duplicate www server blocks rather than simply appending these. Preserve any custom ACME challenge configuration used for certificate renewal.

5. Validate, then reload:

```sh
sudo nginx -t && sudo systemctl reload nginx
curl -I 'https://www.autodome.ae/services/ecu-repair-reprogramming?check=1'
```

Expected: `301` and `Location: https://autodome.ae/services/ecu-repair-reprogramming?check=1`.

## Post-deployment checks

- Open each changed page and inspect View Page Source: unique title/description, self-referencing canonical and Service/BreadcrumbList JSON-LD.
- Expand a FAQ, follow a related service link and click Request Consultation; Contact should open at the top.
- Confirm `/sitemap.xml`, `/robots.txt` and the logo URL remain available.
- Request indexing for updated URLs in Google Search Console. Content changes do not guarantee ranking or rich-result inclusion.
- Google Tag Manager is unchanged; validate GA4 separately using Tag Assistant and Analytics Realtime.