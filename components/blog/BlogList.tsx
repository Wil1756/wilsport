"use client"
import {useMemo, useState} from "react";

import type { BlogPost } from "@/types/blog";
import { BlogItem } from "./BlogItem";

interface BlogListProps {
    readonly posts: readonly BlogPost[];
}

export function BlogList({posts}: BlogListProps){
    const [query, setQuery] =useState("");

    const filteredPosts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if(!normalizedQuery){
            return posts;
        }
        return posts.filter((post)=> post.title
            .toLowerCase()
            .includes(normalizedQuery)
        )
    },[posts, query])

    return (
        <div>
            <input id="blog-search"
                type="search"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                placeholder="Search blog posts...."
                autoComplete="off"
                className="h-11 w-full rounded-md border border-zinc-800 bg-zinc-900/60 px-4 text-sm text-white outline-none placeholder:text-zinc-600 transition-colors focus:border-zinc-600 "
            />

            {filteredPosts.length > 0 ? (
                <ul className="mt-4">
                    {filteredPosts.map((post)=> (
                        <BlogItem key={`${post.link}-${post.pubDate}`} post={post}/>
                    ))}
                </ul>
            ):(
                <p className="py-8 text-sm text-zinc-500">
                    No blog posts found
                </p>
            )}
        </div>
    )
}