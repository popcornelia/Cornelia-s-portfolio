"use client";

import { useEffect, useId, useRef, useState } from "react";
import { emailLinks, site } from "@/lib/site";

/** "Email me" button that opens a small menu: email app, Gmail, Outlook, or copy the address. */
export default function EmailMenu({ label = "Email me", className = "btn btn-pink", align = "left" }: { label?: string; className?: string; align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const copy = async () => {
    try { await navigator.clipboard.writeText(site.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { setCopied(false); }
  };

  return (
    <div className={`email-menu ${align === "right" ? "align-right" : ""}`} ref={box}>
      <button type="button" className={className} aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        {label}
      </button>
      {open && (
        <div className="email-pop" id={id}>
          <p className="email-pop-title">Open a ready-made email in</p>
          <a className="email-opt" href={emailLinks.app}>Your email app</a>
          <a className="email-opt" href={emailLinks.gmail} target="_blank" rel="noopener noreferrer">Gmail</a>
          <a className="email-opt" href={emailLinks.outlook} target="_blank" rel="noopener noreferrer">Outlook</a>
          <button type="button" className="email-opt" onClick={copy}>{copied ? "Copied!" : "Copy address"}</button>
          <p className="email-pop-addr">{site.email}</p>
        </div>
      )}
    </div>
  );
}
