import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

import type { Project } from "@/lib/projects";

interface ProjectItemProps {
    readonly project: Project;
}

export function ProjectItem({project}: ProjectItemProps){
    return (
        <article className="group border-b border-zinc-800 py-8 first:pt-0 last:border-b-0">
            <div className="grid gap-5 sm:grid-cols-[136px_minmax(0,1fr)_24px] sm:items-center sm:gap-5">
                {/* thumbnail */}
                <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`view ${project.title}`}
                    className="relative block aspect-[16/10]overflow-hidden rounded-md border-zinc-800 bg-zinc-900"
                >
                    <Image 
                        src={project.image} 
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 640px) 100vw, 136px"
                        className="object-ccover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                </Link>
                {/* content */}

                <div className="min-w-8">
                    <h3 className="text-base font-semibbold text-zinc-100">
                        {project.title}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                        {project.description}
                    </p>
                    <ul
                        aria-label={`${project.title} technologies`} 
                        className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-zinc-500"
                    >
                        {project.technologies.map((technology, index)=> (
                            <li key={`${project.title}-${technology}`}
                                className="flex items-center gap-2"
                            >
                                {index > 0 && (
                                    <span aria-hidden="true">.</span>
                                )}
                                <span>{technology}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* arrow */}
                <Link 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`open ${project.title}`}
                    className="hidden text-zinc-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white sm:block"
                >
                        <ArrowUpRight size={18} strokeWidth={1.7}/>
                </Link>
            </div>
        </article>
    );
}