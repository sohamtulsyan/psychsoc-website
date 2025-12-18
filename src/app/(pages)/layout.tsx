"use client";
import GradualBlur from "@/components/GradualBlur";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footer } from "@/components/ui/footer";
import { HomeIcon, BrainCircuit } from "lucide-react";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="relative h-full w-full">
      <NavBar
        items={[
          { name: "Home", url: "/", icon: HomeIcon },
          { name: "About", url: "/about", icon: HomeIcon },
          { name: "Newsletter", url: "/newsletter", icon: HomeIcon },
          { name: "Review", url: "/review", icon: HomeIcon },
          { name: "Podcast", url: "/podcast", icon: HomeIcon },
          { name: "Synapse", url: "/synapse", icon: BrainCircuit },
        ]}
      />
      {/* Scrolling container */}
      <main className="h-full w-full overflow-y-auto z-40">
        {children}
        {/* Spacer to prevent blur from hiding content */}
        <div style={{ height: "6rem" }} />
      </main>

      <Footer />

      {/* Blur overlay positioned at bottom */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="8rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
        zIndex={40}
        className="pointer-events-none"
      />
    </section>
  );
}
