import type { ProjectCaseStudy } from "@/data/projects";

export default function ProjectPreview({
  priority,
  image,
}: {
  priority: boolean;
  image?: {
    slug: string;
    alt: string;
  };
}) {
  if (!image?.slug) {
    return null;
  }

  return (
    <div className="project-preview">
      <img
        alt={image.alt}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        height="900"
        loading={priority ? "eager" : "lazy"}
        src={`/projects/${image.slug}.webp`}
        width="1440"
      />
    </div>
  );
}
// image?: {
//         slug: string;
//         alt: string;
//     } | undefined;
