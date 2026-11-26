import type { ReactNode } from "react";

// A template remounts between App Router navigations, allowing a short,
// accessible route entrance without adding a routing or animation dependency.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="route-transition">{children}</div>;
}
