export interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Flex Living",
    description:
      "A property review management dashboard for managing guest reviews, monitoring property performance, and showcasing selected reviews across properties.",
    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Context API",
      "Hostaway API",
      "Lucide React",
    ],
    image: "/images/flex-living.png",
    githubUrl: "https://github.com/Wil1756/flex-living",
    liveUrl: "https://flex-living-fawn.vercel.app/",
  },
  {
    title: "Enterprise Knowledge Assistant",
    description:
      "A RAG-based enterprise knowledge assistant designed to retrieve information from organizational documents and provide AI-assisted answers.",
    technologies: [
      "Python",
      "RAG",
      "AI",
      "Document Retrieval",
      "Jupyter",
    ],
    image: "/images/enterprise-knowledge-assistant.png",
    githubUrl:
      "https://github.com/Wil1756/enterprise-knowledge-assistant",
  },
  {
    title: "Mobile Food App",
    description:
      "A mobile food application built with React Native and Expo, providing a focused mobile experience for browsing and interacting with food content.",
    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
    ],
    image: "/images/mobile-food-app.png",
    githubUrl:
      "https://github.com/Wil1756/mobile-food-app",
  },
];