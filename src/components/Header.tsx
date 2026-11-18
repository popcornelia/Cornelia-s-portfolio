"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { ScribbleUnderline, StarLogo } from "./Shapes";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo" aria-label="Cornelia Pop, home">
          <StarLogo />
          Cornelia Pop
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
        <nav id="main-nav" className={open ? "main-nav open" : "main-nav"} aria-label="Main">
          <ul>
            {nav.filter((n) => n.href !== "/contact").map((n) => {
              const active = path === n.href || path.startsWith(n.href + "/");
              return (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="nav-link" aria-current={active ? "page" : undefined}>
                    {n.label}
                    <ScribbleUnderline />
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-main btn-small">Get in touch</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
