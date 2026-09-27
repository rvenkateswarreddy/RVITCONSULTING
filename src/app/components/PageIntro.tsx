import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  title: string;
  emphasis: string;
  description: string;
  image?: string;
  action?: string;
  href?: string;
  variant?: "split" | "wide" | "compact";
};

export default function PageIntro({ title, emphasis, description, image, action, href, variant = "split" }: Props) {
  return (
    <section className={`page-intro page-intro--${variant} site-container`}>
      <div className="page-intro-copy">
        <h1>{title}<br /><em>{emphasis}</em></h1>
        <p>{description}</p>
        {action && href && <Link href={href} className="page-intro-link">{action}<ArrowUpRight size={23} aria-hidden /></Link>}
      </div>
      {image && <div className="page-intro-image"><Image src={image} alt="" fill priority sizes={variant === "wide" ? "100vw" : "(max-width: 760px) 100vw, 50vw"} /></div>}
    </section>
  );
}
