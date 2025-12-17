"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Calendar, Users, BookOpen, Sparkles } from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';
import ColorBends from '@/components/ColorBends';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

// Lazy load heavy components
import NeonLogo from '@/components/NeonLogo';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame for smoother initial render
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const events = [
    {
      title: 'Psych-Out',
      date: 'Recent',
      description: 'Our flagship event challenging your psychological mettle.',
      image: '/Psych-Out.jpg',
    },
    {
      title: 'The Heal Cycle',
      date: 'Recent',
      description: 'Breaking the stigma and discussing mental wellness.',
      image: '/Heal Cycle.jpg',
    },
    {
      title: 'Admissions 101',
      date: 'Recent',
      description: 'Guiding you through the psychology admission process.',
      image: '/Admissions 101 .jpg',
    },
    {
      title: 'MindPeers',
      date: 'Recent',
      description: 'Collaborative event focusing on peer support systems.',
      image: '/MindPeers.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 from-background via-background/95 to-background z-0" />

        {/* Plasma Background - Lazy loaded */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%', opacity: 0.5 }}>
          <ColorBends
            colors={[
              '#fface9ff'
            ]}
            frequency={1.6}
            scale={1.7}
            speed={0.3}
            rotation={140}
            autoRotate={-4}
          />
        </div>



        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <AuroraText className="text-6xl md:text-7xl font-bold text-white/80 font-century">
                  Psychology Society
                </AuroraText>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                  Join our vibrant community of thinkers, researchers, and enthusiasts as we delve into the fascinating world of psychology and neuroscience.
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <HoverBorderGradient
                  containerClassName="rounded-full border-xl bg-transparent"
                  className="bg-transparent text-white flex items-center space-x-2"
                  onClick={() => window.location.href = '#join'}
                >
                  <span>Join Our Community</span>
                </HoverBorderGradient>
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="bg-black text-white flex items-center space-x-2"
                  onClick={() => window.location.href = '#events'}
                >
                  <span>View Events</span>
                </HoverBorderGradient>
              </div>

              {/* <div
                className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="space-y-1">
                  <div className="font-century text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="space-y-1">
                  <div className="font-century text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-muted-foreground">Events</div>
                </div>
                <div className="space-y-1">
                  <div className="font-century text-3xl font-bold text-white">12</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
              </div> */}
            </div>

            {/* Empty column for layout balance on large screens */}
            {/* NeonLogo - Centered in right column */}
            <div className="hidden lg:flex justify-center items-center translate-x-12 -translate-y-12">
              <NeonLogo />
            </div>
          </div>
        </div>
      </section>

      {/* Events Bento Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-century-gothic text-white text-4xl md:text-5xl font-bold">Recent Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engage with cutting-edge research and connect with fellow psychology enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <div key={index} className="flex justify-center">
                <TiltedCard
                  imageSrc={event.image}
                  altText={event.title}
                  captionText={event.title}
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="400px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="relative w-full h-full">
                      {/* Black overlay at 40% opacity */}
                      <div className="absolute inset-0 bg-black/40 rounded-[15px]" />

                      {/* Diffused blur at bottom edge - smooth fade */}
                      <div className="absolute bottom-0 left-0 right-0 h-48 rounded-b-[15px]"
                        style={{
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          maskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)'
                        }}
                      />

                      {/* Centered content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-[15px]">
                        <div className="space-y-3 text-center">
                          <h3 className="font-century text-3xl text-white font-bold drop-shadow-lg">{event.title}</h3>
                          <p className="text-white/95 text-base leading-relaxed max-w-md drop-shadow-md">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}