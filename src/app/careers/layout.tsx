import type { ReactNode } from "react";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata(
  "Careers",
  "Explore technology career opportunities with RV IT Consulting and submit your profile for current and future roles.",
  "/careers",
);

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children;
}
