import type { Project, ProjectCategory } from "@/types/project";

export const projectCategories: ProjectCategory[] = [
  "Automation & Workflow",
  "Software & Digital Products",
  "Industrial Engineering",
  "Business & Process Innovation",
];

export const projects: Project[] = [
  {
    slug: "procurement-automation-system",
    name: "Procurement Automation System",
    category: "Automation & Workflow",
    status: "Status to confirm",
    shortDescription:
      "An n8n workflow for procurement request processing.",
    description:
      "A showcase of an n8n workflow and procurement request processing. Implementation status and further project details are to be confirmed.",
    contribution: "",
    tools: ["n8n"],
  },
  {
    slug: "procurement-monitoring-dashboard",
    name: "Procurement Monitoring Dashboard",
    category: "Software & Digital Products",
    status: "Status to confirm",
    shortDescription:
      "An operational monitoring interface with CMA branding.",
    description:
      "An operational monitoring interface with CMA branding. Screenshots, data sources, and implementation status are to be confirmed.",
    contribution: "",
    tools: [],
  },
  {
    slug: "digital-cooperative-system",
    name: "Digital Cooperative System",
    category: "Business & Process Innovation",
    status: "Status to confirm",
    shortDescription:
      "A paperless administration concept with PDF and Excel export themes.",
    description:
      "A digital cooperative system theme focused on paperless administration and PDF and Excel exports. The scope and implementation status are to be confirmed.",
    contribution: "",
    tools: [],
  },
  {
    slug: "dompetkuff-personal-finance-app",
    name: "DompetkuFF",
    category: "Software & Digital Products",
    status: "Status to confirm",
    shortDescription: "A personal finance application concept.",
    description:
      "A personal finance application concept. Product scope, prototype details, and implementation status are to be confirmed.",
    contribution: "",
    tools: [],
  },
  {
    slug: "industrial-waste-processing",
    name: "Industrial Waste Processing",
    category: "Industrial Engineering",
    status: "Status to confirm",
    shortDescription:
      "Engineering experiments involving blood meal production and moisture reduction.",
    description:
      "Engineering experiments involving blood meal production and moisture reduction. Experimental scope and results are to be confirmed before publication.",
    contribution: "",
    tools: [],
  },
  {
    slug: "industrial-facility-equipment-design",
    name: "Industrial Facility & Equipment Design",
    category: "Industrial Engineering",
    status: "Status to confirm",
    shortDescription:
      "Layouts, tank concepts, production planning, and technical drawings.",
    description:
      "Industrial facility and equipment design themes covering layouts, tank concepts, production planning, and technical drawings. Project status and contribution details are to be confirmed.",
    contribution: "",
    tools: [],
  },
];
