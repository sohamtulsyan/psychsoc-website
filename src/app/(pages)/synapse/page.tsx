"use client";
import { Vortex } from "@/components/ui/vortex"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function SynapseFest() {
  return (
    <main className="w-full h-screen overflow-hidden">
      <Vortex backgroundColor="transparent" className="flex items-center justify-center flex-col h-full w-full px-4">
        <div className="text-center space-y-6">
          {/* <AuroraText className="text-6xl md:text-8xl font-bold font-century-gothic text-white text-balance text-century">Synapse</AuroraText> */}
          <TextHoverEffect text="Synapse" duration={10000} />
          <TextGenerateEffect className="text-xl md:text-3xl text-white/80 font-light tracking-widest text-white" words="Coming Soon" />
        </div>
      </Vortex>
    </main>
  )
}
