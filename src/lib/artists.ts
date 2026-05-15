export interface Artist {
  id: string;
  name: string;
  genre: string[];
  city: string;
  initials: string;
  bgColor: string;
  textColor: string;
  streams: string;
  bio: string;
  image?: string;
  releases: {
    title: string;
    artist: string;
    year: number;
    streams: string;
    type: "EP" | "Album" | "Single";
    image?: string;
    bgColor?: string;
    textColor?: string;
  }[];
}

export const artists: Artist[] = [
  {
    id: "1",
    name: "OliveTheBoy",
    genre: ["Afrobeats", "Afropop"],
    city: "Accra",
    initials: "OTB",
    bgColor: "#edf5e6",
    textColor: "#3d7a18",
    streams: "12.5M",
    image: "/olive/1.jpeg",
    bio: "OliveTheBoy has become one of Ghana's most promising voices in contemporary Afrobeats, blending traditional rhythms with modern production. His unique sound and authentic storytelling have captured audiences across West Africa and beyond. With multiple viral hits and a growing international following, he represents the new generation of Ghanaian musical excellence.",
    releases: [
      {
        title: "Avana EP",
        year: 2023,
        streams: "8.2M",
        type: "EP",
        artist: "OliveTheBoy",
      },
      {
        title: "GoodSin",
        year: 2023,
        streams: "4.3M",
        type: "Single",
        artist: "OliveTheBoy",
      },
      {
        title: "Rising EP",
        year: 2024,
        streams: "2.1M",
        type: "EP",
        artist: "OliveTheBoy",
      },
    ],
  },
];

export const genres = ["All", "Afrobeats", "Hiplife", "R&B", "Afropop"];
