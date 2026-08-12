export interface Experience {
    readonly period: string;
    readonly title: string;
    readonly description: string;
}

export const EXPERIENCE: readonly Experience[] = [
    {
        period : "2024 - Present",
        title: "Software Engineer",
        description:"Building modern web applications, APIs, and software systmes with a focus on scalable architecture and cloud technologies."
    },
    {
        period:"2020 - 2024",
        title:"Frontend Developer",
        description:"Developed responsive web applications and user interfaces using React, Typescript and modern frontend technologies"
    },
    {
        period:"2014 - 2020",
        title:"Civil Engineer/Manager",
        description:"Worked on a couple high rise construction projects at heart of Kampala Uganda, collaborating with multidisciplinary teams and managing technical project requirements."
    }
]