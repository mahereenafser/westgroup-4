import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "What to Do When You Face Financial Uncertainty",
    excerpt:
      "Navigate through financial uncertainty with expert guidance from Vancouver's trusted financial advisors.",
    category: "Emergency Planning",
    date: "January 15, 2025",
    readTime: "8 min",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/HJa4K53QuFfKjrxphaB7BxizPWk-8.webp?",
    link: "/blog/what-to-do-when-you-face-financial-uncertainty",
  },
  {
    title: "Complete Guide to Financial Planning Services in Surrey, BC",
    excerpt:
      "Comprehensive guide to financial planning services available in Surrey, BC.",
    category: "Location Guide",
    date: "January 12, 2025",
    readTime: "12 min",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/I7ZcDkvdv3O3ip0JVioRHGmsSLM-9.webp?",
    link: "/blog/complete-guide-to-financial-planning-services-in-surrey-bc",
  },
  {
    title: "How Much Does Financial Advisory Service Cost in Surrey, BC?",
    excerpt:
      "Transparent breakdown of financial advisory service costs in Surrey, BC.",
    category: "Pricing Guide",
    date: "January 10, 2025",
    readTime: "10 min",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/XKjBrCD8vqvJKnntPIQDw8wnk-10.webp?",
    link: "/blog/how-much-does-financial-advisory-service-cost-in-surrey-bc",
  },
  {
    title: "Winter Financial Planning: Preparation Guide",
    excerpt:
      "Prepare your finances for the winter season with comprehensive tax planning.",
    category: "Seasonal Planning",
    date: "January 8, 2025",
    readTime: "9 min",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f2226263-da7a-443e-b422-c355b61dc1c1-leevi-template-framer-website/assets/images/yVf96ivbYix8TMQRR5qnGeWPg8I-11.webp?",
    link: "/blog/winter-financial-planning-preparation-guide",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-[1200px] px-8 lg:px-20">
        <div className="mb-16 text-center">
          <h2 className="text-[3rem] font-bold leading-tight tracking-tighter text-foreground">
            Financial Insights & Resources
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4a4a4a]">
            Expert financial planning advice, guides, and insights from WESTGROUP's team of professionals.
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
