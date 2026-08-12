import { BlogPost } from "@/types/blog"

interface BlogItemProps{
    readonly post: BlogPost;
}

function formatDate(date: string) {
    if (!date){
        return ""
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())){
        return "";
    }

    return new Intl.DateTimeFormat("en-us", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(parsedDate);
}

export function BlogItem({ post }: BlogItemProps) {
    return (
        <li>
            <a href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grup grid gap-2 py-3 transition-colors sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-6"
            >
                <time dateTime={post.link} className="text-sm text-zinc-500">
                    {formatDate(post.pubDate)}
                </time>
                <span className="min-w-0 text-zinc-300 transition-colors group-hover:text-white sm:text-base">{post.title}</span>
            </a>
        </li>
    )
}