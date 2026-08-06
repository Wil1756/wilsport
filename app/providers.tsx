"use client";

import {ThemeProvider} from "next-themes";
import { ReactNode } from "react";

interface props {
    children: ReactNode
}

export default function Providers({ children }:props){
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
        >
            {children}
        </ThemeProvider>
    )
}