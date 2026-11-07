import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Services | APEX Creator Partners", description: "Selective growth strategy, audience acquisition, content direction and operational support for independent adult creators aged 18+." };

const items: [string, string, string, string[]][] = [
  ["01", "Growth strategy", "We begin with your current position, audience, offer and goals. Together, we identify the priorities that make sense for your stage.", ["Positioning and differentiation", "Audience and channel research", "Growth priorities and planning"]],
  ["02", "Audience acquisition", "A platform-aware approach to discovery and distribution, built around attracting an audience that is genuinely relevant to your creator business.", ["Organic channel strategy", "Content distribution planning", "Funnel and profile review"]],
  ["03", "Content and monetization", "Build a repeatable content system that protects your creative identity while making your offer and monetization more intentional.", ["Content pillars and planning", "Offer and pricing review", "Retention and monetization ideas"]],
  ["04", "Business operations", "Bring structure to the work behind the scenes with clearer processes, useful reporting and thoughtful operational support.", ["Workflow and process design", "Performance reviews", "Operational coordination"]],
];

export default function ServicesPage() {
  return <main className="inner-page"><SiteHeader/><section className="inner-hero"><div className="section-label"><span>WHAT WE DO</span> / SERVICES</div><h1>Strategy with<br/><em>substance.</em></h1><p>Focused support for independent adult and subscription creators aged 18 and over. No one-size-fits-all packages — scope is agreed around your needs.</p></section><section className="service-detail-list">{items.map(([number,title,description,bullets])=><article className="service-detail" key={number}><span>{number}</span><div><h2>{title}</h2><p>{description}</p><ul>{bullets.map(b=><li key={b}>{b}</li>)}</ul></div><a href="/contact">Discuss ↗</a></article>)}</section><section className="services-end"><h2>Not sure what you need yet?</h2><p>That is a good place to start. Tell us where you are and what you want to change.</p><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a></section><footer className="inner-footer"><a href="/">APEX CREATOR PARTNERS</a><span>© 2026</span><a href="/privacy">PRIVACY</a><a href="/imprint">IMPRINT</a></footer></main>;
}
