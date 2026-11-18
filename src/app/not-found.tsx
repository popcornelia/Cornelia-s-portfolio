import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap page-top">
      <h1 className="page-title">This page doesn&apos;t exist</h1>
      <p className="page-lead">The link may be old or mistyped. Try my work instead.</p>
      <div className="btn-row"><Link href="/work" className="btn btn-main">See my work</Link></div>
    </section>
  );
}
