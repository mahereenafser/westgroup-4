import Link from 'next/link';
import { Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">leevi</span>
              <div className="h-2 w-2 rounded-full bg-accent"></div>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://twitter.com"
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-foreground hover:bg-gray-100 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-foreground hover:bg-gray-100 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Link>
            </div>
          </div>

          {/* Pages Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Pages
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CMS Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              CMS
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/work/single" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Work Single
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/single" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog Single
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Pages Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Utility Pages
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/404" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  404 Error Page
                </Link>
              </li>
              <li>
                <Link href="/styleguide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Styleguide
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © Made by{' '}
            <Link href="https://gola.io" className="hover:text-foreground transition-colors">
              Gola Templates
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://framer.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Made in Framer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
