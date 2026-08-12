import { BlogSection } from "@/components/blog/BlogSection";
import { ExperienceTImeline } from "@/components/experience/ExperienceTimeline";
import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function Home(){
  return (
    <>
        <Navbar/>

      <main className="min-h-screen">
        <Hero/>
        <ProjectsSection/>
        <BlogSection/>
        <ExperienceTImeline/>
      </main>
    </>
    
  )
}