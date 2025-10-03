import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "What to Look for in a Website: 8 Examples",
    excerpt:
      "Discover essential website features through insightful examples for optimal performance.",
    category: "News",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/HJa4K53QuFfKjrxphaB7BxizPWk-8.webp?",
    link: "/blog/what-to-look-for-in-a-website-8-examples",
  },
  {
    title: "How Much Does a Website Cost?",
    excerpt:
      "Uncover the factors influencing website costs to plan your budget effectively.",
    category: "News",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/I7ZcDkvdv3O3ip0JVioRHGmsSLM-9.webp?",
    link: "/blog/how-much-does-a-website-cost",
  },
  {
    title: "How to Compare and Choose Agencies",
    excerpt:
      "Navigate agency options with expert advice for the perfect partnership.",
    category: "Studio",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/XKjBrCD8vqvJKnntPIQDw8wnk-10.webp?",
    link: "/blog/how-to-compare-and-choose-agencies",
  },
  {
    title: "6 Problems With Agencies",
    excerpt:
      "Identify common agency pitfalls and strategies to avoid them effectively.",
    category: "Studio",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/yVf96ivbYix8TMQRR5qnGeWPg8I-11.webp?",
    link: "/blog/6-problems-with-agencies",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="text-[3rem] font-bold leading-tight tracking-tighter text-foreground">
            Blog
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4a4a4a]">
            Explore insights, trends, and tips in our engaging blog posts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.link}
              className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            >
              <Link href={post.link} className="relative block">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={554}
                  height={311}
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block rounded-md border border-[#e8e8e8] bg-white px-3 py-1 text-[13px] font-normal uppercase tracking-wider text-foreground">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  <Link href={post.link} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-base text-[#666666]">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
