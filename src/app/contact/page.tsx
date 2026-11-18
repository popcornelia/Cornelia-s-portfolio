import type { Metadata } from "next";
import { site } from "@/lib/site";
import EmailMenu from "@/components/EmailMenu";
import { CurlyArrow } from "@/components/Shapes";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cornelia Pop, brand and content marketer, by email or on LinkedIn.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="wrap page-top reveal contact-grid">
      <div>
        <h1 className="page-title">Let&apos;s talk</h1>
        <p className="page-lead">Hiring for a marketing role, or want to see more of my work? Email me or message me on LinkedIn.</p>
        <p className="body-text">{site.location}.</p>
      </div>
      <div className="contact-cards">
        <div className="contact-card">
          <p className="contact-kind">Email</p>
          <p className="contact-value">{site.email}</p>
          <EmailMenu label="Write to me" className="btn btn-main" />
          <p className="hand fade contact-note" aria-hidden="true">pick your favourite app</p>
          <CurlyArrow className="contact-arrow" />
        </div>
        <a className="contact-card contact-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
          <span className="contact-kind">LinkedIn</span>
          <span className="contact-value">cornelia-vasilica-pop</span>
        </a>
      </div>
    </section>
  );
}
