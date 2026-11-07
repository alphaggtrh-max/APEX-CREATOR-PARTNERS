import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | APEX Creator Partners",
  description: "Understand how APEX can support your adult creator business, from getting started to building a more consistent operation.",
};

const items = [
  {
    number: "01",
    title: "Find your direction",
    plain: "Not sure what to post, where to promote or what to focus on first?",
    description: "We look at your goals, creator identity, audience and current setup. Then we help you choose a few priorities instead of trying every trend at once.",
    examples: ["Clarify your niche and positioning", "Choose channels that suit your audience", "Build a realistic first growth plan"],
    symbol: "↗",
  },
  {
    number: "02",
    title: "Help more people discover you",
    plain: "You want the right audience to find your profiles and understand what you offer.",
    description: "We help connect your social presence, communities and subscription profiles into a clearer journey for potential fans.",
    examples: ["Social platform strategy", "Content distribution planning", "Profile and discovery-path review"],
    symbol: "◎",
  },
  {
    number: "03",
    title: "Make content work harder",
    plain: "You want a content routine that feels manageable and supports your business.",
    description: "We can help you plan content themes, review your offer and think through ways to build stronger subscriber relationships.",
    examples: ["Content themes and planning", "Subscription offer review", "Retention and monetization ideas"],
    symbol: "♡",
  },
  {
    number: "04",
    title: "Get the business organised",
    plain: "The admin, planning and day-to-day tasks are taking too much of your time.",
    description: "We work with you to make the operational side clearer, so you can see what needs attention and what can be simplified.",
    examples: ["Workflow and process setup", "Regular performance check-ins", "Operational coordination"],
    symbol: "⌘",
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <SiteHeader/>
      <section className="services-hero">
        <div className="section-label"><span>HOW WE CAN HELP</span> / SERVICES</div>
        <h1>Support that makes<br/><em>creator life clearer.</em></h1>
        <p>Running a creator business can mean doing everything yourself. APEX offers practical support across growth, content and the work behind the scenes — shaped around where you are right now.</p>
        <div className="services-hero-note"><span/> NO ONE-SIZE-FITS-ALL PACKAGES. WE START WITH YOUR GOALS.</div>
      </section>
      <section className="services-explainer">
        <div className="services-explainer-icon">A</div>
        <div><strong>You do not need to know exactly what you need.</strong><p>Choose the area that sounds familiar. We can talk through the details together and explain what support could realistically look like.</p></div>
        <a href="/contact">Tell us about your goals <b>↗</b></a>
      </section>
      <section className="service-detail-list">
        {items.map((item) => (
          <article className="service-detail" key={item.number}>
            <div className="service-detail-icon">{item.symbol}</div>
            <div className="service-detail-content">
              <span className="service-detail-number">{item.number} / WHAT WE DO</span>
              <h2>{item.title}</h2>
              <strong>{item.plain}</strong>
              <p>{item.description}</p>
              <ul>{item.examples.map((example) => <li key={example}>{example}</li>)}</ul>
            </div>
            <a className="service-detail-link" href="/contact">Discuss this <b>↗</b></a>
          </article>
        ))}
      </section>
      <section className="services-end">
        <div className="section-label">NOT SURE WHERE TO START?</div>
        <h2>That’s exactly what<br/><em>the first conversation is for.</em></h2>
        <p>Tell us a little about your creator business. No pressure to commit and no need to prepare a presentation.</p>
        <a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a>
      </section>
      <footer className="inner-footer"><a href="/">APEX CREATOR PARTNERS</a><span>© 2026</span><a href="/privacy">PRIVACY</a><a href="/imprint">IMPRINT</a></footer>
    </main>
  );
}
