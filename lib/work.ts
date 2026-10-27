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
    startDate: "2025-04-01",
    endDate: null,
    product: "BeyondCaptions",
    headline: "Subtitles in minutes, not hours.",
    summary:
      "an AI-assisted subtitle, transcription and translation platform with a collaborative browser-based editor.",
    metrics: [
      "86% less QC time",
      "30+ hours of content a day",
      "sole engineer, architecture to production",
    ],
    stack: ["TypeScript", "React", "Node.js", "MongoDB", "AWS ECS"],
    sceneSubject: "campaign-launch-video",
    variant: "feature",
  },
  {
    slug: "neuralspace",
    company: "NeuralSpace",
    companyUrl: "https://neuralspace.ai",
    role: "Staff engineer",
    period: "2022 — 2025",
    startDate: "2022-03-01",
    endDate: "2025-03-31",
    product: "StorytellerAI",
    headline: "Your own AI storytellers, from first idea to finished story.",
    summary:
      "a creative AI companion: build your own storytellers, chat with them, and generate images and music.",
    metrics: ["1,000+ users", "85% more productive, per beta testers"],
    stack: ["React", "React Flow", "Node.js", "OpenAI", "Azure"],
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
    headline: "Translation at scale for India's languages.",
    summary:
      "a translation platform for 18 low-resource Indian languages, with a CAT tool, translation memory and a freelancer marketplace.",
    metrics: ["70% more efficient translators", "5,000+ freelancers on the marketplace"],
    stack: ["React", "Ant Design", "Node.js", "MongoDB", "Elasticsearch"],
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
    product: "Bus Ticket Aggregator",
    headline: "One search for bus tickets across four providers.",
    summary:
      "a service that searched four bus ticket providers at once and showed the lowest price first.",
    metrics: ["search time down 75%", "conversion up 30%"],
    stack: ["Node.js", "MongoDB", "Redis", "AWS"],
    sceneSubject: "BLR → HYD",
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
    headline: "An affordable coding school, built from scratch.",
    summary: "a small ed-tech startup for competitive coding and full-stack courses.",
    metrics: ["23 students in the first batch", "90% course completion"],
    stack: ["PHP Laravel", "MySQL", "Redis", "AWS"],
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
    headline: "My first job: improving an enterprise portal.",
    summary:
      "an SAP Enterprise Portal used by internal teams at a global tyre manufacturer.",
    metrics: ["UI bug fixes", "cross-browser fixes", "small jQuery features"],
    stack: ["HTML", "CSS", "jQuery", "SAP Enterprise Portal"],
    sceneSubject: "plant request form",
    variant: "feature",
  },
];

export function findWorkEntry(slug: string): WorkEntry | undefined {
  return work.find((entry) => entry.slug === slug);
}
