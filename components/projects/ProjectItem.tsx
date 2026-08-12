import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/projects";

interface ProjectItemProps {
  readonly project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group border-b border-zinc-800 py-4 first:pt-0">
      <div className="grid grid-cols-[136px_minmax(0,1fr)_24px] items-center gap-5">
        <div className="relative aspect-16/10 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="136px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-zinc-100">
            {project.title}
          </h3>

          <p className="mt-1 text-sm leading-5 text-zinc-400">
            {project.description}
          </p>

          <p className="mt-2 text-xs text-zinc-500">
            {project.technologies.join(" · ")}
          </p>
        </div>

        <Link
          href={project.liveUrl ?? project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
        >
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}