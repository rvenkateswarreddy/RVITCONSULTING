import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "./gen-ai-training-banner.css";

export default function GenAITrainingBanner() {
  return (
    <aside className="ai-training-banner" aria-label="Generative AI training at RV IT">
      <div className="site-container ai-training-banner-inner">
        <Image className="ai-training-poster" src="/assets/media/gen-ai-training-poster.webp" alt="RV IT Consulting — Generative AI Training. Learn. Build. Apply. Practical skills for professionals and teams: AI foundations, prompting, and real-world applications. Explore training at rvit.co.in." width={1536} height={1024} sizes="(max-width: 760px) 100vw, 960px" priority />
        <div className="ai-training-banner-footer">
          <p>Hands-on Generative AI training with real-time projects.</p>
          <Link href="/generative-ai-training">View full training details <ArrowUpRight size={20} aria-hidden /></Link>
        </div>
      </div>
    </aside>
  );
}
