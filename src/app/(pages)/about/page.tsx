import { Users, Heart, Lightbulb, Target } from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Emily Thompson',
      role: 'Faculty Advisor',
      description: 'Specializing in cognitive neuroscience and behavioral psychology.',
    },
    {
      name: 'Michael Chen',
      role: 'President',
      description: 'Fourth-year student passionate about clinical psychology research.',
    },
    {
      name: 'Sarah Williams',
      role: 'Vice President',
      description: 'Leading our outreach programs and community engagement initiatives.',
    },
    {
      name: 'David Rodriguez',
      role: 'Events Coordinator',
      description: 'Organizing workshops, seminars, and networking opportunities.',
    },
    {
      name: 'Lisa Park',
      role: 'Newsletter Editor',
      description: 'Curating monthly insights on psychology and neuroscience.',
    },
    {
      name: 'James Anderson',
      role: 'Research Lead',
      description: 'Coordinating collaborative research projects and reviews.',
    },
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

        {/* Our Values
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-century text-4xl text-white font-bold">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide our mission and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="glass-card glass-card-hover p-6 rounded-2xl space-y-4 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-century text-xl font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Team Members */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-century text-white text-4xl font-bold">Meet the Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The dedicated individuals bringing our vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl space-y-4"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                  <Users className="w-12 h-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-century text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
