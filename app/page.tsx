const services = [
  { number: "01", title: "Growth strategy", text: "Positioning, audience research and a practical growth plan built around your goals.", items: ["Positioning & offer", "Audience development", "Channel priorities"], icon: "↗" },
  { number: "02", title: "Content direction", text: "A repeatable content system that protects your voice while making publishing more consistent.", items: ["Content planning", "Creative direction", "Distribution workflow"], icon: "◫" },
  { number: "03", title: "Business operations", text: "Clear processes, thoughtful reporting and the structure to make better decisions.", items: ["Workflow design", "Performance reviews", "Operational support"], icon: "⌁" },
];

const principles = [
  ["Your voice stays yours", "Your identity, boundaries and decisions remain central. We provide structure and support; you stay in control."],
  ["No inflated promises", "We agree on responsibilities, review meaningful signals and communicate clearly about what is and is not working."],
  ["Built around the individual", "There is no one-size-fits-all playbook. The scope is shaped around your audience, goals and working style."],
];

function GrowthDiagram() {
  return (
    <div className="strategy-visual" aria-label="Illustration of a creator growth workflow">
      <div className="diagram-heading"><span>THE WORK, CONNECTED</span><span>AP / 01</span></div>
      <svg className="diagram-lines" viewBox="0 0 620 430" fill="none" aria-hidden="true">
        <path d="M150 125 C235 125 235 210 310 210 S400 115 490 115" />
        <path d="M310 210 C310 290 390 315 475 315" />
        <path d="M150 125 C120 220 170 315 245 315" />
        <circle cx="310" cy="210" r="5"/><circle cx="490" cy="115" r="5"/><circle cx="475" cy="315" r="5"/>
      </svg>
      <div className="diagram-card diagram-position"><span className="diagram-icon">01</span><small>POSITIONING</small><strong>Know what<br/>makes you distinct.</strong><span className="diagram-caption">Clarity before activity</span></div>
      <div className="diagram-card diagram-audience"><span className="diagram-icon">02</span><small>AUDIENCE</small><strong>Reach the right<br/>people.</strong><span className="diagram-caption">Intentional discovery</span></div>
      <div className="diagram-card diagram-content"><span className="diagram-icon">03</span><small>CONTENT</small><strong>Build a repeatable<br/>publishing rhythm.</strong><span className="diagram-caption">Creative consistency</span></div>
      <div className="diagram-card diagram-review"><span className="diagram-icon">04</span><small>REVIEW</small><strong>Learn, adapt<br/>and improve.</strong><span className="diagram-caption">Decisions with context</span></div>
      <div className="diagram-note"><span className="note-dot"/> A framework, not a fixed formula</div>
    </div>
  );
}

function SignalChart() {
  return (
    <div className="signal-panel">
      <div className="signal-top"><div><span className="eyebrow-small">A BETTER WAY TO WORK</span><h3>Make the moving parts visible.</h3></div><span className="signal-mark">APEX / INSIGHT</span></div>
      <div className="signal-chart">
        <div className="chart-y-labels"><span>PLAN</span><span>CREATE</span><span>REVIEW</span></div>
        <svg viewBox="0 0 600 180" role="img" aria-label="Illustrative workflow curve connecting planning, creation and review">
          <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e88973" stopOpacity=".22"/><stop offset="100%" stopColor="#e88973" stopOpacity="0"/></linearGradient></defs>
          <path d="M10 138 C85 135 90 90 160 98 S250 145 310 95 S405 48 455 65 S535 40 590 18 L590 170 L10 170Z" fill="url(#area)"/>
          <path d="M10 138 C85 135 90 90 160 98 S250 145 310 95 S405 48 455 65 S535 40 590 18" stroke="#d87963" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="900" className="chart-draw"/>
          {[10,160,310,455,590].map((x,i)=><circle key={x} cx={x} cy={[138,98,95,65,18][i]} r="5" fill="#fffaf5" stroke="#d87963" strokeWidth="2"/>)}
        </svg>
      </div>
      <div className="signal-legend"><span><i className="legend-dot coral"/> Plan with purpose</span><span><i className="legend-dot sage"/> Learn from signals</span><small>Illustrative process graphic — not performance data</small></div>
    </div>
  );
}

import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <main id="top">
      <div className="topline"><span>INDEPENDENT CREATOR PARTNERSHIP</span><span>STRATEGY · CONTENT · OPERATIONS</span></div>
      <SiteHeader/>

      <section className="hero">
        <div className="hero-copy-block">
          <div className="eyebrow"><span/> A MORE CONSIDERED WAY TO GROW</div>
          <h1>Build your<br/>next chapter<br/><em>with intention.</em></h1>
          <p>Independent creator management with a clear point of view: thoughtful strategy, consistent execution and a business that works around you.</p>
          <div className="hero-actions"><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a><a className="quiet-link" href="#services">Explore our approach <span>↓</span></a></div>
          <div className="hero-footnote"><span className="footnote-rule"/> BUILT AROUND THE CREATOR. NEVER THE OTHER WAY AROUND.</div>
        </div>
        <div className="hero-art"><GrowthDiagram/></div>
        <div className="hero-bottomline"><span>INDEPENDENT · CREATOR-LED</span><span>01 / APEX CREATOR PARTNERS</span></div>
      </section>

      <section className="trust-strip"><span>ONE PARTNER</span><i>✳</i><span>CONNECTED THINKING</span><i>✳</i><span>MEANINGFUL PROGRESS</span><i>✳</i><span>CREATOR-LED</span></section>

      <section className="approach section-wrap" id="approach">
        <div className="section-label"><span>01</span> / THE APEX APPROACH</div>
        <div className="approach-grid"><h2>Good work<br/>starts with<br/><em>good questions.</em></h2><div className="approach-copy"><p className="lead">Growth is rarely one big move. It is a series of thoughtful decisions, made consistently.</p><p>We bring the strategic and operational pieces together — so your positioning, content and day-to-day business are working toward the same goals.</p><a className="text-arrow" href="/contact">See if we are a fit <span>↗</span></a></div></div>
        <div className="editorial-images">
          <div className="editorial-photo photo-one"><img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85" alt="Creative team collaborating around a table"/><span>01 / COLLABORATION</span></div>
          <div className="editorial-photo photo-two"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85" alt="Team planning a strategy on a whiteboard"/><span>02 / CLEAR DIRECTION</span></div>
          <div className="editorial-caption"><span>THE RIGHT STRUCTURE<br/>MAKES ROOM FOR CREATIVITY.</span><span>NOT MORE NOISE.<br/>MORE INTENTION.</span></div>
        </div>
      </section>

      <section className="services-section" id="services"><div className="section-wrap">
        <div className="section-heading"><div><div className="section-label"><span>02</span> / WHAT WE DO</div><h2>One connected<br/><em>growth partner.</em></h2></div><p>Focused support across the parts of your creator business that benefit from a clearer plan and stronger execution.</p></div>
        <div className="service-grid">{services.map((service)=><article className="service-card" key={service.number}><div className="service-card-top"><span>{service.number} / 03</span><span className="service-icon">{service.icon}</span></div><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul><a href="/contact" aria-label={`Discuss ${service.title}`} className="service-link">Discuss this service <span>↗</span></a></article>)}</div>
      </div></section>

      <section className="insight-section section-wrap"><div className="insight-intro"><div className="section-label"><span>03</span> / HOW WE THINK</div><h2>Less guesswork.<br/><em>More perspective.</em></h2><p>We help turn activity into learning. The goal is not a dashboard full of vanity metrics — it is a clearer view of what deserves your attention next.</p></div><SignalChart/></section>

      <section className="about-section" id="about"><div className="section-wrap"><div className="section-label"><span>04</span> / WHAT MATTERS TO US</div><p className="manifesto-quote">The best partnerships don't take the spotlight. They help you <em>own it.</em></p><div className="principles">{principles.map(([title,description],i)=><article className="principle" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="closing-cta"><div className="closing-orb"/><div className="section-label"><span>05</span> / START A CONVERSATION</div><div className="closing-inner"><h2>Ready for a more<br/><em>intentional next step?</em></h2><p>Tell us a little about your goals. We will take it from there — with a straightforward conversation and no pressure.</p><a className="button button-dark" href="/contact">Tell us about your project <span>↗</span></a></div><div className="closing-meta"><span>APEX CREATOR PARTNERS</span><span>YOUR NEXT CHAPTER STARTS WITH A CONVERSATION.</span></div></section>

      <footer className="footer"><div className="footer-main"><a className="wordmark" href="/"><span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span><span className="wordmark-sub">CREATOR PARTNERS</span></a><p>Independent creators.<br/>Intentional growth.</p><div className="footer-links"><a href="/services">Services</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/imprint">Imprint</a></div><a className="footer-email" href="mailto:hello@apex-creator-partners.com">hello@apex-creator-partners.com ↗</a></div><div className="footer-bottom"><span>© 2026 APEX Creator Partners</span><span>Independent by nature. Partners by design.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
