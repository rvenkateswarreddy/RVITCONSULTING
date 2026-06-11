import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RV IT Consulting",
    short_name: "RV IT",
    description:
      "Technology consulting, engineering, cloud, data, talent, and enablement.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#081B33",
    icons: [
      {
        src: "/assets/brand/rvit-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
