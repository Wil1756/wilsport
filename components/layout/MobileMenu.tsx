"use client"


import { Menu , X } from "lucide-react";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/constants";

export function MobileMenu(){
    const [open, setOpen] = useState(false);

    function closeMenu(){
        setOpen(false);
    }

    return (
        <div className="md:hidden">
            <button
                type="button"
                onClick={() => setOpen((value)=> !value)}
                aria-label={
                    open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
                className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white"
                >
                {open ? (
                    <X size={20}/>
                ) : (
                    <Menu size={20}/>
                )
                }
            </button>

            {open && (
                <div className="absolute left-0 right-0 top-16 border-t border-zinc-800 bg-zinc-950">
                    <nav
                        aria-label="Mobile navigation"
                        className="container mx-auto max-w-5xl px-6 py-6"
                    >
                        <ul className="space-y-1">
                           {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a 
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="block rounded-lg px-3 py-3 text-sm text-zinc-400 transition-colors hover:bg-zinc-900
                                    hover:text-white"
                                >
                                    {item.title}
                                </a>
                            </li>
                           ))}
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    )
}