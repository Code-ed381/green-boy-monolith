export const updatePageMetadata = (title: string, description: string) => {
  document.title = `${title} — Green Boy Records`;

  // Update or create meta description
  let metaDescription = document.querySelector(
    'meta[name="description"]',
  ) as HTMLMetaElement;
  if (!metaDescription) {
    metaDescription = document.createElement("meta") as HTMLMetaElement;
    metaDescription.name = "description";
    metaDescription.content = description;
    document.head.appendChild(metaDescription);
  } else {
    metaDescription.content = description;
  }

  // Update or create meta keywords
  let metaKeywords = document.querySelector(
    'meta[name="keywords"]',
  ) as HTMLMetaElement;
  if (!metaKeywords) {
    metaKeywords = document.createElement("meta") as HTMLMetaElement;
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "Green Boy Records, Ghana music, record label, artists, production, publishing, Afrobeats, Hiplife";
    document.head.appendChild(metaKeywords);
  }
};
