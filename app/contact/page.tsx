import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | APEX Creator Partners",
  description: "Start a conversation with APEX Creator Partners about your creator business.",
};

export default function ContactPage() {
  return (
    <main className="inner-page">
      <header className="site-header inner-header">
        <a className="wordmark" href="/"><span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span><span className="wordmark-sub">CREATOR PARTNERS</span></a>
        <nav className="desktop-nav"><a href="/#approach">Approach</a><a href="/services">Services</a><a href="/#about">About</a></nav>
        <a className="header-cta" href="/">Back to home <span>↗</span></a>
      </header>
      <section className="contact-page-hero">
        <div className="section-label"><span>LET'S TALK</span> / CONTACT</div>
        <h1>Start with a<br/><em>conversation.</em></h1>
        <p>Tell us a little about yourself and what you are looking to build. We will review your enquiry and get back to you directly.</p>
      </section>
      <section className="contact-page-layout">
        <div className="contact-form-wrap"><div className="form-heading"><span>PARTNERSHIP ENQUIRY</span><span>01 — 04 MIN</span></div><ContactForm/></div>
        <aside className="contact-aside">
          <div><span className="aside-label">DIRECT CONTACT</span><a className="contact-email" href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com ↗</a><p>Prefer email? Write to us directly and include a few lines about your goals.</p></div>
          <div className="aside-rule"/>
          <div><span className="aside-label">WHAT HAPPENS NEXT</span><ol><li><b>01</b><span>We read your enquiry.</span></li><li><b>02</b><span>We follow up by email.</span></li><li><b>03</b><span>If it makes sense, we arrange an introductory call.</span></li></ol></div>
          <div className="aside-note">No pressure. No exaggerated promises. Just an honest first conversation.</div>
        </aside>
      </section>
      <footer className="inner-footer"><a href="/">APEX CREATOR PARTNERS</a><span>© 2026</span><a href="/privacy">PRIVACY</a><a href="/imprint">IMPRINT</a></footer>
    </main>
  );
}
