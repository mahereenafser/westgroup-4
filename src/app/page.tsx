"use client";

import Navigation from "@/components/sections/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import LogosSection from "@/components/sections/LogosSection";
import ServicesIntroSection from "@/components/sections/ServicesIntroSection";
import FeaturedWorkSection from "@/components/sections/FeaturedWorkSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactCalloutSection from "@/components/sections/ContactCalloutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col">
        <HeroSection />
        <MarqueeSection />
        <div className="py-12 lg:py-16">
          <LogosSection />
        </div>
        <ServicesIntroSection />
        <FeaturedWorkSection />
        <div className="py-16 lg:py-24">
          <AboutSection />
        </div>
        <ProcessSection />
        <ContactCalloutSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
