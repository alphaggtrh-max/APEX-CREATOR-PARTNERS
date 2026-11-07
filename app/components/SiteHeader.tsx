"use client";

import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="APEX Creator Partners home" onClick={() => setOpen(false)}>
        <span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span>
        <span className="wordmark-sub">CREATOR PARTNERS</span>
      </a>
      <nav className={"desktop-nav" + (open ? " nav-open" : "")} aria-label="Main navigation">
        <a href="/#approach" onClick={() => setOpen(false)}>Approach</a>
        <a href="/services" onClick={() => setOpen(false)}>Services</a>
        <a href="/#about" onClick={() => setOpen(false)}>About</a>
        <a className="mobile-nav-contact" href="/contact" onClick={() => setOpen(false)}>Contact ↗</a>
      </nav>
      <a className="header-cta" href="/contact">Discuss a partnership <span>↗</span></a>
      <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
    </header>
  );
}
