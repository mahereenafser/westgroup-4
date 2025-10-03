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
    <section className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Side - Fixed Heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-4">
                Blog
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover expert insights on emergency financial planning
              </p>
            </div>
          </div>

          {/* Right Side - Scrollable Blog Cards Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.link}
                  href={post.link}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-[#e8e8e8] shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={225}
                      className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block rounded-lg bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
