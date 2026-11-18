import Image from "next/image";
import Link from "next/link";
import portrait from "../../public/images/cornelia-portrait.webp";
import CaseCard from "@/components/CaseCard";
import Eyes from "@/components/Eyes";
import { CircleMark, CurlyArrow, MarkerUnderline, ScribbleFrame, Spark, StepDoodle, WaveHand } from "@/components/Shapes";
import { caseStudies } from "@/lib/work";

const featured = ["legentic-go-to-market", "imperfecti-podcast", "transylvania-college"];

export default function Home() {
  const cases = featured.map((s) => caseStudies.find((c) => c.slug === s)!);
  return (
    <>
      <section className="wrap hero reveal">
        <div className="hero-copy">
          <p className="hello"><span className="wave"><WaveHand /></span>Hi, I&apos;m Cornelia, a brand and content marketer.</p>
          <h1 className="hero-title">
            Marketer with a <span className="mark">UX designer&apos;s eye.<MarkerUnderline /></span>
          </h1>
          <p className="lead">
            I always start, and create, with people in mind: who they are, what they need and what&apos;s in their way. Then I
            turn it into stories and visuals that speak to them.
          </p>
          <ul className="tags">
            <li>Brand storytelling</li>
            <li>Brand positioning</li>
            <li>Product marketing</li>
            <li>Content and social</li>
            <li>UX/UI trained</li>
          </ul>
          <div className="btn-row">
            <Link href="/work" className="btn btn-main">See my work</Link>
            <Link href="/contact" className="btn btn-line">Get in touch</Link>
          </div>
        </div>
        <figure className="photo">
          <Image src={portrait} alt="Cornelia Pop smiling, holding a cup of coffee" priority placeholder="blur" sizes="(max-width: 900px) 90vw, 460px" />
          <ScribbleFrame />
          <p className="hand fade photo-note" aria-hidden="true">that&apos;s me, with coffee</p>
          <CurlyArrow className="photo-arrow" />
          <Spark className="photo-spark" />
        </figure>
      </section>

      <section className="stats reveal" aria-label="Results in numbers">
        <div className="wrap stats-grid">
          <div className="stat">
            <span className="num">169K<CircleMark /></span>
            <p>people reached on Facebook in one month, organic</p>
          </div>
          <div className="stat">
            <span className="num">36,000+</span>
            <p>followers across the social media accounts I managed</p>
            <ul className="stat-list">
              <li><strong>23,000+</strong> Transylvania College</li>
              <li><strong>10,000+</strong> Imperfecți podcast</li>
              <li><strong>2,600+</strong> Good Mom&apos;s Circle</li>
            </ul>
          </div>
          <div className="stat">
            <span className="num">300+</span>
            <p>business websites written for</p>
          </div>
        </div>
      </section>

      <section className="wrap worked" aria-labelledby="worked-h">
        <h2 id="worked-h">Where I&apos;ve worked</h2>
        <ul>
          <li>Legentic</li><li>Transylvania College</li><li>Mejix</li><li>GoDaddy</li><li>Stripe</li><li>Steelcase</li>
        </ul>
      </section>

      <section className="wrap sec reveal" aria-labelledby="work-h">
        <div className="sec-head">
          <h2 id="work-h" className="h2">Selected work</h2>
          <p className="hand fade" aria-hidden="true">the stories I&apos;m proudest of</p>
        </div>
        <div className="cards">
          {cases.map((c) => <CaseCard key={c.slug} c={c} />)}
        </div>
        <Link href="/work" className="text-link more-link">See all case studies</Link>
      </section>

      <section className="wrap sec reveal" aria-labelledby="how-h">
        <div className="sec-head">
          <h2 id="how-h" className="h2">How I work</h2>
          <Eyes />
        </div>
        <p className="how-intro">
          I studied literature and I&apos;ve always loved visual art. That&apos;s where my storytelling comes from. UX design
          taught me to build it around user needs: empathy first, then the story.
        </p>
        <ol className="steps">
          <li className="step">
            <StepDoodle kind="heart" />
            <p className="hand step-k">first</p>
            <h3>Start with empathy</h3>
            <p>Research and customer profiles: who people are, what they need and what&apos;s in their way.</p>
          </li>
          <li className="step">
            <StepDoodle kind="bulb" />
            <p className="hand step-k">then</p>
            <h3>Find the angle</h3>
            <p>Positioning and messaging: what makes this different, and why it matters to them.</p>
          </li>
          <li className="step">
            <StepDoodle kind="pencil" />
            <p className="hand step-k">and finally</p>
            <h3>Make it clear and visual</h3>
            <p>Content, case studies and visuals that look as good as they read.</p>
          </li>
        </ol>
      </section>
    </>
  );
}
