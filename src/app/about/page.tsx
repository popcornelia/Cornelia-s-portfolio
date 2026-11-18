import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import museum from "../../../public/images/cornelia-museum.webp";
import { education, languages } from "@/lib/experience";
import { site } from "@/lib/site";
import { ScribbleFrame, Spark } from "@/components/Shapes";

export const metadata: Metadata = {
  title: "About me",
  description:
    "About Cornelia Pop: a brand and content marketer with a UX designer's eye, based in Cluj-Napoca and working remotely. Languages, education and writing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="wrap page-top reveal">
      <div className="about-grid">
        <div>
          <h1 className="page-title">About me</h1>
          <p className="page-lead">
            I always start, and create, with people in mind. I studied literature and I&apos;ve always loved visual art.
            That&apos;s where my storytelling comes from. UX design taught me to build it around user needs.
          </p>
          <p className="body-text">
            I create visual and video content that turns complex topics into clear, accessible communication, and I focus on
            authentic content that connects with people.
          </p>
          <p className="body-text">
            I&apos;m also the co-founder of{" "}
            <a className="text-link inline-link" href={site.substack} target="_blank" rel="noopener noreferrer">Cultural Passport</a>, a newsletter on Substack where I write about travel
            recommendations and cultural anthropology.
          </p>
          <p className="body-text">
            In my spare time I love taking photos, and I&apos;ve also photographed events, like the ones at Transylvania College.
          </p>
          <p className="body-text">Based in Cluj-Napoca, Romania, and working remotely.</p>
          <div className="btn-row">
            <Link href="/work" className="btn btn-main">See my work</Link>
            <a href={site.photography} className="btn btn-line" target="_blank" rel="noopener noreferrer">See my photography</a>
          </div>
        </div>
        <figure className="photo photo-about">
          <Image src={museum} alt="Cornelia Pop with a camera in an art museum, between paintings and a bronze sculpture" placeholder="blur" sizes="(max-width: 900px) 90vw, 480px" />
          <ScribbleFrame />
          <Spark className="photo-spark" />
        </figure>
      </div>

      <div className="two-cols">
        <section>
          <h2 className="h3">Languages</h2>
          <ul className="chips">{languages.map((l) => <li key={l.name}>{l.name} ({l.level})</li>)}</ul>
        </section>
        <section>
          <h2 className="h3">Education and courses</h2>
          <ul className="plain-list">
            {education.map((e) => (
              <li key={e.title}><strong>{e.title}</strong><span>{e.where}{e.when ? `, ${e.when}` : ""}</span></li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
