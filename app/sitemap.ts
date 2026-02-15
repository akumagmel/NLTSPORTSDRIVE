import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nltsportslease.rentals";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/onboarding`, lastModified: new Date() },
    { url: `${baseUrl}/owner`, lastModified: new Date() },
    { url: `${baseUrl}/portal`, lastModified: new Date() },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date() },
    { url: `${baseUrl}/legal/privacy`, lastModified: new Date() },
  ];
}
