import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact | APEX Creator Partners",
  description: "Tell APEX Creator Partners about your creator business and what kind of support you are looking for.",
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <SiteHeader/>
      <section className="contact-page-hero">
        <div className="section-label"><span>YOUR NEXT STEP</span> / CONTACT</div>
        <h1>Let’s talk about<br/><em>your goals.</em></h1>
        <p>You do not need a perfect pitch or a business plan. Just tell us a little about where you are as a creator and what you would like help with. It takes around 3 minutes.</p>
        <div className="contact-hero-points"><span><i/> Private enquiry</span><span><i/> No commitment</span><span><i/> 18+ creators only</span></div>
      </section>

      <section className="contact-page-layout">
        <div className="contact-form-wrap">
          <div className="form-heading"><span>CREATOR ENQUIRY</span><span>ABOUT 3 MINUTES</span></div>
          <div className="contact-form-intro"><h2>First, a little about you.</h2><p>Share only what you are comfortable sharing. Please do not send passwords, payment details or explicit content.</p></div>
          <ContactForm/>
        </div>

        <aside className="contact-aside">
          <div className="contact-aside-feature">
            <div className="contact-aside-art"><div className="contact-aside-orbit"/><div className="contact-aside-monogram">A<span>+</span></div><small>APEX / CREATOR PARTNERS</small></div>
            <span className="aside-label">A STRAIGHTFORWARD FIRST STEP</span>
            <h2>You stay in control.</h2>
            <p>This is simply an introduction. You decide what to share, what support you want and whether you would like to take things further.</p>
          </div>
          <div className="contact-aside-steps">
            <span className="aside-label">WHAT HAPPENS NEXT</span>
            <ol>
              <li><b>01</b><div><strong>You send your enquiry</strong><span>Tell us about your goals and current situation.</span></div></li>
              <li><b>02</b><div><strong>We reply by email</strong><span>We read your message and get back to you.</span></div></li>
              <li><b>03</b><div><strong>We arrange a call</strong><span>If it feels like a fit, we talk through possible next steps.</span></div></li>
            </ol>
          </div>
          <div className="contact-direct"><span className="aside-label">WOULD YOU RATHER EMAIL?</span><a href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com <b>↗</b></a></div>
        </aside>
      </section>
      <footer className="inner-footer"><a href="/">APEX CREATOR PARTNERS</a><span>© 2026</span><a href="/privacy">PRIVACY</a><a href="/imprint">IMPRINT</a></footer>
    </main>
  );
}
