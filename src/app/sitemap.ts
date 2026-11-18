import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { caseStudies } from "@/lib/work";


export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/experience", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.8 })),
    ...caseStudies.map((c) => ({ url: `${SITE_URL}/work/${c.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}
