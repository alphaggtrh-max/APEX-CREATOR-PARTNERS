import type { Metadata } from "next";
export const metadata: Metadata = { title: "Imprint | APEX Creator Partners" };

export default function ImprintPage() {
  return <main className="legal-page">
    <a className="legal-back" href="/">← APEX CREATOR PARTNERS</a>
    <div className="section-label">LEGAL / IMPRINT</div>
    <h1>Imprint</h1>
    <h2>Information pursuant to § 5 DDG</h2>
    <p><strong>Operator:</strong> Wang Ling</p>
    <p><strong>Business name:</strong> APEX Creator Partners (sole proprietorship)</p>
    <p><strong>Address:</strong> Flurstraße 31, 85232 Bergkirchen, Germany</p>
    <p><strong>Email:</strong> hello@apex-creator-partners.com</p>
    
    <h2>Responsible for content</h2>
    <p>Wang Ling, Flurstraße 31, 85232 Bergkirchen, Germany.</p>
    <h2>Consumer dispute resolution</h2>
    <p>There is no obligation to participate in dispute resolution proceedings before a consumer arbitration board unless otherwise required by law or voluntarily agreed. The applicable information should be reviewed for the services and customer group actually served.</p>
    <a className="text-arrow" href="/privacy">Privacy notice ↗</a>
  </main>;
}
