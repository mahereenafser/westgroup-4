import Link from "next/link";

export default function ContactCalloutSection() {
  return (
    <section
      id="contact-callout"
      className="bg-secondary py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-8 lg:px-20">
        <div className="bg-accent rounded-3xl p-8 md:p-12 lg:p-16 border-8 border-card">
          <div className="flex flex-col min-h-[400px]">
            {/* Top - Heading */}
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">
                SCHEDULE A CONSULTATION
              </span>
            </div>

            {/* Middle - Empty Space */}
            <div className="flex-grow"></div>

            {/* Bottom - Text and Buttons */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <p className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground lg:basis-2/3">
                Let&apos;s discuss your financial goals and create a personalized wealth management strategy
              </p>

              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:6045889688"
                  className="inline-flex items-center justify-center rounded-full border-2 border-foreground bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-all hover:bg-foreground hover:text-accent"
                >
                  Call (604) 588-9688
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
