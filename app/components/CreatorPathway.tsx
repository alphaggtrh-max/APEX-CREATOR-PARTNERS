"use client";

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { ApexLogo, FanslyLogo, InstagramLogo, OnlyFansLogo, RedditLogo, TikTokLogo, XLogo } from "./BrandLogos";

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
  { name: "OnlyFans", role: "Subscriptions", Logo: OnlyFansLogo, color: "#00AFF0", detail: "Your core paid platform. We help shape the offer, pricing tiers and messaging rhythm that turn new fans into loyal subscribers." },
  { name: "Instagram", role: "Discovery", Logo: InstagramLogo, color: "#E1306C", detail: "Brand-safe discovery. Reels, stories and a strong profile introduce your personality to new audiences." },
  { name: "TikTok", role: "Short-form reach", Logo: TikTokLogo, color: "#25F4EE", detail: "Fast, high-volume reach. Trend-aware short clips that build awareness and push curious viewers toward your link." },
  { name: "X", role: "Promotion", Logo: XLogo, color: "#ffffff", detail: "Direct promotion and daily engagement. Teasers, drops and conversations keep your audience warm." },
  { name: "Reddit", role: "Communities", Logo: RedditLogo, color: "#FF4500", detail: "Niche communities where the right people already gather. Consistent, rule-aware posting builds steady traffic." },
  { name: "Fansly", role: "Subscriptions", Logo: FanslyLogo, color: "#2CB7FF", detail: "A second subscription home. Diversify income and reach fans who prefer a different platform experience." },
];

export default function CreatorPathway() {
  const [selected, setSelected] = useState("active");
  const current = paths.find((path) => path.id === selected) ?? paths[1];
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [pinned, setPinned] = useState(false);
  const orbitRef = useRef<HTMLDivElement>(null);
  const active = channels[activeIndex];
  const paused = hovering || pinned;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActiveIndex((i) => (i + 1) % channels.length), 3200);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (!pinned) return;
    const timer = window.setTimeout(() => setPinned(false), 9000);
    return () => window.clearTimeout(timer);
  }, [pinned, activeIndex]);

  function choose(index: number) {
    setActiveIndex(index);
    setPinned(true);
  }

  function handleTilt(event: MouseEvent<HTMLDivElement>) {
    const el = orbitRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--tx", ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    el.style.setProperty("--ty", ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  }

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
          <h3>One creator brand.<br/><em>Every channel in sync.</em></h3>
          <p>Discovery channels help new people find you. Subscription platforms help you build direct relationships with paying fans. Tap a platform to see the role it plays.</p>
          <div className="platform-spotlight" key={active.name} style={{ "--brand": active.color } as CSSProperties} aria-live="polite">
            <span className="platform-spotlight-logo"><active.Logo/></span>
            <div>
              <b>{active.name}<small>{active.role}</small></b>
              <p>{active.detail}</p>
            </div>
          </div>
          <div className="platform-dots" role="tablist" aria-label="Choose a platform">
            {channels.map((channel, index) => (
              <button type="button" role="tab" aria-selected={index === activeIndex} aria-label={channel.name} key={channel.name} className={index === activeIndex ? "is-active" : ""} onClick={() => choose(index)} />
            ))}
          </div>
          <small>Platform names and logos belong to their respective owners. APEX is independent and not affiliated with these platforms.</small>
        </div>
        <div
          className={"platform-orbit" + (paused ? " is-paused" : "")}
          ref={orbitRef}
          onMouseMove={handleTilt}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => { setHovering(false); orbitRef.current?.style.setProperty("--tx", "0"); orbitRef.current?.style.setProperty("--ty", "0"); }}
          aria-label="Interactive illustration of creator platforms orbiting the APEX brand"
        >
          <div className="platform-orbit-stage">
            <div className="platform-orbit-ring ring-outer"/>
            <div className="platform-orbit-ring ring-inner"/>
            <div className="platform-orbit-ring ring-glow"/>
            <div className="platform-orbit-track">
              {channels.map((channel, index) => (
                <div className={"platform-orbit-arm" + (index === activeIndex ? " is-active" : "")} key={channel.name} style={{ "--angle": `${(360 / channels.length) * index - 90}deg`, "--brand": channel.color, "--i": index } as CSSProperties}>
                  <span className="platform-orbit-beam"/>
                  <div className="platform-orbit-item">
                    <button type="button" className="platform-orbit-chip" onClick={() => choose(index)} onFocus={() => choose(index)} aria-pressed={index === activeIndex}>
                      <span className="platform-mark"><channel.Logo/></span>
                      <span className="platform-name">{channel.name}<small>{channel.role}</small></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="platform-orbit-core">
              <span className="core-pulse"/><span className="core-pulse core-pulse-2"/>
              <ApexLogo className="core-logo"/>
              <small>APEX</small>
            </div>
          </div>
          <span className="platform-orbit-caption">DISCOVERY <i>⟷</i> SUBSCRIPTION</span>
        </div>
      </div>
    </section>
  );
}
