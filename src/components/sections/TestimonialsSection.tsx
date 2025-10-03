const testimonials = [
  {
    title: "Exceptional <br />Customer Service",
    isLarge: true,
    content:
      "WESTGROUP's team provided exceptional customer service and deep knowledge in financial planning. They helped us optimize our retirement strategy perfectly.",
    author: "Aman Patel",
    role: "Tech Entrepreneur"
  },
  {
    title: "Personalized Financial Planning",
    isLarge: false,
    content:
      "The personalized planning approach and tax-saving strategies have made a significant difference in our wealth management. Highly recommend their services!",
    author: "David Lau",
    role: "Business Owner"
  },
  {
    title: "Transparent Fee-Only Approach",
    isLarge: false,
    content:
      "As an investment professional myself, I truly value WESTGROUP's transparent fee-only approach and unbiased advice. They put clients first.",
    author: "Sumeet Badhan",
    role: "Investment Professional"
  },
];

const headingId = "testimonials-heading";

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-20" aria-labelledby={headingId}>
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm uppercase text-[#666666] tracking-[0.05em]">
            Testimonials
          </p>
          <h2
            id={headingId}
            className="text-[40px] font-bold text-foreground tracking-[-0.01em] leading-[1.1]"
          >
            What our clients say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-[#e8e8e8] rounded-xl p-8 flex flex-col gap-4"
            >
              <h3
                className={`font-bold text-foreground leading-[1.3] ${
                  testimonial.isLarge ? "text-[28px]" : "text-2xl"
                }`}
                dangerouslySetInnerHTML={{ __html: testimonial.title }}
              />
              <p className="text-base text-muted-foreground leading-relaxed">
                {testimonial.content}
              </p>
              <div className="mt-2 pt-4 border-t border-[#e8e8e8]">
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
