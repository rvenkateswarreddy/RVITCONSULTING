"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import HeroImpact from "./components/HeroImpact";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectSupportSection from "./components/ProjectSupportSection";
import TechnologiesSection from "./components/TechnologiesSection";
import RecruitmentSection from "./components/RecruitmentSection";
import IndustriesSection from "./components/IndustriesSection";
import TestimonialSection from "./components/TestimonialSection";


export default function Home() {
  return (
    <main className="relative">
      <Suspense>
        <HeroImpact />
      </Suspense>
      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <WhyChooseUs />
      </Suspense>
    
      <Suspense>
        <ProjectSupportSection />
      </Suspense>
      <Suspense>
        <TechnologiesSection />
      </Suspense>
      <Suspense>
        <RecruitmentSection/>
      </Suspense>
      <Suspense>
        <IndustriesSection/>
      </Suspense>
      <Suspense>
        <TestimonialSection/>
      </Suspense>
 
    </main>
  );
}
