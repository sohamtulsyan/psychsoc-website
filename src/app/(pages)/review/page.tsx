import { BookOpen, ExternalLink } from 'lucide-react';

export default function Review() {
  const reviews = [
    {
      title: 'Neuroplasticity and Learning',
      summary: 'A comprehensive review of recent studies on brain plasticity and its implications for education and rehabilitation. This review examines how the brain adapts to learning experiences across the lifespan.',
      authors: 'Dr. Sarah Chen, Prof. Michael Wong',
      date: 'February 2025',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Header */}
        <section className="text-center space-y-6 max-w-5xl mx-auto">
          <h1 className="font-century text-primary text-5xl md:text-6xl font-bold">
            Ashoka Psychology Review
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome to the Ashoka Psychology Review - a compilation of peer-reviewed papers from various disciplines within psychology.
          </p>
        </section>

        {/* Reviews List */}
        <section className="space-y-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h2 className="font-century text-white text-2xl md:text-3xl font-bold">{review.title}</h2>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>{review.authors}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-white text-lg">Summary</h3>
                <p className="text-muted-foreground leading-relaxed">{review.summary}</p>
              </div>

              {/* PDF Embed Placeholder */}
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted/30 flex flex-col items-center justify-center gap-4">
                  <BookOpen className="w-16 h-16 text-muted-foreground" />
                  <p className="text-muted-foreground">PDF Preview</p>
                  <button className="px-6 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all inline-flex items-center gap-2">
                    View Full Review
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="glass-card glass-card-hover p-8 md:p-12 rounded-2xl max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-century text-3xl text-white font-bold">Submit Your Review</h2>
          <p className="text-muted-foreground">
            Have research you would like to share? We welcome submissions from members for peer review and publication.
          </p>
          <button className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all">
            Submit Research
          </button>
        </section>
      </div>
    </div>
  );
}
