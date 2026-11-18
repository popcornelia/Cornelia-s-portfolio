import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/work";
import { SketchArrow, WorkIcon } from "./Shapes";

export default function CaseCard({ c, headingLevel = 3 }: { c: CaseStudy; headingLevel?: 2 | 3 }) {
  const H = headingLevel === 2 ? "h2" : "h3";
  const cover = c.proof?.[0];
  return (
    <Link href={`/work/${c.slug}`} className="card">
      <div className={`card-img panel-${c.color}`}>
        {cover ? (
          <Image src={cover.src} width={cover.width} height={cover.height} alt={cover.alt} sizes="(max-width: 700px) 92vw, 380px" />
        ) : (
          <span className="card-doodle"><WorkIcon icon={c.icon} size={110} /></span>
        )}
      </div>
      <p className="card-client">{c.client}</p>
      <H className="card-title">{c.title}</H>
      <p className="card-desc">{c.summary}</p>
      <span className="card-more">Read the story<SketchArrow /></span>
    </Link>
  );
}
