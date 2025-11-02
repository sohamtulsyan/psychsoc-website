import { FileText, Download } from 'lucide-react';

export default function Newsletter() {
  const newsletters = [
    {
      title: 'The Mind Matters',
      edition: 'Volume 12, Issue 3',
      date: 'March 2025',
      description: 'Exploring the intersection of AI and cognitive psychology, featuring insights on neural networks.',
      topics: ['Artificial Intelligence', 'Cognitive Science', 'Neural Networks'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 12, Issue 2',
      date: 'February 2025',
      description: 'A deep dive into emotional regulation and its impact on mental health.',
      topics: ['Emotional Intelligence', 'Mental Health', 'Therapy Techniques'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 12, Issue 1',
      date: 'January 2025',
      description: 'New year special: Resolutions through a psychological lens and habit formation.',
      topics: ['Behavioral Change', 'Habits', 'Goal Setting'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 12',
      date: 'December 2024',
      description: 'Year in review: Major breakthroughs in neuroscience and psychology research.',
      topics: ['Research Review', 'Neuroscience', 'Psychology'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 11',
      date: 'November 2024',
      description: 'Understanding memory consolidation during sleep and its implications.',
      topics: ['Sleep Science', 'Memory', 'Learning'],
    },
    {
      title: 'The Mind Matters',
      edition: 'Volume 11, Issue 10',
      date: 'October 2024',
      description: 'The psychology of decision-making in uncertain environments.',
      topics: ['Decision Science', 'Behavioral Economics', 'Risk'],
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="font-century text-white text-5xl md:text-6xl font-bold">
            Newsletter Archive
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our monthly publication covering the latest in psychology, neuroscience, and mental health research.
          </p>
        </section>

        {/* Subscribe Section */}
        <section className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl max-w-2xl mx-auto text-center space-y-6">
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
        </section>

        {/* Newsletter Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="font-century text-3xl font-bold">Past Editions</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsletters.map((newsletter, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-4 flex flex-col"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-century text-xl font-semibold">{newsletter.title}</h3>
                    <Download className="w-5 h-5 text-muted-foreground flex-shrink-0 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                  <p className="text-sm text-primary">{newsletter.edition}</p>
                  <p className="text-sm text-muted-foreground">{newsletter.date}</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {newsletter.description}
                </p>

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

                <button className="text-primary hover:text-secondary transition-colors font-medium inline-flex items-center gap-2 group mt-2">
                  Read Edition
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
