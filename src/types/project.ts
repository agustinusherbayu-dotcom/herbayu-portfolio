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

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  status: ProjectStatus;
  shortDescription: string;
  description: string;
  contribution: string;
  tools: string[];
};

export type LabEntry = {
  slug: string;
  title: string;
  category: string;
  status: "Concept" | "In Development" | "Prototype" | "Completed";
  summary: string;
  tags: string[];
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
