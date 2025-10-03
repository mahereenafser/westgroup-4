const logos = [
  {
    name: "BBB Accredited",
    svg: (
      <svg
        width="120"
        height="88"
        viewBox="0 0 120 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="BBB Accredited"
      >
        <circle
          cx="44"
          cy="44"
          r="43.5"
          stroke="currentColor"
          strokeOpacity="0.2"
        ></circle>
        <text
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="9"
          fontWeight="700"
          letterSpacing="0.1em"
          textAnchor="middle"
          style={{ textTransform: "uppercase" }}
          x="44"
          y="40"
        >
          BBB
        </text>
        <text
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="7"
          fontWeight="600"
          letterSpacing="0.1em"
          textAnchor="middle"
          style={{ textTransform: "uppercase" }}
          x="44"
          y="52"
        >
          Accredited
        </text>
      </svg>
    ),
  },
  {
    name: "ThreeBestRated",
    svg: (
      <svg
        width="150"
        height="88"
        viewBox="0 0 150 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="ThreeBestRated"
      >
        <circle
          cx="44"
          cy="44"
          r="30"
          stroke="currentColor"
          strokeOpacity="0.4"
        ></circle>
        <circle
          cx="44"
          cy="44"
          r="20"
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeDasharray="4 4"
        ></circle>
        <circle cx="44" cy="44" r="8" fill="currentColor"></circle>
        <g
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="8"
          fontWeight="700"
          letterSpacing=".1em"
          style={{ textTransform: "uppercase" }}
        >
          <text x="90" y="40">
            ThreeBest
          </text>
          <text x="90" y="52">
            Rated
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "MDRT Top of Table",
    svg: (
      <svg
        width="140"
        height="88"
        viewBox="0 0 140 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="MDRT Top of Table"
      >
        <g transform="translate(44, 44) rotate(15) translate(-44, -44)">
          <rect
            x="18"
            y="18"
            width="52"
            height="52"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          ></rect>
        </g>
        <g
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="8"
          fontWeight="700"
          letterSpacing=".1em"
          textAnchor="middle"
          style={{ textTransform: "uppercase" }}
        >
          <text x="44" y="38">
            MDRT
          </text>
          <text x="44" y="50">
            Top of Table
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Consumer Choice Award",
    svg: (
      <svg
        width="160"
        height="88"
        viewBox="0 0 160 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Consumer Choice Award"
      >
        <rect x="35" y="10" width="50" height="50" fill="currentColor"></rect>
        <rect
          x="45"
          y="20"
          width="30"
          height="30"
          fill="var(--background)"
        ></rect>
        <g
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="7"
          fontWeight="700"
          letterSpacing=".05em"
          textAnchor="middle"
          style={{ textTransform: "uppercase" }}
        >
          <text x="60" y="70">
            Consumer Choice
          </text>
          <text x="60" y="80">
            Award
          </text>
        </g>
      </svg>
    ),
  },
  {
    name: "Top 100 Magazine",
    svg: (
      <svg
        width="140"
        height="88"
        viewBox="0 0 140 88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Top 100 Magazine"
      >
        <rect
          x="10"
          y="20"
          width="120"
          height="48"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        ></rect>
        <g
          fill="currentColor"
          fontFamily="var(--font-display, Inter, sans-serif)"
          fontSize="9"
          fontWeight="700"
          letterSpacing=".1em"
          textAnchor="middle"
          style={{ textTransform: "uppercase" }}
        >
          <text x="70" y="42">
            Top 100
          </text>
          <text x="70" y="56">
            Magazine
          </text>
        </g>
      </svg>
    ),
  },
];

export default function LogosSection() {
  return (
    <section className="bg-background py-32">
      <div className="container">
        {/* Desktop Layout - All in one row */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-x-16 lg:gap-x-24 gap-y-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="opacity-70 fill-current text-foreground filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>

        {/* Mobile Layout - Two rows, centered */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          {/* First row - 3 awards */}
          <div className="flex justify-center items-center gap-6">
            {logos.slice(0, 3).map((logo) => (
              <div
                key={logo.name}
                className="opacity-70 fill-current text-foreground filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                title={logo.name}
              >
                {logo.svg}
              </div>
            ))}
          </div>

          {/* Second row - 2 awards */}
          <div className="flex justify-center items-center gap-6">
            {logos.slice(3, 5).map((logo) => (
              <div
                key={logo.name}
                className="opacity-70 fill-current text-foreground filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                title={logo.name}
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
