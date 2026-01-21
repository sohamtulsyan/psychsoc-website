"use client";
import { Vortex } from "@/components/ui/vortex";
import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function SynapseFest() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <Vortex backgroundColor="transparent" className="flex items-center justify-center flex-col h-full w-full px-4">
        <div className="flex flex-col items-center justify-center space-y-8 max-w-3xl w-full z-10">

          {/* Logo */}
          <div className="relative w-30 h-30 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-in fade-in zoom-in duration-700">
            <Image
              src="/synapse-logo.jpeg"
              alt="Synapse Logo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-200 -mt-12">
            <div className="h-24 md:h-50 w-full">
              <TextHoverEffect text="Synapse" duration={20000} />
            </div>

            <div className="-mt-4 space-y-2">
              <p className="text-xl md:text-3xl text-primary font-medium tracking-wide uppercase font-century">
                March 15-16, 2025
              </p>

              <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                The Annual Psychology Fest of Ashoka University
              </p>
            </div>
          </div>

        </div>
      </Vortex>
    </main>
  )
}
