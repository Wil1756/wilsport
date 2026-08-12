import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { ProjectItem } from "./ProjectItem";

export function ProjectsSection(){
    return (
        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
            <div className="container mx-auto max-w-5xl px-6">
                {/* selection header */}
                <div className="flex items-center justify-between gap-6">
                    <h2 id="projects-heading" className="text-lg font-semibold tracking-tight text-white">
                        Selected Projects
                    </h2>
                    <Link href="" className="group inline-flex shrink-0 items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white">
                        <span>View all projects</span>
                        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1"/>
                    </Link>
                </div>
                {/* project list */}
                <div className="mt-5">
                    {PROJECTS.map((project) => (
                        <ProjectItem key={project.title} project={project}/>
                    ))}
                </div>
                {/* section separator */}
                <div aria-hidden="true" className="mt-10 h-px w-full bg-zinc-800"></div>
            </div>
        </section>
    )
}
