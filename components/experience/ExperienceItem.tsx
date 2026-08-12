import type { Experience } from "@/lib/experience"

interface ExperienceItemProps {
    readonly experience : Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
    return (
        <li className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6">
            <time className="text-sm text-zinc-500">{experience.period}</time>
            <div className="min-w-0">
                <h3 className="text-sm font-semibold text-zinc-200 sm:text-base">{experience.title}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">{experience.description}</p>
            </div>
        </li>
    )
}