import { useState, useEffect } from "react";
import { Check, ChevronRight, Mic, Music, FileText, Users } from "lucide-react";
import { updatePageMetadata } from "../lib/metadata";

export default function Production() {
  const [formData, setFormData] = useState({
    name: "",
    artistName: "",
    genre: "",
    demoLink: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    updatePageMetadata(
      "Production",
      "Green Boy Records production services. Studio recording, beat production, music publishing, and artist development — all under one roof.",
    );
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white" style={{ padding: "80px 80px 56px" }}>
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs"
            style={{ color: "#999990", letterSpacing: "0.12em" }}
          >
            WHAT WE DO
          </p>
          <h1
            className="mt-4 mb-6"
            style={{
              fontSize: "52px",
              fontWeight: 500,
              color: "#0a0a0a",
              letterSpacing: "-0.015em",
              lineHeight: "1.05",
            }}
          >
            Built for the craft.
          </h1>
          <p
            className="mb-8"
            style={{
              fontSize: "15px",
              color: "#555550",
              maxWidth: "500px",
              lineHeight: 1.6,
            }}
          >
            From raw session to global release — every stage of music production
            under one roof.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-lg font-medium transition-colors bg-green-primary text-white text-sm">
              Book Studio Time
            </button>
            <button
              className="px-6 py-3 rounded-lg font-medium transition-colors border border-gray-300 text-gray-600"
              style={{
                border: "1px solid #d0d0c8",
                color: "#555550",
                backgroundColor: "transparent",
                fontSize: "14px",
              }}
            >
              Talk to A&R
            </button>
          </div>
        </div>
      </header>

      {/* Section 1 - Services */}
      <section
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e8e8e0",
          padding: "64px 80px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-5" style={{ gap: "20px" }}>
            {/* Card 1 - Studio Recording */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e8e0]">
              <div className="w-10 h-10 bg-[#edf5e6] rounded-lg flex items-center justify-center mb-4">
                <Mic size={24} style={{ color: "#3d7a18" }} />
              </div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#0a0a0a" }}
              >
                Studio Recording
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "#555550", lineHeight: 1.7 }}
              >
                Professional recording sessions with industry-standard equipment
                and experienced engineers.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Pro Tools", "Neve Console", "Dolby Atmos", "96kHz"].map(
                  (spec) => (
                    <span
                      key={spec}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#f7f7f5",
                        color: "#555550",
                        border: "1px solid #e8e8e0",
                      }}
                    >
                      {spec}
                    </span>
                  ),
                )}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{ color: "#3d7a18" }}
              >
                Book a session <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Card 2 - Beat Production */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e8e0]">
              <div className="w-10 h-10 bg-[#edf5e6] rounded-lg flex items-center justify-center mb-4">
                <Music size={24} style={{ color: "#3d7a18" }} />
              </div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#0a0a0a" }}
              >
                Beat Production
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "#555550", lineHeight: 1.7 }}
              >
                Custom beats and instrumentals crafted by our in-house producers
                across multiple genres.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Afrobeats", "Drill", "Amapiano", "R&B", "Afropop"].map(
                  (genre) => (
                    <span
                      key={genre}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "#f7f7f5",
                        color: "#555550",
                        border: "1px solid #e8e8e0",
                      }}
                    >
                      {genre}
                    </span>
                  ),
                )}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{ color: "#3d7a18" }}
              >
                License a beat <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Card 3 - Music Publishing */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e8e0]">
              <div className="w-10 h-10 bg-[#edf5e6] rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} style={{ color: "#3d7a18" }} />
              </div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#0a0a0a" }}
              >
                Music Publishing
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "#555550", lineHeight: 1.7 }}
              >
                Comprehensive publishing services to protect and monetize your
                musical works.
              </p>
              <div className="space-y-2 mb-5">
                {[
                  "Sync Licensing",
                  "Royalty Collection",
                  "Copyright Registration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-xs"
                    style={{ color: "#555550" }}
                  >
                    <Check
                      size={12}
                      className="mr-2"
                      style={{ color: "#3d7a18" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline"
                style={{ color: "#3d7a18" }}
              >
                Learn more <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Card 4 - A&R & Artist Dev */}
            <div className="bg-white rounded-2xl p-8 border border-[#e8e8e0]">
              <div className="w-10 h-10 bg-[#edf5e6] rounded-lg flex items-center justify-center mb-4">
                <Users size={24} style={{ color: "#3d7a18" }} />
              </div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "#0a0a0a" }}
              >
                A&R & Artist Development
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "#555550", lineHeight: 1.7 }}
              >
                Strategic guidance and career development to help artists reach
                their full potential.
              </p>
              <button
                className="w-full py-3 rounded-xl font-medium transition-colors"
                style={{
                  backgroundColor: "#3d7a18",
                  color: "#ffffff",
                  fontSize: "14px",
                }}
              >
                Submit your demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Studio Suites */}
      <section
        className="bg-white border-t border-gray-border"
        style={{ padding: "64px 80px" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="mb-10"
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "#0a0a0a",
              letterSpacing: "-0.015em",
              lineHeight: "1.05",
            }}
          >
            Our studios.
          </h2>
          <div className="grid grid-cols-3 gap-5" style={{ gap: "20px" }}>
            {/* Suite A */}
            <div className="border border-[#e8e8e0] rounded-2xl p-7 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="font-medium"
                  style={{ fontSize: "16px", color: "#0a0a0a" }}
                >
                  Suite A
                </h3>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#edf5e6",
                    color: "#3d7a18",
                  }}
                >
                  Available
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {[
                  "Dolby Atmos",
                  "Neve 8078",
                  "Pro Tools",
                  "Isolation booth",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-xs"
                    style={{ color: "#555550" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full mr-2"
                      style={{ backgroundColor: "#3d7a18" }}
                    ></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mb-4"
                style={{ fontSize: "18px", fontWeight: 500, color: "#3d7a18" }}
              >
                from $120/hr
              </div>
              <button
                className="w-full py-2.5 rounded-lg font-medium transition-all duration-150"
                style={{
                  border: "1px solid #d0d0c8",
                  backgroundColor: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3d7a18";
                  e.currentTarget.style.color = "#3d7a18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#d0d0c8";
                  e.currentTarget.style.color = "#0a0a0a";
                }}
              >
                Request booking
              </button>
            </div>

            {/* Suite B */}
            <div className="border border-gray-border rounded-2xl p-7 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="font-medium"
                  style={{ fontSize: "16px", color: "#0a0a0a" }}
                >
                  Suite B
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                  Booked
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {["SSL 4000", "Logic Pro", "Tracking room", "Live room"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center text-xs"
                      style={{ color: "#555550" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mr-2"
                        style={{ backgroundColor: "#3d7a18" }}
                      ></span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <div
                className="mb-4"
                style={{ fontSize: "18px", fontWeight: 500, color: "#3d7a18" }}
              >
                from $90/hr
              </div>
              <button
                className="w-full py-2.5 rounded-lg font-medium transition-all duration-150"
                style={{
                  border: "1px solid #d0d0c8",
                  backgroundColor: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3d7a18";
                  e.currentTarget.style.color = "#3d7a18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#d0d0c8";
                  e.currentTarget.style.color = "#0a0a0a";
                }}
              >
                Request booking
              </button>
            </div>

            {/* Suite C */}
            <div className="border border-[#e8e8e0] rounded-2xl p-7 bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3
                  className="font-medium"
                  style={{ fontSize: "16px", color: "#0a0a0a" }}
                >
                  Suite C
                </h3>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: "#edf5e6",
                    color: "#3d7a18",
                  }}
                >
                  Available
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {["Mixing & Mastering", "Yamaha NS10", "UAD Apollo"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-center text-xs"
                      style={{ color: "#555550" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full mr-2"
                        style={{ backgroundColor: "#3d7a18" }}
                      ></span>
                      {item}
                    </li>
                  ),
                )}
              </ul>
              <div
                className="mb-4"
                style={{ fontSize: "18px", fontWeight: 500, color: "#3d7a18" }}
              >
                from $70/hr
              </div>
              <button
                className="w-full py-2.5 rounded-lg font-medium transition-all duration-150"
                style={{
                  border: "1px solid #d0d0c8",
                  backgroundColor: "#ffffff",
                  color: "#0a0a0a",
                  fontSize: "13px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3d7a18";
                  e.currentTarget.style.color = "#3d7a18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#d0d0c8";
                  e.currentTarget.style.color = "#0a0a0a";
                }}
              >
                Request booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Demo Submission */}
      <section
        style={{
          backgroundColor: "#f7f7f5",
          borderTop: "1px solid #e8e8e0",
          padding: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-20">
            {/* Left Column */}
            <div>
              <h2
                className="mb-4"
                style={{
                  fontSize: "32px",
                  fontWeight: 500,
                  color: "#0a0a0a",
                  letterSpacing: "-0.015em",
                  lineHeight: "1.05",
                }}
              >
                Drop us your demo.
              </h2>
              <p
                className="mb-4"
                style={{ fontSize: "14px", color: "#555550", lineHeight: 1.6 }}
              >
                We're always looking for fresh talent. Share your music with our
                A&R team and let's see what we can build together.
              </p>
              <p
                className="mb-6"
                style={{ fontSize: "13px", color: "#3d7a18" }}
              >
                demo@greenboyrecords.com
              </p>
              <div className="space-y-3">
                {[
                  "We listen to every submission",
                  "Response within 5 business days",
                  "No gatekeeping — ever",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-sm"
                    style={{ color: "#555550" }}
                  >
                    <Check
                      size={16}
                      className="mr-3"
                      style={{ color: "#3d7a18" }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-gray-divider text-gray-dark focus:outline-none focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(61,122,24,0.1)]"
                      onFocus={(e) => {
                        e.target.style.outline = "none";
                        e.target.style.borderColor = "#3d7a18";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(61,122,24,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d0d0c8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleInputChange}
                      placeholder="Artist / Band Name"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-gray-divider text-gray-dark focus:outline-none focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(61,122,24,0.1)]"
                      onFocus={(e) => {
                        e.target.style.outline = "none";
                        e.target.style.borderColor = "#3d7a18";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(61,122,24,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d0d0c8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <select
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-gray-divider text-gray-dark focus:outline-none focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(61,122,24,0.1)]"
                      onFocus={(e) => {
                        e.target.style.outline = "none";
                        e.target.style.borderColor = "#3d7a18";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(61,122,24,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d0d0c8";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Select Genre</option>
                      <option value="afrobeats">Afrobeats</option>
                      <option value="hiplife">Hiplife</option>
                      <option value="r&b">R&B</option>
                      <option value="afropop">Afropop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="url"
                      name="demoLink"
                      value={formData.demoLink}
                      onChange={handleInputChange}
                      placeholder="Demo Link — SoundCloud, Drive, or Dropbox"
                      required
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white border border-gray-divider text-gray-dark focus:outline-none focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(61,122,24,0.1)]"
                      onFocus={(e) => {
                        e.target.style.outline = "none";
                        e.target.style.borderColor = "#3d7a18";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(61,122,24,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d0d0c8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg text-sm resize-none bg-white border border-gray-divider text-gray-dark focus:outline-none focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(61,122,24,0.1)]"
                      onFocus={(e) => {
                        e.target.style.outline = "none";
                        e.target.style.borderColor = "#3d7a18";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(61,122,24,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#d0d0c8";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-medium transition-colors bg-green-primary text-white text-sm"
                  >
                    Submit Demo
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#edf5e6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} style={{ color: "#3d7a18" }} />
                  </div>
                  <h3
                    className="text-base font-medium mb-2"
                    style={{ color: "#0a0a0a" }}
                  >
                    We got it. We'll be in touch.
                  </h3>
                  <p className="text-sm" style={{ color: "#555550" }}>
                    Thanks for reaching out to Green Boy Records.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
