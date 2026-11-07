"use client";

import { useState, type CSSProperties } from "react";

const paths = [
  {
    id: "starting",
    label: "I’m just getting started",
    title: "Build the foundations first.",
    copy: "You have a creator idea or a new profile, but you are not sure what to focus on. We can help you shape your positioning, choose realistic channels and create a clear first plan.",
    steps: ["Clarify your creator identity and boundaries", "Choose the platforms that fit your audience", "Create a manageable content and promotion routine"],
    note: "A good fit if you want direction before doing more.",
  },
  {
    id: "active",
    label: "I’m already creating",
    title: "Turn scattered effort into a system.",
    copy: "You are posting and building an audience, but growth feels inconsistent or the business side takes too much time. We look at what is working and where to focus next.",
    steps: ["Review your profiles and audience journey", "Improve content planning and distribution", "Set up a simple rhythm for reviewing progress"],
    note: "A good fit if you want more structure and consistency.",
  },
  {
    id: "scaling",
    label: "I want to grow further",
    title: "Make the next stage more intentional.",
    copy: "You have traction and want to develop the business without losing control of your brand. We can help coordinate strategy, operations and monetization priorities.",
    steps: ["Identify the strongest growth opportunities", "Improve the path from discovery to subscription", "Build repeatable workflows around your goals"],
    note: "A good fit if you want a thoughtful partner as you scale.",
  },
];

const channels = [
  { name: "OnlyFans", role: "Subscriptions", mark: "OF", style: "onlyfans" },
  { name: "Instagram", role: "Discovery", mark: "◎", style: "instagram" },
  { name: "TikTok", role: "Short-form reach", mark: "♪", style: "tiktok" },
  { name: "Reddit", role: "Communities", mark: "r/", style: "reddit" },
  { name: "Fansly", role: "Subscriptions", mark: "F", style: "fansly" },
];

export default function CreatorPathway() {
  const [selected, setSelected] = useState("active");
  const current = paths.find((path) => path.id === selected) ?? paths[1];

  return (
    <section className="creator-pathway" aria-labelledby="creator-pathway-title">
      <div className="creator-pathway-heading">
        <div>
          <div className="apex-section-kicker">MADE FOR THE CREATOR BUSINESS</div>
          <h2 id="creator-pathway-title">Wherever you are,<br/><em>start from here.</em></h2>
        </div>
        <p>You do not need to know agency language or arrive with a perfect plan. Choose the description that sounds most like you.</p>
      </div>

      <div className="creator-pathway-layout">
        <div className="creator-pathway-picker" role="tablist" aria-label="Your creator stage">
          {paths.map((path, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={selected === path.id}
              aria-controls="creator-pathway-detail"
              className={selected === path.id ? "creator-stage is-active" : "creator-stage"}
              key={path.id}
              onClick={() => setSelected(path.id)}
            >
              <span className="creator-stage-number">0{index + 1}</span>
              <span>{path.label}</span>
              <b aria-hidden="true">↗</b>
            </button>
          ))}
          <div className="creator-pathway-footnote">18+ ONLY · INDEPENDENT CREATORS</div>
        </div>

        <article className="creator-pathway-detail" id="creator-pathway-detail" role="tabpanel">
          <div className="creator-detail-top"><span>YOUR NEXT CHAPTER</span><span>APEX / {String(paths.findIndex((p) => p.id === selected) + 1).padStart(2, "0")}</span></div>
          <h3>{current.title}</h3>
          <p>{current.copy}</p>
          <ul>{current.steps.map((step) => <li key={step}><span>✓</span>{step}</li>)}</ul>
          <div className="creator-detail-bottom"><span>{current.note}</span><a href="/contact">Talk it through <b>↗</b></a></div>
        </article>
      </div>

      <div className="platform-ecosystem">
        <div className="platform-ecosystem-copy">
          <span className="apex-section-kicker">YOUR PLATFORMS, WORKING TOGETHER</span>
          <h3>One creator brand.<br/><em>Different roles.</em></h3>
          <p>Discovery channels help new people find you. Subscription platforms help you build direct relationships with paying fans. Your mix should fit your audience and personal boundaries.</p>
          <small>Illustrative platform ecosystem. APEX is independent and not affiliated with these platforms.</small>
        </div>
        <div className="platform-orbit" aria-label="Animated illustration of creator platforms">
          <div className="platform-orbit-ring ring-outer"/>
          <div className="platform-orbit-ring ring-inner"/>
          <div className="platform-orbit-core"><span>A</span><small>YOUR BRAND</small></div>
          {channels.map((channel, index) => (
            <div className={`platform-orbit-item platform-${channel.style}`} key={channel.name} style={{ "--item": index } as CSSProperties}>
              <span className="platform-mark">{channel.mark}</span>
              <span className="platform-name">{channel.name}<small>{channel.role}</small></span>
            </div>
          ))}
          <span className="platform-orbit-caption">DISCOVERY ↔ SUBSCRIPTION</span>
        </div>
      </div>
    </section>
  );
}
