import Link from "next/link";

export default function ContactCalloutSection() {
  return (
    <section
      id="contact-callout"
      className="bg-accent py-16 text-foreground md:py-24"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div className="mb-8">
          <svg
            width="36"
            height="36"
            viewBox="0 0 135 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-foreground"
          >
            <path d="M45 0V45H0V90H45V135H90V90H135V45H90V0H45Z"></path>
          </svg>
        </div>
        <p className="text-caption mb-6 text-[#666666]">CONTACT</p>
        <h3 className="mb-10 max-w-xl">
          Let&apos;s create your next big project together.
        </h3>
        <Link
          href="/contact"
          className="text-button inline-block rounded-lg bg-primary py-3 px-8 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
