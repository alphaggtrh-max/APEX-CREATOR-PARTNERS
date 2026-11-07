# APEX Creator Partners

Marketing website for APEX Creator Partners, built with Next.js and intended for deployment on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form backend

The contact form posts to `/api/contact`. The server validates the submitted fields and forwards the enquiry through Resend. It does not expose the Resend API key to the browser and does not store submissions in a database.

1. Create a Resend account and verify a domain you control.
2. Copy `.env.example` to `.env.local` for local development.
3. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`. The sender address must use a domain verified in Resend.
4. Restart the development server after changing environment variables.
5. For Vercel, add the same variables under Project Settings → Environment Variables, then redeploy.

Until these settings are present, the form displays a clear message directing visitors to the contact email address.

## Production build

```bash
npm run build
npm start
```

## Deployment

Import this repository into Vercel and deploy with the default Next.js settings. Add the production domain in Vercel and configure the DNS records shown in the Vercel dashboard at the domain registrar.

## Before public launch

- Complete the Imprint page with the real legal operator name, address and other required details.
- Replace and review the privacy draft against the actual hosting, email and analytics setup.
- Verify the sending domain and test the contact form end to end.
- Confirm that the contact mailbox is monitored.
- Review the website on mobile and desktop after deployment.
- Confirm the agency's final service scope and platform-specific terms.

The website intentionally contains no fabricated client testimonials, performance figures or claims of existing partnerships. The chart is an illustrative workflow graphic, not client performance data.
