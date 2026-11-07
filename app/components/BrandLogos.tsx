import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

/** APEX agency mark — a sharp peak "A" with a rising chevron. */
export function ApexLogo({ title = "APEX", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-label={title} {...props}>
      <defs>
        <linearGradient id="apex-g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff3d8b" />
          <stop offset=".55" stopColor="#b44dff" />
          <stop offset="1" stopColor="#ffb547" />
        </linearGradient>
        <linearGradient id="apex-g2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".85" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <path d="M60 10 108 106H84L60 56 36 106H12Z" fill="url(#apex-g1)" />
      <path d="M60 34 92 98H80L60 58 40 98H28Z" fill="#0b0612" opacity=".55" />
      <path d="M38 80 60 64 82 80 76 86 60 75 44 86Z" fill="url(#apex-g2)" />
      <circle cx="60" cy="10" r="4.5" fill="#fff" />
    </svg>
  );
}

export function OnlyFansLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="14" fill="#00AFF0" />
      <circle cx="18.5" cy="25" r="10" fill="none" stroke="#fff" strokeWidth="5" />
      <circle cx="18.5" cy="25" r="2.6" fill="#fff" />
      <path d="M24 15h17c-1.2 3.6-4.6 6.4-9 6.6h-3.6c-1 3.6-2.6 6.8-4.6 9.4 1.6-4.6 1.8-10.2.2-16Z" fill="#fff" />
      <path d="M29.6 24.4h7.6c-1.2 3.2-4 5.2-8 5.4Z" fill="#fff" opacity=".85" />
    </svg>
  );
}

export function FanslyLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="fansly-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2CB7FF" />
          <stop offset="1" stopColor="#1A8CF2" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#fansly-g)" />
      <path d="M24 37.5 12.4 26.2a7.4 7.4 0 0 1 10.5-10.5L24 16.8l1.1-1.1a7.4 7.4 0 0 1 10.5 10.5Z" fill="#fff" />
      <path d="M20 21.5h9.5v3.2h-6v2.6h5v3h-5V35l-3.5-3.4Z" fill="#1A8CF2" />
    </svg>
  );
}

export function InstagramLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="ig-g" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset=".05" stopColor="#fdf497" />
          <stop offset=".45" stopColor="#fd5949" />
          <stop offset=".6" stopColor="#d6249f" />
          <stop offset=".9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#ig-g)" />
      <rect x="11" y="11" width="26" height="26" rx="8" fill="none" stroke="#fff" strokeWidth="3.2" />
      <circle cx="24" cy="24" r="6.2" fill="none" stroke="#fff" strokeWidth="3.2" />
      <circle cx="31.6" cy="16.4" r="1.9" fill="#fff" />
    </svg>
  );
}

const TIKTOK_PATH =
  "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";

export function TikTokLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="14" fill="#010101" />
      <g transform="translate(12.4 11.4) scale(1.02)">
        <path d={TIKTOK_PATH} fill="#25F4EE" transform="translate(-.9 -.7)" />
        <path d={TIKTOK_PATH} fill="#FE2C55" transform="translate(.9 .7)" />
        <path d={TIKTOK_PATH} fill="#fff" />
      </g>
    </svg>
  );
}

export function RedditLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="14" fill="#FF4500" />
      <circle cx="34.5" cy="12.5" r="2.8" fill="#fff" />
      <path d="M24.4 17.6 26.6 10.6l7.6 1.8" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="13.6" cy="23.4" r="3.3" fill="#fff" />
      <circle cx="34.4" cy="23.4" r="3.3" fill="#fff" />
      <ellipse cx="24" cy="28.4" rx="12.6" ry="9.2" fill="#fff" />
      <circle cx="19" cy="27" r="2.2" fill="#FF4500" />
      <circle cx="29" cy="27" r="2.2" fill="#FF4500" />
      <path d="M19.2 32.2c3 2 6.6 2 9.6 0" fill="none" stroke="#FF4500" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function XLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="14" fill="#0f0f0f" />
      <g transform="translate(12 12)">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="#fff" />
      </g>
    </svg>
  );
}
