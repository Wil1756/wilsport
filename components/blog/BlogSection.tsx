import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogList } from "./BlogList";
import { getMediumPosts } from "@/lib/medium";

export async function BlogSection(){
    const posts = await getMediumPosts();

    const mediumProfileUrl = process.env.MEDIUM_PROFILE_URL;
    return (
        <section id="blog"
            aria-labelledby="blog-heading"
            className="scroll-mt-8"
        >
            <div className="container mx-auto max-w-5xl px-6">
                <div className="flex items-center justify-between gap-6 mt-8">
                    <h2 id="blog-heading" className="text-lg font-semibold tracking-tight text-white">Latest Blog Posts</h2>

                    {mediumProfileUrl && (
                        <Link href={mediumProfileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex shrink-0 items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                            <span>View all posts</span>
                            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1"/>
                        </Link>
                    )}
                </div>
                <div className="mt-5">
                    <BlogList posts={posts}/>
                </div>
                <div aria-hidden="true" className="mt-8 h-px w-full gg-zinc-800"/>
            </div>
        </section>
    )
}