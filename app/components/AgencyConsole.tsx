"use client";

import { useState } from "react";

const capabilities = [
  {
    id: "strategy",
    number: "01",
    label: "Strategy",
    short: "Positioning & direction",
    title: "Know what to focus on.",
    description: "A clear creator position, a realistic growth roadmap and priorities that fit your identity, audience and boundaries.",
    actions: ["Brand positioning", "Audience & channel strategy", "Growth roadmap"],
    flow: ["POSITION", "PRIORITISE", "PLAN"],
  },
  {
    id: "growth",
    number: "02",
    label: "Growth",
    short: "Promotion & discovery",
    title: "Make discovery intentional.",
    description: "Connect social channels, communities and subscription profiles into a more coherent path from discovery to subscription.",
    actions: ["Promotion planning", "Content distribution", "Profile optimisation"],
    flow: ["DISCOVER", "CONNECT", "CONVERT"],
  },
  {
    id: "experience",
    number: "03",
    label: "Fan experience",
    short: "Content & communication",
    title: "Build stronger connections.",
    description: "Bring structure to content planning and agreed fan-management activities while keeping your voice and boundaries at the centre.",
    actions: ["Content planning", "Chatting & fan management", "Subscriber experience"],
    flow: ["CREATE", "ENGAGE", "RETAIN"],
  },
  {
    id: "operations",
    number: "04",
    label: "Operations",
    short: "Management & analytics",
    title: "Run the business clearly.",
    description: "Coordinate the operational details, organise workflows and use performance reviews to inform the next decisions.",
    actions: ["Account & admin support", "Workflow coordination", "Analytics reviews"],
    flow: ["ORGANISE", "MEASURE", "REFINE"],
  },
];

export default function AgencyConsole() {
  const [activeId, setActiveId] = useState("strategy");
  const active = capabilities.find((item) => item.id === activeId) ?? capabilities[0];

  return (
    <section className="agency-console" aria-label="Explore APEX core capabilities">
      <div className="agency-console-top">
        <span><i /> APEX MANAGEMENT SYSTEM</span>
        <span>CORE CAPABILITIES <b>04</b></span>
      </div>
      <div className="agency-console-heading">
        <span className="agency-console-kicker">ONE CONNECTED PARTNERSHIP</span>
        <strong>Four strengths.<br /><em>One clear direction.</em></strong>
        <p>Select a capability to see how the pieces of your creator business connect.</p>
      </div>
      <div className="agency-console-body">
        <div className="agency-console-tabs" role="tablist" aria-label="APEX capabilities">
          {capabilities.map((item) => (
            <button
              key={item.id}
              id={`capability-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={activeId === item.id}
              aria-controls="capability-panel"
              className={activeId === item.id ? "agency-console-tab is-active" : "agency-console-tab"}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.number}</span>
              <b>{item.label}</b>
              <small>{item.short}</small>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
        <div className="agency-console-panel" id="capability-panel" role="tabpanel" aria-labelledby={`capability-tab-${active.id}`} key={active.id}>
          <div className="agency-console-panel-meta"><span>CAPABILITY / {active.number}</span><span>APEX FRAMEWORK</span></div>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <ul>{active.actions.map((action) => <li key={action}><span>+</span>{action}</li>)}</ul>
          <div className="agency-console-flow" aria-label={`Process: ${active.flow.join(", ")}`}>
            {active.flow.map((step, index) => <div key={step}><span>0{index + 1}</span><b>{step}</b>{index < 2 && <i>→</i>}</div>)}
          </div>
        </div>
      </div>
      <div className="agency-console-bottom">
        <span><i /> BUILT AROUND YOUR GOALS</span>
        <span>18+ ONLY · INDEPENDENT CREATOR MANAGEMENT</span>
      </div>
      <p className="agency-console-disclaimer">An overview of APEX services — the actual scope is agreed individually before work begins.</p>
    </section>
  );
}
