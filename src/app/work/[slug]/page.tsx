import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleMark, ExternalMark, SketchArrow, WorkIcon } from "@/components/Shapes";
import { caseStudies, getCase } from "@/lib/work";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};
  return { title: c.seoTitle, description: c.seoDescription, alternates: { canonical: `/work/${c.slug}` } };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();
  const idx = caseStudies.findIndex((x) => x.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="case reveal">
      <header className="wrap case-hero">
        <Link href="/work" className="text-link back-link">All work</Link>
        <div className="case-hero-grid">
          <div>
            <p className="case-meta">{c.client}, {c.when}</p>
            <h1 className="page-title">{c.title}</h1>
            <p className="page-lead">{c.summary}</p>
            <p className="case-role">My role: {c.role}</p>
          </div>
          <span className={`case-badge panel-${c.color}`}><WorkIcon icon={c.icon} size={96} /></span>
        </div>
      </header>

      {c.facts && (
        <section className="wrap facts" aria-label="Results in numbers">
          {c.facts.map((f, i) => (
            <div className="fact" key={f.label}>
              <span className="num">{f.value}{i === 0 && <CircleMark />}</span>
              <p>{f.label}</p>
            </div>
          ))}
        </section>
      )}

      {c.proof && (
        <section className="wrap proof" aria-labelledby="proof-h">
          <h2 id="proof-h" className="h3">The results, straight from the analytics</h2>
          <div className="proof-grid">
            {c.proof.map((p) => (
              <figure key={p.src} className="proof-item">
                <a href={p.src} target="_blank" rel="noopener noreferrer" className="proof-link" aria-label={`Open full size: ${p.caption}`}>
                  <Image src={p.src} width={p.width} height={p.height} alt={p.alt} sizes="(max-width: 700px) 90vw, 520px" />
                  <span className="proof-zoom" aria-hidden="true">Open full size</span>
                </a>
                <figcaption>{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {c.samples && (
        <section className="wrap phones" aria-labelledby="phones-h">
          <div className="sec-head">
            <h2 id="phones-h" className="h3">Posts I created</h2>
            <p className="hand fade" aria-hidden="true">tap one to watch it</p>
          </div>
          <ul className="phone-grid">
            {c.samples.map((p) => (
              <li key={p.href}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="phone">
                  <span className="phone-frame">
                    <Image src={p.img} width={360} height={720} alt={p.alt} sizes="(max-width: 520px) 45vw, 240px" />
                  </span>
                  <span className="phone-platform">{p.platform}<ExternalMark /></span>
                  <span className="phone-label">{p.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(c.accounts || c.sites) && (
        <section className="wrap live" aria-labelledby="live-h">
          <h2 id="live-h" className="h3">See it live</h2>
          <div className="live-grid">
            {c.accounts && (
              <div>
                <h3 className="live-label">Accounts I managed</h3>
                <ul className="link-chips">
                  {c.accounts.map((a) => (
                    <li key={a.href}><a href={a.href} target="_blank" rel="noopener noreferrer">{a.label}<ExternalMark /></a></li>
                  ))}
                </ul>
              </div>
            )}
            {c.sites && (
              <div>
                <h3 className="live-label">Some of the websites I wrote</h3>
                <ul className="link-chips">
                  {c.sites.map((a) => (
                    <li key={a.href}><a href={a.href} target="_blank" rel="noopener noreferrer">{a.label}<ExternalMark /></a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <div className="wrap case-body">
        {c.sections.map((s) => (
          <section key={s.heading} className="case-section">
            <h2 className="h3">{s.heading}</h2>
            <ul className="dot-list">
              {s.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </section>
        ))}
        {c.extra && (
          <section className="case-section">
            <h2 className="h3">{c.extra.heading}</h2>
            <ul className="chips">{c.extra.items.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        )}
        {c.tools && (
          <section className="case-section">
            <h2 className="h3">Tools</h2>
            <ul className="chips">{c.tools.map((t) => <li key={t}>{t}</li>)}</ul>
          </section>
        )}
      </div>

      <div className="wrap next-case">
        <Link href={`/work/${next.slug}`} className="next-card">
          <span className="next-label">Next case study</span>
          <span className="next-title">{next.title}<SketchArrow /></span>
        </Link>
      </div>
    </article>
  );
}
