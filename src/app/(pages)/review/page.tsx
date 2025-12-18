import { BookOpen, ExternalLink, Download } from 'lucide-react';
import PDFViewer from '@/components/pdf-viewer';

export default function Review() {
  const reviews = [
    {
      title: "Special Edition",
      date: 'Unknown',
      summary: 'I do not know. Please give me a summary',
      link: '/reviews/Special Edition.pdf'
    },
    {
      title: 'Edition 1, Volume 2',
      summary: 'The second edition is a compilation of papers on music, K-pop, play behaviour, collective memory in LGBTQ+ identity formation, and the expression of identity through what we wear. These academic papers written by Ashokan students, and peer reviewed by our editors will prod you to think about topics you might not have encountered before! Alongside the academic papers, our team worked on a compilation of 5 lab reviews: looking at papers from CSBC, on Zebrafish, on Habituation Learning in C. Elegance and Gender and Identity Performance on Social Media.',
      date: 'July 2025',
      link: '/reviews/Edition 1, Volume 2.pdf'
    },
    {
      title: 'Edition 1, Volume 1',
      summary: 'We are excited to announce that the release of the Ashoka Psychology Review! It is a compilation of peer-reviewed papers from various disciplines within psychology. The first edition covers topics like Nudge Theory, Collective Trauma in survivors of the Bengal Partition, the allure of psychological horror, dating apps alongside questions rooted in neuroscience like early life trauma and how it affects the brain, role of pre-SMA in time perception and about PTSD and Hippocampus. We also have lab reviews, critically analyzing and interacting with the work of labs, inside and outside Ashoka.',
      date: 'Unkown',
      link: '/reviews/Edition 1, Volume 1.pdf'
    }
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

              {/* PDF Viewer */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white text-lg">Read Publication</h3>
                  <a
                    href={review.link}
                    download
                    className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 text-sm font-medium"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </a>
                </div>
                <PDFViewer src={review.link} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
