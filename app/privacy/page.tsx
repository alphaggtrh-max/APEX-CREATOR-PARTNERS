import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy | APEX Creator Partners" };

export default function PrivacyPage() {
  return <main className="legal-page">
    <a className="legal-back" href="/">← APEX CREATOR PARTNERS</a>
    <div className="section-label">LEGAL / PRIVACY</div>
    <h1>Privacy notice</h1>
    <p className="legal-warning">Publication warning: the controller's postal address is intentionally not displayed here at the operator's request. A privacy notice must provide complete controller contact details. Add a legally usable business/service address before relying on this page as the final notice.</p>
    <h2>Controller</h2>
    <p><strong>Wang Ling</strong>, sole proprietor trading as APEX Creator Partners.</p>
    <p>Contact: hello@apex-creator-partners.com</p>
    <h2>Contact enquiries</h2>
    <p>If you submit the contact form, the information you provide — including your name, email address, optional creator or brand details, selected platform and message — is processed to review and respond to your enquiry. Do not submit passwords, payment details or sensitive personal information.</p>
    <h2>Email delivery</h2>
    <p>The contact form sends enquiries using Resend. The information submitted through the form is transmitted to the email delivery provider to deliver the enquiry to the operator. Before publication, review the provider's current privacy information, data-processing terms and any international data transfers, and document the applicable legal basis and retention period.</p>
    <h2>Hosting, server logs and retention</h2>
    <p>The website is deployed using Netlify. The hosting provider may process technical connection data, including IP address, request details, date and time, browser information and server logs, to deliver and secure the website. Confirm the applicable hosting region, log retention period, data-processing terms and legal basis against your Netlify configuration before publication.</p>
    <h2>External images and third-party services</h2>
    <p>Where the website loads images or other resources from third-party services, your browser connects directly to those providers and may transmit technical data such as your IP address and browser information. Review the live website for external resources, embedded content, analytics and cookies, and update this notice to match what is actually enabled.</p>
    <h2>Your rights</h2>
    <p>Depending on the circumstances, you may have rights to access, rectification, erasure, restriction, objection and data portability. You may also lodge a complaint with a competent data protection supervisory authority.</p>
    <h2>Cookies and analytics</h2>
    <p>This notice does not confirm that analytics or non-essential cookies are absent. Update it if you enable analytics, tracking, embedded media or other third-party services.</p>
    <p className="legal-small">This notice is a working draft and should be checked against the production website and actual data flows before publication. It is not legal advice.</p>
    <a className="text-arrow" href="/contact">Contact us ↗</a>
  </main>;
}
