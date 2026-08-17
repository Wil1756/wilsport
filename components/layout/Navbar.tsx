"use client"

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { useEffect, useState } from "react";


export function Navbar(){
    const [active, setActive] = useState('#home');

    useEffect(()=> {
        const sections = NAV_ITEMS.filter((item)=> item.href.startsWith('#'))
        .map((item) => document.querySelector(item.href)
    ).filter((section): section is HTMLElement => section !== null)

    if(sections.length === 0){
        return;
    }

    // const observer = new IntersectionObserver((entries) => {
    //     const visibileSections = entries.filter((entry) => entry.isIntersecting
    //         ).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            
    //     const current = visibileSections[0];

    //     if (current){
    //         setActive(`#${current.target.id}`);
    //     }

    // },
    //     {
    //         rootMargin: "-25% 0px -65% 0px",
    //         threshold: [0, 0.25, 0.5, 1],
    //     }
    // )
    
    // sections.forEach((section)=> observer.observe(section));

    // return ()=> observer.disconnect();

        const updateAtiveSection = ()=> {
            const scrollPosition = window.scrollY

            if (scrollPosition < 100){
                setActive("#home")
                return
            }
        }

        const updateActiveSection = () => {
            const scrollPosition = window.scrollY;
        
            if (scrollPosition < 100) {
              setActive("#home");
              return;
            }
        
            const currentSection = sections.reduce<HTMLElement | null>(
              (current, section) => {
                const sectionTop = section.offsetTop - 160;
        
                if (scrollPosition >= sectionTop) {
                  return section;
                }
        
                return current;
              },
              sections[0],
            );
        
            if (currentSection) {
              setActive(`#${currentSection.id}`);
            }
          };
        
          updateActiveSection();
        
          window.addEventListener("scroll", updateActiveSection, {
            passive: true,
          });
        
          return () => {
            window.removeEventListener("scroll", updateActiveSection);
          };
    },[]);

    return(
        <nav 
            aria-label="Primary navigation"
            className="pt-7 sm:pt-8"
        >
            <div className="container mx-auto max-w-5xl px-6">
                <div className="flex justify-end">
                    {/* {desktop nav} */}
                    <nav
                        aria-label="Primary Navigation"
                        className="hidden md:block"
                    >
                        <ul className="flex items-center gap-x-6">
                            {NAV_ITEMS.map((item)=> {
                                const isActive = active === item.href;

                                return (
                                    <li key={item.href}>
                                        <a 
                                            href={item.href}
                                            onClick={()=> setActive(item.href)}
                                            className={`text-sm transition-colors ${
                                                isActive
                                                ? "text-white"
                                                :"text-zinc-500 hover:text-white"
                                                }`}
                                        >{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* {actions} */}
                    <div className="flex items-center gap">
                        <div className="hidden md:block">
                            {/* <ThemeToggle/> */}
                        </div>

                        <MobileMenu/>
                    </div>
                </div>
            </div>
        </nav>
    )
}