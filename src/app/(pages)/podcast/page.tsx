"use client";

import { GlareCard } from "@/components/ui/glare-card";

export default function PodcastPage() {
  const episodes = [
    {
      title: "Episode 1",
      // Placeholder link - Replace with actual Spotify episode links
      src: "https://open.spotify.com/embed/episode/0L74XewCjcCTPVw8Sm41nV?utm_source=generator&theme=0",
    },
    {
      title: "Episode 2",
      src: "https://open.spotify.com/embed/episode/5kHeO4VZnSnA6KhOgde70u?utm_source=generator&theme=0",
    },
    {
      title: "Episode 3",
      src: "https://open.spotify.com/embed/episode/5oDQDAJUrww8xrGJxmhRD3?utm_source=generator&theme=0",
    },
    {
      title: "Episode 4",
      src: "https://open.spotify.com/embed/episode/5HkcuZaWfun0FnV1EDxcZe?utm_source=generator&theme=0",
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 space-y-16">
        <section className="text-center space-y-6 max-w-5xl mx-auto">
          <h1 className="font-century text-primary text-5xl md:text-6xl font-bold">
            Psy-Kicks
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to our podcast, Psy-Kicks, where we bring the world of psychology right to your ears! Our mission is to make psychology accessible and engaging for everyone. Whether you're interested in understanding university-level psychological concepts, exploring cutting-edge research, or gaining insights from industry leaders, we've got it all covered. Through fun and informative conversations, we dive deep into the fascinating world of psychology, making complex topics relatable and exciting for listeners of all backgrounds.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:px-8">
          {episodes.map((episode, index) => (
            <GlareCard key={index} className="w-full h-[352px] overflow-hidden">
              <iframe
                style={{ borderRadius: "12px", border: 0 }}
                src={episode.src}
                width="100%"
                height="100%"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={episode.title}
                className="w-full h-full"
              ></iframe>
            </GlareCard>
          ))}
        </section>
      </div>
    </div>
  );
}
