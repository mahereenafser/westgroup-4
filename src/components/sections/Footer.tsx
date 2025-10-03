import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo.black-removebg-preview-1759489047056.png"
              alt="WESTGROUP Financial Management Inc"
              width={180}
              height={50}
            />
            <p className="text-sm text-muted-foreground">
              Fee-only fiduciary financial advisors serving high-net-worth families across Metro Vancouver.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:6045889688" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                (604) 588-9688
              </a>
              <a href="mailto:info@westgroupfinancial.com" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@westgroupfinancial.com
              </a>
              <span className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                Suite #210 – 2411 160 St<br />South Surrey, BC V3Z 0C8
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Quick Links
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
                <Link href="/locations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Calculators
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services#wealth-management" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Wealth Management
                </Link>
              </li>
              <li>
                <Link href="/services#retirement-planning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link href="/services#estate-planning" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/services#tax-optimization" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tax Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Office Hours
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>Monday - Friday</li>
              <li className="font-semibold text-foreground">8:00 AM - 5:00 PM</li>
              <li className="mt-2">Saturday - Sunday</li>
              <li>Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WESTGROUP Financial Management Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
