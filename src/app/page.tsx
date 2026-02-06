"use client";

import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import ProjectSupportSection from "./components/ProjectSupportSection";
import TechnologiesSection from "./components/TechnologiesSection";
import RecruitmentSection from "./components/RecruitmentSection";
import IndustriesSection from "./components/IndustriesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import HeroImpact from "./components/HeroImpact";


export default function Home() {
  return (
    <div className="relative">
      <Suspense>
        <HeroImpact />
      </Suspense>
      <Suspense>
        <ServicesSection />
      </Suspense>
      <Suspense>
        <WhyChooseUsSection />
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
        <TestimonialsSection/>
      </Suspense>
 
    </div>
  );
}
