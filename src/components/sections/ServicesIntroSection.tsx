import { TrendingUp, Shield, PiggyBank } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: TrendingUp,
    title: 'Wealth Management',
    description: 'Comprehensive investment management and retirement income planning tailored to high-net-worth individuals and families.',
  },
  {
    icon: Shield,
    title: 'Estate Planning',
    description: 'Strategic estate and succession planning to protect your legacy and ensure smooth wealth transfer to future generations.',
  },
  {
    icon: PiggyBank,
    title: 'Tax Optimization',
    description: 'Expert tax-efficient strategies and planning to maximize your wealth while minimizing tax liabilities across all investments.',
  },
];

export default function ServicesIntroSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Two Column Layout: Video + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
            {/* Left Column - Video */}
            <div className="lg:flex lg:justify-start">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                >
                  <source src="/videos/coins-1.mov" type="video/quicktime" />
                  <source src="/videos/coins-1.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="lg:flex lg:justify-end">
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl lg:text-[56px] leading-none tracking-tight text-foreground" style={{ fontWeight: 300 }}>
                  Comprehensive<br />Financial Solutions
                </h2>
                <p className="text-lg font-normal leading-relaxed text-muted-foreground">
                  Fee-only fiduciary financial planning, investment management, and tax optimization strategies for high-net-worth families across Metro Vancouver.
                </p>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-card p-12 rounded-[20px] flex flex-col gap-10"
                >
                  <Icon className="h-12 w-12 text-foreground" strokeWidth={1} />
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base font-normal leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
