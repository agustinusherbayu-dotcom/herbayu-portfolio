import Image from "next/image";
import type { ProjectVisual } from "@/types/project";

export function ProjectVisualPreview({
  visual,
  name,
  className = "",
}: {
  visual: ProjectVisual;
  name: string;
  className?: string;
}) {
  return (
    <div className={`project-visual ${className}`}>
      <Image
        src={visual.src}
        alt={visual.alt}
        width={1600}
        height={1000}
        sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
        className="project-visual-image"
      />
      <span className="project-visual-caption">
        {visual.kind === "illustration" ? "Illustrative concept · not project documentation" : name}
      </span>
    </div>
  );
}
