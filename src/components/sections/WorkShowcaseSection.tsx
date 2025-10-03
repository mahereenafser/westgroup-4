import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Vision",
    subtitle: "Lorem ipsum dolor",
    projectType: "Design",
    imageUrl: "https://framerusercontent.com/images/mmDYFimKVgOf04MElc2tuNLvXg.webp",
    href: "/work/vision",
    gridClasses: "lg:row-start-1 lg:col-start-1 lg:col-span-7",
    aspectRatio: "aspect-[63/40]",
  },
  {
    title: "Precise",
    subtitle: "Lorem ipsum dolor",
    projectType: "Branding",
    imageUrl: "https://framerusercontent.com/images/rcvAtsKf2rMkawn0xsvGgt7Qc1o.webp",
    href: "/work/precise",
    gridClasses: "lg:row-start-1 lg:col-start-8 lg:row-span-2 lg:col-span-5",
    aspectRatio: "aspect-[43/83]",
  },
  {
    title: "App",
    subtitle: "Lorem ipsum dolor",
    projectType: "Design",
    imageUrl: "https://framerusercontent.com/images/bQzrJKahdUlDHRKV5BIOcJchlvY.webp",
    href: "/work/app",
    gridClasses: "lg:row-start-2 lg:col-start-1 lg:col-span-7",
    aspectRatio: "aspect-[63/40]",
  },
];

export default function WorkShowcaseSection() {
  return (
    <section className="bg-background py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col items-stretch lg:items-start gap-12">
          <p className="text-caption text-foreground text-left">
            Featured Work
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-8 w-full">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className={`group relative block overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] w-full ${project.gridClasses} ${project.aspectRatio}`}
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={630}
                  height={400}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative flex h-full w-full flex-col justify-end p-8">
                  <div className="flex w-full items-end justify-between gap-4">
                    <div>
                      <h2 className="font-bold text-4xl text-white">
                        {project.title}
                      </h2>
                      <p className="text-white/80 mt-2 text-lg">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="bg-white text-foreground text-caption px-3.5 py-1.5 rounded-lg whitespace-nowrap">
                      {project.projectType}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/work"
            className="group relative self-center lg:self-start bg-accent text-accent-foreground text-button px-12 py-6 rounded-lg overflow-hidden"
          >
            <span className="relative z-10 block transition-transform duration-300 ease-in-out group-hover:-translate-y-[120%]">
              Explore More Projects
            </span>
            <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
              Explore More Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
