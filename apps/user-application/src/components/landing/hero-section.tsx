import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden rs-noise"
      style={{
        background: "var(--rs-ink)",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Fine grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px rs-animate-fade-in"
        style={{ background: "var(--rs-amber)", opacity: 0.6 }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "55%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(200,134,10,0.12) 0%, transparent 70%)",
          transform: "translateX(-50%)",
        }}
      />

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex flex-col"
        style={{ paddingTop: "7rem" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 pb-20">
          {/* Masthead label */}
          <div
            className="rs-animate-fade-up rs-delay-1 mb-8 flex items-center gap-4"
            style={{ fontFamily: "var(--rs-mono)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "var(--rs-amber)", textTransform: "uppercase" }}
          >
            <span
              className="inline-block"
              style={{
                width: "28px",
                height: "1px",
                background: "var(--rs-amber)",
              }}
            />
            Research Intelligence · London Universities · Early Access
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — headline */}
            <div>
              <h1
                className="rs-animate-fade-up rs-delay-2"
                style={{
                  fontFamily: "var(--rs-serif)",
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                  lineHeight: "1.05",
                  color: "var(--rs-paper)",
                  letterSpacing: "-0.01em",
                }}
              >
                Research worth
                <br />
                <em style={{ color: "var(--rs-amber-light)", fontStyle: "italic" }}>
                  knowing about.
                </em>
              </h1>

              <p
                className="rs-animate-fade-up rs-delay-3 mt-8"
                style={{
                  fontFamily: "var(--rs-sans)",
                  fontSize: "1.125rem",
                  lineHeight: "1.75",
                  color: "rgba(245,240,232,0.65)",
                  maxWidth: "420px",
                }}
              >
                UCL and Imperial College London produce thousands of
                breakthroughs each year. We surface the ones that matter — in
                plain English for curious readers, and with investor-grade
                signals for VCs.
              </p>

              {/* Stats row */}
              <div
                className="rs-animate-fade-up rs-delay-4 mt-10 flex items-center gap-8"
                style={{ borderTop: "1px solid rgba(245,240,232,0.1)", paddingTop: "2rem" }}
              >
                {[
                  { n: "2,000+", label: "papers / month" },
                  { n: "2", label: "world-class universities" },
                  { n: "100pt", label: "VC readiness score" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "var(--rs-serif)",
                        fontSize: "1.75rem",
                        color: "var(--rs-paper)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--rs-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.4)",
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="rs-animate-fade-up rs-delay-5 mt-10 flex items-center gap-4 flex-wrap">
                <a
                  href="#early-access"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 transition-all duration-200"
                  style={{
                    background: "var(--rs-amber)",
                    color: "var(--rs-ink)",
                    fontFamily: "var(--rs-sans)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--rs-amber-light)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--rs-amber)";
                  }}
                >
                  Get Early Access
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-7 py-3.5 transition-colors duration-200"
                  style={{
                    border: "1px solid rgba(245,240,232,0.2)",
                    color: "rgba(245,240,232,0.7)",
                    fontFamily: "var(--rs-sans)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    borderRadius: "2px",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--rs-paper)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,240,232,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.7)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(245,240,232,0.2)";
                  }}
                >
                  See how it works
                </a>
              </div>
            </div>

            {/* Right — mock research card */}
            <div className="rs-animate-fade-up rs-delay-4 hidden lg:block">
              <MockResearchCard />
            </div>
          </div>
        </div>

        {/* Ticker */}
        <Ticker />
      </div>
    </section>
  );
}

function MockResearchCard() {
  return (
    <div
      style={{
        background: "rgba(245,240,232,0.04)",
        border: "1px solid rgba(245,240,232,0.1)",
        borderRadius: "4px",
        padding: "28px",
        backdropFilter: "blur(8px)",
        position: "relative",
      }}
    >
      {/* Card header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--rs-amber)",
              background: "rgba(200,134,10,0.12)",
              padding: "3px 8px",
              borderRadius: "2px",
            }}
          >
            Neuroscience
          </span>
          <span
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.4)",
              background: "rgba(245,240,232,0.06)",
              padding: "3px 8px",
              borderRadius: "2px",
            }}
          >
            Drug Discovery
          </span>
        </div>
        <span
          style={{
            fontFamily: "var(--rs-mono)",
            fontSize: "0.6rem",
            color: "rgba(245,240,232,0.3)",
            letterSpacing: "0.08em",
          }}
        >
          UCL · Jan 2026
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--rs-serif)",
          fontSize: "1.3rem",
          lineHeight: 1.3,
          color: "var(--rs-paper)",
          marginBottom: "14px",
        }}
      >
        Blood pressure drug slows Alzheimer's progression by 30% in new trial
      </h3>

      {/* Summary */}
      <p
        style={{
          fontFamily: "var(--rs-sans)",
          fontSize: "0.85rem",
          lineHeight: 1.65,
          color: "rgba(245,240,232,0.55)",
          marginBottom: "20px",
        }}
      >
        UCL researchers found that amlodipine — already approved for
        hypertension — significantly reduces brain atrophy in early-stage
        Alzheimer's patients, opening a fast path to clinical adoption.
      </p>

      {/* Scores */}
      <div
        style={{
          borderTop: "1px solid rgba(245,240,232,0.08)",
          paddingTop: "18px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        <ScoreBar label="Coolness Score" value={84} />
        <ScoreBar label="VC Readiness" value={71} />
      </div>

      {/* Signals */}
      <div className="mt-5 flex flex-wrap gap-2">
        {["Patent filed", "£2.3M grant", "Clinical trial", "45 media hits"].map(
          (s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--rs-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.5)",
                border: "1px solid rgba(245,240,232,0.1)",
                padding: "3px 8px",
                borderRadius: "2px",
              }}
            >
              {s}
            </span>
          )
        )}
      </div>

      {/* Corner decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "40px",
          height: "40px",
          borderTop: "2px solid var(--rs-amber)",
          borderRight: "2px solid var(--rs-amber)",
          borderRadius: "0 4px 0 0",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

function ScoreBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span
          style={{
            fontFamily: "var(--rs-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.4)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--rs-serif)",
            fontSize: "1rem",
            color: "var(--rs-amber-light)",
          }}
        >
          {value}
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "rgba(245,240,232,0.08)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          className="rs-score-bar"
          style={
            {
              "--score-pct": `${value}%`,
              borderRadius: "2px",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}

const tickerItems = [
  "UCL · Breakthrough in solar cell efficiency",
  "Imperial · AI predicts drug interactions with 97% accuracy",
  "UCL · New material captures CO₂ directly from air",
  "Imperial · CAR-T manufacturing cost reduced by 80%",
  "UCL · Gene therapy restores hearing in clinical trial",
  "Imperial · Quantum sensor detects tumours 10× earlier",
  "UCL · Blood pressure drug slows Alzheimer's progression",
  "Imperial · Bio-degradable microchip dissolves post-surgery",
];

function Ticker() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div
      className="rs-ticker-wrap"
      style={{
        borderTop: "1px solid rgba(245,240,232,0.08)",
        padding: "14px 0",
        background: "rgba(245,240,232,0.02)",
      }}
    >
      <div className="rs-ticker-inner">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center"
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.1em",
              color: "rgba(245,240,232,0.35)",
              whiteSpace: "nowrap",
              padding: "0 3rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                background: "var(--rs-amber)",
                borderRadius: "50%",
                marginRight: "1.5rem",
                opacity: 0.6,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
