const marqueeText =
  "+++ Digital Agency Based in Berlin +++ Framer +++ Webdeisgn +++ App Design";
const marqueeItems = Array(8).fill(marqueeText);

export default function MarqueeSection() {
  return (
    <section className="bg-accent text-accent-foreground py-4 overflow-hidden">
      <div className="flex animate-[marquee_35s_linear_infinite]">
        <ul className="flex items-center list-none m-0 p-0 flex-shrink-0">
          {marqueeItems.map((text, index) => (
            <li key={`item-1-${index}`} className="px-4">
              <p className="text-base font-bold uppercase whitespace-nowrap">
                {text}
              </p>
            </li>
          ))}
        </ul>
        <ul
          className="flex items-center list-none m-0 p-0 flex-shrink-0"
          aria-hidden="true"
        >
          {marqueeItems.map((text, index) => (
            <li key={`item-2-${index}`} className="px-4">
              <p className="text-base font-bold uppercase whitespace-nowrap">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
