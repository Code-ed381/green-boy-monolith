import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { updatePageMetadata } from "../lib/metadata";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    updatePageMetadata(
      "Contact",
      "Get in touch with Green Boy Records. Reach out for collaborations, bookings, or inquiries.",
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["info@greenboyrecords.com", "bookings@greenboyrecords.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 24 123 4567", "+233 55 987 6543"],
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Music Lane, East Legon", "Accra, Ghana", "West Africa"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Saturday: 10AM - 4PM",
        "Sunday: Closed",
      ],
    },
  ];

  const departments = [
    {
      name: "A&R Department",
      email: "ar@greenboyrecords.com",
      description: "For artist submissions and talent inquiries",
    },
    {
      name: "Bookings & Events",
      email: "bookings@greenboyrecords.com",
      description: "For artist bookings and event collaborations",
    },
    {
      name: "Media & Press",
      email: "media@greenboyrecords.com",
      description: "For press inquiries and media partnerships",
    },
    {
      name: "Studio Rentals",
      email: "studio@greenboyrecords.com",
      description: "For studio booking and production services",
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
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Connect with Green Boy Records for collaborations, bookings, or
                any inquiries about our services and artists.
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

      {/* Contact Information */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Reach Out Anytime
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              We're here to help bring your musical vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-green-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-dark mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-48 h-48 bg-purple-light rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Send us a Message
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-dark mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-dark mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-dark mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-dark mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-border rounded-lg focus:ring-2 focus:ring-green-primary focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill-button pill-button-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Departments */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
                Contact Our Departments
              </h2>
              <p className="text-lg text-gray-medium mb-8">
                Reach out directly to the right department for faster response.
              </p>

              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="border border-gray-border rounded-lg p-6 hover:border-green-primary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-green-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-dark mb-1">
                          {dept.name}
                        </h3>
                        <p className="text-gray-medium mb-2">
                          {dept.description}
                        </p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-green-primary hover:text-green-800 transition-colors font-medium"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Come visit us at our headquarters in Accra, Ghana
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-green-primary/20 to-blue-light/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-green-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-dark mb-2">
                  Green Boy Records
                </h3>
                <p className="text-gray-medium">
                  123 Music Lane, East Legon, Accra, Ghana
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="font-semibold text-gray-dark mb-2">
                    Parking Available
                  </h4>
                  <p className="text-gray-medium">
                    Free parking for all visitors
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-dark mb-2">
                    Studio Tours
                  </h4>
                  <p className="text-gray-medium">
                    Available by appointment only
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-dark mb-2">
                    Public Transport
                  </h4>
                  <p className="text-gray-medium">
                    Easy access from major routes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
