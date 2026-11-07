import SiteHeader from "./components/SiteHeader";
import CreatorPathway from "./components/CreatorPathway";

const services = [
  { n: "01", title: "Growth strategy", tag: "DIRECTION", copy: "Understand your current position, choose realistic priorities and stop wasting energy on tactics that do not fit your brand.", points: ["Creator positioning", "Audience and channel research", "A practical growth plan"] },
  { n: "02", title: "Audience growth", tag: "DISCOVERY", copy: "Help the right people discover your work through a consistent approach to social platforms and communities.", points: ["Platform strategy", "Content distribution", "Profile and funnel review"] },
  { n: "03", title: "Content & income", tag: "MONETIZATION", copy: "Build a repeatable content routine and make your subscription offer easier for fans to understand.", points: ["Content planning", "Offer and pricing review", "Retention ideas"] },
  { n: "04", title: "Business support", tag: "OPERATIONS", copy: "Spend less time juggling the admin behind your creator business and more time making decisions that matter.", points: ["Workflow setup", "Performance check-ins", "Operational coordination"] },
];

const principles = [
  ["Your business stays yours", "You keep ownership of your accounts, content, identity and payouts. Any access and responsibilities are agreed with you in writing."],
  ["No confusing promises", "We do not promise a specific income or follower count. We explain what we can do, what we need from you and how we will review progress."],
  ["A real working relationship", "You can ask questions, set boundaries and understand what is happening. We work with you, not behind your back."],
];

const faqs = [
  ["Do I need to be an established creator?", "No. We can speak with creators who are starting out as well as those who already have an audience. We will be honest about whether we can help at your current stage."],
  ["Do I need to share my passwords?", "No passwords should be sent through the website or email. Account access, if ever needed, must be discussed separately and handled securely with clear written permission."],
  ["Do I keep my account and earnings?", "Yes. Your creator accounts and payouts remain under your control. Any agreed service fees and responsibilities should be clear in a written agreement before work begins."],
  ["Do you guarantee more subscribers or income?", "No. Growth depends on many factors and cannot be guaranteed. We focus on a clear plan, consistent execution and honest review."],
  ["What happens after I contact you?", "You send a short enquiry, we review it and reply by email. If it looks like a possible fit, we arrange an introductory call to understand your goals and explain how we work."],
  ["Is this only for adult creators?", "APEX works with independent adult and subscription-based creators aged 18 or older. We do not work with anyone under 18."],
];

export default function Home() {
  return <main id="top" className="apex-site">
    <div className="apex-topline"><span>INDEPENDENT CREATOR MANAGEMENT</span><span>GROWTH · CONTENT · BUSINESS SUPPORT</span><span>18+ ONLY</span></div>
    <SiteHeader/>
    <section className="apex-hero">
      <div className="apex-hero-copy">
        <div className="apex-eyebrow"><i/> CREATOR MANAGEMENT, WITHOUT THE GUESSWORK</div>
        <h1>Your creator business.<br/><em>With a plan behind it.</em></h1>
        <p>Practical growth and business support for adult creators. Understand your options, build a stronger audience and bring more structure to the work behind your content.</p>
        <div className="apex-hero-actions"><a className="apex-button apex-button-primary" href="/contact">Let’s talk about your goals <span>↗</span></a><a className="apex-text-link" href="#creator-pathway">Find your starting point <span>↓</span></a></div>
        <div className="apex-hero-note"><span/> YOU KEEP CONTROL OF YOUR BRAND, ACCOUNTS AND BOUNDARIES.</div>
      </div>
      <div className="apex-hero-visual apex-hero-creator-art" aria-label="Abstract animated creator brand illustration">
        <div className="creator-art-glow"/>
        <div className="creator-art-ring art-ring-one"/>
        <div className="creator-art-ring art-ring-two"/>
        <div className="creator-art-ring art-ring-three"/>
        <div className="creator-art-center"><span>A</span><small>APEX CREATOR PARTNERS</small></div>
        <div className="creator-art-orbit orbit-top"><span className="creator-art-icon fan-mark">✳</span><b>CREATOR BRAND</b></div>
        <div className="creator-art-orbit orbit-right"><span className="creator-art-icon">◎</span><b>DISCOVERY</b></div>
        <div className="creator-art-orbit orbit-bottom"><span className="creator-art-icon">♡</span><b>COMMUNITY</b></div>
        <div className="creator-art-orbit orbit-left"><span className="creator-art-icon">✦</span><b>SUBSCRIPTIONS</b></div>
        <div className="creator-art-spark spark-one">✦</div><div className="creator-art-spark spark-two">✧</div><div className="creator-art-spark spark-three">✳</div>
        <div className="creator-art-caption">A CREATOR BUSINESS IS MORE THAN A PROFILE</div>
      </div>
      <div className="apex-hero-index">01 <span>/</span> 04</div>
    </section>

    <div className="apex-proofline"><span>CREATOR-LED</span><i>✳</i><span>18+ ONLY</span><i>✳</i><span>NO REVENUE GUARANTEES</span><i>✳</i><span>YOUR ACCOUNTS STAY YOURS</span></div>

    <div id="creator-pathway"><CreatorPathway/></div>

    <section className="apex-intro apex-section" id="approach">
      <div className="apex-section-kicker">01 / A DIFFERENT KIND OF MANAGEMENT</div>
      <div className="apex-intro-grid"><h2>Less guessing.<br/><em>More clarity.</em></h2><div><p className="apex-lead">Being a creator means doing several jobs at once: making content, finding an audience, looking after subscribers and running a business.</p><p>APEX helps bring those pieces together. We explain the options in plain language, agree priorities with you and focus on the parts of your business where support can make a difference.</p><a className="apex-inline-link" href="/contact">See if we could work together <span>↗</span></a></div></div>
    </section>

    <section className="apex-services apex-section" id="services">
      <div className="apex-section-head"><div><div className="apex-section-kicker">02 / HOW WE CAN HELP</div><h2>Support for the<br/><em>whole business.</em></h2></div><p>You do not have to figure everything out alone. These are the areas we can discuss and shape around your needs.</p></div>
      <div className="apex-service-grid">{services.map(s=><article className="apex-service-card" key={s.n}><div className="apex-service-meta"><span>{s.n} / 04</span><span>{s.tag}</span></div><div className="apex-service-symbol">{s.n === "01" ? "↗" : s.n === "02" ? "◎" : s.n === "03" ? "♡" : "⌘"}</div><h3>{s.title}</h3><p>{s.copy}</p><ul>{s.points.map(p=><li key={p}>{p}</li>)}</ul><a href="/contact">Ask about this <span>↗</span></a></article>)}</div>
    </section>

    <section className="apex-system apex-section" id="system">
      <div className="apex-system-copy"><div className="apex-section-kicker">03 / WHAT WORKING TOGETHER LOOKS LIKE</div><h2>Simple steps.<br/><em>No surprises.</em></h2><p>First, we listen. Then we agree on what matters, decide who is responsible for what and review progress together. You always know what is happening and why.</p><a className="apex-button apex-button-outline" href="/contact">See if we are a fit <span>↗</span></a><small>EVERY PARTNERSHIP STARTS WITH A CONVERSATION.</small></div>
      <div className="apex-process-visual" aria-label="Four steps in the APEX working process">
        <div className="apex-visual-top"><span>YOUR CREATOR BUSINESS</span><span>THE FIRST FOUR STEPS</span></div>
        <div className="apex-process-line"><i/><i/><i/><i/></div>
        <div className="apex-process-grid">
          {[["01","Get to know you","Your goals, content and boundaries"],["02","Make a plan","Clear priorities and responsibilities"],["03","Work together","Practical support and agreed actions"],["04","Review & adjust","Talk through what is working"]].map(([n,t,d])=><div className="apex-process-card" key={n}><span>{n}</span><b>{t}</b><small>{d}</small><i>↗</i></div>)}
        </div>
        <div className="apex-visual-bottom"><span><i/> CLEAR COMMUNICATION</span><span>NO LOCK-IN PROMISES</span></div>
      </div>
    </section>

    <section className="apex-principles apex-section" id="about"><div className="apex-section-kicker">04 / YOUR CONTROL COMES FIRST</div><div className="apex-manifesto">Your content. Your identity. Your decisions. We are here to help you <em>build with confidence.</em></div><div className="apex-principle-grid">{principles.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="apex-faq apex-section" id="faq"><div className="apex-section-kicker">05 / QUESTIONS FROM CREATORS</div><div className="apex-faq-grid"><div><h2>Good to know,<br/><em>before you start.</em></h2><p>New to working with an agency? Here are straightforward answers to common questions.</p><a className="apex-inline-link" href="/contact">Ask us anything <span>↗</span></a></div><div className="apex-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

    <section className="apex-closing"><div className="apex-closing-orb"/><div className="apex-section-kicker">06 / YOUR NEXT STEP</div><h2>You bring the ambition.<br/><em>We’ll bring a plan.</em></h2><p>Tell us a little about your creator business and what you would like to change. We will take it from there, one conversation at a time.</p><a className="apex-button apex-button-light" href="/contact">Start a conversation <span>↗</span></a><div className="apex-closing-foot"><span>APEX CREATOR PARTNERS</span><span>YOUR NEXT LEVEL IS INTENTIONAL.</span></div></section>

    <footer className="apex-footer"><div className="apex-footer-main"><a className="apex-footer-brand" href="/"><b>APEX<span>.</span></b><small>CREATOR PARTNERS</small></a><p>Independent creators.<br/>A clearer way forward.</p><nav><a href="#services">Services</a><a href="#system">How it works</a><a href="#about">Our approach</a><a href="#faq">FAQ</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/imprint">Imprint</a></nav><a className="apex-footer-email" href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com ↗</a></div><div className="apex-footer-bottom"><span>© 2026 APEX Creator Partners</span><span>18+ · Independent creator management</span><a href="#top">BACK TO TOP ↑</a></div></footer>
  </main>;
}
