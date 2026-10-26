export type BuildStep = {
  label: string;
  line: string;
};

export const buildSteps: BuildStep[] = [
  {
    label: "Interface",
    line: "The interface goes up in `React` and `TypeScript`.",
  },
  {
    label: "Services",
    line: "Behind it, `Node.js` or `FastAPI` when the work is Python-shaped.",
  },
  {
    label: "State",
    line: "State lives in `MongoDB`, or `PostgreSQL` when it needs to be relational.",
  },
  {
    label: "Intelligence",
    line: "`LLM APIs` where the product needs to understand something.",
  },
  {
    label: "Edges",
    line: "`Auth`, `API Gateway`, `CloudFront` and `S3` hold it together.",
  },
  {
    label: "Shipping",
    line: "Then `Docker`, `CI/CD` and `AWS ECS` put it in front of people.",
  },
];

export const disciplines = [
  "System design",
  "Data structures",
  "Microservices",
  "AI integration",
] as const;

export const stack: string[] = [
  ...new Set(
    buildSteps.flatMap((step) =>
      [...step.line.matchAll(/`([^`]+)`/g)].map((match) => match[1]),
    ),
  ),
];
