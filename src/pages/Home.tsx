import {
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Volume2,
  Youtube,
  Instagram,
  Twitter,
  Music,
  MapPin,
  Heart,
  Share2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { updatePageMetadata } from "../lib/metadata";
import { releases } from "../lib/releases";
import { artists } from "../lib/artists";

function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    updatePageMetadata(
      "Home",
      "Ghana's premier music label. Discover artists, releases, and the future of African music.",
    );
  }, []);

  const latestReleases = releases.slice(0, 6);
  const featuredArtists = artists.slice(0, 4);

  const slidesToShow = 3;
  const totalSlides = Math.ceil(latestReleases.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const newsItems = [
    {
      date: "Nov 2024",
      title: "Spidomita debuts to massive response",
      description: "Latest release breaks streaming records across West Africa",
      type: "release",
      image: "/olive/olive3.png",
    },
    {
      date: "Oct 2024",
      title: "Green Boy Records Tour 2024",
      description: "Announcing nationwide tour featuring all label artists",
      type: "tour",
      image: "/greenboymusic.png",
    },
    {
      date: "Sep 2024",
      title: "New Studio Suite Opens",
      description:
        "State-of-the-art production facility now available for booking",
      type: "news",
      image: "/hero2.png",
    },
  ];

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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/greenboylogo_landscape.png"
            alt="Green Boy Records logo background"
            className="w-full h-full object-cover object-center lg:object-right"
            style={{
              objectPosition: "center",
              objectFit: "cover",
              animation: "slide-in 0.5s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-green-primary/90"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-primary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-light rounded-full filter blur-3xl"></div>
          {/* Green Boy Logo Watermark */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
            <img
              src="/greenboylogo.png"
              alt="Green Boy Records logo"
              className="w-64 h-auto"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 md:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white">
                  Ghana's Music Powerhouse
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Music grows
                <span className="block text-gradient">here</span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
                Green Boy Records is where raw talent becomes global phenomenon.
                From Accra to the world, we're shaping the future of African
                music.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="pill-button bg-green-primary text-white hover:bg-green-800 hover:scale-105 hover:shadow-lg text-base px-8 py-4">
                  <Play className="w-5 h-5 mr-2" />
                  Listen Now
                </button>
                <button className="pill-button bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:scale-105 text-base px-8 py-4">
                  <Youtube className="w-5 h-5 mr-2" />
                  Watch Videos
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-sm text-white/80">Artists</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50M+</div>
                  <div className="text-sm text-white/80">Streams</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-sm text-white/80">Studios</div>
                </div>
              </div>
            </div>

            {/* Right Content - Featured Release */}
            <div className="relative">
              <div className="relative music-card bg-gradient-to-br from-green-primary/90 to-green-primary backdrop-blur-md p-8 text-white border border-white/20">
                <div className="absolute top-4 right-4">
                  <span className="pill-tag bg-white/20 backdrop-blur-sm text-white text-xs">
                    Featured
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-6">
                    {/* Album Artwork */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src="/olive/lala.png"
                        alt="Lala album artwork"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Lala</h3>
                      <p className="text-white/80 text-lg">OliveTheBoy</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8" />
                      ) : (
                        <Play className="w-8 h-8 ml-1" />
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-white rounded-full transition-all duration-300"></div>
                      </div>
                      <div className="flex justify-between text-xs text-white/60 mt-1">
                        <span>1:28</span>
                        <span>3:24</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <Volume2 className="w-4 h-4" />
                      10M+ streams
                    </span>
                    <span>2026</span>
                    <span>Single</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists/Roster Section */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-yellow-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-orange-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Our Artists
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Meet the talented voices shaping the future of African music
            </p>
          </div>

          <div className="flex justify-center">
            {featuredArtists.map((artist) => (
              <Link
                key={artist.id}
                to="/artist"
                className="artist-card cursor-pointer block max-w-md w-full"
                style={{ backgroundColor: artist.bgColor }}
              >
                <div className="relative">
                  {/* Artist Image */}
                  <div className="relative h-46 overflow-hidden">
                    <img
                      src={
                        artist.image ||
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      }
                      alt={`${artist.name} profile`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-8">
                    {/* Artist Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3
                          className="text-2xl font-bold mb-1"
                          style={{ color: artist.textColor }}
                        >
                          {artist.name}
                        </h3>
                        <div
                          className="flex items-center gap-3 text-sm opacity-80"
                          style={{ color: artist.textColor }}
                        >
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {artist.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <Music className="w-4 h-4" />
                            {artist.genre.join(", ")}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Heart
                            className="w-5 h-5"
                            style={{ color: artist.textColor }}
                          />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                          <Share2
                            className="w-5 h-5"
                            style={{ color: artist.textColor }}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div
                          className="text-lg font-bold"
                          style={{ color: artist.textColor }}
                        >
                          {artist.streams}
                        </div>
                        <div
                          className="text-xs opacity-70"
                          style={{ color: artist.textColor }}
                        >
                          Streams
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className="text-lg font-bold"
                          style={{ color: artist.textColor }}
                        >
                          {artist.releases.length}
                        </div>
                        <div
                          className="text-xs opacity-70"
                          style={{ color: artist.textColor }}
                        >
                          Releases
                        </div>
                      </div>
                      <div className="text-center">
                        <div
                          className="text-lg font-bold"
                          style={{ color: artist.textColor }}
                        >
                          {artist.releases.reduce(
                            (sum, r) =>
                              sum +
                              parseFloat(r.streams.replace("M", "")) * 1000000,
                            0,
                          ) >= 1000000
                            ? `${(artist.releases.reduce((sum, r) => sum + parseFloat(r.streams.replace("M", "")) * 1000000, 0) / 1000000).toFixed(1)}M`
                            : `${artist.releases.reduce((sum, r) => sum + parseFloat(r.streams.replace("M", "")) * 1000000, 0)}`}
                        </div>
                        <div
                          className="text-xs opacity-70"
                          style={{ color: artist.textColor }}
                        >
                          Total Streams
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Music Releases */}
      <section className="py-20 bg-gray-bg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Latest Releases
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Discover the hottest tracks from our talented roster of artists
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-1">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {latestReleases
                        .slice(
                          slideIndex * slidesToShow,
                          (slideIndex + 1) * slidesToShow,
                        )
                        .map((release) => (
                          <div
                            key={release.id}
                            className="music-card group cursor-pointer"
                            style={{ backgroundColor: release.bgColor }}
                          >
                            <div className="relative">
                              {/* Album Artwork */}
                              <div className="relative h-48 overflow-hidden">
                                <img
                                  src={
                                    release.image ||
                                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"
                                  }
                                  alt={`${release.title} by ${release.artist}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                                  <Play className="w-8 h-8 ml-1 text-gray-800" />
                                </button>
                              </div>

                              {/* Release Info */}
                              <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <span className="pill-tag bg-white/20 text-xs mb-2 inline-block">
                                      {release.type}
                                    </span>
                                    <h3
                                      className="text-xl font-bold mb-1"
                                      style={{ color: release.textColor }}
                                    >
                                      {release.title}
                                    </h3>
                                    <p
                                      className="text-base opacity-80"
                                      style={{ color: release.textColor }}
                                    >
                                      {release.artist}
                                    </p>
                                  </div>
                                </div>

                                <div
                                  className="flex items-center justify-between text-sm opacity-70"
                                  style={{ color: release.textColor }}
                                >
                                  <span>{release.year}</span>
                                  <span>{release.streams} streams</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index
                      ? "bg-green-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/music" className="pill-button pill-button-primary">
              View All Releases
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Spotlight */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-48 h-48 bg-purple-light rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-light rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              Video Spotlight
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Experience the visual artistry behind our biggest hits
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Video */}
            <div
              className="video-thumbnail group cursor-pointer"
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${videos[0].id}`,
                  "_blank",
                )
              }
            >
              <img
                src={videos[0].thumbnail}
                alt={videos[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="pill-tag bg-red-600 text-white text-xs mb-3 inline-block">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{videos[0].title}</h3>
                  <p className="text-lg opacity-90 mb-4">{videos[0].artist}</p>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(
                          `https://www.youtube.com/watch?v=${videos[0].id}`,
                          "_blank",
                        );
                      }}
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Play className="w-5 h-5" />
                      Watch Now
                    </button>
                    <span className="text-sm opacity-80">
                      {videos[0].views} views
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                {videos[0].duration}
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-10 h-10 ml-1 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Supporting Videos */}
            <div className="space-y-6">
              {videos.slice(1).map((video) => (
                <div
                  key={video.id}
                  className="flex gap-4 group cursor-pointer"
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${video.id}`,
                      "_blank",
                    )
                  }
                >
                  <div className="relative w-40 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white px-1 py-0.5 rounded text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-dark mb-1 group-hover:text-green-primary transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-medium mb-2">
                      {video.artist}
                    </p>
                    <span className="text-xs text-gray-light">
                      {video.views} views
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="pill-button pill-button-secondary">
              <Youtube className="w-5 h-5 mr-2" />
              View All Videos
            </button>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-15 left-20 w-36 h-36 bg-indigo-light rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-15 right-20 w-48 h-48 bg-teal-light rounded-full filter blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-dark mb-4">
              News & Events
            </h2>
            <p className="text-lg text-gray-medium max-w-2xl mx-auto">
              Stay updated with the latest from Green Boy Records
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <div key={index} className="news-card group cursor-pointer">
                {/* News Image */}
                {item.image && (
                  <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <span className="pill-tag bg-green-light text-green-primary text-xs">
                    {item.type}
                  </span>
                  <span className="text-sm text-gray-light">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-dark mb-3 group-hover:text-green-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-green-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Read more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Band */}
      <section className="py-20 bg-gradient-to-r from-green-primary to-blue-light text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-white/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-20 text-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=400&fit=crop"
              alt="Music festival crowd"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative z-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Green Boy Movement
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Get latest music, exclusive content, and behind-the-scenes access
              delivered to your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 max-w-md px-6 py-4 rounded-full text-gray-dark placeholder-gray-medium focus:outline-none focus:ring-4 focus:ring-white/30 bg-white/10 backdrop-blur-sm border border-white/20"
              />
              <button className="pill-button bg-white text-green-primary hover:bg-gray-100 px-8 py-4 font-semibold">
                Subscribe Now
              </button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="text-sm opacity-80">Follow us on:</div>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Youtube className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
              <div className="text-sm opacity-80">Stream on:</div>
              <div className="flex gap-4">
                <button className="pill-tag bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
                  Spotify
                </button>
                <button className="pill-tag bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
                  Apple Music
                </button>
                <button className="pill-tag bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
                  YouTube Music
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
