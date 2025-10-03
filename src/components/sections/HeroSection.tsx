import Image from "next/image";

const imageUrl =
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/xevNSPDoJkJmNpNTcGzKp5PdRkc-2.webp?";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-16 pt-24 pb-16 lg:pb-24">
      <div className="container w-full">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <h1 className="text-[48px] font-black leading-[0.9] tracking-[-0.02em] text-foreground md:text-[60px] lg:basis-3/5 lg:text-[80px]">
            Your Financial <br />
            Future Starts Here
          </h1>
          <p className="text-xl text-muted-foreground lg:basis-2/5 lg:max-w-[400px] lg:text-right">
            Fee-only fiduciary advisors serving high-net-worth families across Metro Vancouver with transparent, unbiased financial planning.
          </p>
        </div>
      </div>

      <div className="container w-full">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
          <Image
            src={imageUrl}
            alt="Three professionals in business casual attire posing against a neutral gray background"
            width={2500}
            height={1250}
            className="aspect-[2/1] h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
