import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";


export function Hero(){
    return(
        <section
            is="home"
            className="scroll-mt-8 pt-12 pb-12 sm:pt-14 sm:pb-14"
        >
            <div className="container mx-auto max-w-5xl px-6">
                <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_220px] md:gap-16" >
                    {/* Hero {content} */}
                    <div>
                        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                            William Opio 
                        </h1>
                        <p className="mt-2 text-xl text-zinc-300">
                            Software Engineer
                        </p>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
                            I build modern web Application, APIs, and cloud based systems using React,Next.js, Typescript, Python, Node.js
                            and AWS.
                        </p>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
                            I'm currently focused on growing toward cloud and solutions engineering connecting
                            software, infrastructure, and business requirements to build practical, scalable systems.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3">
                            <a href="#projects"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-black"
                            >
                                View Projects
                                <ArrowDown/>
                            </a>
                            <a href="#blog"
                                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 text-sm font-medium text-zinc-200"
                            >
                                Read Blog
                                <ArrowUpRight/>
                            </a>
                        </div>
                    </div>

                    {/* {Profile image} */}
                    <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border border-zinc-800 md:mx-0 md:mt-2 md:h-48 md:w-48">
                        <Image
                            src="/images/William.png"
                            alt="William Opio"
                            fill
                            priority
                            sizes="(max-width: 768px) 192px, 208px"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="mt-10 h-px w-full bg-zinc-800" />
            </div>
        </section>
    )
}