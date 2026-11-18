export type Color = "pink" | "butter" | "cobalt" | "leaf" | "lilac";
export type Icon = "mic" | "school" | "spark" | "mail" | "pen" | "target";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  when: string;
  summary: string;
  color: Color;
  icon: Icon;
  seoTitle: string;
  seoDescription: string;
  facts?: { value: string; label: string }[];
  sections: { heading: string; points: string[] }[];
  tools?: string[];
  extra?: { heading: string; items: string[] };
  proof?: { src: string; width: number; height: number; alt: string; caption: string }[];
  accounts?: { label: string; href: string }[];
  samples?: { platform: string; label: string; href: string; img: string; alt: string }[];
  sites?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "legentic-go-to-market",
    title: "Building the marketing foundations of an insurtech",
    client: "Legentic, insurance technology",
    role: "B2B Marketing Specialist, the company's only marketer",
    when: "Sep 2026 – now",
    summary: "Brand guidelines, customer success stories, marketing materials, clearer processes and now a go-to-market strategy.",
    color: "lilac",
    icon: "target",
    seoTitle: "B2B marketing foundations case study",
    seoDescription:
      "How Cornelia Pop is building Legentic's marketing foundations: brand and style guidelines, customer case studies, marketing materials, HubSpot data hygiene, Apollo automation and a go-to-market strategy.",
    sections: [
      {
        heading: "The challenge",
        points: [
          "As a growing B2B tech company, Legentic needed marketing foundations it could build on: clear customer profiles, consistent materials, stories that show its value, and simple processes the team can rely on.",
          "As the company's only marketer, I took this on across every part of marketing.",
        ],
      },
      {
        heading: "Brand",
        points: [
          "Created the brand guidelines and the style guidelines, so every post, deck and visual looks and sounds like Legentic.",
          "Created marketing materials for the team to use with customers and partners.",
        ],
      },
      {
        heading: "Customer stories",
        points: [
          "Created the company's case studies: I turned customer stories into success stories the sales team can use.",
          "Write LinkedIn posts, articles and the quarterly customer newsletter, and plan the monthly LinkedIn content calendar.",
        ],
      },
      {
        heading: "CRM and processes",
        points: [
          "Organised the HubSpot data and segmented contacts by role, so each message reaches the right people.",
          "Made marketing processes simpler and clearer, and automated processes in Apollo.",
        ],
      },
      {
        heading: "Now: the go-to-market strategy",
        points: [
          "Building it step by step: ideal customer profiles for each buyer role, competitor analysis, positioning and messaging.",
          "Planned the marketing strategy and campaigns for a new product launch.",
        ],
      },
    ],
    tools: ["HubSpot", "Apollo", "Canva", "LinkedIn", "Notion"],
  },
  {
    slug: "imperfecti-podcast",
    title: "Growing the Imperfecți podcast on social media",
    client: "Imperfecți – Acasă și la școală",
    role: "Podcast content coordination",
    when: "Transylvania College, 2025 – 2026",
    summary: "Turned long episodes into short clips that people shared — all organic.",
    color: "pink",
    icon: "mic",
    seoTitle: "Podcast social media case study",
    seoDescription:
      "How Cornelia Pop grew the Imperfecți podcast on Facebook and TikTok with short clips, hooks and copy — all organic.",
    facts: [
      { value: "169K", label: "people reached on Facebook in one month" },
      { value: "135K+", label: "views from two TikTok clips" },
      { value: "~600", label: "shares on TikTok" },
      { value: "~30%", label: "more TikTok followers in the first week" },
    ],
    proof: [
      {
        src: "/images/results/facebook-reach.webp",
        width: 904,
        height: 538,
        alt: "Facebook insights for 30 June to 31 July 2025: 362,415 views, 169,475 reach, 3,748 content interactions and 11 link clicks",
        caption: "Facebook, 30 Jun – 31 Jul 2025",
      },
      {
        src: "/images/results/tiktok-key-metrics.webp",
        width: 704,
        height: 720,
        alt: "TikTok key metrics for 30 June to 6 July: 119K post views, 917 profile views, 1,870 likes, 25 comments and 599 shares",
        caption: "TikTok, 30 Jun – 6 Jul",
      },
      {
        src: "/images/results/tiktok-followers.webp",
        width: 571,
        height: 710,
        alt: "TikTok followers for 30 June to 6 July: 1,449 total followers and 349 net new followers",
        caption: "TikTok followers, 30 Jun – 6 Jul",
      },
    ],
    accounts: [
      { label: "YouTube", href: "https://www.youtube.com/@imperfecti.scoala.increderii" },
      { label: "Instagram", href: "https://www.instagram.com/imperfecti_podcast/" },
      { label: "Facebook", href: "https://www.facebook.com/imperfecti.podcast/" },
      { label: "TikTok", href: "https://www.tiktok.com/@imperfecti.podcast" },
    ],
    samples: [
      { platform: "Facebook", label: "The painful effects of neglect", href: "https://www.facebook.com/imperfecti.podcast/videos/725845810091047", img: "/images/posts/pod-fb-725.webp", alt: "Podcast clip on Facebook with the caption: the painful effects of neglect" },
      { platform: "Facebook", label: "\u201cYou\u2019re the worst mom\u201d", href: "https://www.facebook.com/imperfecti.podcast/videos/24417114714548454", img: "/images/posts/pod-fb-244.webp", alt: "Podcast clip on Facebook with the caption: you're the worst mom" },
      { platform: "Facebook", label: "On punishment", href: "https://www.facebook.com/imperfecti.podcast/videos/1396249804988994", img: "/images/posts/pod-fb-139.webp", alt: "Podcast clip on Facebook about punishment and neglected children" },
      { platform: "TikTok", label: "The painful effects of neglect", href: "https://www.tiktok.com/@imperfecti.podcast/video/7521694427283262742", img: "/images/posts/pod-tt-1.webp", alt: "Podcast clip on TikTok with the caption: the painful effects of neglect" },
      { platform: "TikTok", label: "\u201cYou\u2019re the worst mom\u201d", href: "https://www.tiktok.com/@imperfecti.podcast/video/7522848888462642454", img: "/images/posts/pod-tt-2.webp", alt: "Podcast clip on TikTok with the caption: you're the worst mom" },
    ],
    sections: [
      {
        heading: "The podcast",
        points: [
          "A podcast about building healthy relationships with children, at home and in the classroom: emotional intelligence, discipline without punishment, communication, boundaries and conscious parenting.",
          "Published on YouTube, Instagram, Facebook and TikTok.",
        ],
      },
      {
        heading: "What I did",
        points: [
          "Chose the moments, edited the clips, and wrote the on-screen hooks and copy.",
          "Planned content and worked with the designer on the visuals for each episode.",
          "Worked with the host on the script, and coordinated topics, talking points, recording sessions and editing.",
          "Scheduled and published across platforms, and filmed short episodes.",
        ],
      },
      {
        heading: "Why it worked",
        points: [
          "I focused on emotionally charged topics that the community deeply relates to.",
          "These topics started conversations in the comments, and got shared and saved — people relate to honest, vulnerable stories.",
        ],
      },
    ],
  },
  {
    slug: "transylvania-college",
    title: "Content and marketing strategy for an international school",
    client: "Transylvania College",
    role: "Social Media Specialist",
    when: "Mar 2025 – Sep 2026",
    summary: "One content system across four platforms, built to earn the trust of parents.",
    color: "butter",
    icon: "school",
    seoTitle: "School content strategy case study",
    seoDescription:
      "Cornelia Pop's content and social media strategy for Transylvania College across Instagram, Facebook, TikTok and LinkedIn.",
    facts: [
      { value: "23,000+", label: "followers across Instagram, Facebook, TikTok and LinkedIn" },
      { value: "36,000+", label: "followers across the 3 accounts I managed: the school, the Imperfecți podcast and Good Mom's Circle" },
    ],
    accounts: [
      { label: "Instagram", href: "https://www.instagram.com/transylvaniacol/" },
      { label: "Facebook", href: "https://www.facebook.com/TransylvaniaCol" },
      { label: "LinkedIn", href: "https://www.linkedin.com/school/transylvania-college-the-cambridge-international-school-in-cluj/" },
      { label: "TikTok", href: "https://www.tiktok.com/@transylvaniacollege" },
    ],
    samples: [
      { platform: "Instagram Reel", label: "Our mistakes don\u2019t define us", href: "https://www.instagram.com/reel/DKedUwlIV-T/", img: "/images/posts/tc-reel-1.webp", alt: "Instagram Reel of a student speaking on stage, captioned: our mistakes don't define us" },
      { platform: "Instagram Reel", label: "An exercise to try with your students", href: "https://www.instagram.com/reel/DJRbORWJgfr/", img: "/images/posts/tc-reel-2.webp", alt: "Instagram Reel of a teacher explaining a classroom exercise" },
      { platform: "Instagram post", label: "What makes a student feel safe in class?", href: "https://www.instagram.com/p/DH8DEyfNxTS/", img: "/images/posts/tc-post.webp", alt: "Instagram carousel cover: what makes a student feel safe in class?" },
    ],
    sections: [
      {
        heading: "The challenge",
        points: [
          "Standing out in a crowded education market.",
          "Explaining complex values, like wellbeing and education, clearly.",
          "Keeping a consistent, high-quality presence on every platform.",
        ],
      },
      {
        heading: "Strategy",
        points: [
          "Built a content system across platforms that matches the school's positioning.",
          "Created content pillars for parents, educators and students.",
          "Positioned the school's leadership as a trusted voice through personal branding.",
        ],
      },
      {
        heading: "Execution",
        points: [
          "Planned monthly content calendars, filmed and edited Reels and short videos.",
          "Turned long-form ideas into short-form content.",
          "Photographed events and turned them into content.",
          "Tracked analytics in Meta Business Suite and TikTok, and adjusted content based on what performed.",
        ],
      },
    ],
    tools: ["Notion", "Meta Business Suite", "Trello", "TikTok Creative Center", "Google Trends", "Looker Studio", "Google Analytics", "CapCut", "Sony A7S III", "iPhone 15 Pro Max"],
  },
  {
    slug: "personal-brand",
    title: "A personal brand and community for Ruxandra Baciu",
    client: "Good Mom's Circle, Transylvania College",
    role: "Personal brand content and community moderation",
    when: "2025 – 2026",
    summary: "Content and community for Good Mom's Circle, making the school's director a trusted voice in wellbeing and education.",
    color: "leaf",
    icon: "spark",
    facts: [{ value: "2,600+", label: "followers across Instagram, Facebook and TikTok" }],
    seoTitle: "Personal branding case study",
    seoDescription:
      "How Cornelia Pop built the personal brand of Ruxandra Baciu (Good Mom's Circle) on Facebook, Instagram and TikTok, and helped moderate a WhatsApp community of mothers and school directors.",
    accounts: [
      { label: "Instagram (Good Mom's Circle)", href: "https://www.instagram.com/goodmomscircle/" },
      { label: "Facebook", href: "https://www.facebook.com/ruxandramercea.inovareineducatie" },
      { label: "TikTok", href: "https://www.tiktok.com/@ruxandra.maria" },
    ],
    samples: [
      { platform: "Instagram Reel", label: "You\u2019ve watched Adolescence. What next?", href: "https://www.instagram.com/reel/DHyTGIDN2L9/", img: "/images/posts/gmc-reel.webp", alt: "Instagram Reel of Ruxandra Baciu talking about the series Adolescence" },
      { platform: "Instagram post", label: "Your kids ignoring screen time rules?", href: "https://www.instagram.com/p/DIleRVWofwu/", img: "/images/posts/gmc-post-1.webp", alt: "Instagram post: your kids ignoring screen time rules? Here's what actually works" },
      { platform: "Instagram post", label: "4 self-care practices that changed my life", href: "https://www.instagram.com/p/DIRGKQntr4y/", img: "/images/posts/gmc-post-2.webp", alt: "Instagram post: 4 self-care practices that changed my life" },
    ],
    sections: [
      {
        heading: "The goal",
        points: [
          "Position Ruxandra Baciu, the director of Transylvania College, as an expert in healthy relationships and education.",
          "Grow a community that feels personally connected to her message.",
          "Generate leads for the school and visibility for her digital products, such as e-books.",
        ],
      },
      {
        heading: "What I did",
        points: [
          "Came up with content ideas that fit her voice and the school's mission.",
          "Researched topics and wrote the copy.",
          "Set up and filmed the content, and oversaw video production and storytelling.",
          "Managed the posting schedule on Facebook, Instagram and TikTok.",
        ],
      },
      {
        heading: "The community",
        points: [
          "Helped moderate a WhatsApp community of mothers and school directors.",
        ],
      },
      {
        heading: "The topics",
        points: ["Wellbeing, self-care, education and leadership — to build trust and start conversations with educators, school leaders and parents."],
      },
    ],
  },
  {
    slug: "email-marketing",
    title: "Email marketing and lead nurturing for B2B clients",
    client: "Mejix",
    role: "B2B Email Marketing Specialist",
    when: "Aug 2024 – Mar 2025",
    summary: "Weekly newsletters for 5 B2B clients, with segments and automated flows.",
    color: "cobalt",
    icon: "mail",
    seoTitle: "B2B email marketing case study",
    seoDescription:
      "Cornelia Pop's B2B email marketing work: newsletters, segmentation and automated flows in Mailchimp, ActiveCampaign and Toast.",
    facts: [{ value: "5", label: "B2B clients with weekly newsletters" }],
    sections: [
      {
        heading: "The challenge",
        points: [
          "Messaging was inconsistent.",
          "Emails weren't tailored to audience segments.",
          "Open and click rates were low.",
        ],
      },
      {
        heading: "Strategy",
        points: [
          "Segmented the audience.",
          "Created automated flows based on what people did.",
          "Matched the messaging to customer intent and brand voice, and kept testing.",
        ],
      },
      {
        heading: "Execution",
        points: [
          "Designed and set up automated flows: welcome, promotional and retention.",
          "Designed newsletter layouts in Figma, then built and sent them.",
          "Wrote email copy that fits each brand, and tested subject lines and formats.",
          "Tracked and reported open and click rates for each client.",
        ],
      },
      {
        heading: "Results",
        points: [
          "Open and click rates improved as we kept testing.",
          "More engagement and repeat interactions with the emails.",
          "Timely, targeted emails that supported customer retention.",
        ],
      },
    ],
    tools: ["Mailchimp", "ActiveCampaign", "Toast", "Figma"],
  },
  {
    slug: "website-copywriting",
    title: "Website copy for 300+ businesses",
    client: "GoDaddy",
    role: "Creative Copywriter",
    when: "Mar 2024 – Sep 2024",
    summary: "SEO website and landing page copy, in each brand's own voice.",
    color: "lilac",
    icon: "pen",
    seoTitle: "SEO website copywriting case study",
    seoDescription:
      "Cornelia Pop wrote SEO website and landing page copy for 300+ businesses at GoDaddy, across health, tech, food, education and NGOs.",
    facts: [{ value: "300+", label: "client websites written" }],
    sites: [
      { label: "Anoonu", href: "https://anoonu.godaddysites.com/" },
      { label: "The GeeGees", href: "https://www.thegeegees.co.uk/" },
      { label: "Decluttered Mindset", href: "https://declutteredmindset.co.uk/" },
    ],
    sections: [
      {
        heading: "What I did",
        points: [
          "Wrote website and landing page copy for businesses in health, technology, food and beverage, education, NGOs and more.",
          "Worked closely with each client and adapted the tone to their business.",
          "Did keyword research and improved site structure and metadata.",
          "Kept quality consistent across a high volume of pages, and published them in the CMS.",
        ],
      },
    ],
  },
];

export const getCase = (slug: string) => caseStudies.find((c) => c.slug === slug);
