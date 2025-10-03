export default function AboutSection() {
  const awardsData = [
    { name: "Framer Award", date: "AUG 2022" },
    { name: "Webdesign Award 2022", date: "AUG 2022" },
    { name: "Website of the Year 2021", date: "AUG 2022" },
    { name: "App Design of the Year 2021", date: "AUG 2022" },
    { name: "Usability Award", date: "AUG 2022" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8">
          <p className="text-[13px] font-normal uppercase tracking-wider text-foreground">
            Why Leevi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h2
              className="text-3xl lg:text-[2.5rem] font-bold text-foreground"
              style={{ lineHeight: "1.2" }}
            >
              We create stunning digital experiences that people will love. On
              all plattforms.
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p
              className="text-base text-secondary-text"
              style={{ lineHeight: "1.7" }}
            >
              At Leevi, we are passionate about transforming digital visions
              into reality. As a creative digital agency specializing in app
              design, web design, and web development, we pride ourselves on
              delivering exceptional solutions that exceed our clients&apos;
              expectations. Our team of skilled designers and developers work
              collaboratively to create intuitive, visually stunning, and
              high-performing digital experiences.
            </p>
            <p
              className="text-base text-secondary-text"
              style={{ lineHeight: "1.7" }}
            >
              Our expertise in app design ensures that every application we
              create is not only aesthetically pleasing but also user-friendly
              and engaging. We understand the importance of a seamless user
              experience, and our designs reflect that commitment, making
              interactions enjoyable and efficient.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-xl font-bold text-foreground">Our Awards</h4>
            </div>
            <div className="flex flex-col">
              {awardsData.map((award) => (
                <div
                  key={award.name}
                  className="flex justify-between items-center border-b border-border py-4"
                >
                  <p className="text-base text-foreground">{award.name}</p>
                  <p className="text-base text-secondary-text">{award.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
