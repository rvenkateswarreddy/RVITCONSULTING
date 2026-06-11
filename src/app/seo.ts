import type { Metadata } from "next";

export const siteUrl = "https://www.rvit.co.in";
export const siteName = "RV IT Consulting";
export const defaultDescription =
  "RV IT Consulting helps organizations modernize technology, strengthen delivery teams, and build lasting digital capability.";
export const socialImage = "/assets/brand/consulting-team-hero.png";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: canonicalPath,
      siteName,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1748,
          height: 899,
          alt: "RV IT Consulting technology consultants collaborating",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [socialImage],
    },
  };
}
