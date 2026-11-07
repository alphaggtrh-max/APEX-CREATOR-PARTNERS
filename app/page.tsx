const services = [
  {
    number: "01",
    title: "Growth strategy",
    description:
      "A clear, individual plan for attracting the right audience, strengthening positioning and building consistent momentum.",
    tags: ["Positioning", "Acquisition", "Planning"],
  },
  {
    number: "02",
    title: "Content & distribution",
    description:
      "Practical content direction and channel planning that help creators show up consistently without losing their own voice.",
    tags: ["Content direction", "Social channels", "Campaigns"],
  },
  {
    number: "03",
    title: "Business operations",
    description:
      "Structured workflows, performance reviews and day-to-day coordination so the business behind the creator can run more clearly.",
    tags: ["Operations", "Analytics", "Optimization"],
  },
];

const principles = [
  ["Creator first", "Your identity, boundaries and decisions stay yours. We work alongside you, not in place of you."],
  ["Clear communication", "Defined responsibilities, regular updates and honest conversations — without inflated promises."],
  ["Measured progress", "We use agreed metrics and consistent reviews to understand what is working and what needs to change."],
];

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <span className="status-dot" />
        INDEPENDENT CREATOR GROWTH & MANAGEMENT
      </div>

      <header className="site-header">
        <a className="wordmark" href="#" aria-label="APEX Creator Partners home">
          <span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span>
          <span className="wordmark-sub">CREATOR PARTNERS</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span /> BUILT AROUND YOUR AMBITION</div>
          <h1>Your next level<br />is <em>intentional.</em></h1>
          <p className="hero-copy">
            Strategic growth and thoughtful management for independent creators building lasting businesses.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Explore a partnership <span>↗</span></a>
            <a className="text-link" href="#services">Discover what we do <span>↓</span></a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            INDEPENDENT BY NATURE. PARTNERS BY DESIGN.
          </div>
        </div>
        <div className="hero-aside growth-visual" aria-hidden="true">
          <svg className="growth-connectors" viewBox="0 0 520 470" fill="none">
            <path className="connector-path" d="M90 112 C165 80 185 95 245 145 S350 190 430 120" />
            <path className="connector-path connector-path-two" d="M90 112 C100 230 160 260 235 285 S340 350 420 365" />
            <path className="connector-path connector-path-three" d="M245 145 C230 220 220 245 235 285" />
            <circle className="connector-node node-one" cx="245" cy="145" r="5" />
            <circle className="connector-node node-two" cx="235" cy="285" r="5" />
            <circle className="connector-node node-three" cx="430" cy="120" r="5" />
          </svg>
          <div className="visual-kicker">THE CREATOR GROWTH SYSTEM <span>AP / 01</span></div>
          <div className="visual-card creator-card">
            <div className="creator-avatar"><span>✳</span></div>
            <div><small>YOUR BRAND</small><strong>Distinctive by design.</strong></div>
            <span className="card-spark">↗</span>
          </div>
          <div className="visual-card strategy-card">
            <div className="mini-icon">✦</div>
            <small>01 / STRATEGY</small>
            <strong>Audience<br />with intention.</strong>
            <div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/></div>
          </div>
          <div className="visual-card content-card">
            <div className="card-row"><small>02 / CONTENT</small><span className="live-dot"/></div>
            <strong>Consistency<br />creates momentum.</strong>
            <svg className="mini-chart" viewBox="0 0 150 42"><path d="M2 32 L20 24 L36 28 L53 12 L69 20 L85 9 L103 18 L120 7 L148 11" /></svg>
          </div>
          <div className="visual-card insight-card">
            <small>03 / PERFORMANCE</small>
            <strong>Review. Learn.<br />Refine.</strong>
            <div className="insight-line"><span/><span/><span/><span/></div>
          </div>
          <div className="visual-stamp"><span>✳</span> BUILT AROUND YOU</div>
          <div className="visual-foot"><span>STRATEGY</span><i>•</i><span>CREATIVITY</span><i>•</i><span>CLARITY</span></div>
        </div>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="ticker" aria-label="Our focus">
        <div className="ticker-track">
          {["CLARITY", "CREATOR-LED", "CONSISTENCY", "MEASURABLE GROWTH", "CLARITY", "CREATOR-LED", "CONSISTENCY", "MEASURABLE GROWTH"].map((item, index) => (
            <span key={index}>{item}<i>✳</i></span>
          ))}
        </div>
      </section>

      <section className="intro section-wrap" id="approach">
        <div className="section-label"><span>01</span> / THE APEX APPROACH</div>
        <div className="intro-layout">
          <h2>Good growth<br />is <em>built.</em></h2>
          <div className="intro-copy">
            <p className="large-copy">Talent creates opportunity. A considered strategy turns it into a business.</p>
            <p>APEX partners with independent creators to bring structure to growth — connecting audience strategy, content direction and business operations in one focused approach.</p>
            <a className="underlined-link" href="#about">Get to know us <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <div className="section-label"><span>02</span> / WHAT WE DO</div>
              <h2>Focus creates<br /><em>momentum.</em></h2>
            </div>
            <p>Flexible support shaped around your goals, your audience and the way you want to work.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="manifesto-shape" aria-hidden="true">A</div>
        <div className="section-wrap manifesto-inner">
          <div className="section-label"><span>03</span> / WHAT WE BELIEVE</div>
          <p className="manifesto-quote">The best partnerships don&apos;t take the spotlight. They help you <em>own it.</em></p>
          <div className="principles">
            {principles.map(([title, description], index) => (
              <div className="principle" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" aria-hidden="true" />
          <div className="section-label"><span>04</span> / START A CONVERSATION</div>
          <div className="contact-content">
            <h2>Have a vision?<br /><em>Let&apos;s build it.</em></h2>
            <p>Tell us where you want to go. We&apos;ll start with an honest conversation about whether we&apos;re the right partner.</p>
            <a className="button button-light" href="mailto:hello@apex-creator-partners.com?subject=Partnership%20enquiry">Start a conversation <span>↗</span></a>
          </div>
          <div className="contact-foot"><span>APEX CREATOR PARTNERS</span><span>LET&apos;S MOVE FORWARD ↗</span></div>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark footer-wordmark" href="#">
          <span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span>
          <span className="wordmark-sub">CREATOR PARTNERS</span>
        </a>
        <p>Independent creators. Intentional growth.</p>
        <div className="footer-bottom">
          <span>© 2026 APEX Creator Partners</span>
          <span>Built around the creator.</span>
          <a href="mailto:hello@apex-creator-partners.com">CONTACT ↗</a>
        </div>
      </footer>
    </main>
  );
}