import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = [
  "",
  "/about",
  "/services",
  "/industries",
  "/locations",
  "/careers",
  "/contactus",
  "/privacy-policy",
  "/terms-of-service",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contactus" ? 0.8 : 0.7,
  }));
}
