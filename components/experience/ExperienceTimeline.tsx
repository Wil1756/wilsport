import { EXPERIENCE } from "@/lib/experience";
import { ExperienceItem } from "./ExperienceItem";

export function ExperienceTImeline (){
    return (
        <section id="experience"
            aria-labelledby="experience-heading"
            className="text-lg font-semibold tracking-tight text-white"
        >
            <div className="container mx-auto max-w-5xl px-6 mt-10">
                <h2 id="experince-heading" className="text-lg font-semibold tracking-tight text-white">Experience</h2>
                <div className="mt-5">
                    <ol>
                        {EXPERIENCE.map((experience)=> (
                            <ExperienceItem
                                key={`${experience.period}-${experience.title}`}
                                experience={experience}
                            />
                        ))}
                    </ol>
                </div>
                <div aria-hidden="true" className="mt-10 h-px w-full bg-zinc-800"></div>
            </div>
        </section>
    )
}