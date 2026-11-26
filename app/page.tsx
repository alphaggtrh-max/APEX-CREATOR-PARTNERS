import SiteHeader from "./components/SiteHeader";
import CreatorPathway from "./components/CreatorPathway";
import AgencyConsole from "./components/AgencyConsole";
import { ApexLogo } from "./components/BrandLogos";
import ScrollMotion from "./components/ScrollMotion";

const services = [
  { n: "01", title: "Strategy & positioning", tag: "DIRECTION", copy: "A clear plan for your creator brand, audience and next stage — shaped around your goals and boundaries.", points: ["Creator positioning", "Audience and channel strategy", "A practical growth roadmap"] },
  { n: "02", title: "Promotion & audience growth", tag: "DISCOVERY", copy: "Connect your social presence and subscription profiles with a more intentional promotion strategy.", points: ["Social platform planning", "Content distribution", "Profile and funnel optimisation"] },
  { n: "03", title: "Content & fan experience", tag: "ENGAGEMENT", copy: "Build a consistent content rhythm and a thoughtful subscriber experience across your platforms.", points: ["Content planning", "Chatting and fan management", "Subscriber experience"] },
  { n: "04", title: "Business & account management", tag: "OPERATIONS", copy: "Practical day-to-day support that helps keep your creator business organised and moving.", points: ["Profile and account support", "Admin and workflow coordination", "Analytics and performance reviews"] },
];

const principles = [
  ["You stay in control", "Your accounts, content, identity and payouts remain yours. Access and responsibilities are agreed clearly and in writing."],
  ["Straight answers, not hype", "We do not promise a certain income or follower count. We focus on a clear plan, consistent work and honest reviews."],
  ["A partnership with boundaries", "You decide what feels right for your brand. Communication, expectations and responsibilities stay transparent."],
];

const faqs = [
  ["Do I need to be an established creator?", "No. We speak with creators who are starting out as well as those who already have an audience. We will be honest about whether we can help at your current stage."],
  ["Do I need to share my passwords?", "No passwords should be sent through the website or email. Any account access must be discussed separately and handled securely with clear written permission."],
  ["Do I keep my account and earnings?", "Yes. Your creator accounts and payouts remain under your control. Any agreed service fees and responsibilities should be clear in writing before work begins."],
  ["Do you guarantee more subscribers or income?", "No. Growth depends on many factors and cannot be guaranteed. We focus on a clear plan, consistent execution and honest review."],
  ["What happens after I contact you?", "Send a short enquiry and we will review it and reply by email. If it looks like a possible fit, we arrange an introductory conversation."],
  ["Who do you work with?", "APEX works with independent adult and subscription-based creators aged 18 or older. We do not work with anyone under 18."],
];

export default function Home() {
  return <main id="top" className="apex-site apex-editorial">
    <ScrollMotion/>
    <div className="apex-topline"><span>INDEPENDENT CREATOR MANAGEMENT</span><span>STRATEGY · GROWTH · OPERATIONS</span><span>18+ ONLY</span></div>
    <SiteHeader/>

    <section className="apex-hero apex-editorial-hero">
      <div className="apex-hero-copy">
        <div className="apex-eyebrow"><i/> AGENCY PARTNERSHIP FOR INDEPENDENT CREATORS</div>
        <h1>Creator management.<br/><em>Built to move you forward.</em></h1>
        <p>A management partner for independent adult creators. We connect strategy, audience growth, fan experience and business operations — so every part of your creator business has direction.</p>
        <div className="apex-hero-actions">
          <a className="apex-button apex-button-primary" href="/contact">Apply for management <span>↗</span></a>
          <a className="apex-text-link" href="#services">Explore what we do <span>↓</span></a>
        </div>
        <div className="apex-hero-note"><span/> CREATOR-FIRST. DISCREET. BUILT AROUND YOU.</div>
      </div>
      <AgencyConsole/>
      <div className="apex-hero-index">APEX <span>—</span> 01</div>
    </section>

    <div className="apex-proofline"><span>CREATOR-FIRST</span><i>✳</i><span>18+ ONLY</span><i>✳</i><span>AGREED SCOPE & FEES</span><i>✳</i><span>YOUR ACCOUNTS STAY YOURS</span></div>

    <div id="creator-pathway"><CreatorPathway/></div>

    <section className="apex-intro apex-section" id="approach">
      <div className="apex-section-kicker">01 / THE APEX APPROACH</div>
      <div className="apex-intro-grid">
        <h2>Not just more content.<br/><em>A stronger business.</em></h2>
        <div><p className="apex-lead">A creator business has many moving parts: your brand, content, audience, subscriptions and day-to-day operations.</p><p>APEX brings those pieces into one considered plan. We work with you to identify what matters now, set clear priorities and build a structure that supports your ambitions without taking control away from you.</p><a className="apex-inline-link" href="/contact">Get to know APEX <span>↗</span></a></div>
      </div>
    </section>

    <section className="apex-services apex-section" id="services">
      <div className="apex-section-head"><div><div className="apex-section-kicker">02 / WHAT WE DO</div><h2>Everything connected.<br/><em>Nothing left to guess.</em></h2></div><p>Four core disciplines, brought together in one management partnership. Start with the area that needs attention most.</p></div>
      <div className="apex-service-grid">{services.map(s=><article className="apex-service-card" key={s.n}><div className="apex-service-meta"><span>{s.n} / 04</span><span>{s.tag}</span></div><div className="apex-service-symbol">{s.n === "01" ? "↗" : s.n === "02" ? "◎" : s.n === "03" ? "✳" : "⌘"}</div><h3>{s.title}</h3><p>{s.copy}</p><ul>{s.points.map(p=><li key={p}>{p}</li>)}</ul><a href="/contact">Explore this service <span>↗</span></a></article>)}</div>
    </section>

    <section className="apex-system apex-section" id="system">
      <div className="apex-system-copy"><div className="apex-section-kicker">03 / THE PARTNERSHIP</div><h2>Clear from<br/><em>day one.</em></h2><p>You stay at the centre of the business. We agree the scope, responsibilities and fees before work begins, then keep communication clear as the partnership develops.</p><a className="apex-button apex-button-outline" href="/contact">Start a conversation <span>↗</span></a><small>YOUR GOALS SET THE DIRECTION.</small></div>
      <div className="apex-process-visual" aria-label="Four steps in the APEX working process">
        <div className="apex-visual-top"><span>HOW WE WORK</span><span>FOUR CLEAR STEPS</span></div>
        <div className="apex-process-line"><i/><i/><i/><i/></div>
        <div className="apex-process-grid">
          {[["01","Listen","Your goals, content and boundaries"],["02","Align","Scope, priorities and responsibilities"],["03","Build","Agreed actions and practical support"],["04","Refine","Review, learn and adjust"]].map(([n,t,d])=><div className="apex-process-card" key={n}><span>{n}</span><b>{t}</b><small>{d}</small><i>↗</i></div>)}
        </div>
        <div className="apex-visual-bottom"><span><i/> OPEN COMMUNICATION</span><span>NO HIDDEN EXPECTATIONS</span></div>
      </div>
    </section>

    <section className="apex-principles apex-section" id="about"><div className="apex-section-kicker">04 / YOUR BRAND, YOUR RULES</div><div className="apex-manifesto">Your content. Your identity. Your decisions. We help you <em>build on your terms.</em></div><div className="apex-principle-grid">{principles.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="apex-faq apex-section" id="faq"><div className="apex-section-kicker">05 / GOOD TO KNOW</div><div className="apex-faq-grid"><div><h2>Before we<br/><em>get started.</em></h2><p>A few straightforward answers about working with APEX.</p><a className="apex-inline-link" href="/contact">Have another question? <span>↗</span></a></div><div className="apex-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="apex-closing"><div className="apex-closing-orb"/><div className="apex-section-kicker">06 / LET’S TALK</div><h2>Ready to take your<br/><em>next step?</em></h2><p>Tell us about your creator business and the support you are looking for. We will review your enquiry and discuss whether a partnership makes sense.</p><a className="apex-button apex-button-light" href="/contact">Apply for a partnership <span>↗</span></a><div className="apex-closing-foot"><span>APEX CREATOR PARTNERS</span><span>YOUR NEXT CHAPTER, BY DESIGN.</span></div></section>

    <footer className="apex-footer"><div className="apex-footer-main"><a className="apex-footer-brand" href="/"><ApexLogo className="apex-footer-logo"/><b>APEX<span>.</span></b><small>CREATOR PARTNERS</small></a><p>Independent creators.<br/>A more intentional way forward.</p><nav><a href="#services">Services</a><a href="#system">How we work</a><a href="#about">Our approach</a><a href="#faq">FAQ</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/imprint">Imprint</a></nav><a className="apex-footer-email" href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com ↗</a></div><div className="apex-footer-bottom"><span>© 2026 APEX Creator Partners</span><span>18+ · Independent creator management</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
