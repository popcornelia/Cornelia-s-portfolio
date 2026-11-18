import type { Metadata } from "next";
import CaseCard from "@/components/CaseCard";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work and case studies",
  description:
    "Marketing case studies by Cornelia Pop: a go-to-market strategy, podcast growth, school content strategy, personal branding, B2B email marketing and website copywriting.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <section className="wrap page-top reveal">
      <div className="sec-head">
        <h1 className="page-title">Work</h1>
        <p className="hand fade" aria-hidden="true">pick a story</p>
      </div>
      <p className="page-lead">Case studies from my marketing roles: the situation, what I did, and what happened.</p>
      <div className="cards">
        {caseStudies.map((c) => <CaseCard key={c.slug} c={c} headingLevel={2} />)}
      </div>
    </section>
  );
}
