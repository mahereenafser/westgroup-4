export default function AboutSection() {
  const awardsData = [
    { name: "BBB A+ Rating", date: "2024" },
    { name: "MDRT Top of Table", date: "2024" },
    { name: "CFP® Certified", date: "Professional" },
    { name: "CFA Charterholder", date: "Professional" },
    { name: "3000+ Clients Served", date: "Since 2010" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8">
          <p className="text-[13px] font-normal uppercase tracking-wider text-foreground">
            About WESTGROUP
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h2
              className="text-3xl lg:text-[2.5rem] text-foreground"
              style={{ lineHeight: "1.2", fontWeight: 300 }}
            >
              Fee-Only Fiduciary Advisors Committed to Your Financial Success
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p
              className="text-base text-secondary-text"
              style={{ lineHeight: "1.7" }}
            >
              WESTGROUP Financial Management Inc. is a fee-only fiduciary financial advisory firm located in Surrey, British Columbia. We serve high-net-worth individuals and families across Metro Vancouver with transparent, unbiased financial planning. Our team of CFP®, CFA, and PFP professionals is dedicated to delivering exceptional wealth management solutions that exceed our clients&apos; expectations.
            </p>
            <p
              className="text-base text-secondary-text"
              style={{ lineHeight: "1.7" }}
            >
              With over 3000 clients served and an A+ BBB rating, our expertise in comprehensive financial planning ensures that every strategy we create is tailored to your unique goals. We understand the importance of tax optimization, estate planning, and retirement income strategies, and our approach reflects that commitment to your long-term financial well-being.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="text-xl font-bold text-foreground">Our Credentials & Recognition</h4>
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
