export interface Release {
  id: string;
  title: string;
  artist: string;
  type: "Single" | "EP" | "Album";
  year: number;
  streams: string;
  bgColor: string;
  textColor: string;
  image?: string;
  featured?: boolean;
}

export const releases: Release[] = [
  {
    id: "1",
    title: "Lala",
    artist: "OliveTheBoy",
    type: "Single",
    year: 2026,
    streams: "10M+",
    bgColor: "#ffffff",
    textColor: "#3d7a18",
    image:
      "olive/lala.png",
    featured: true,
  },
  {
    id: "2",
    title: "Spidomita",
    artist: "OliveTheBoy",
    type: "Single",
    year: 2025,
    streams: "8.2M",
    bgColor: "#ffffff",
    textColor: "#3d7a18",
    image:
      "olive/olive3.png",
  },
  {
    id: "3",
    title: "Out of the Blue EP",
    artist: "OliveTheBoy",
    type: "EP",
    year: 2025,
    streams: "2.1M",
    bgColor: "#ffffff",
    textColor: "#3d7a18",
    image:
      "olive/olive4.png",
  },
  // {
  //   id: "4",
  //   title: "Kumasi to the World",
  //   artist: "Spidomita",
  //   type: "Album",
  //   year: 2023,
  //   streams: "5.1M",
  //   bgColor: "#ffffff",
  //   textColor: "#3d7a18",
  //   image:
  //     "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
  // },
  // {
  //   id: "5",
  //   title: "Obra",
  //   artist: "Spidomita",
  //   type: "Single",
  //   year: 2024,
  //   streams: "3.6M",
  //   bgColor: "#ffffff",
  //   textColor: "#6b21a8",
  //   image:
  //     "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
  // },
  // {
  //   id: "6",
  //   title: "Serwaa",
  //   artist: "Ama Serwaa",
  //   type: "Album",
  //   year: 2023,
  //   streams: "4.8M",
  //   bgColor: "#ffffff",
  //   textColor: "#65a30d",
  //   image:
  //     "https://images.unsplash.com/photo-1471478991141-c2abeb6508a4?w=400&h=400&fit=crop",
  // },
];

export const artists = ["OliveTheBoy"];
export const genres = ["Afrobeats", "Hiplife", "R&B", "Afropop"];
