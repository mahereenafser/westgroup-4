import { Box, Target, Sparkles } from 'lucide-react';

interface ProcessStep {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const processData: ProcessStep[] = [
  {
    Icon: Box,
    title: 'Concept',
    description: 'Developing unique ideas tailored to your vision, setting the foundation for a standout digital experience.',
  },
  {
    Icon: Target,
    title: 'Pixel Perfect',
    description: 'Crafting precise, flawless designs that capture every detail, ensuring visual and functional excellence.',
  },
  {
    Icon: Sparkles,
    title: 'Innovative',
    description: 'Implementing cutting-edge technologies to create groundbreaking solutions that drive your digital success.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-secondary py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-normal uppercase tracking-wider text-[#666666]">
            How we work
          </p>
          <h2 className="mt-4 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Together we create.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {processData.map(({ Icon, title, description }, index) => (
            <div key={index} className="flex flex-col items-center rounded-2xl bg-card p-8 text-center">
              <Icon className="h-[60px] w-auto text-foreground" strokeWidth={1} />
              <h3 className="mt-6 text-2xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
