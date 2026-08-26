import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { ABOUT } from "@/lib/about";

export function About (){
    return (
        <section id="about"
            aria-labelledby="about-heading"
            className="scroll-mt-8"
        >
            <div className="container mx-auto max-w-5xl px-6 mt-10">
                <h2 is="about-heading" className="text-lg font-semibold tracking-tight text-white">About Me</h2>

                <div className="mt-5 max-w-2xl space-y-2">
                    {ABOUT.paragraphs.map((paragraph)=> (
                        <p key={paragraph} className="text-sm leading-6 text-zinc-400">{paragraph}</p>
                    ))}
                </div>

                <div className="mt-7 flex items-center gap-5">
                   <Link href={"https://github.com/Wil1756"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                    className="text-zinc-400 transition-colors hover:text-white"
                   >
                    <FaGithub size={18} strokeWidth={1.8}/>
                   </Link> 
                   <Link href={"https://www.linkedin.com/in/william-opio"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                    className="text-zinc-400 transition-colors hover:text-white"
                   >
                    <FaLinkedin size={18} strokeWidth={1.8}/>
                   </Link>
                   <Link href={"johnwilliams1756@gmail.com"}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label="Email"
                     className="text-zinc-400 transition-colors hover:text-white"
                   >
                    <IoIosMail size={18} strokeWidth={1.8}/>
                   </Link>
                </div>
                <div className="mt-12"/>
                {/* <div aria-hidden="true" className="mt-10 h-px w-full bg-zinc-800"></div> */}
            </div>
        </section>
    )
}