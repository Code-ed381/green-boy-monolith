import { useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { artists, type Artist } from "../lib/artists";
import { releases, type Release } from "../lib/releases";
import { updatePageMetadata } from "../lib/metadata";

function Artists() {
  // Use first artist as single featured artist
  const featuredArtist: Artist = artists[0];

  // Video carousel state
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    updatePageMetadata(
      "Artist",
      `Meet ${featuredArtist.name}, a talented artist from Green Boy Records. Explore ${featuredArtist.genre.join(" and ")} music from Ghana.`,
    );
  }, [featuredArtist]);

  // Video data
  const videos = [
    {
      id: "llDJBrO5CTw",
      title: "OLIVETHEBOY INTHE BOOTH LIVE",
      artist: "OliveTheBoy",
      thumbnail: "https://img.youtube.com/vi/llDJBrO5CTw/maxresdefault.jpg",
      views: "12M",
      duration: "3:24",
    },
    {
      id: "pI83b2Uxpwc",
      title: "Home Alone",
      artist: "OliveTheBoy",
      thumbnail: "https://img.youtube.com/vi/pI83b2Uxpwc/maxresdefault.jpg",
      views: "8.5M",
      duration: "3:12",
    },
    {
      id: "CcQKqDTzMak",
      title: "Home Alone (Avana Deluxe)",
      artist: "OliveTheBoy",
      thumbnail: "https://img.youtube.com/vi/CcQKqDTzMak/maxresdefault.jpg",
      views: "5.2M",
      duration: "2:48",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Artist */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
            {/* Artist Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {featuredArtist.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredArtist.genre.map((g) => (
                    <span
                      key={g}
                      className="px-3 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <p className="text-lg opacity-90 mb-6">
                  {featuredArtist.city} • {featuredArtist.streams} streams
                </p>
              </div>

              <p className="text-lg leading-relaxed opacity-90">
                {featuredArtist.bio}
              </p>

              {/* Streaming Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <img
                    src="/icons/spotify.png"
                    alt="Spotify"
                    className="w-6 h-6"
                  />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <img
                    src="/icons/apple-music.png"
                    alt="Apple Music"
                    className="w-6 h-6"
                  />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center">
                  <img
                    src="/icons/youtube.png"
                    alt="YouTube Music"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Artist Image */}
            <div className="flex justify-center lg:justify-end">
              {featuredArtist.image ? (
                <img
                  src={featuredArtist.image}
                  alt={`${featuredArtist.name} profile`}
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div
                  className="aspect-square rounded-2xl flex items-center justify-center max-w-md"
                  style={{ backgroundColor: featuredArtist.bgColor }}
                >
                  <div
                    className="text-8xl font-bold"
                    style={{ color: featuredArtist.textColor }}
                  >
                    {featuredArtist.initials}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Discography Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Discography
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Explore the musical journey of {featuredArtist.name}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release, index) => (
              <div
                key={release.id}
                onClick={() => console.log(`Playing ${release.title}`)}
                className="bg-white border border-gray-border rounded-xl p-3 cursor-pointer transition-all duration-200 hover:shadow-lg group"
              >
                {/* Cover */}
                <div className="relative aspect-square rounded-lg overflow-hidden mb-2.5">
                  {release.image ? (
                    <img
                      src={`/${release.image}`}
                      alt={`${release.title} by ${release.artist}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: release.bgColor }}
                    >
                      <div
                        className="text-sm font-medium"
                        style={{ color: release.textColor }}
                      >
                        {release.artist.split("").slice(0, 2).join("")}
                      </div>
                    </div>
                  )}
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-gray-dark" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="text-sm font-medium text-gray-dark mb-1">
                  {release.title}
                </div>
                <div className="text-xs text-gray-light mb-2">
                  {release.artist}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[9px] px-2 py-1 rounded-full bg-gray-bg text-gray-light border border-gray-border inline-block">
                    {release.type}
                  </div>
                  <div className="flex gap-1">
                    <button className="w-6 h-6 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/spotify.png"
                        alt="Spotify"
                        className="w-3 h-3"
                      />
                    </button>
                    <button className="w-6 h-6 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/apple-music.png"
                        alt="Apple Music"
                        className="w-3 h-3"
                      />
                    </button>
                    <button className="w-6 h-6 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/youtube.png"
                        alt="YouTube"
                        className="w-3 h-3"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Videos
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Watch {featuredArtist.name}'s latest music videos and performances
            </p>
          </div>

          {/* Video Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Previous Button */}
              <button
                onClick={() =>
                  setCurrentVideoIndex(
                    (prev) => (prev - 1 + videos.length) % videos.length,
                  )
                }
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Video Display */}
              <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl cursor-pointer">
                <img
                  src={videos[currentVideoIndex].thumbnail}
                  alt={videos[currentVideoIndex].title}
                  className="w-full h-full object-cover"
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${videos[currentVideoIndex].id}`,
                      "_blank",
                    )
                  }
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://www.youtube.com/watch?v=${videos[currentVideoIndex].id}`,
                          "_blank",
                        );
                      }}
                      className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <Play className="w-7 h-7 text-white ml-1" />
                    </button>

                    <div className="text-white text-sm">
                      <div className="font-semibold">
                        {videos[currentVideoIndex].title}
                      </div>
                      <div className="opacity-80">
                        {videos[currentVideoIndex].artist}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
                }
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Video Info */}
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-gray-dark mb-2">
                {videos[currentVideoIndex].title}
              </h3>
              <p className="text-gray-medium">
                {videos[currentVideoIndex].views} views •{" "}
                {videos[currentVideoIndex].duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-48 h-48 bg-purple-light rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              By the Numbers
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              {featuredArtist.name}'s impact on the music scene
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-primary mb-2">
                {featuredArtist.streams}
              </div>
              <div className="text-gray-medium">Total Streams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-primary mb-2">
                {featuredArtist.releases.length}
              </div>
              <div className="text-gray-medium">Releases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-primary mb-2">
                {featuredArtist.genre.length}
              </div>
              <div className="text-gray-medium">Genres</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-dark mb-6">
            Work with {featuredArtist.name}
          </h2>
          <p className="text-lg text-gray-medium mb-8 max-w-2xl mx-auto">
            Interested in collaborations, bookings, or partnerships? Get in
            touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-primary text-white rounded-full font-semibold hover:bg-green-800 transition-colors">
              Book for Events
            </button>
            <button className="px-8 py-4 bg-white text-green-primary border-2 border-green-primary rounded-full font-semibold hover:bg-green-50 transition-colors">
              Collaboration Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Artists;
