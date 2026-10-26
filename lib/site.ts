export const CAREER_START_YEAR = 2016;

export function yearsOfExperience(): number {
  return new Date().getFullYear() - CAREER_START_YEAR;
}

export const site = {
  name: "Abinas Patra",
  firstName: "Abinas",
  role: "Staff Software Engineer",
  headline: "Full-stack engineer — AI-native products, real-time interfaces",
  location: "India",

  summary:
    "Full-stack developer architecting and delivering scalable web applications that generate measurable business value. Specialized in React, Node.js, and MongoDB ecosystems with expertise in AI integration. Proven track record of leading development teams and transforming complex problems into innovative, user-centered solutions that drive revenue growth.",
  metaDescription:
    "Staff Software Engineer specialising in React, Node.js, MongoDB and AI integration. Ten years building AI-native products, real-time interfaces and the platforms underneath.",

  availability: "open to staff-level roles",
} as const;

export const contact = {
  email: "2010abinas@gmail.com",
  linkedin: "https://www.linkedin.com/in/abinaspatra/",
  github: "https://github.com/abinasn",
  resume: "/Abinas_Patra.pdf",
} as const;

export const wordmark = "abinasp";

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Skill", href: "/#skill" },
  { label: "Hub", href: "/hub" },
] as const;

export const headerCta = { label: "Get in touch", href: "/#contact" } as const;

export const hero = {
  avatar: { src: "/me.jpg", alt: "Abinas Patra", zoom: 1, shape: "circle" },
  name: "Abinas Patra",
  headline: {
    before: "I've led teams, founded a company, and shipped products",
    accent: "alone.",
    after: "",
  },

  subhead:
    "Ten years building software end to end, as staff engineer, technical lead and co-founder. AI-native products, real-time systems, and the cloud infrastructure that keeps them running.",

  primaryCta: { label: "See the work", href: "/#work" },
  secondaryCta: { label: "Résumé", href: contact.resume },

  stats: [
    "Staff engineer",
    "Tech lead",
    "Co-founder",
  ],
} as const;

export const workSection = {
  eyebrow: "01 — Work",
  title: "Ten years, six products",
  intro:
    "Each one started as somebody's slow afternoon. Scroll for the short version, open one for the long.",
  cta: { label: "Full résumé", href: contact.resume },
} as const;

export const skillSection = {
  eyebrow: "How I build",
  lead: "I start from a requirement and a whiteboard sketch.",
  note: "Sharpening system design and data structures in the open",
  cta: { label: "see the hub", href: "/hub" },
} as const;

export const contactSection = {
  eyebrow: "Get in touch",
  title: "Tell me what you're building.",
  intro:
    "Roles, freelance work, or a problem you're stuck on. I reply within a couple of days.",
  submit: "Send message",
} as const;
