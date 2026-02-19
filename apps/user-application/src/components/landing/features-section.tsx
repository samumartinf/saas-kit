import { ArrowRight } from "lucide-react";

/* ── How it works ──────────────────────────────────────────────── */

const steps = [
  {
    n: "01",
    title: "We harvest the research",
    body: "Every day we ingest new papers, grants, and patents from UCL and Imperial College London — thousands of outputs, automatically collected via OAI-PMH and public APIs.",
    label: "Data Ingestion",
  },
  {
    n: "02",
    title: "AI makes it readable",
    body: "Claude summarises each paper into plain English. No jargon, no dense abstracts — just what was found, why it's interesting, and what it could mean for the world.",
    label: "AI Summaries",
  },
  {
    n: "03",
    title: "We score everything",
    body: "Each item gets two scores: a Coolness Score for public interest, and a VC Readiness Score based on patents, funding stage, industry co-investment, and hot-topic alignment.",
    label: "Scoring Engine",
  },
];

/* ── Audience panels ───────────────────────────────────────────── */

const audiences = [
  {
    tag: "Public",
    headline: "For the\ncurious",
    sub: "Breakthroughs from health, climate, AI, and materials science — explained like you're a smart person, not a PhD student.",
    points: [
      "Plain-language summaries",
      "Browse by topic",
      "Trending research this week",
      "Share discoveries",
    ],
    badge: "Free",
    accent: "var(--rs-paper)",
    bg: "var(--rs-ink)",
  },
  {
    tag: "Investors",
    headline: "For the\nambitious",
    sub: "Find commercially promising research before your competitors. Filter by VC Readiness Score, patents, funding stage, and hot-topic alignment.",
    points: [
      "VC Readiness Score (0–100)",
      "Patent & grant signals",
      "Researcher profiles & track record",
      "Saved searches & email alerts",
    ],
    badge: "Pro",
    accent: "var(--rs-amber-light)",
    bg: "#0f1a0a",
  },
];

export function FeaturesSection() {
  return (
    <>
      {/* ── How it works ── */}
      <section
        id="how-it-works"
        style={{ background: "var(--rs-ink)", position: "relative" }}
      >
        {/* Diagonal separator */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(245,240,232,0.08)",
          }}
        />

        <div
          className="mx-auto max-w-7xl px-6 lg:px-8"
          style={{ paddingTop: "7rem", paddingBottom: "7rem" }}
        >
          {/* Section label */}
          <div
            className="flex items-center gap-4 mb-16"
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rs-amber)",
            }}
          >
            <span
              style={{ width: "28px", height: "1px", background: "var(--rs-amber)", display: "inline-block" }}
            />
            How it works
          </div>

          <div className="grid lg:grid-cols-3 gap-0">
            {steps.map((step, i) => (
              <div
                key={step.n}
                style={{
                  borderLeft: i === 0 ? "1px solid rgba(245,240,232,0.1)" : "none",
                  borderRight: "1px solid rgba(245,240,232,0.1)",
                  padding: "0 2.5rem",
                  paddingBottom: "2rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--rs-serif)",
                    fontSize: "5rem",
                    lineHeight: 1,
                    color: "rgba(245,240,232,0.06)",
                    marginBottom: "-1rem",
                    userSelect: "none",
                  }}
                >
                  {step.n}
                </div>

                <div
                  style={{
                    fontFamily: "var(--rs-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--rs-amber)",
                    background: "rgba(200,134,10,0.1)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  {step.label}
                </div>

                <h3
                  style={{
                    fontFamily: "var(--rs-serif)",
                    fontSize: "1.5rem",
                    lineHeight: 1.25,
                    color: "var(--rs-paper)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--rs-sans)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.5)",
                  }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audience panels ── */}
      <section id="for-vcs">
        <div className="grid lg:grid-cols-2">
          {audiences.map((aud) => (
            <div
              key={aud.tag}
              className="relative rs-noise"
              style={{
                background: aud.bg,
                padding: "6rem 4rem",
                borderTop: "1px solid rgba(245,240,232,0.08)",
              }}
            >
              {/* Fine grid */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(245,240,232,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.03) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              <div className="relative z-10">
                {/* Tag */}
                <div
                  className="flex items-center gap-3 mb-8"
                  style={{
                    fontFamily: "var(--rs-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: aud.accent,
                  }}
                >
                  <span
                    style={{ width: "20px", height: "1px", background: aud.accent, display: "inline-block" }}
                  />
                  {aud.tag}
                  <span
                    style={{
                      background: aud.accent === "var(--rs-amber-light)" ? "rgba(240,184,64,0.12)" : "rgba(245,240,232,0.08)",
                      color: aud.accent,
                      padding: "2px 8px",
                      borderRadius: "2px",
                      fontSize: "0.55rem",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {aud.badge}
                  </span>
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "var(--rs-serif)",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    lineHeight: 1.1,
                    color: "var(--rs-paper)",
                    marginBottom: "1.5rem",
                    whiteSpace: "pre-line",
                  }}
                >
                  {aud.headline}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--rs-sans)",
                    fontSize: "0.95rem",
                    lineHeight: 1.7,
                    color: "rgba(245,240,232,0.55)",
                    maxWidth: "340px",
                    marginBottom: "2.5rem",
                  }}
                >
                  {aud.sub}
                </p>

                {/* Feature list */}
                <ul
                  style={{
                    borderTop: "1px solid rgba(245,240,232,0.08)",
                    paddingTop: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {aud.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3"
                      style={{
                        fontFamily: "var(--rs-sans)",
                        fontSize: "0.875rem",
                        color: "rgba(245,240,232,0.65)",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          background: aud.accent,
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Early access CTA ── */}
      <section
        id="early-access"
        className="relative rs-noise"
        style={{
          background: "var(--rs-paper)",
          padding: "8rem 1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Decorative large serif numeral */}
        <div
          className="absolute select-none pointer-events-none"
          style={{
            right: "-2rem",
            bottom: "-3rem",
            fontFamily: "var(--rs-serif)",
            fontSize: "22rem",
            lineHeight: 1,
            color: "rgba(13,17,23,0.04)",
          }}
        >
          ∞
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div
            className="flex items-center justify-center gap-4 mb-8"
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--rs-amber)",
            }}
          >
            <span
              style={{ width: "20px", height: "1px", background: "var(--rs-amber)", display: "inline-block" }}
            />
            Early Access
            <span
              style={{ width: "20px", height: "1px", background: "var(--rs-amber)", display: "inline-block" }}
            />
          </div>

          <h2
            style={{
              fontFamily: "var(--rs-serif)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--rs-ink)",
              marginBottom: "1.5rem",
            }}
          >
            Be the first to know
            <br />
            <em style={{ color: "var(--rs-amber)" }}>what's coming next.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--rs-sans)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(13,17,23,0.6)",
              maxWidth: "480px",
              margin: "0 auto 3rem",
            }}
          >
            We're launching with UCL and Imperial College London research. Sign
            in now to join the waitlist and get first access when we open.
          </p>

          <div className="flex items-center justify-center gap-2 flex-wrap">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center gap-2 px-8 py-4 transition-all duration-200"
              style={{
                background: "var(--rs-ink)",
                color: "var(--rs-paper)",
                fontFamily: "var(--rs-sans)",
                fontWeight: 600,
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#1a2332";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--rs-ink)";
              }}
            >
              Sign in to join waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p
            className="mt-6"
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "rgba(13,17,23,0.35)",
            }}
          >
            Use the sign-in button in the top-right corner
          </p>
        </div>
      </section>
    </>
  );
}
