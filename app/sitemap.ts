import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://my-domain.com"; // update this later
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/experience`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
