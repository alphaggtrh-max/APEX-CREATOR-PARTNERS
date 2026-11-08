"use client";

import { useState } from "react";
import { FanslyLogo, InstagramLogo, OnlyFansLogo, RedditLogo, TikTokLogo, XLogo } from "./BrandLogos";

const paths = [
  { id: "starting", label: "I’m just getting started", title: "Build the foundations first.", copy: "You have a creator idea or a new profile, but you are not sure what to focus on. We can help shape your positioning, choose realistic channels and create a clear first plan.", steps: ["Clarify your creator identity and boundaries", "Choose platforms that fit your audience", "Create a manageable content and promotion routine"], note: "For creators who want direction before doing more." },
  { id: "active", label: "I’m already creating", title: "Turn scattered effort into a system.", copy: "You are posting and building an audience, but growth feels inconsistent or the business side takes too much time. We look at what is working and where to focus next.", steps: ["Review your profiles and audience journey", "Improve content planning and distribution", "Set a simple rhythm for reviewing progress"], note: "For creators who want more structure and consistency." },
  { id: "scaling", label: "I want to grow further", title: "Make the next stage intentional.", copy: "You have traction and want to develop the business without losing control of your brand. We can help coordinate strategy, operations and monetization priorities.", steps: ["Identify the strongest growth opportunities", "Improve the path from discovery to subscription", "Build repeatable workflows around your goals"], note: "For creators ready to develop the business further." },
];

const channels = [
  { name: "OnlyFans", role: "Subscription platform", Logo: OnlyFansLogo },
  { name: "Instagram", role: "Brand discovery", Logo: InstagramLogo },
  { name: "TikTok", role: "Short-form reach", Logo: TikTokLogo },
  { name: "X", role: "Promotion & community", Logo: XLogo },
  { name: "Reddit", role: "Niche communities", Logo: RedditLogo },
  { name: "Fansly", role: "Subscription platform", Logo: FanslyLogo },
];

export default function CreatorPathway() {
  const [selected, setSelected] = useState("active");
  const current = paths.find((path) => path.id === selected) ?? paths[1];

  return (
    <section className="creator-pathway apex-pathway-editorial" aria-labelledby="creator-pathway-title">
      <div className="creator-pathway-heading">
        <div><div className="apex-section-kicker">A PARTNERSHIP THAT MEETS YOU WHERE YOU ARE</div><h2 id="creator-pathway-title">Your stage.<br/><em>Your strategy.</em></h2></div>
        <p>Whether you are building your first audience or refining an established business, the starting point should reflect where you are today.</p>
      </div>
      <div className="creator-pathway-layout">
        <div className="creator-pathway-picker" role="tablist" aria-label="Your creator stage">
          {paths.map((path, index) => <button type="button" role="tab" aria-selected={selected === path.id} aria-controls="creator-pathway-detail" className={selected === path.id ? "creator-stage is-active" : "creator-stage"} key={path.id} onClick={() => setSelected(path.id)}><span className="creator-stage-number">0{index + 1}</span><span>{path.label}</span><b aria-hidden="true">↗</b></button>)}
          <div className="creator-pathway-footnote">PRIVATE CONVERSATIONS · 18+ ONLY</div>
        </div>
        <article className="creator-pathway-detail" id="creator-pathway-detail" role="tabpanel">
          <div className="creator-detail-top"><span>A PLACE TO START</span><span>APEX / {String(paths.findIndex((p) => p.id === selected) + 1).padStart(2, "0")}</span></div>
          <h3>{current.title}</h3><p>{current.copy}</p>
          <ul>{current.steps.map((step) => <li key={step}><span>✓</span>{step}</li>)}</ul>
          <div className="creator-detail-bottom"><span>{current.note}</span><a href="/contact">Talk it through <b>↗</b></a></div>
        </article>
      </div>
      <div className="apex-channel-strip">
        <div className="apex-channel-intro"><span className="apex-section-kicker">THE CREATOR ECOSYSTEM</span><h3>Different platforms.<br/><em>One connected brand.</em></h3><p>We consider how discovery, community and subscription channels can support one another — without treating every platform the same.</p></div>
        <div className="apex-channel-list">{channels.map(({name,role,Logo})=><div className="apex-channel-item" key={name}><span className="apex-channel-logo"><Logo/></span><span><b>{name}</b><small>{role}</small></span><i>↗</i></div>)}</div>
      </div>
      <p className="apex-platform-disclaimer">Platform names and logos belong to their respective owners. APEX is independent and not affiliated with these platforms.</p>
    </section>
  );
}
