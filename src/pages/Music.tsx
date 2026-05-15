import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Filter,
  X,
} from "lucide-react";
import { releases, artists, genres, type Release } from "../lib/releases";
import { updatePageMetadata } from "../lib/metadata";

function Music() {
  const [activeRelease, setActiveRelease] = useState<Release | null>(
    releases[0],
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNav, setActiveNav] = useState("All Releases");
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    updatePageMetadata(
      "Music",
      "Explore music releases from Green Boy Records artists. Stream Afrobeats, Hiplife, R&B, and Afropop tracks.",
    );
  }, []);

  const filteredReleases = releases.filter((release) => {
    const artistMatch =
      selectedArtists.length === 0 || selectedArtists.includes(release.artist);
    const genreMatch = selectedGenres.length === 0 || true; // Genre filtering would need genre data in releases
    return artistMatch && genreMatch;
  });

  const toggleArtist = (artist: string) => {
    setSelectedArtists((prev) =>
      prev.includes(artist)
        ? prev.filter((a) => a !== artist)
        : [...prev, artist],
    );
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre],
    );
  };

  const handlePlayRelease = (release: Release) => {
    setActiveRelease(release);
    setIsPlaying(true);
  };

  return (
    <div
      className="min-h-screen pt-16 relative"
      style={{
        backgroundImage: 'url("/greenboymusic_landscape.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-bg/80"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden fixed top-16 left-4 z-40 p-2 rounded-lg bg-white border border-gray-border"
          style={{ top: "64px" }}
        >
          <Filter className="w-5 h-5 text-gray-dark" />
        </button>

        {/* Mobile Filter Drawer Overlay */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
        )}

        {/* Left Sidebar */}
        <aside
          className={`fixed left-0 top-0 h-full bg-white border-r border-gray-border p-6 z-40 transform transition-transform duration-300 ${isFilterOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:fixed md:left-0 md:top-0 md:w-[260px] md:h-full md:border-r md:border-gray-border md:p-6 lg:w-[280px]`}
          style={{ paddingTop: "80px" }}
        >
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className="md:hidden absolute top-4 right-4 p-2 rounded-full hover:bg-gray-bg"
          >
            <X className="w-4 h-4 text-gray-dark" />
          </button>
          {/* Browse Section */}
          <div className="mb-8">
            <div className="text-xs text-gray-light uppercase tracking-[0.12em] mb-3">
              Browse
            </div>
            <nav className="space-y-1">
              {[
                "New Releases",
                "All Releases",
                "EPs & Albums",
                "Singles",
                "Videos",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeNav === item
                      ? "bg-green-light text-green-primary font-medium"
                      : "text-gray-medium hover:bg-gray-bg"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Artists Section */}
          <div className="mb-8">
            <div className="text-xs text-gray-light uppercase tracking-[0.12em] mb-3">
              Artists
            </div>
            <div className="space-y-2">
              {artists.map((artist) => (
                <label
                  key={artist}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedArtists.includes(artist)}
                    onChange={() => toggleArtist(artist)}
                    className="w-3.5 h-3.5 border border-gray-divider rounded checked:bg-green-primary checked:border-green-primary focus:outline-none"
                  />
                  <span className="text-xs text-gray-medium">{artist}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Genre Section */}
          <div>
            <div className="text-xs text-gray-light uppercase tracking-[0.12em] mb-3">
              Genre
            </div>
            <div className="space-y-2">
              {genres.map((genre) => (
                <label
                  key={genre}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                    className="w-3.5 h-3.5 border border-gray-divider rounded checked:bg-green-primary checked:border-green-primary focus:outline-none"
                  />
                  <span className="text-xs text-gray-medium">{genre}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-0 md:ml-[260px] lg:ml-[280px] px-4 py-12 pb-24 md:px-6 lg:px-8">
          {/* Featured Release Banner */}
          {releases.find((r) => r.featured) && (
            <div className="bg-white border border-gray-border rounded-2xl p-4 md:p-8 mb-6 md:mb-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
                <div className="flex items-center gap-4 md:gap-8">
                  {/* Album Artwork */}
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="/olive/lala.png"
                      alt="Lala album artwork"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-[10px] text-green-primary uppercase tracking-[0.12em] mb-2">
                      Latest Release
                    </div>
                    <h2 className="text-2xl md:text-4xl font-medium text-gray-dark leading-[1.05] tracking-[-0.015em] mb-1">
                      Lala
                    </h2>
                    <div className="text-sm text-green-primary mb-1">
                      OliveTheBoy
                    </div>
                    <div className="text-xs text-gray-light">
                      1M+ streams · 2026
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    onClick={() =>
                      handlePlayRelease(releases.find((r) => r.featured)!)
                    }
                    className="w-12 h-12 md:w-14 md:h-14 bg-green-primary rounded-full flex items-center justify-center text-white hover:bg-green-800 transition-colors"
                  >
                    <Play className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <div className="flex gap-1 md:gap-2">
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/spotify.png"
                        alt="Spotify"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/apple-music.png"
                        alt="Apple Music"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                    <button className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-divider text-gray-medium hover:border-green-primary hover:text-green-primary transition-colors flex items-center justify-center">
                      <img
                        src="/icons/youtube.png"
                        alt="Apple Music"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Release Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
            {filteredReleases.map((release) => (
              <div
                key={release.id}
                onClick={() => handlePlayRelease(release)}
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
        </main>

        {/* Persistent Mini-Player */}
        {activeRelease && (
          <div className="fixed bottom-0 left-0 right-0 h-[68px] bg-white border-t border-gray-border shadow-[0_-4px_20px_rgba(0,0,0,0.04)] z-[100]">
            <div className="flex items-center justify-between h-full px-6">
              {/* Left - Track Info */}
              <div className="w-60">
                <div className="text-sm font-medium text-gray-dark">
                  {activeRelease.title}
                </div>
                <div className="text-xs text-gray-light">
                  {activeRelease.artist}
                </div>
              </div>

              {/* Center - Controls */}
              <div className="flex items-center gap-4">
                <button className="w-5 h-5 text-gray-medium hover:text-gray-dark transition-colors">
                  <SkipBack className="w-full h-full" />
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-5 h-5 text-gray-medium hover:text-gray-dark transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-full h-full" />
                  ) : (
                    <Play className="w-full h-full" />
                  )}
                </button>
                <button className="w-5 h-5 text-gray-medium hover:text-gray-dark transition-colors">
                  <SkipForward className="w-full h-full" />
                </button>
              </div>

              {/* Right - Volume & Link */}
              <div className="w-60 flex items-center justify-end gap-4">
                <Volume2 className="w-4 h-4 text-gray-medium" />
                <a
                  href="#"
                  className="text-xs text-green-primary hover:underline"
                >
                  Open in Spotify
                </a>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-border">
              <div className="h-full bg-green-primary w-1/3"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Music;
