const testimonials = [
  {
    title: "Best <br />App Design",
    isLarge: true,
    content:
      "Leevi's team delivered an incredible app design that perfectly matched our vision. Their attention to detail is unmatched!",
  },
  {
    title: "The best customer service",
    isLarge: false,
    content:
      "Our new website looks amazing, thanks to Leevi. They truly captured our brand's essence and made it shine online.",
  },
  {
    title: "We are 100% happy.",
    isLarge: false,
    content:
      "Leevi transformed our outdated site into a modern, high-performing platform. Their innovative approach exceeded our expectations.",
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
