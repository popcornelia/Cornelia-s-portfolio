import { site } from "@/lib/site";
import EmailMenu from "./EmailMenu";
import { CurlyArrow } from "./Shapes";

export default function Footer() {
  return (
    <footer className="site-footer reveal">
      <div className="wrap footer-inner">
        <div className="footer-copy">
          <p className="footer-big">Have a marketing role in mind?</p>
          <p className="footer-sub">I&apos;d love to hear about it.</p>
        </div>
        <div className="footer-actions">
          <p className="hand fade footer-note" aria-hidden="true">go on, say hi!</p>
          <CurlyArrow className="footer-arrow" color="#cdb8f7" />
          <EmailMenu label="Email me" className="btn btn-light" />
          <a className="btn btn-outline-light" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="wrap footer-small">
        <p>© 2026 Cornelia Pop. Based in Cluj-Napoca, working remotely. {site.email}</p>
        <ul className="footer-links">
          <li><a href={site.photography} target="_blank" rel="noopener noreferrer">Photography</a></li>
          <li><a href={site.substack} target="_blank" rel="noopener noreferrer">Cultural Passport on Substack</a></li>
        </ul>
      </div>
    </footer>
  );
}
