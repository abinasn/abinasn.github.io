export type WorkEntry = {
  slug: string;
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  startDate: string;
  endDate: string | null;
  product: string;
  headline: string;
  summary: string;
  metrics: string[];
  stack: string[];
  productUrl?: string;
  sceneSubject: string;
  variant: "feature" | "compact";
};

export const work: WorkEntry[] = [
  {
    slug: "abs-cbn",
    company: "ABS—CBN",
    companyUrl: "https://www.abs-cbn.com",
    role: "Staff engineer",
    period: "2025 — present",
    startDate: "2025-01-01",
    endDate: null,
    product: "BeyondCaptions",
    headline:
      "Subtitling a video used to take a full afternoon. Now it takes minutes.",
    summary: "an AI subtitle and transcription platform for media teams.",
    metrics: ["88% first-pass accuracy", "sole engineer, architecture to production"],
    stack: ["React", "Node.js", "MongoDB", "AWS ECS"],
    sceneSubject: "campaign-launch-video",
    variant: "feature",
  },
  {
    slug: "neuralspace",
    company: "NeuralSpace",
    companyUrl: "https://neuralspace.ai",
    role: "Staff engineer",
    period: "2022 — 2025",
    startDate: "2022-02-01",
    endDate: "2025-01-31",
    product: "StorytellerAI",
    headline: "A blank page, then a finished story with its own art and music.",
    summary: "an infinite-canvas workspace for creative teams.",
    metrics: ["1,000+ users", "85% faster, per beta testers"],
    stack: ["React Flow", "Node.js", "OpenAI", "Redis"],
    sceneSubject: "the-heist-graphic-novel",
    variant: "feature",
  },
  {
    slug: "reverie",
    company: "Reverie",
    companyUrl: "https://reverieinc.com",
    role: "Technical lead",
    period: "2019 — 2022",
    startDate: "2019-09-01",
    endDate: "2022-03-31",
    product: "Prabandhak",
    headline:
      "Translators kept retyping sentences the company had already paid for once.",
    summary: "a translation management platform and freelancer marketplace.",
    metrics: ["42% of words reused from memory", "3.2× faster review turnaround"],
    stack: ["React", "Java", "Elasticsearch", "Redis"],
    sceneSubject: "taxpayer-portal-content",
    variant: "feature",
  },
  {
    slug: "tripborn",
    company: "Tripborn",
    role: "Senior software engineer",
    period: "2018 — 2019",
    startDate: "2018-10-01",
    endDate: "2019-09-30",
    product: "Fare Aggregator",
    headline: "Four airline feeds, one search box, and nobody waiting on the slowest one.",
    summary:
      "a parallel fare search service normalizing four GDS and consolidator feeds.",
    metrics: ["search time down 75%", "conversion up 30%"],
    stack: ["Node.js", "Redis", "REST APIs", "MySQL"],
    sceneSubject: "BLR → DEL",
    variant: "feature",
  },
  {
    slug: "metaverse",
    company: "Metaverse Internet",
    role: "Co-founder",
    period: "2017 — 2018",
    startDate: "2017-01-01",
    endDate: "2018-10-31",
    product: "MetaDemy",
    headline: "Good engineering teaching, priced for the students who needed it most.",
    summary: "an affordable technical education platform, built and run end to end.",
    metrics: ["23 students in cohort 01", "90% course completion"],
    stack: ["PHP Laravel", "MySQL", "Redis"],
    sceneSubject: "cohort 01",
    variant: "feature",
  },
  {
    slug: "capgemini",
    company: "Capgemini",
    companyUrl: "https://www.capgemini.com",
    role: "Software engineer",
    period: "2015 — 2016",
    startDate: "2015-08-01",
    endDate: "2016-12-31",
    product: "Continental Portal",
    headline: "My first production code shipped inside a codebase I didn't write.",
    summary:
      "an SAP Enterprise Portal used by internal teams at a global tyre manufacturer.",
    metrics: ["UI defect fixes", "cross-browser alignment", "small jQuery features"],
    stack: ["SAP Enterprise Portal", "jQuery", "CSS3"],
    sceneSubject: "plant request form",
    variant: "feature",
  },
];

export function findWorkEntry(slug: string): WorkEntry | undefined {
  return work.find((entry) => entry.slug === slug);
}
