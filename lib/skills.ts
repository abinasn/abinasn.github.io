export type Skill = {
  name: string;
  usedIn: string[];
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", usedIn: ["abs-cbn", "neuralspace", "reverie"] },
      { name: "TypeScript", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "Redux Toolkit", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "Tailwind CSS", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "React Flow", usedIn: ["neuralspace"] },
      { name: "Ant Design", usedIn: ["reverie"] },
      { name: "HTML, CSS & jQuery", usedIn: ["capgemini"] },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", usedIn: ["abs-cbn", "neuralspace", "reverie", "tripborn"] },
      { name: "Express", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "Microservices", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "WebSockets", usedIn: ["abs-cbn"] },
      { name: "REST APIs", usedIn: ["abs-cbn", "tripborn", "capgemini"] },
      { name: "PHP Laravel", usedIn: ["metaverse"] },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "MongoDB", usedIn: ["abs-cbn", "neuralspace", "reverie", "tripborn"] },
      { name: "Redis", usedIn: ["neuralspace", "tripborn", "metaverse"] },
      { name: "Elasticsearch", usedIn: ["reverie"] },
      { name: "MySQL", usedIn: ["metaverse"] },
    ],
  },
  {
    label: "AI",
    skills: [
      { name: "OpenAI Assistants API", usedIn: ["neuralspace"] },
      { name: "Speech-to-text & translation", usedIn: ["abs-cbn", "reverie"] },
      { name: "Midjourney & Suno AI", usedIn: ["neuralspace"] },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", usedIn: ["abs-cbn", "tripborn", "metaverse"] },
      { name: "Azure", usedIn: ["neuralspace", "reverie"] },
      { name: "Docker & Kubernetes", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "CI/CD", usedIn: ["abs-cbn", "neuralspace"] },
      { name: "FFmpeg & HLS", usedIn: ["abs-cbn"] },
    ],
  },
];
