/**
 * Single source of truth for all projects.
 *
 * The Projects grid (home page) reads the summary fields; each project's
 * detail page (/projects/:slug) reads the full `caseStudy`.
 *
 * To flesh out a case study, fill in the `caseStudy` block. Any project
 * WITHOUT a `caseStudy` simply renders as a card with no "Read case study"
 * link, so you can write them up one at a time.
 *
 * Screenshots: drop image files in /public (e.g. /public/projects/stackle-1.png)
 * and reference them as "/projects/stackle-1.png".
 */

export interface CaseStudySection {
  heading: string;
  /** One or more paragraphs. */
  body: string[];
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  /** Optional caption shown under the image. */
  caption?: string;
}

export interface CaseStudy {
  /** One-line framing shown at the top of the detail page. */
  tagline: string;
  /** Quick facts rendered as a metadata strip. */
  meta: {
    role: string;
    timeline: string;
    /** e.g. "Solo", "2 engineers", "Cross-functional team". */
    team?: string;
  };
  /** Optional headline metrics/outcomes, e.g. { value: "40%", label: "faster load" }. */
  results?: { value: string; label: string }[];
  /** The narrative. Recommended order: Overview → Problem → Approach → Outcome. */
  sections: CaseStudySection[];
  images?: CaseStudyImage[];
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  stack: string[];
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Fill this in to activate the "Read case study" link + detail page. */
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "stackle-vest",
    title: "Stacklevest",
    role: "Frontend Engineer",
    stack: ["Next.js 14", "TypeScript", "PWA", "React"],
    shortDescription:
      "A Nigerian personal-finance super-app, built as an installable PWA with no app store required.",
    detailedDescription:
      "Stacklevest is a personal-finance super-app that lets people manage a wallet, send money, pay bills, budget with envelope-style pots, track spending, and learn about money, all from the browser. I built effectively the entire frontend: from the pre-launch landing page to a full authenticated PWA spanning 10+ modules.",
    keyFeatures: [
      "Wallet, transfers, and bill payments (airtime, data, electricity)",
      "Envelope budgeting and expense tracking",
      "Multi-level KYC and onboarding flows",
      "Gamified financial-literacy hub with quizzes and courses",
    ],
    liveUrl: "https://stacklevest.com",
    githubUrl: "",
    caseStudy: {
      tagline:
        "From a blank landing page to a full fintech PWA: 10+ modules shipped in three months on a two-person team.",
      meta: {
        role: "Frontend Engineer (sole frontend)",
        timeline: "March 2026 - Present",
        team: "2 engineers: frontend (me) + backend",
      },
      results: [
        { value: "10+", label: "product modules shipped" },
        { value: "~3 mo", label: "zero to functional fintech" },
        { value: "409", label: "commits over the build" },
      ],
      sections: [
        {
          heading: "Overview",
          body: [
            "Stacklevest is a Nigerian personal-finance super-app: a Progressive Web App that lets users manage a wallet, send money, pay bills, budget with envelope-style pots, track expenses, and learn about personal finance, all without downloading anything from an app store.",
            "I own the frontend end to end. Working alongside a single backend engineer, I built the entire product surface: from a pre-launch marketing site through to a full authenticated PWA covering the wallet, bills, budgeting, expense tracking, KYC, a gamified learning hub, tax tools, savings, cards, and referrals.",
          ],
        },
        {
          heading: "The Problem",
          body: [
            "When I joined in March 2026, the product didn't exist. There was a blank pre-launch landing page and a backend API with no frontend consuming any of it: no PWA shell, no authenticated routes, no design system. The entire product surface had to be built from scratch.",
            "Building against a live, evolving API also surfaced real integration gaps: missing fields in transfer responses, incorrect counterparty names on account inflows, bill payments stalling in a pending state with no way to reconcile them after a timeout. Part of the job was catching these, documenting them clearly, and escalating them so the backend could close them.",
          ],
        },
        {
          heading: "My Approach",
          body: [
            "I chose Next.js 14 with the App Router specifically for its server layer. The Next.js server sits in front of the backend as a proxy, so API credentials and the upstream base URL are never exposed to the client, a hard requirement for a financial product.",
            "I made the deliberate call to ship a PWA rather than a native app. It sidesteps app-store gatekeeping, installs instantly via 'Add to Home Screen', and let a two-person team move far faster. I hardened it across several rounds of PWA migration work covering offline behaviour, install reliability, and the app shell.",
            "For money movement, every financial operation (transfers, bill payments, budget funding) carries an idempotency key, so a network retry can never double-charge a user. I paired that with a localStorage-first, server-synced model: quick-pay preferences, recents, and receipts load instantly from the device but stay consistent across devices once synced. Newer, riskier surfaces (crypto, FX) sit behind context-driven feature flags so they can be gated without shipping dead code to users.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "In roughly three months (March to June 2026), Stacklevest went from zero product to a fully functional fintech PWA with more than ten modules, across around 409 commits.",
            "Users can now send money, pay electricity, airtime, and data bills, budget with envelopes, track their spending, and complete identity verification, entirely from a mobile browser with no app-store install. Saved data, like quick-pay meter numbers and send-money recents, syncs across devices end to end.",
          ],
        },
      ],
      images: [
        // Drop screenshots in /public/projects/ and reference them here, e.g.:
        // { src: "/projects/stackle-wallet.png", alt: "Stacklevest wallet screen", caption: "The wallet: balance, transfers, and activity log." },
        // { src: "/projects/stackle-budget.png", alt: "Envelope budgeting screen", caption: "Envelope budgeting: split a budget into category pots." },
      ],
    },
  },
  {
    slug: "consultifycare",
    title: "ConsultifyCare Telemedicine Platform",
    role: "Front End Developer & Co-founder",
    stack: ["Next.js", "Tailwind CSS", "Supabase", "Go (Fiber)"],
    shortDescription:
      "A developing telemedicine platform focused on improving digital access to healthcare.",
    detailedDescription:
      "ConsultifyCare is a healthtech startup I contribute to as a Front End Developer. Due to an active NDA, I cannot disclose internal platform details or proprietary system workflows. My involvement focuses on building structured, responsive interfaces, improving user experience, and supporting scalable frontend architecture. The work emphasizes clean design, performance, and reliability without revealing confidential mechanics.",
    keyFeatures: [
      "User focused responsive UI development",
      "Design consistency and clean layouts",
      "High level backend integration",
      "Usability and accessibility improvements",
      "Scalable front end structure",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "bayhood-receipts",
    title: "BAYHOOD Preparatory School Receipt Generator App",
    role: "Developer",
    stack: ["Next.js", "Tailwind", "Supabase"],
    shortDescription:
      "A modern receipt generation and management tool built for BAYHOOD Preparatory School.",
    detailedDescription:
      "This system allows the school to create, edit, and manage receipts through a clean, organized workflow. It includes a searchable dashboard, secure database storage, and AI assisted autofill to streamline administrative processes.",
    keyFeatures: [
      "Create and edit receipts",
      "Supabase storage and retrieval",
      "AI powered autofill",
      "Clean, responsive UI",
    ],
    liveUrl: "",
    githubUrl: "",
  },
  {
    slug: "omoluwabi-golfers",
    title: "Omoluwabi Golfers Nomination App",
    role: "Developer",
    stack: ["Next.js", "Supabase"],
    shortDescription:
      "A secure nomination system for the Omoluwabi Golfers Electoral Committee.",
    detailedDescription:
      "The platform manages nominations through a restricted admin login system and a verified list of eligible members. It ensures accurate record keeping and prevents unauthorized submissions.",
    keyFeatures: [
      "Admin login",
      "Verified members list",
      "Nomination submission form",
      "Secure data storage",
    ],
    liveUrl: "",
    githubUrl: "",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
