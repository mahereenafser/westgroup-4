import { Layers, Pencil, Box } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Layers,
    title: 'App Design',
    description: 'Crafting intuitive and visually stunning app designs that enhance user experience and drive engagement on all devices.',
  },
  {
    icon: Pencil,
    title: 'Web design',
    description: 'Creating beautiful, responsive websites that captivate audiences and reflect your brand\'s unique identity.',
  },
  {
    icon: Box,
    title: 'Framer',
    description: 'Building robust and scalable websites with cutting-edge technologies to ensure seamless performance and functionality.',
  },
];

export default function ServicesIntroSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-16 md:gap-24">
          
          {/* Intro Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-6">
            <div className="lg:col-span-4">
              <p className="text-sm font-normal uppercase tracking-wider text-[#666666]">
                Our Service
              </p>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6">
              <h2 className="text-5xl lg:text-[56px] font-bold leading-none tracking-tight text-foreground">
                Your next<br />innovation.
              </h2>
              <p className="text-lg font-normal leading-relaxed text-muted-foreground max-w-xl">
                Expert app design, captivating web design, and advanced web development to elevate your digital presence and user experience.
              </p>
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
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="https://leevi-template.framer.website/services"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg h-auto px-12 py-6 text-base font-bold uppercase tracking-wider transition-colors"
            >
              More Information
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
