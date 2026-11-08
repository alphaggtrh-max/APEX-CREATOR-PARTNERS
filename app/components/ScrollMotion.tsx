"use client";

import { useEffect } from "react";

export default function ScrollMotion() {
  useEffect(() => {
    const root = document.querySelector(".apex-editorial");
    if (!root) return;

    root.classList.add("has-motion");
    const targets = root.querySelectorAll(
      ".apex-editorial-hero .apex-hero-copy > *, .apex-editorial-visual, .apex-pathway-editorial .creator-pathway-heading, .apex-pathway-editorial .creator-pathway-layout, .apex-channel-strip, .apex-section-kicker, .apex-intro-grid, .apex-section-head, .apex-service-card, .apex-system-copy, .apex-process-visual, .apex-manifesto, .apex-principle-grid article, .apex-faq-grid > div, .apex-closing > *"
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
      (element as HTMLElement).style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 75}ms`);
      element.classList.add("apex-reveal");
      observer.observe(element);
    });

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--apex-scroll-progress", String(progress));
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      root.classList.remove("has-motion");
      document.documentElement.style.removeProperty("--apex-scroll-progress");
    };
  }, []);

  return <div className="apex-scroll-progress" aria-hidden="true"><span /></div>;
}
