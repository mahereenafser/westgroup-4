"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Wealth Management",
    description:
      "Sophisticated investment portfolio management with tax-efficient strategies designed to preserve and grow your wealth across market cycles.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/bQzrJKahdUlDHRKV5BIOcJchlvY-3.webp?",
    href: "/services#wealth-management",
  },
  {
    title: "Investment Management",
    description:
      "Professional investment management with diversified portfolios, risk assessment, and performance monitoring.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/rcvAtsKf2rMkawn0xsvGgt7Qc1o-4.webp?",
    href: "/services#investment-management",
  },
  {
    title: "Estate Planning",
    description:
      "Comprehensive estate planning to protect your legacy and ensure efficient wealth transfer to future generations.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/mmDYFimKVgOf04MElc2tuNLvXg-5.webp?",
    href: "/services#estate-planning",
  },
  {
    title: "Mortgage Advisory",
    description:
      "Strategic mortgage planning and refinancing advice to optimize real estate investments and cash flow.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/bQzrJKahdUlDHRKV5BIOcJchlvY-3.webp?",
    href: "/services#mortgage-advisory",
  },
];

export default function FeaturedWorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleServices = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 sm:px-8 md:gap-12 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#666666]">
            Services We Offer
          </p>
        </div>

        <div className="relative w-full">
          {/* Desktop: Show 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleServices().map((service, idx) => (
              <Link
                key={`${service.href}-${idx}`}
                href={service.href}
                className="group relative block overflow-hidden rounded-xl"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: Show 1 card */}
          <div className="md:hidden">
            <Link
              href={services[currentIndex].href}
              className="group relative block overflow-hidden rounded-xl"
            >
              <Image
                src={services[currentIndex].image}
                alt={services[currentIndex].title}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {services[currentIndex].title}
                </h3>
                <p className="text-sm text-white/90">
                  {services[currentIndex].description}
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <Link
          href="/services"
          className="block w-full transform rounded-lg bg-accent px-8 py-6 text-center text-base font-bold uppercase tracking-wider text-primary transition-transform duration-200 ease-in-out hover:scale-[1.02]"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
