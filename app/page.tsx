import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/layout/Navbar";

export default function Home(){
  return (
    <>
        <Navbar/>

      <main className="min-h-screen">
        <Hero/>
      </main>
    </>
    
  )
}