const sources = [
  { name: "UCL Discovery", href: "https://discovery.ucl.ac.uk" },
  { name: "Imperial Spiral", href: "https://spiral.imperial.ac.uk" },
  { name: "UKRI Gateway to Research", href: "https://gtr.ukri.org" },
];

const nav = [
  { name: "How it works", href: "#how-it-works" },
  { name: "For VCs", href: "#for-vcs" },
  { name: "Early Access", href: "#early-access" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--rs-ink)",
        borderTop: "1px solid rgba(245,240,232,0.08)",
        padding: "4rem 1.5rem 2.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div className="grid grid-cols-1 gap-10 mb-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: "var(--rs-serif)",
                fontSize: "1.4rem",
                color: "var(--rs-paper)",
                marginBottom: "0.5rem",
              }}
            >
              ResearchSanity
            </p>
            <p
              style={{
                fontFamily: "var(--rs-sans)",
                fontSize: "0.875rem",
                lineHeight: 1.65,
                color: "rgba(245,240,232,0.4)",
              }}
            >
              Making academic research accessible — for curious people and the
              investors backing tomorrow's breakthroughs.
            </p>
          </div>

          {/* Product nav */}
          <div>
            <p
              style={{
                fontFamily: "var(--rs-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--rs-amber)",
                marginBottom: "1rem",
              }}
            >
              Product
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {nav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--rs-sans)",
                      fontSize: "0.85rem",
                      color: "rgba(245,240,232,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--rs-paper)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.45)";
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Data sources */}
          <div>
            <p
              style={{
                fontFamily: "var(--rs-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--rs-amber)",
                marginBottom: "1rem",
              }}
            >
              Data Sources
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {sources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--rs-sans)",
                      fontSize: "0.85rem",
                      color: "rgba(245,240,232,0.45)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--rs-paper)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,240,232,0.45)";
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: "1px solid rgba(245,240,232,0.06)",
            paddingTop: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "rgba(245,240,232,0.2)",
            }}
          >
            &copy; {new Date().getFullYear()} ResearchSanity · Private Beta
          </p>
          <p
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              color: "rgba(245,240,232,0.2)",
            }}
          >
            UCL &amp; Imperial College London · London, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
