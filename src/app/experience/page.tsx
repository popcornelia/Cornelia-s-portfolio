import type { Metadata } from "next";
import Link from "next/link";
import { jobs, skills, tools } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Cornelia Pop's marketing experience: Legentic, Transylvania College, Mejix, GoDaddy, Stripe and Steelcase.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <section className="wrap page-top reveal">
      <div className="sec-head">
        <h1 className="page-title">Experience</h1>
        <p className="hand fade" aria-hidden="true">the road so far</p>
      </div>
      <p className="page-lead">Marketing, content and communication roles, most recent first.</p>
      <ol className="timeline">
        {jobs.map((j) => (
          <li key={j.company + j.when} className="job">
            <p className="job-when">{j.when}</p>
            <div className="job-card">
              <h2 className="h3">{j.role}</h2>
              <p className="job-company">{j.company}, {j.place}</p>
              <ul className="dot-list">{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              {j.link && <Link href={j.link.href} className="text-link">{j.link.label}</Link>}
            </div>
          </li>
        ))}
      </ol>
      <div className="two-cols">
        <section>
          <h2 className="h3">Skills</h2>
          <ul className="chips">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
        <section>
          <h2 className="h3">Tools</h2>
          <ul className="chips">{tools.map((s) => <li key={s}>{s}</li>)}</ul>
        </section>
      </div>
    </section>
  );
}
