import { Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const coreLeadership = [
    {
      name: 'Parvi Takkar',
      role: 'Co-President',
      image: '/team/ParviTakkar.jpeg',
    },
    {
      name: 'Mannat Bahl',
      role: 'Co-President',
      image: '/team/MannatBahl.jpeg',
    },
    {
      name: 'Vritti Kohli',
      role: 'Co-Vice President',
      image: '/team/Vritti Kohli.jpeg',
    },
    {
      name: 'Cheryl Joshi',
      role: 'Co-Vice President',
      image: '/team/CherylJoshi.png',
    },
  ];
  const departments = [
    {
      name: 'Events',
      description: 'The Events Department anchored the Society’s mission of making psychology accessible and engaging by curating activities that ranged from lighthearted pop-ups to the large-scale fest, Synapse.',
      members: [
        {
          name: 'Raima Nanda',
          role: 'Events Head',
          image: '/team/RaimaNanda.jpg',
        },
        {
          name: 'Ojasvi Agarwal',
          role: 'Events Head',
          image: '/team/OjasviAgarwal.jpeg',
        }
      ]
    },
    {
      name: 'Social Media & Marketing',
      description: 'If the Events team brought the ideas, the Media & Marketing crew made sure the whole campus (and beyond) knew about them. They were the creative engine behind our posters, reels, social media campaigns, and even merch.',
      members: [
        {
          name: 'Mihir Eshan',
          role: 'Social Media & Marketing Head',
          image: '/team/MihirEshanP.S.jpeg',
        },
        {
          name: 'Priyanka Aggarwal',
          role: 'Social Media & Marketing Head',
          image: '/team/PriyankaAggarwal.jpeg'
        }
      ]
    },
    {
      name: 'Helpdesk',
      description: 'The Helpdesk Department is a peer-driven initiative under the PSA that aims to support students through various academic and co-curricular decisions. It offers one-on-one guidance for course planning, trajectories, ISMs, research, internships, summer abroad, and more.',
      members: [
        {
          name: 'Navvya Rahate',
          role: 'Helpdesk Head',
          image: '/team/NavvyaRahate.JPG',
        }
      ]
    },
    {
      name: 'Review',
      description: 'The Review department was started under the Psychology Society in the last academic year, 2024-2025, with the task of curating the Ashoka Psychology. Review, a semesterly academic publication showcasing commentaries, lab reviews, research articles and scholarly papers contributed by the university’s student body.',
      members: [
        {
          name: 'Srishti Upendra',
          role: 'Review Head',
          image: '/team/SrishtiUpendra.jpg'
        }
      ]
    },
    {
      name: 'Research',
      description: 'The Psychology Society Research Department was introduced in August 2024 with the aim of creating a peer-reviewed compilation of review papers, analytical essays, artwork, op-eds, original research, and other contributions.',
      members: [
        {
          name: 'Madhunisha Majumder',
          role: 'Research Head',
          image: '/team/MadhunishaMajumder.png',
        },
        {
          name: 'Advay Awasthy',
          role: 'Research Head',
          image: '/team/AdvayAwasthy.jpg',
        }
      ]
    },
    {
      name: 'Newsletter',
      description: 'The Newsletter Department of the Psychology Society is all about making the subject more engaging, fun, and easy to dive into for anyone curious about why people act the way they do.',
      members: [
        {
          name: 'Myrah Sahni',
          role: 'Newsletter',
          image: '/team/MyrahSahni.jpeg',
        },
        {
          name: 'Ananya Dubey',
          role: 'Newsletter Head',
          image: '/team/AnanyaDubey.jpeg',
        },
        {
          name: 'Sridhari Deorah',
          role: 'Newsletter Head',
          image: '/team/SridhariDeorah.jpeg',
        }
      ]
    },
    {
      name: 'Finance',
      description: 'The Finance Department’s work involves strategic budgeting, precise record-keeping, and fundraising to turn the society’s ideas into reality. They ensure the creation and review of the annual budget, coordinate fair fund allocation across departments.',
      members: [
        {
          name: 'Shreya Singhal',
          role: 'Finance Head',
          image: '/team/ShreyaSinghal.jpg',
        },
        {
          name: 'Shaurya Taneja',
          role: 'Finance Head',
          image: '/team/ShauryaTaneja.jpg'
        }
      ]
    },
    {
      name: 'Outreach',
      description: 'The Outreach department was newly established this academic year, 2025-2026, to strengthen relationships within the university as well as externally. This department’s main goal is to build awareness and subsequently increase participation for Psych Society’s annual fest, Synapse.',
      members: [
        {
          name: 'Sanah Arora',
          role: 'Outreach Head',
          image: '/team/SanahArora.jpg',
        },
        {
          name: 'Manavi Jain',
          role: 'Outreach Head',
          image: '/team/ManaviJain.jpg'
        }
      ]
    }
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
          <Image
            src="/team/Full Team.jpeg"
            alt="Psychology Society Team"
            fill
            className="object-cover"
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
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Users className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-century text-primary text-xl font-semibold">{member.name}</h3>
                  <p className="text-white text-sm font-medium">{member.role}</p>
                  {/* <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p> */}
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
                  <p className="text-muted-foreground text-lg mx-auto">
                    {dept.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dept.members.map((member, index) => (
                    <div
                      key={index}
                      className="glass-card glass-card-hover p-6 rounded-2xl space-y-4"
                    >
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden relative">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <Users className="w-12 h-12 text-muted-foreground" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-century text-primary text-xl font-semibold">{member.name}</h3>
                        <p className="text-white text-sm font-medium">{member.role}</p>
                        {/* <p className="text-sm text-muted-foreground leading-relaxed">
                          {member.description}
                        </p> */}
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
