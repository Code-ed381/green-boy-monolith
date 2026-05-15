import { useEffect } from "react";
import {
  Mic,
  Disc,
  Headphones,
  Settings,
  Play,
  Users,
  Award,
  Zap,
} from "lucide-react";
import { updatePageMetadata } from "../lib/metadata";

function Services() {
  useEffect(() => {
    updatePageMetadata(
      "Services",
      "Green Boy Records offers comprehensive music services including publishing, distribution, recording, and mixing studio services.",
    );
  }, []);

  const services = [
    {
      id: "publishing",
      icon: Mic,
      title: "Music Publishing",
      description:
        "Comprehensive publishing services to protect and monetize your musical works",
      color: "from-green-primary to-green-800",
      features: [
        "Song registration & administration",
        "Royalty collection & distribution",
        "Copyright protection",
        "Sync licensing opportunities",
        "Global publishing network",
        "Performance rights management",
      ],
      pricing: [
        {
          plan: "Basic",
          price: "5%",
          features: ["Royalty collection", "Basic registration"],
        },
        {
          plan: "Professional",
          price: "10%",
          features: ["Full administration", "Sync licensing", "Global network"],
        },
        {
          plan: "Enterprise",
          price: "Custom",
          features: [
            "Custom solutions",
            "Dedicated support",
            "Advanced analytics",
          ],
        },
      ],
    },
    {
      id: "distribution",
      icon: Disc,
      title: "Music Distribution",
      description:
        "Get your music heard on every major streaming platform worldwide",
      color: "from-blue-primary to-blue-800",
      features: [
        "100+ streaming platforms",
        "Global reach in 190+ countries",
        "Real-time analytics & reporting",
        "YouTube Content ID",
        "Spotify for Artists",
        "Apple Music for Artists",
      ],
      pricing: [
        {
          plan: "Single",
          price: "$9.99",
          features: ["One release", "All platforms", "Basic analytics"],
        },
        {
          plan: "Artist",
          price: "$19.99/mo",
          features: [
            "Unlimited releases",
            "Advanced analytics",
            "Priority support",
          ],
        },
        {
          plan: "Label",
          price: "$49.99/mo",
          features: [
            "Multiple artists",
            "White-label options",
            "Dedicated manager",
          ],
        },
      ],
    },
    {
      id: "recording",
      icon: Headphones,
      title: "Recording Studio",
      description:
        "State-of-the-art recording facilities with professional equipment",
      color: "from-purple-primary to-purple-800",
      features: [
        "Professional recording booths",
        "Industry-standard microphones",
        "Experienced sound engineers",
        "Vocal coaching available",
        "Multi-track recording",
        "Live recording capabilities",
      ],
      pricing: [
        {
          plan: "Hourly",
          price: "$50/hr",
          features: ["Studio time", "Basic engineer", "Equipment"],
        },
        {
          plan: "Half Day",
          price: "$300",
          features: ["4 hours", "Senior engineer", "Mixing included"],
        },
        {
          plan: "Full Day",
          price: "$500",
          features: ["8 hours", "Senior engineer", "Full production"],
        },
      ],
    },
    {
      id: "mixing",
      icon: Settings,
      title: "Mixing & Mastering",
      description:
        "Professional mixing and mastering services for polished, radio-ready tracks",
      color: "from-orange-primary to-orange-800",
      features: [
        "Professional mixing engineers",
        "Industry-standard mastering",
        "Multi-format delivery",
        "Stem mixing available",
        "Revision rounds included",
        "Fast turnaround times",
      ],
      pricing: [
        {
          plan: "Basic Mix",
          price: "$150",
          features: ["Stem mixing", "Basic mastering", "2 revisions"],
        },
        {
          plan: "Professional",
          price: "$300",
          features: ["Advanced mixing", "Premium mastering", "5 revisions"],
        },
        {
          plan: "Premium",
          price: "$500",
          features: ["VIP service", "Unlimited revisions", "Priority delivery"],
        },
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Artist Development",
      description:
        "Comprehensive artist development programs to nurture talent",
      features: [
        "Vocal training",
        "Performance coaching",
        "Brand development",
        "Social media strategy",
      ],
    },
    {
      icon: Play,
      title: "Music Video Production",
      description:
        "Professional video production services for music videos and promotional content",
      features: [
        "4K video production",
        "Professional editing",
        "Visual effects",
        "Distribution strategy",
      ],
    },
    {
      icon: Award,
      title: "Marketing & Promotion",
      description: "Strategic marketing campaigns to boost your music's reach",
      features: [
        "Social media campaigns",
        "PR outreach",
        "Playlist pitching",
        "Radio promotion",
      ],
    },
    {
      icon: Zap,
      title: "Live Event Production",
      description:
        "Complete event production for concerts, tours, and special performances",
      features: [
        "Event planning",
        "Sound engineering",
        "Stage management",
        "Technical support",
      ],
    },
  ];

  const testimonials = [
    {
      name: "OliveTheBoy",
      role: "Recording Artist",
      content:
        "Green Boy Records transformed my career. Their production quality and distribution network helped me reach millions worldwide.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Ama Serwaa",
      role: "Singer-Songwriter",
      content:
        "The recording studio experience was incredible. The engineers understood my vision perfectly and brought it to life.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Kojo Mensah",
      role: "Producer",
      content:
        "Their mixing and mastering services are top-notch. Every track comes back radio-ready and perfectly polished.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
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
                Our Services
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Complete music solutions from production to global distribution.
                We help artists at every stage of their musical journey.
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

      {/* Main Services Grid */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          

          {/* Unified Header Section */}
          <div className="bg-gradient-to-r from-green-primary to-green-800 rounded-t-2xl p-8 text-white mb-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Core Services</h3>
                <p className="opacity-90">
                  Professional music services designed to elevate your career
                </p>
              </div>
            </div>
          </div>

          {/* Services Container */}
          <div className="bg-white rounded-b-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="grid gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={
                      index !== services.length - 1
                        ? "border-b border-gray-border pb-8"
                        : ""
                    }
                  >
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Service Info */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-green-primary/10 rounded-full flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-green-primary" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-dark">
                              {service.title}
                            </h4>
                            <p className="text-gray-medium">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        <h5 className="text-lg font-semibold text-gray-dark mb-3">
                          What We Offer
                        </h5>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-primary rounded-full"></div>
                              <span className="text-gray-medium">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Pricing */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-dark mb-4">
                          Pricing Plans
                        </h5>
                        <div className="space-y-3">
                          {service.pricing.map((plan, idx) => (
                            <div
                              key={idx}
                              className="border border-gray-border rounded-lg p-4"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <h6 className="font-semibold text-gray-dark">
                                  {plan.plan}
                                </h6>
                                <span className="text-green-primary font-bold">
                                  {plan.price}
                                </span>
                              </div>
                              <ul className="text-sm text-gray-medium space-y-1">
                                {plan.features.map((feature, featureIdx) => (
                                  <li
                                    key={featureIdx}
                                    className="flex items-center gap-1"
                                  >
                                    <div className="w-1.5 h-1.5 bg-green-primary rounded-full"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-48 h-48 bg-purple-light rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Comprehensive support for your music career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-green-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-medium mb-4">{service.description}</p>
                <ul className="text-sm text-gray-medium space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-1 justify-center"
                    >
                      <div className="w-1.5 h-1.5 bg-green-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-yellow-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-orange-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Simple steps to get your music career started with us
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "We discuss your goals and create a customized plan",
              },
              {
                step: "2",
                title: "Production",
                description:
                  "Our team helps you create professional-quality music",
              },
              {
                step: "3",
                title: "Distribution",
                description: "We distribute your music to all major platforms",
              },
              {
                step: "4",
                title: "Growth",
                description:
                  "We support your career with marketing and promotion",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-15 left-20 w-36 h-36 bg-indigo-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-15 right-20 w-48 h-48 bg-teal-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              What Artists Say
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Hear from artists who have worked with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-bg rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-dark">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-medium italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-primary to-blue-light text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Music Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help take your music career to the next
            level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="pill-button bg-white text-green-primary hover:bg-gray-100 px-8 py-4 font-semibold">
              Get Started
            </button>
            <button className="pill-button bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 px-8 py-4">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
