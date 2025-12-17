"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import { AuroraText } from '@/components/ui/aurora-text';
import { Calendar, Users, BookOpen, Sparkles } from 'lucide-react';
import ColorBends from '@/components/ColorBends';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

// Lazy load heavy components
const NeonLogo = lazy(() => import('@/components/NeonLogo'));

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
      title: 'Cognitive Neuroscience Workshop',
      date: 'March 15, 2025',
      description: 'Explore the neural mechanisms underlying human cognition with Dr. Sarah Chen.',
      icon: BookOpen,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mental Health Symposium',
      date: 'March 22, 2025',
      description: 'Join us for a comprehensive discussion on contemporary mental health practices.',
      icon: Users,
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Research Methodology Seminar',
      date: 'March 29, 2025',
      description: 'Learn cutting-edge research techniques in psychological studies.',
      icon: Sparkles,
      color: 'from-purple-400 to-pink-400',
    },
    {
      title: 'Psychology Career Fair',
      date: 'April 5, 2025',
      description: 'Connect with leading organizations in clinical and research psychology.',
      icon: Calendar,
      color: 'from-pink-400 to-purple-400',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 from-background via-background/95 to-background z-0" />

        {/* Plasma Background - Lazy loaded */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
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

        {/* NeonLogo - Fixed positioning at top right */}
        <div className="absolute top-8 right-8 z-20 hidden lg:block">
          <Suspense fallback={null}>
            <NeonLogo />
          </Suspense>
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

              <div
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
              </div>
            </div>

            {/* Empty column for layout balance on large screens */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Events Bento Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-century-gothic text-white text-4xl md:text-5xl font-bold">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Engage with cutting-edge research and connect with fellow psychology enthusiasts
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={index}
                  className={`glass-card glass-card-hover p-8 rounded-2xl space-y-4 ${index === 0 ? 'md:col-span-2' : ''
                    }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-white">{event.date}</span>
                  </div>

                  <h3 className="font-century text-2xl text-white font-semibold">{event.title}</h3>
                  <p className="text-white leading-relaxed">{event.description}</p>

                  <button className="text-primary hover:text-secondary transition-colors font-medium inline-flex items-center gap-2 group">
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}