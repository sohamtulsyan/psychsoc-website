'use client';

import { BookOpen, Download } from 'lucide-react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('@/components/pdf-viewer'), {
  ssr: false,
});

export default function Review() {
  const reviews = [
    {
      title: "Edition 2, Volume 2",
      summary: "Our Academic Papers section features work examining the neurobiology of love and mindfulness, violent video game exposure and aggression within an Indian undergraduate context, and the aesthetics of absence cognition through Shaiva non-dualism, Hindustani music, and Bharatanatyam. This edition also introduces a new section, Applied Inquiry and Intervention, featuring a pedagogical framework on communication beyond orality in inclusive classrooms comprising hearing and Deaf or hard-of-hearing children. Additionally, this edition includes three Lab Reviews exploring AI-delivered therapy for depression, psychostimulant discontinuation in ADHD treatment, and the role of sung speech in improving socio-communicative responsiveness in children with Autism Spectrum Disorders.",
      date: "May 2026",
      link: "/reviews/Vol 2 Edition 2.pdf"
    },
    {
      title: "Special Edition, Volume 2",
      date: "February 2026",
      summary: "This special edition of the Ashoka Psychology Review brings together four undergraduate papers from Cross-Cultural Psychology and Organizational Psychology that examine how culture shapes leadership, moral reasoning, and self-concept across national contexts. Through comparative analyses and applied psychological frameworks, the issue highlights the role of norms, power, and cultural structures in shaping individual and organizational life.",
      link: "/reviews/Special Edition, Volume 2.pdf"
    },
    {
      title: "Edition 1, Volume 2",
      date: "December 2025",
      summary: "The papers in this edition address a range of psychological questions, including neural network dysconnectivity in schizophrenia, multisensory regulation of behaviour, aesthetic judgment, cross-cultural workplace bullying, and the psychological and structural dimensions of human trafficking. It also features lab reviews that critically examine existing psychological research, including work on hyperscanning and interpersonal dynamics in mental health, recovery-focused therapy for older adults with bipolar disorder, prosodic features of speech in autism spectrum disorder, and adolescent mental health as a global research priority through the lens of the ATTUNE Project.",
      link: "/reviews/Vol 2 Edition 1.pdf"
    },
    {
      title: "Special Edition",
      date: 'August 2025',
      summary: 'This edition includes some of the most well-written papers from Professor Mary Arneaud’s Organisational Psychology and Cross-Cultural classes. This Special Edition, Volume 1 is a compilation of 5 papers alongside hosting an Interview Series which involves a series of 3 interviews with Masters and PhD students, on their research, and insights for those who want to step into the field!',
      link: '/reviews/Special Edition.pdf'
    },
    {
      title: 'Edition 2, Volume 1',
      summary: 'The second edition is a compilation of papers on music, K-pop, play behaviour, collective memory in LGBTQ+ identity formation, and the expression of identity through what we wear. These academic papers written by Ashokan students, and peer reviewed by our editors will prod you to think about topics you might not have encountered before! Alongside the academic papers, our team worked on a compilation of 5 lab reviews: looking at papers from CSBC, on Zebrafish, on Habituation Learning in C. Elegance and Gender and Identity Performance on Social Media.',
      date: 'July 2025',
      link: '/reviews/Edition 1, Volume 2.pdf'
    },
    {
      title: 'Edition 1, Volume 1',
      summary: 'We are excited to announce that the release of the Ashoka Psychology Review! It is a compilation of peer-reviewed papers from various disciplines within psychology. The first edition covers topics like Nudge Theory, Collective Trauma in survivors of the Bengal Partition, the allure of psychological horror, dating apps alongside questions rooted in neuroscience like early life trauma and how it affects the brain, role of pre-SMA in time perception and about PTSD and Hippocampus. We also have lab reviews, critically analyzing and interacting with the work of labs, inside and outside Ashoka.',
      date: 'March 2025',
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
