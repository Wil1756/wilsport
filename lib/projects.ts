export interface Project {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly technologies: readonly string[];
    readonly githubUrl: string;
    readonly liveUrl: string;
}



export const PROJECTS: readonly Project[]=[
    {
        title: "AI RAG Assistant",
        description: "AI powered assistant that answers questions from documents using retrieval augmented generation.",
        image:"/images/projects/ai rag assistant.webp",
        technologies: [
            "React",
            "Fast API",
            "LangChain",
            "PostgreSQL",
        ],
        githubUrl: "https://github.com/wil1756/ai rag assistant",
        liveUrl: "https://your ai rag assistant.vercel.app",
    },
    {
        title: "ML Model Deployment Platform",
        description:  "Platform for training, deploying, and monitoring machine learning models with a clean dashboard and real-time metrics.",
        image: "/images/projects/ml-deployment-platform.webp",
        technologies: [
            "Next.js",
            "Python",
            "Docker",
            "AWS",
          ],
        githubUrl: "https://github.com/yourusername/ml-deployment-platform",
        liveUrl: "https://your-ml-platform.vercel.app",
    },
    {
        title: "Portfolio Website",
        description:
          "Developer portfolio focused on software engineering, cloud solutions, and practical technical projects.",
        image: "/images/projects/portfolio.webp",
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
        githubUrl:
          "https://github.com/yourusername/portfolio",
        liveUrl:
          "https://your-portfolio.vercel.app",
      },
];