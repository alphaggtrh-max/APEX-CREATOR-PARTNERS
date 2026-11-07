"use client";

import { useState } from "react";
import { ApexLogo } from "./BrandLogos";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="APEX Creator Partners home" onClick={() => setOpen(false)}>
        <ApexLogo className="wordmark-logo" title=""/>
        <span className="wordmark-text">
        <span className="wordmark-main">APEX<span className="wordmark-mark">.</span></span>
        <span className="wordmark-sub">CREATOR PARTNERS</span>
        </span>
      </a>
      <nav className={"desktop-nav" + (open ? " nav-open" : "")} aria-label="Main navigation">
        <a href="/#services" onClick={() => setOpen(false)}>Services</a>
        <a href="/#system" onClick={() => setOpen(false)}>System</a>
        <a href="/#about" onClick={() => setOpen(false)}>About</a>
        <a href="/#faq" onClick={() => setOpen(false)}>FAQ</a>
        <a className="mobile-nav-contact" href="/contact" onClick={() => setOpen(false)}>Apply now ↗</a>
      </nav>
      <a className="header-cta" href="/contact">Apply now <span>↗</span></a>
      <button className="mobile-menu-toggle" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
    </header>
  );
}
