import type { Icon } from "@/lib/work";

/* Hand-drawn doodles. Paths with pathLength="1" draw themselves inside a .reveal section (see globals.css). All decorative. */

const s = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function StarLogo() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2c.7 5.2 3.8 8.3 9 9-5.2.7-8.3 3.8-9 9-.7-5.2-3.8-8.3-9-9 5.2-.7 8.3-3.8 9-9z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function WaveHand() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
      <path d="M9 26c-3-3-5-8-3-11l3-3c1-1 2 0 2 1l1 3V5c0-1 2-1 2 0v8-10c0-1 2-1 2 0v10-8c0-1 2-1 2 0v9-6c0-1 2-1 2 0v10c0 6-4 10-9 9-1 0-3-1-4-1z" fill="#ffd84d" stroke="var(--ink)" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function MarkerUnderline() {
  return (
    <svg className="draw" viewBox="0 0 300 30" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M4 20c40-10 90-14 150-10s100 6 142-4" {...s} stroke="var(--pink)" strokeWidth="14" opacity=".75" />
    </svg>
  );
}

export function ScribbleUnderline() {
  return (
    <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M2 6c20-4 40 3 60-1s26 2 36-1" {...s} stroke="var(--accent)" strokeWidth="3" />
    </svg>
  );
}

export function ScribbleFrame() {
  return (
    <svg className="scribble-frame draw" viewBox="0 0 100 125" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M8 3C36 0 70 1 95 4c3 30 2 80-1 118-30 3-62 2-90-1C1 90 2 40 5 6c20-3 50-3 80-1" {...s} stroke="var(--ink)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function CurlyArrow({ className, color = "var(--accent)" }: { className?: string; color?: string }) {
  return (
    <svg className={`${className ?? ""} draw`} viewBox="0 0 62 56" aria-hidden="true">
      <path pathLength={1} d="M4 10c22-6 40 6 42 36M46 46l-9-8M46 46l6-11" {...s} stroke={color} strokeWidth="3" />
    </svg>
  );
}

export function Spark({ className }: { className?: string }) {
  return (
    <svg className={`${className ?? ""} draw`} viewBox="0 0 56 56" aria-hidden="true">
      <path pathLength={1} d="M28 4v14M28 38v14M4 28h14M38 28h14M11 11l8 8M37 37l8 8M45 11l-8 8M19 37l-8 8" {...s} stroke="#ffd84d" strokeWidth="4" />
    </svg>
  );
}

export function CircleMark() {
  return (
    <svg className="draw" viewBox="0 0 160 80" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength={1} d="M90 6C40 2 6 18 8 42s50 34 94 30 54-22 48-40S110 2 70 8" {...s} stroke="var(--pink)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function SketchArrow() {
  return (
    <svg viewBox="0 0 34 14" aria-hidden="true">
      <path d="M2 8c9-3 18 2 28-1M24 2l7 5-7 5" {...s} strokeWidth="2.4" />
    </svg>
  );
}

export function QuoteMarks() {
  return (
    <svg className="draw" viewBox="0 0 54 44" aria-hidden="true">
      <path pathLength={1} d="M20 6C8 10 4 20 6 30c1 6 10 8 13 2 3-5-2-11-8-9M46 6C34 10 30 20 32 30c1 6 10 8 13 2 3-5-2-11-8-9" {...s} stroke="var(--accent)" strokeWidth="3.5" />
    </svg>
  );
}

export function StepDoodle({ kind }: { kind: "heart" | "bulb" | "pencil" }) {
  const d = {
    heart: { c: "var(--pink)", p: "M29 50C14 40 5 31 6 20 7 11 18 7 25 14l4 5 4-5c7-7 18-3 19 6 1 11-8 20-23 30z" },
    bulb: { c: "var(--accent)", p: "M29 6c-11 0-18 8-18 17 0 7 4 11 7 14 2 2 3 4 3 7h16c0-3 1-5 3-7 3-3 7-7 7-14 0-9-7-17-18-17zM22 51h14M25 44l-1-11 5 4 5-4-1 11" },
    pencil: { c: "#d49b00", p: "M40 6l12 12-28 28-15 3 3-15zM34 12l12 12M8 52c8-6 16 4 24-2s14 2 20-3" },
  }[kind];
  return (
    <svg className="doodle draw" viewBox="0 0 58 58" aria-hidden="true">
      <path pathLength={1} d={d.p} {...s} stroke={d.c} strokeWidth="3.5" />
    </svg>
  );
}

/** Bigger doodle used on case study panels when there is no screenshot. */
export function WorkIcon({ icon, size = 56 }: { icon: Icon; size?: number }) {
  const p = { width: size, height: size, viewBox: "0 0 48 48", "aria-hidden": true as const };
  const st = { ...s, strokeWidth: 2.4 };
  switch (icon) {
    case "target":
      return (
        <svg {...p}>
          <circle cx="22" cy="26" r="16" {...st} />
          <circle cx="22" cy="26" r="9" {...st} />
          <circle cx="22" cy="26" r="2.5" fill="currentColor" />
          <path d="M23 25 40 8M34 8h6v6" {...st} />
        </svg>
      );
    case "mic":
      return (
        <svg {...p}>
          <rect x="17" y="6" width="14" height="22" rx="7" {...st} />
          <path d="M11 22c0 8 6 13 13 13s13-5 13-13M24 35v7M17 42h14M20 14h3M20 19h3" {...st} />
        </svg>
      );
    case "school":
      return (
        <svg {...p}>
          <path d="M5 18 24 8l19 10-19 10z" {...st} />
          <path d="M12 22v10c4 4 20 4 24 0V22M43 18v12" {...st} />
          <circle cx="43" cy="33" r="2" {...st} />
        </svg>
      );
    case "spark":
      return (
        <svg {...p}>
          <path d="M24 5c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14zM38 32c.5 3.5 2 5 5.5 5.5-3.5.5-5 2-5.5 5.5-.5-3.5-2-5-5.5-5.5 3.5-.5 5-2 5.5-5.5z" {...st} />
        </svg>
      );
    case "mail":
      return (
        <svg {...p}>
          <rect x="6" y="11" width="36" height="26" rx="4" {...st} />
          <path d="m7 13 17 13 17-13M36 6l3-3M40 9l4-1" {...st} />
        </svg>
      );
    case "pen":
      return (
        <svg {...p}>
          <path d="M31 7l10 10-22 22-12 2 2-12zM27 11l10 10M9 29l10 10M28 42c3-3 6 2 9-1s5 1 7-1" {...st} />
        </svg>
      );
  }
}

/** Small hand-drawn "opens elsewhere" arrow for external links. */
export function ExternalMark() {
  return (
    <svg className="ext" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 11c2-2 4-4 6-6M6 4.5c1.8-.3 3.4-.3 5 .2.4 1.7.4 3.3.1 5" {...s} strokeWidth="1.8" />
    </svg>
  );
}
