export type ProjectCategory =
  | "Automation & Workflow"
  | "Software & Digital Products"
  | "Industrial Engineering"
  | "Business & Process Innovation";

export type ProjectStatus =
  | "Status to confirm"
  | "Concept"
  | "In Development"
  | "Prototype"
  | "Completed";

export type ProjectVisual = {
  src: string;
  alt: string;
  kind: "illustration" | "screenshot" | "photograph" | "technical drawing";
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "demo" | "video" | "documentation";
};

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  contribution: string;
  tools: string[];
  visuals: ProjectVisual[];
  objectives?: string[];
  technicalApproach?: string[];
  nextSteps?: string[];
  links?: ProjectLink[];
};

export type LabEntry = {
  slug: string;
  title: string;
  category: string;
  status: "Concept" | "In Development" | "Prototype" | "Completed";
  summary: string;
  tags: string[];
  visual: ProjectVisual;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
};

export type TimelineEntry = {
  period: string;
  title: string;
  institution: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: { name: string; detail?: string }[];
};
