import Parser from "rss-parser";
import  type { BlogPost } from "@/types/blog";

interface MediumFeedItem{
    readonly title?: string;
    readonly link?: string;
    readonly pubDate?: string;
    readonly isDate?: string;
    readonly contentSnippet?: string;
    readonly content?: string;
}

const parser = new Parser<unknown, MediumFeedItem>();

export async function getMediumPosts(): Promise<readonly BlogPost[]> {
    const rssUrl = process.env.MEDIUM_RSS_URL;

    if (!rssUrl){
        throw new Error(
            "MEDIUM_RSS_URL is  not configured"
        )
    }
    // no need to request medium everytime somebody vists my portfolio
    const response = await fetch (rssUrl, {
        next: {
            revalidate: 1800,
        },
    });

    if (!response.ok){
        throw new Error(
            `Medium RSS request failed: ${response.status}`
        )
    }

    const xml = await response.text();

    const feed = await parser.parseString(xml);

    return feed.items.filter((item): item is MediumFeedItem & {
        title: string;
        link: string;
    } => 
        typeof item.title === "string" && item.title.length > 0 &&
        typeof item.link === "string" && item.link.length > 0 
    )
    .map((item)=> ({
        title: item.title,
        link: item.link,
        pubDate: item.isDate ?? item.pubDate ?? "",
        description: item.contentSnippet ?? item.content ?? "",
    }));
}
