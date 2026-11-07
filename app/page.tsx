import SiteHeader from "./components/SiteHeader";

const services = [
  { n: "01", title: "Growth strategy", tag: "POSITIONING", copy: "A clear view of where you are, who you serve and what deserves your attention next.", points: ["Positioning & differentiation", "Audience and channel research", "Practical growth priorities"] },
  { n: "02", title: "Audience acquisition", tag: "DISCOVERY", copy: "A considered approach to attracting the right audience through consistent, platform-aware distribution.", points: ["Organic channel strategy", "Content distribution planning", "Funnel and profile review"] },
  { n: "03", title: "Content & monetization", tag: "VALUE", copy: "Build a content system that protects your identity while making the creator business more intentional.", points: ["Content pillars and planning", "Offer and pricing review", "Retention and monetization ideas"] },
  { n: "04", title: "Business operations", tag: "FOUNDATION", copy: "Bring more structure to the work behind the scenes, with useful reporting and clearer processes.", points: ["Workflow design", "Performance reviews", "Operational coordination"] },
];

const principles = [
  ["Your business stays yours", "You retain control of your identity, accounts, boundaries and business decisions. We work with you, not instead of you."],
  ["Clarity over hype", "No guaranteed earnings, inflated statistics or one-size-fits-all formulas. We set realistic priorities and review what the evidence tells us."],
  ["Selective by design", "We take time to understand the creator, the business and whether the partnership is right for both sides."],
];

const faqs = [
  ["Who is APEX built for?", "We work with independent adult and subscription-based creators who are 18 or older and want thoughtful support with growth, content and business operations."],
  ["Do you guarantee revenue or follower growth?", "No. Results depend on many factors, including the creator, audience, platform and execution. We focus on clear responsibilities, consistent work and honest evaluation."],
  ["Do I keep control of my accounts and earnings?", "Yes. Account ownership, access permissions, payout control and responsibilities should be clearly agreed in writing. You remain in control of your accounts and earnings."],
  ["How does the first conversation work?", "Submit a short enquiry with your public profile and goals. We review it and, if there may be a fit, follow up to arrange an introductory conversation."],
  ["Is there a minimum audience or revenue requirement?", "There is no public one-size-fits-all threshold. We consider your current position, goals, consistency and whether we can offer meaningful support."],
];

function PlatformVisual() {
  const platforms = [
    ["ONLYFANS", "Subscription"],
    ["FANSLY", "Creator platform"],
    ["REDDIT", "Community"],
    ["INSTAGRAM", "Discovery"],
    ["TIKTOK", "Short-form"],
    ["X", "Distribution"],
  ];
  return <section className="apex-social-section" aria-label="Creator platform ecosystem">
    <div className="apex-social-head">
      <div><div className="apex-section-kicker">PLATFORM-AWARE STRATEGY</div><h2>One creator brand.<br/>A connected ecosystem.</h2></div>
      <p>Different platforms play different roles — from discovery and community to subscription and retention. The right mix depends on your audience, content and boundaries.</p>
    </div>
    <div className="apex-platform-stage">
      <div className="apex-platform-core">A<span><small>APEX NETWORK</small></span></div>
      {platforms.map(([name, role]) => <div className="apex-platform-chip" key={name}><i/><div><b>{name}</b><br/><span>{role}</span></div></div>)}
      <div className="apex-platform-note">ILLUSTRATIVE CHANNEL MAP · NOT AN ENDORSEMENT OR PLATFORM AFFILIATION</div>
    </div>
  </section>;
}

function ProcessVisual() {
  return <div className="apex-process-visual" aria-label="Illustrative creator business framework">
    <div className="apex-visual-top"><span>THE APEX FRAMEWORK</span><span>PROCESS / 01—04</span></div>
    <div className="apex-process-line"><i/><i/><i/><i/></div>
    <div className="apex-process-grid">
      {[
        ["01", "Understand", "Position · goals · audience"],
        ["02", "Prioritise", "Focus · channels · plan"],
        ["03", "Execute", "Content · distribution · systems"],
        ["04", "Review", "Signals · learning · next steps"],
      ].map(([n,t,d]) => <div className="apex-process-card" key={n}><span>{n}</span><b>{t}</b><small>{d}</small><i>↗</i></div>)}
    </div>
    <div className="apex-visual-bottom"><span><i/> A FRAMEWORK, NOT A PROMISE</span><span>APEX / CREATOR PARTNERS</span></div>
  </div>;
}

export default function Home() {
  return <main id="top" className="apex-site">
    <div className="apex-topline"><span>INDEPENDENT CREATOR MANAGEMENT</span><span>STRATEGY · GROWTH · OPERATIONS</span><span>18+ ONLY</span></div>
    <SiteHeader/>
    <section className="apex-hero">
      <div className="apex-hero-copy">
        <div className="apex-eyebrow"><i/> A MORE CONSIDERED WAY TO GROW</div>
        <h1>Built around<br/>your ambition.<br/><em>Driven by intent.</em></h1>
        <p>Strategic growth and business support for independent subscription creators. Clear thinking, considered execution and a partnership that respects your business.</p>
        <div className="apex-hero-actions"><a className="apex-button apex-button-primary" href="/contact">Apply for a conversation <span>↗</span></a><a className="apex-text-link" href="#system">Explore our system <span>↓</span></a></div>
        <div className="apex-hero-note"><span/> SELECTIVE PARTNERSHIPS. CREATOR-LED DECISIONS.</div>
      </div>
      <div className="apex-hero-visual"><div className="apex-visual-orbit orbit-one"/><div className="apex-visual-orbit orbit-two"/><div className="apex-monogram"><span>A</span><i/></div><div className="apex-float-card card-strategy"><small>01 / STRATEGY</small><b>Direction before activity</b><span>Position · Focus · Plan</span></div><div className="apex-float-card card-growth"><small>02 / OPERATIONS</small><b>Structure for the work</b><span>Systems · Review · Refine</span></div><div className="apex-hero-visual-caption">APEX / A MORE INTENTIONAL PARTNERSHIP</div></div>
      <div className="apex-hero-index">01 <span>/</span> 04</div>
    </section>
    <div className="apex-proofline"><span>INDEPENDENT BY NATURE</span><i>✳</i><span>CREATOR-LED</span><i>✳</i><span>BUILT ON CLARITY</span><i>✳</i><span>LONG-TERM THINKING</span></div>
    <PlatformVisual/>
    <section className="apex-intro apex-section" id="approach">
      <div className="apex-section-kicker">01 / THE APEX APPROACH</div>
      <div className="apex-intro-grid"><h2>Less noise.<br/><em>More direction.</em></h2><div><p className="apex-lead">A creator business is more than content. It is positioning, audience, monetization and the systems that hold everything together.</p><p>APEX brings those moving parts into one considered plan — shaped around your goals, your working style and the decisions that matter to you.</p><a className="apex-inline-link" href="/contact">See if we are a fit <span>↗</span></a></div></div>
    </section>
    <section className="apex-services apex-section" id="services">
      <div className="apex-section-head"><div><div className="apex-section-kicker">02 / WHAT WE DO</div><h2>One partner.<br/><em>Connected thinking.</em></h2></div><p>Focused support across the areas that can make a meaningful difference to an independent creator business.</p></div>
      <div className="apex-service-grid">{services.map(s=><article className="apex-service-card" key={s.n}><div className="apex-service-meta"><span>{s.n} / 04</span><span>{s.tag}</span></div><div className="apex-service-symbol">{s.n === "01" ? "↗" : s.n === "02" ? "◎" : s.n === "03" ? "◇" : "⌘"}</div><h3>{s.title}</h3><p>{s.copy}</p><ul>{s.points.map(p=><li key={p}>{p}</li>)}</ul><a href="/contact">Discuss this area <span>↗</span></a></article>)}</div>
    </section>
    <section className="apex-system apex-section" id="system">
      <div className="apex-system-copy"><div className="apex-section-kicker">03 / THE APEX SYSTEM</div><h2>Structure that<br/><em>moves with you.</em></h2><p>We begin with context, not assumptions. Together, we identify the highest-value priorities, put a practical plan in motion and review progress with a clear head.</p><a className="apex-button apex-button-outline" href="/contact">How we can work together <span>↗</span></a><small>ILLUSTRATIVE WORKFLOW — NOT PERFORMANCE DATA</small></div>
      <ProcessVisual/>
    </section>
    <section className="apex-principles apex-section" id="about"><div className="apex-section-kicker">04 / WHAT MATTERS TO US</div><div className="apex-manifesto">The best partnerships don't take the spotlight. They help you <em>own it.</em></div><div className="apex-principle-grid">{principles.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <section className="apex-faq apex-section" id="faq"><div className="apex-section-kicker">05 / GOOD TO KNOW</div><div className="apex-faq-grid"><div><h2>Questions,<br/><em>answered.</em></h2><p>A straightforward partnership starts with clear expectations.</p><a className="apex-inline-link" href="/contact">Ask us directly <span>↗</span></a></div><div className="apex-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>
    <section className="apex-closing"><div className="apex-closing-orb"/><div className="apex-section-kicker">06 / START A CONVERSATION</div><h2>Make your next move<br/><em>with intention.</em></h2><p>Tell us where you are and what you want to build. If there is a fit, we will take the next step together.</p><a className="apex-button apex-button-light" href="/contact">Apply for management <span>↗</span></a><div className="apex-closing-foot"><span>APEX CREATOR PARTNERS</span><span>YOUR NEXT LEVEL IS INTENTIONAL.</span></div></section>
    <footer className="apex-footer"><div className="apex-footer-main"><a className="apex-footer-brand" href="/"><b>APEX<span>.</span></b><small>CREATOR PARTNERS</small></a><p>Independent creators.<br/>Intentional growth.</p><nav><a href="#services">Services</a><a href="#system">System</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/imprint">Imprint</a></nav><a className="apex-footer-email" href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com ↗</a></div><div className="apex-footer-bottom"><span>© 2026 APEX Creator Partners</span><span>18+ · Independent by nature. Partners by design.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
