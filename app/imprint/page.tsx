import type { Metadata } from "next";
export const metadata: Metadata = { title: "Imprint | APEX Creator Partners" };

export default function ImprintPage() {
  return <main className="legal-page">
    <a className="legal-back" href="/">← APEX CREATOR PARTNERS</a>
    <div className="section-label">LEGAL / IMPRINT</div>
    <h1>Imprint</h1>
    <p className="legal-warning">The postal address is intentionally omitted at the operator's request. This page is not ready for publication: German legal disclosure rules generally require a geographical address at which the operator can be reached. Do not treat this as a complete legal notice until a legally usable business or service address has been added.</p>
    <h2>Information pursuant to § 5 DDG</h2>
    <p><strong>Operator:</strong> Wang Ling</p>
    <p><strong>Business name:</strong> APEX Creator Partners (sole proprietorship)</p>
    <p><strong>Email:</strong> hello@apex-creator-partners.com</p>
    <h2>Postal address</h2>
    <p>Not published. A valid geographical service address must be provided before this website is launched for business use.</p>
    <h2>Responsible for content</h2>
    <p>Wang Ling. The legally required postal contact details must be completed before publication.</p>
    <h2>Consumer dispute resolution</h2>
    <p>There is no obligation to participate in dispute resolution proceedings before a consumer arbitration board unless otherwise required by law or voluntarily agreed. The applicable information should be reviewed for the services and customer group actually served.</p>
    <p className="legal-small">Have the final imprint checked for your business and legal form before publication.</p>
    <a className="text-arrow" href="/privacy">Privacy notice ↗</a>
  </main>;
}
