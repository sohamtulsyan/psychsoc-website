"use client";

import React from "react";
import Link from "next/link";
import { MailIcon } from "@/components/MailIcon";
import { LinkedInIcon } from "@/components/LinkedinIcon";
import { InstagramIcon } from "@/components/InstagramIcon";

export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 w-full py-6 px-8 pointer-events-none">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 pointer-events-auto">

                {/* Left: Branding */}
                <h2 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                    The Psychology Society, Ashoka University
                </h2>

                {/* Center: Credits ("Pushed up" - interpreted as central/prominent) */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 md:static md:translate-x-0 md:top-auto">
                    <div className="text-xs md:text-sm text-white/40 font-light flex items-center gap-1 bg-black/20 backdrop-blur-lg px-3 py-1 rounded-full border border-white/5 md:bg-transparent md:backdrop-blur-none md:border-none md:p-0">
                        Made by{" "}
                        <Link
                            href="https://www.linkedin.com/in/soham-tulsyan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)] bg-clip-text"
                        >
                            Soham Tulsyan
                        </Link>
                    </div>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-4">
                    <Link
                        href="mailto:topics.psychsoc@ashoka.edu.in"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-white transition-all duration-300 border border-white/5 hover:bg-[#D44638] hover:border-[#D44638]"
                        aria-label="Email"
                    >
                        <MailIcon size={18} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/ashoka-psychology-society/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-white transition-all duration-300 border border-white/5 hover:bg-[#0077b5] hover:border-[#0077b5]"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon size={18} />
                    </Link>
                    <Link
                        href="https://www.instagram.com/psychsoc.ashoka/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-white transition-all duration-300 border border-white/5 hover:bg-[#E1306C] hover:border-[#E1306C]"
                        aria-label="Instagram"
                    >
                        <InstagramIcon size={18} />
                    </Link>
                </div>
            </div>

            {/* Blend into blur - gradient at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/40 via-transparent to-transparent -z-10 pointer-events-none" />
        </footer>
    );
}
