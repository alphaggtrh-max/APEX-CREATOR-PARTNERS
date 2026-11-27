"use client";

import { useState } from "react";
import { FanslyLogo, FanvueLogo, InstagramLogo, LoyalFansLogo, ManyVidsLogo, OnlyFansLogo, RedditLogo, TikTokLogo, XLogo } from "./BrandLogos";

const paths = [
  { id: "starting", label: "I’m just getting started", title: "Build the foundations first.", copy: "You have a creator idea or a new profile, but you are not sure what to focus on. We can help shape your positioning, choose realistic channels and create a clear first plan.", steps: ["Clarify your creator identity and boundaries", "Choose platforms that fit your audience", "Create a manageable content and promotion routine"], note: "For creators who want direction before doing more." },
  { id: "active", label: "I’m already creating", title: "Turn scattered effort into a system.", copy: "You are posting and building an audience, but growth feels inconsistent or the business side takes too much time. We look at what is working and where to focus next.", steps: ["Review your profiles and audience journey", "Improve content planning and distribution", "Set a simple rhythm for reviewing progress"], note: "For creators who want more structure and consistency." },
  { id: "scaling", label: "I want to grow further", title: "Make the next stage intentional.", copy: "You have traction and want to develop the business without losing control of your brand. We can help coordinate strategy, operations and monetization priorities.", steps: ["Identify the strongest growth opportunities", "Improve the path from discovery to subscription", "Build repeatable workflows around your goals"], note: "For creators ready to develop the business further." },
];

const channels = [
  {
    name: "OnlyFans", role: "Subscriptions & direct fan relationships", Logo: OnlyFansLogo,
    focus: "A home for paid fan relationships.",
    detail: "OnlyFans is built around creator-to-fan subscriptions, with additional ways to offer individual paid content and interact with subscribers. It can become the centre of a creator’s paid offering.",
    apex: "We can help shape the profile, plan a sustainable publishing rhythm and connect promotion with a clear subscriber experience."
  },
  {
    name: "Fansly", role: "Subscriptions, tiers & discovery", Logo: FanslyLogo,
    focus: "More ways to structure a subscription offer.",
    detail: "Fansly combines creator subscriptions with tier-based access and discovery features. That gives creators room to organise different levels of access while helping new audiences find their work.",
    apex: "We can help clarify tier structure, organise content access and build a promotion plan that gives each channel a clear purpose."
  },
  {
    name: "Fanvue", role: "Creator subscriptions & fan engagement", Logo: FanvueLogo,
    focus: "A subscription space for creator communities.",
    detail: "Fanvue gives creators a place to build a paid audience and manage ongoing fan relationships. It can be considered as a primary or complementary subscription channel, depending on the creator’s audience and goals.",
    apex: "We can help assess whether it fits your platform mix, then coordinate profile positioning, content planning and fan communication."
  },
  {
    name: "ManyVids", role: "Paid creator content & storefront", Logo: ManyVidsLogo,
    focus: "A storefront approach to paid content.",
    detail: "ManyVids is centred on selling creator content, with a marketplace-style experience. It can suit creators who want another route for presenting and monetising individual pieces of content.",
    apex: "We can help organise your catalogue, present content consistently and consider how a storefront complements your subscription channels."
  },
  {
    name: "LoyalFans", role: "Subscriptions & fan interaction", Logo: LoyalFansLogo,
    focus: "Building recurring fan relationships.",
    detail: "LoyalFans offers creators tools for paid fan access and interaction. It may work as a primary destination or as part of a wider platform mix.",
    apex: "We can help align your profile, content schedule and communication so the experience feels consistent for your audience."
  },
  {
    name: "Instagram", role: "Brand presence & audience discovery", Logo: InstagramLogo,
    focus: "A public-facing brand and discovery channel.",
    detail: "Instagram can help creators build a recognisable public identity, share safe-for-platform content and guide interested audiences towards appropriate destinations. Its content and linking rules need to be respected.",
    apex: "We can help develop a consistent visual identity, plan platform-appropriate posts and connect social content to the wider creator journey."
  },
  {
    name: "TikTok", role: "Short-form reach & discovery", Logo: TikTokLogo,
    focus: "Short-form content that introduces your brand.",
    detail: "TikTok is a discovery-led short-form video platform. For adult creators, content must stay within TikTok’s rules and should focus on compliant, non-explicit brand content.",
    apex: "We can help plan repeatable short-form concepts, keep messaging platform-appropriate and make each post part of a coherent content strategy."
  },
  {
    name: "X", role: "Updates, promotion & community", Logo: XLogo,
    focus: "A channel for conversation and direct updates.",
    detail: "X can support creator updates, community interaction and audience routing. Adult content is subject to platform rules, including labelling and visibility requirements.",
    apex: "We can help shape a recognisable posting voice, coordinate updates and keep promotion consistent with your overall positioning."
  },
  {
    name: "Reddit", role: "Niche communities & targeted discovery", Logo: RedditLogo,
    focus: "Reaching people through relevant communities.",
    detail: "Reddit is organised around topic-specific communities. It can be useful for niche discovery when creators participate thoughtfully and follow each community’s individual rules.",
    apex: "We can help identify relevant community themes, plan authentic participation and avoid repetitive or rule-breaking promotion."
  },
];

export default function CreatorPathway() {
  const [selected, setSelected] = useState("active");
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const current = paths.find((path) => path.id === selected) ?? paths[1];
  const activeChannel = channels.find((channel) => channel.name === selectedChannel);

  return (
    <section className="creator-pathway apex-pathway-editorial" aria-labelledby="creator-pathway-title">
      <div className="creator-pathway-heading">
        <div><div className="apex-section-kicker">FOR INDEPENDENT ADULT CONTENT CREATORS · 18+ ONLY</div><h2 id="creator-pathway-title">Your stage.<br/><em>Your strategy.</em></h2></div>
        <p>Whether you are launching an adult creator profile or refining an established subscription business, the starting point should reflect where you are today.</p>
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
        <div className="apex-channel-intro"><span className="apex-section-kicker">PLATFORMS & CHANNELS</span><h3>Adult creator platforms.<br/><em>One connected brand.</em></h3><p>Every platform plays a different role. Select a logo to see where it can fit into a creator’s wider business — and how APEX can help make the pieces work together.</p></div>
        <div className="apex-channel-content">
          <div className="apex-channel-list" aria-label="Choose a platform to learn more">
            {channels.map(({name,role,Logo})=>
              <button
                type="button"
                className={selectedChannel === name ? "apex-channel-item is-selected" : "apex-channel-item"}
                key={name}
                onClick={() => setSelectedChannel(selectedChannel === name ? null : name)}
                aria-pressed={selectedChannel === name}
                aria-controls="apex-channel-detail"
              >
                <span className="apex-channel-logo"><Logo/></span>
                <span><b>{name}</b><small>{role}</small></span>
                <i aria-hidden="true">{selectedChannel === name ? "−" : "+"}</i>
              </button>
            )}
          </div>
          <div className={activeChannel ? "apex-channel-detail is-open" : "apex-channel-detail"} id="apex-channel-detail" aria-live="polite" aria-atomic="true">
            {activeChannel ? (
              <>
                <div className="apex-channel-detail-top"><span>PLATFORM NOTE</span><span>APEX / {activeChannel.name.toUpperCase()}</span></div>
                <h4>{activeChannel.focus}</h4>
                <p>{activeChannel.detail}</p>
                <div className="apex-channel-apex"><b>HOW APEX CAN HELP</b><p>{activeChannel.apex}</p></div>
              </>
            ) : (
              <div className="apex-channel-empty"><span>01 — 09</span><p><b>Choose a platform.</b> Get a quick view of its role, what makes it useful and how it can fit into a broader creator strategy.</p></div>
            )}
          </div>
        </div>
      </div>
      <p className="apex-platform-disclaimer">Platform names and logos belong to their respective owners. APEX is an independent management agency and is not affiliated with or endorsed by these platforms. Platform availability and policies may vary.</p>
    </section>
  );
}
