"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const root = document.querySelector(".apex-editorial");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const canObserve = "IntersectionObserver" in window;
    if (reducedMotion.matches || !canObserve) return;

    // Progressive enhancement: content is visible by default; reveal classes are
    // only enabled when the observer is available and motion is permitted.
    root.classList.add("has-motion");
    const targets = root.querySelectorAll(
      ".apex-editorial-hero .apex-hero-copy > *, .agency-console, .apex-pathway-editorial .creator-pathway-heading, .apex-pathway-editorial .creator-pathway-layout, .apex-channel-strip, .apex-section-kicker, .apex-intro-grid, .apex-section-head, .apex-service-card, .apex-system-copy, .apex-process-visual, .apex-manifesto, .apex-principle-grid article, .apex-faq-grid > div, .apex-closing > *"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });

    targets.forEach((element, index) => {
      // Short stagger creates a composed entrance without delaying whole sections.
      (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 65}ms`);
      element.classList.add("apex-reveal");
      observer.observe(element);
    });

    const consoleCard = root.querySelector<HTMLElement>(".agency-console");
    let frame = 0;
    let latestY = window.scrollY;
    const updateScrollEffects = () => {
      latestY = window.scrollY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(1, Math.max(0, latestY / scrollable)) : 0;
        document.documentElement.style.setProperty("--apex-scroll-progress", String(progress));

        // A restrained 12px hero-console drift adds depth; it is transform-only,
        // disabled on small screens, and never changes document layout.
        if (consoleCard && window.innerWidth > 760) {
          const rect = consoleCard.getBoundingClientRect();
          const offset = Math.max(-12, Math.min(12, (rect.top - window.innerHeight * 0.45) * -0.018));
          consoleCard.style.setProperty("--console-parallax", `${offset.toFixed(2)}px`);
        }
      });
    };

    updateScrollEffects();
    window.addEventListener("scroll", updateScrollEffects, { passive: true });
    window.addEventListener("resize", updateScrollEffects);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollEffects);
      window.removeEventListener("resize", updateScrollEffects);
      if (frame) window.cancelAnimationFrame(frame);
      root.classList.remove("has-motion");
      consoleCard?.style.removeProperty("--console-parallax");
      document.documentElement.style.removeProperty("--apex-scroll-progress");
    };
  }, []);

  return <div className="apex-scroll-progress" aria-hidden="true"><span /></div>;
}
