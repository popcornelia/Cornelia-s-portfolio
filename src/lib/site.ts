// Change SITE_URL once you know the final Vercel address or your own domain.
export const SITE_URL = "https://cornelia-s-portfolio.vercel.app";

export const site = {
  name: "Cornelia Pop",
  role: "Brand and Content Marketer",
  email: "pop.cornelia06@gmail.com",
  linkedin: "https://www.linkedin.com/in/cornelia-vasilica-pop",
  photography: "https://galleries.pixieset.com/collections",
  substack: "https://culturalpassport.substack.com/",
  location: "Based in Cluj-Napoca, Romania, and working remotely",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

// The pre-written email that opens when someone clicks "Email me". Edit freely.
export const emailDraft = {
  subject: "Marketing role: let's talk",
  body: `Hi Cornelia,

I saw your portfolio and I'd like to talk to you about a marketing role at [company name].

[A few words about the role]

When would be a good time for a short call?

Best,
[Your name]`,
};

const enc = encodeURIComponent;
export const emailLinks = {
  app: `mailto:${site.email}?subject=${enc(emailDraft.subject)}&body=${enc(emailDraft.body)}`,
  gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(site.email)}&su=${enc(emailDraft.subject)}&body=${enc(emailDraft.body)}`,
  outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${enc(site.email)}&subject=${enc(emailDraft.subject)}&body=${enc(emailDraft.body)}`,
};
