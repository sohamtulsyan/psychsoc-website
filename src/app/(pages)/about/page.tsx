import { Users, Heart, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const coreLeadership = [
    {
      name: 'Parvi Takkar',
      role: 'Co-President',
      description: 'Leading the society with vision and dedication.',
    },
    {
      name: 'Mannat Bahl',
      role: 'Co-President',
      description: 'Fostering growth and innovation within the community.',
    },
    {
      name: 'Vritti Kohli',
      role: 'Co-Vice President',
      description: 'Supporting the presidential team and overseeing operations.',
    },
    {
      name: 'Cheryl Joshi',
      role: 'Co-Vice President',
      description: 'Ensuring seamless execution of society initiatives.',
    },
  ];

  const departments = [
    {
      name: 'Events',
      description: 'Creating engaging experiences that bring the psychology community together.',
      members: [
        {
          name: 'Raima Nanda',
          role: 'Events Head',
          description: 'Orchestrating memorable events and gatherings.',
        },
        {
          name: 'Ojasvi Agarwal',
          role: 'Events Head',
          description: 'Coordinating logistics and event execution.',
        }
      ]
    },
    {
      name: 'Social Media & Marketing',
      description: 'Showcasing our society\'s impact and engaging with our digital community.',
      members: [
        {
          name: 'Mihir Eshan',
          role: 'Social Media & Marketing Head',
          description: 'Driving our digital presence and engagement strategies.',
        },
        {
          name: 'Priyanka Aggarwal',
          role: 'Social Media & Marketing Head',
          description: 'Crafting compelling content and visual storytelling.',
        }
      ]
    },
    {
      name: 'Helpdesk',
      description: 'Providing support and guidance to students and members.',
      members: [
        {
          name: 'Navvya Rahate',
          role: 'Helpdesk Head',
          description: 'Assisting specialized inquiries and member support.',
        }
      ]
    },
    {
      name: 'Review',
      description: 'Ensuring quality and consistency across all our initiatives.',
      members: [
        {
          name: 'Srishti Upendra',
          role: 'Review Head',
          description: 'Overseeing the quality and standards of society output.',
        }
      ]
    },
    {
      name: 'Research',
      description: 'Pushing the boundaries of psychological understanding through collaborative projects.',
      members: [
        {
          name: 'Madhunisha Majumder',
          role: 'Research Head',
          description: 'Leading academic inquiries and research projects.',
        },
        {
          name: 'Advay Awasthy',
          role: 'Research Head',
          description: 'Facilitating collaborative studies and analysis.',
        }
      ]
    },
    {
      name: 'Newsletter',
      description: 'Curating and sharing insights from the world of psychology.',
      members: [
        {
          name: 'Myrah Sahni',
          role: 'Newsletter Head',
          description: 'Curating insightful content for our readers.',
        },
        {
          name: 'Ananya Dubey',
          role: 'Newsletter Head',
          description: 'Managing publication and editorial standards.',
        }
      ]
    },
    {
      name: 'Finance',
      description: 'Managing resource allocation to ensure sustainable operations.',
      members: [
        {
          name: 'Shreya Singhal',
          role: 'Finance Head',
          description: 'Managing society funds and budget allocation.',
        },
        {
          name: 'Shaurya Taneja',
          role: 'Finance Head',
          description: 'Overseeing financial planning and sponsorship.',
        }
      ]
    },
    {
      name: 'Outreach',
      description: 'Connecting our society with the broader community.',
      members: [
        {
          name: 'Sanah Arora',
          role: 'Outreach Head',
          description: 'Building bridges with external partners and community.',
        },
        {
          name: 'Manavi Jain',
          role: 'Outreach Head',
          description: 'Fostering relationships and community engagement.',
        }
      ]
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing the boundaries of psychological research and understanding.',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Promoting mental health awareness and wellbeing in our community.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of psychology enthusiasts.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for academic and professional excellence in all endeavors.',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 space-y-24">
        {/* Header */}
        <section className="text-center space-y-6 max-w-6xl mx-auto">
          <h1 className="font-century text-primary text-5xl md:text-6xl font-bold">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The psychology society is one of the largest academic societies on campus, dedicated to fostering a deep understanding of psychological sciences. Representing a major discipline, the society engages students across all batches and fields through a variety of events, discussions, and initiatives that span from research and academic exploration to self-care and community building. With a focus on both academic and personal growth, the society serves as a vibrant hub for those interested in the intricacies of the mind, offering platforms for learning, collaboration, and innovation within the field of psychology.
          </p>
        </section>

        {/* Full Team Photo Placeholder */}
        <section className="relative glass-card rounded-2xl overflow-hidden aspect-[21/9]">
          <img
            src="/team/Full Team.jpeg"
            alt="Psychology Society Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="font-century text-primary text-4xl md:text-6xl font-bold">
              Our Team
            </h2>
          </div>
        </section>

        {/* Core Leadership */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-century text-primary text-4xl font-bold">Core Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Guiding the society towards its vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreLeadership.map((member, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-4"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-12 h-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-century text-primary text-xl font-semibold">{member.name}</h3>
                  <p className="text-white text-sm font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Departments */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="font-century text-primary text-4xl font-bold">Our Departments</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The specialized teams driving our initiatives
            </p>
          </div>

          <div className="space-y-20">
            {departments.map((dept, deptIndex) => (
              <div key={deptIndex} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-century text-primary text-3xl font-bold">{dept.name}</h3>
                  <p className="text-muted-foreground text-lg max-w-3xl">
                    {dept.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dept.members.map((member, index) => (
                    <div
                      key={index}
                      className="glass-card glass-card-hover p-6 rounded-2xl space-y-4"
                    >
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                        <Users className="w-12 h-12 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-century text-primary text-xl font-semibold">{member.name}</h3>
                        <p className="text-white text-sm font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
