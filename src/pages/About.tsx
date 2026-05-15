import { useEffect } from "react";
import {
  Award,
  Users,
  Music,
  Globe,
  TrendingUp,
  Heart,
  Target,
} from "lucide-react";
import { updatePageMetadata } from "../lib/metadata";

function About() {
  useEffect(() => {
    updatePageMetadata(
      "About",
      "Learn about Green Boy Records - Ghana's premier music label shaping the future of African music.",
    );
  }, []);

  const stats = [
    { icon: Users, label: "Artists", value: "12+" },
    { icon: Music, label: "Releases", value: "50+" },
    { icon: Globe, label: "Countries", value: "45+" },
    { icon: TrendingUp, label: "Streams", value: "100M+" },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Green Boy Records Founded",
      description:
        "Started with a vision to revolutionize Ghanaian music and bring African talent to the global stage.",
      icon: Target,
    },
    {
      year: "2019",
      title: "First Studio Opens",
      description:
        "Opened our first state-of-the-art recording facility in East Legon, Accra.",
      icon: Music,
    },
    {
      year: "2020",
      title: "Breakthrough Artist",
      description:
        "Signed OliveTheBoy, who would become one of Ghana's biggest music stars.",
      icon: Users,
    },
    {
      year: "2021",
      title: "International Expansion",
      description:
        "Expanded distribution to over 30 countries and secured major streaming partnerships.",
      icon: Globe,
    },
    {
      year: "2022",
      title: "Multiple Studio Locations",
      description:
        "Opened additional studios to meet growing demand from artists across Africa.",
      icon: Music,
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description:
        "Received multiple awards for innovation and contribution to African music.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Global Partnership",
      description:
        "Secured major international distribution deals and expanded to 45+ countries.",
      icon: TrendingUp,
    },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "We celebrate genuine African sounds and stories that resonate with global audiences.",
      icon: Heart,
    },
    {
      title: "Innovation",
      description:
        "Pushing boundaries with cutting-edge production techniques and digital strategies.",
      icon: Target,
    },
    {
      title: "Community",
      description:
        "Building a supportive ecosystem where artists can grow and thrive together.",
      icon: Users,
    },
    {
      title: "Excellence",
      description:
        "Maintaining the highest standards in music production, artist development, and career management.",
      icon: Award,
    },
  ];

  const team = [
    {
      name: "Kwame Asante",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in music industry",
      image:
        "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8eW91bmclMjBibGFjayUyMGJ1c2luZXNzJTIwbWVufGVufDB8fDB8fHww",
    },
    {
      name: "Ama Serwaa",
      role: "Head of A&R",
      description: "Talent scout with an ear for the next big sound",
      image:
        "https://images.unsplash.com/photo-1614023342667-6f060e9d1e04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvdW5nJTIwYmxhY2slMjBidXNpbmVzcyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Kojo Mensah",
      role: "Head of Production",
      description: "Award-winning producer shaping modern African sound",
      image:
        "https://images.unsplash.com/photo-1669284820487-2950fd54ea59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW91bmclMjBibGFjayUyMG11c2ljJTIwbWVufGVufDB8fDB8fHww",
    },
    {
      name: "Yaa Boateng",
      role: "Marketing Director",
      description:
        "Digital strategist connecting artists with global audiences",
      image:
        "https://images.unsplash.com/photo-1560856127-bb6804d3dc54?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvdW5nJTIwYmxhY2slMjBtdXNpYyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Green Boy Records
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Pioneering the future of African music from the heart of Ghana
                to the world stage.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/greenboylogo.png"
                alt="Green Boy Records"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-48 h-48 bg-purple-light rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-medium leading-relaxed">
                <p>
                  Founded in 2018 in the vibrant heart of Accra, Green Boy
                  Records emerged from a simple yet powerful vision: to create a
                  platform where African talent could flourish and reach global
                  audiences without compromising their cultural identity.
                </p>
                <p>
                  What started as a small studio with big dreams has grown into
                  one of Ghana's most influential music labels, representing the
                  finest voices in contemporary African music. We've discovered,
                  nurtured, and launched careers that have reshaped the musical
                  landscape both locally and internationally.
                </p>
                <p>
                  Our journey has been marked by innovation, authenticity, and
                  an unwavering commitment to artistic excellence. From our
                  first recording session to our current roster of award-winning
                  artists, every step has been guided by our passion for music
                  that moves hearts and transcends borders.
                </p>
                <p>
                  Today, Green Boy Records stands as a testament to the power of
                  African creativity, with our artists streaming millions of
                  times worldwide and our sound influencing the global music
                  scene.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/greenboylogo.png"
                alt="Green Boy Records"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold mb-1">2018-2024</div>
                <div className="text-sm opacity-90">
                  Years of Musical Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-yellow-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-orange-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Key milestones that shaped our path to becoming Africa's music
              powerhouse
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-primary/20"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <milestone.icon className="w-5 h-5 text-green-primary" />
                        <span className="text-sm font-semibold text-green-primary">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-dark mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-medium">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-15 left-20 w-36 h-36 bg-indigo-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-15 right-20 w-48 h-48 bg-teal-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              The principles that guide everything we do at Green Boy Records
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-medium">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              The passionate individuals driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-xl"
                  />
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-6 h-6 bg-green-primary rounded-full border-2 border-white"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-green-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-medium text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
