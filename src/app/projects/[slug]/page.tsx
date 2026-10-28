import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

async function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} | HERBAYU`,
    description: project.shortDescription,
  };
}

function ProjectPageFallback() {
  return (
    <main className="case-study-page">
      <div className="case-study-wrap">
        <p className="eyebrow">Project notes</p>
        <p role="status">Loading case study…</p>
      </div>
    </main>
  );
}

async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main className="case-study-page">
      <div className="case-study-wrap">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={15} aria-hidden="true" /> Back to selected work
        </Link>
        <header className="case-study-header">
          <p className="eyebrow">{project.category}</p>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <p className="status-label">{project.status}</p>
        </header>
        <div className="case-study-copy">
          <section>
            <h2>Project theme</h2>
            <p>{project.shortDescription}</p>
          </section>
          <section>
            <h2>Contribution</h2>
            <p>
              {project.contribution ||
                "Specific contribution details have not been supplied for publication."}
            </p>
          </section>
        </div>
        {project.tools.length > 0 && (
          <section className="case-study-note">
            <h2>Technology noted</h2>
            <p>{project.tools.join(", ")}</p>
          </section>
        )}
        <section className="case-study-note">
          <h2>Evidence and next details</h2>
          <p>
            The project status, screenshots, and additional verified details are to be confirmed. No live demo or production integration is provided on this portfolio.
          </p>
        </section>
        <Link href="/#contact" className="text-link">
          Discuss a collaboration <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </main>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<ProjectPageFallback />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}
