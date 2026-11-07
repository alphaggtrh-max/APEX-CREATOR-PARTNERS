import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = { title: "Services | APEX Creator Partners", description: "Creator growth strategy, content direction and business operations." };

const items: [string, string, string, string[]][] = [
  ["01", "Growth strategy", "Build from a clear position. We look at your current presence, audience, offer and goals, then define priorities that make sense for your stage.", ["Positioning and differentiation", "Audience and channel research", "Growth priorities and planning"]],
  ["02", "Content direction", "Create a repeatable system for showing up consistently. Keep your voice and creative identity while bringing more intention to planning and distribution.", ["Content pillars and planning", "Creative direction", "Publishing and distribution workflows"]],
  ["03", "Business operations", "Make the business behind the creator easier to run. Bring structure to recurring work, review useful signals and make decisions with context.", ["Workflow and process design", "Performance reviews", "Operational coordination"]],
];
export default function ServicesPage() {
  return <main className="inner-page"><SiteHeader/><section className="inner-hero"><div className="section-label"><span>WHAT WE DO</span> / SERVICES</div><h1>Strategy with<br/><em>substance.</em></h1><p>Focused support across the areas that help an independent creator business move forward with clarity.</p></section><section className="service-detail-list">{items.map(([number,title,description,bullets])=><article className="service-detail" key={number}><span>{number}</span><div><h2>{title}</h2><p>{description}</p><ul>{(bullets as string[]).map(b=><li key={b}>{b}</li>)}</ul></div><a href="/contact">Discuss ↗</a></article>)}</section><section className="services-end"><h2>Not sure what you need yet?</h2><p>That is a good place to start. Tell us where you are and what you want to change.</p><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a></section><footer className="inner-footer"><a href="/">APEX CREATOR PARTNERS</a><span>© 2026</span><a href="/privacy">PRIVACY</a><a href="/imprint">IMPRINT</a></footer></main>;
}
