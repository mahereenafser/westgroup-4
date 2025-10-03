"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background font-sans transition-shadow duration-300 ${
        hasScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-[96px]">
          <Link href="/" className="flex-shrink-0" aria-label="Homepage">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo.black-removebg-preview-1759489047056.png"
              alt="WESTGROUP Financial Management Inc Logo"
              width={220}
              height={60}
            />
          </Link>

          <nav className="items-center hidden lg:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-normal uppercase tracking-[0.01em] text-foreground transition-colors hover:text-gray-500"
              >
                {item.name}
              </Link>
            ))}
            <button className="flex items-center text-[15px] font-normal uppercase tracking-[0.01em] text-foreground transition-colors hover:text-gray-500">
              Pages
              <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="items-center hidden lg:flex">
              <Link
                href="/contact"
                className="px-3 py-2 text-base font-bold tracking-[0.02em] uppercase rounded-lg bg-accent text-accent-foreground transition-transform hover:scale-105"
              >
                LET'S TALK
              </Link>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
                className="p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[15px] py-2 font-normal uppercase tracking-[0.01em] text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center text-[15px] py-2 font-normal uppercase tracking-[0.01em] text-foreground">
                Pages
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>
              <Link
                href="/contact"
                className="inline-block w-full mt-4 px-3 py-3 text-base font-bold text-center tracking-[0.02em] uppercase rounded-lg bg-accent text-accent-foreground"
              >
                LET'S TALK
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
