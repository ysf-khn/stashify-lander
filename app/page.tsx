"use client";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BuiltForYouSection } from "@/components/BuiltForYouSection";
import { ReadyToSimplifySection } from "@/components/ReadyToSimplifySection";
import { FeaturesGlanceSection } from "@/components/FeaturesGlanceSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <BuiltForYouSection />
        <ReadyToSimplifySection />
        <FeaturesGlanceSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
