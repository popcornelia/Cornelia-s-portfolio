"use client";

import { useEffect, useRef, useState } from "react";

/** Hand-drawn eyes that follow the pointer and blink. Decorative. */
export default function Eyes() {
  const ref = useRef<SVGSVGElement>(null);
  const [t, setT] = useState("translate(6 3)");

  useEffect(() => {
    let raf = 0;
    const move = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1;
      const m = Math.min(11, d / 14);
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setT(`translate(${((dx / d) * m).toFixed(1)} ${((dy / d) * m * 0.85).toFixed(1)})`));
    };
    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <svg ref={ref} className="eyes" width="168" height="92" viewBox="0 0 220 120" aria-hidden="true">
      <g fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round">
        <path d="M38 16 C52 8 72 7 88 13" />
        <path d="M134 13 C150 6 168 8 184 17" />
      </g>
      <g className="blink">
        <path d="M24 60 C25 34 46 21 64 22 C87 23 99 42 97 62 C95 85 77 99 57 97 C36 95 23 81 24 60 Z" fill="#fff" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M29 47 C34 31 50 24 62 25" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity=".55" />
        <g transform={t}>
          <circle cx="60" cy="60" r="14" fill="var(--ink)" />
          <circle cx="65" cy="55" r="4" fill="#fff" />
        </g>
      </g>
      <g className="blink">
        <path d="M124 61 C122 38 141 22 163 23 C185 24 199 41 196 62 C194 83 177 98 157 96 C137 94 125 81 124 61 Z" fill="#fff" stroke="var(--ink)" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M131 46 C137 32 151 26 163 27" fill="none" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity=".55" />
        <g transform={t}>
          <circle cx="160" cy="60" r="14" fill="var(--ink)" />
          <circle cx="165" cy="55" r="4" fill="#fff" />
        </g>
      </g>
    </svg>
  );
}
