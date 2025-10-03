import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "App",
    category: "Design",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/bQzrJKahdUlDHRKV5BIOcJchlvY-3.webp?",
    href: "/work/app",
  },
  {
    title: "Precise",
    category: "Branding",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/rcvAtsKf2rMkawn0xsvGgt7Qc1o-4.webp?",
    href: "/work/precise",
  },
  {
    title: "Vision",
    category: "Design",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/mmDYFimKVgOf04MElc2tuNLvXg-5.webp?",
    href: "/work/vision",
  },
];

export default function FeaturedWorkSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 sm:px-8 md:gap-12 md:px-12 lg:px-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#666666]">
            Featured Work
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group relative block overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
              <div className="absolute inset-0 flex items-end justify-between p-6 md:p-8">
                <div className="text-left">
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-lg text-white">Lorem ipsum dolor</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-white px-4 py-1.5">
                    <p className="text-sm font-bold uppercase text-primary">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/work"
          className="block w-full transform rounded-lg bg-accent px-8 py-6 text-center text-base font-bold uppercase tracking-wider text-primary transition-transform duration-200 ease-in-out hover:scale-[1.02]"
        >
          Explore More Projects
        </Link>
      </div>
    </section>
  );
}
