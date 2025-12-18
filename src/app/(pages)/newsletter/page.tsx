import { Download } from 'lucide-react';
import Image from 'next/image';
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

export default function Newsletter() {
  const newsletters = [
    {
      title: 'PSYCH!',
      edition: 'Issue 3',
      date: 'September 2024',
      cover: '/newsletters/Psych-3.png',
      description: 'Exploring the intersection of AI and cognitive psychology, featuring insights on neural networks.',
      topics: ['Artificial Intelligence', 'Cognitive Science', 'Neural Networks'],
      link: 'https://drive.google.com/file/d/1D1XFyneyNQY3g1ZgrN2UA_CVZoM2chGE/view?usp=drive_link'
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 12, Issue 2',
      date: 'February 2025',
      cover: '/newsletters/Psych-2.png',
      description: 'A deep dive into emotional regulation and its impact on mental health.',
      topics: ['Emotional Intelligence', 'Mental Health', 'Therapy Techniques'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 12, Issue 1',
      date: 'January 2025',
      cover: '/newsletters/Psych-1.png',
      description: 'New year special: Resolutions through a psychological lens and habit formation.',
      topics: ['Behavioral Change', 'Habits', 'Goal Setting'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 12',
      date: 'December 2024',
      cover: '/newsletters/Psych-11.png',
      description: 'Year in review: Major breakthroughs in neuroscience and psychology research.',
      topics: ['Research Review', 'Neuroscience', 'Psychology'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 11',
      date: 'November 2024',
      cover: '/newsletters/Psych-11.png',
      description: 'Understanding memory consolidation during sleep and its implications.',
      topics: ['Sleep Science', 'Memory', 'Learning'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 10',
      date: 'October 2024',
      cover: '/newsletters/Psych-11.png',
      description: 'The psychology of decision-making in uncertain environments.',
      topics: ['Decision Science', 'Behavioral Economics', 'Risk'],
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <section className="text-center space-y-6 max-w-5xl mx-auto">
          <h1 className="font-century text-primary text-5xl md:text-6xl font-bold">
            Our Newsletters
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Fueled by our passion for psychology, we aim to create a space to share knowledge and foster collaboration in our community. As we delve into the human mind and behavior, we are thrilled to bring you a diverse range of insights, research findings, and practical tips that we hope will enrich your understanding of the fascinating world of psychology. Whether you are an aspiring Psychology Major or simply someone with a passion for the understanding of the human mind, this newsletter is for you!
          </p>
        </section>

        {/* Subscribe Section */}
        {/* <section className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl max-w-2xl mx-auto text-center space-y-6">
          <FileText className="w-12 h-12 mx-auto text-primary" />
          <h2 className="font-century text-white text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground">
            Get the latest insights delivered to your inbox every month
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-input border border-border/50 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all">
              Subscribe
            </button>
          </div>
        </section> */}

        {/* Newsletter Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-century text-primary text-3xl font-bold">Past Editions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((newsletter, index) => (
              <NeonGradientCard
                key={index}
                className="items-center justify-center text-center"
                neonColors={{ firstColor: "#fbc0c4", secondColor: "#ffffff" }}
              >
                <div className="flex flex-col h-full text-left">
                  {/* Cover Image */}
                  <div className="w-full relative aspect-square mb-4 overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-primary/50 transition-colors">
                    <Image
                      src={newsletter.cover}
                      alt={`${newsletter.title} - ${newsletter.edition}`}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-century text-white text-xl font-semibold">{newsletter.title}</h3>
                      <Download className="w-5 h-5 text-muted-foreground flex-shrink-0 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <span>{newsletter.edition}</span>
                      <span>•</span>
                      <span>{newsletter.date}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow mb-4">
                    {newsletter.description}
                  </p>

                  {/* Tags commented out as requested
                  <div className="flex flex-wrap gap-2 pt-4">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  */}

                  <button className="text-primary hover:text-secondary transition-colors font-medium inline-flex items-center gap-2 group mt-auto pt-2">
                    <a href={newsletter.link} target="_blank">
                      Read Edition
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </button>
                </div>
              </NeonGradientCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
