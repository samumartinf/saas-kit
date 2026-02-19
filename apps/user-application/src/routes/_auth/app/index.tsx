import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TrendingUp, Lock, ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/_auth/app/")({
  component: ResearchFeed,
});

/* ── Mock data ────────────────────────────────────────────────── */

type ResearchItem = {
  id: string;
  institution: "UCL" | "Imperial";
  department: string;
  date: string;
  tags: string[];
  title: string;
  summary: string;
  whyItMatters: string;
  coolnessScore: number;
  vcScore: number | null;
  signals: string[];
  isNew?: boolean;
};

const mockFeed: ResearchItem[] = [
  {
    id: "1",
    institution: "UCL",
    department: "Queen Square Institute of Neurology",
    date: "Jan 2026",
    tags: ["Neuroscience", "Drug Discovery"],
    title: "Blood pressure drug slows Alzheimer's progression by 30% in new trial",
    summary:
      "UCL researchers found that amlodipine — already approved for hypertension — significantly reduces brain atrophy in early-stage Alzheimer's patients over 24 months, opening a fast path to clinical adoption.",
    whyItMatters:
      "Because this drug is already approved and safe, it could reach patients far faster than a brand-new therapy — potentially helping millions within a few years.",
    coolnessScore: 84,
    vcScore: 78,
    signals: ["Patent filed", "£2.3M grant", "Clinical trial", "45 media hits"],
    isNew: true,
  },
  {
    id: "2",
    institution: "Imperial",
    department: "Department of Bioengineering",
    date: "Jan 2026",
    tags: ["Biotech", "Manufacturing"],
    title: "Novel CAR-T manufacturing platform cuts production cost by 80%",
    summary:
      "A new closed-system bioreactor developed at Imperial automates CAR-T cell production with AI-driven process control, reducing manual interventions by 90% and bringing per-patient costs down from ~$400K to under $80K.",
    whyItMatters:
      "CAR-T therapies are among the most effective cancer treatments available, but cost puts them out of reach for most patients. This could change that.",
    coolnessScore: 76,
    vcScore: null,
    signals: ["Patent filed", "£3.2M UKRI grant", "Industry partner", "Phase 1 trial"],
    isNew: true,
  },
  {
    id: "3",
    institution: "UCL",
    department: "Computer Science",
    date: "Dec 2025",
    tags: ["AI", "Drug Discovery"],
    title: "AI model predicts adverse drug interactions with 97% accuracy",
    summary:
      "A machine learning system trained on molecular structure data can predict harmful drug-drug interactions before clinical trials, potentially reducing late-stage trial failures significantly.",
    whyItMatters:
      "Drug failures cost the industry billions and delay life-saving treatments. A 97%-accurate early-warning system could reshape how new medicines are developed.",
    coolnessScore: 81,
    vcScore: null,
    signals: ["Patent pending", "Pharma co-funding", "2nd grant"],
    isNew: false,
  },
  {
    id: "4",
    institution: "Imperial",
    department: "Department of Materials",
    date: "Dec 2025",
    tags: ["Climate", "Materials Science"],
    title: "New perovskite solar cell achieves record 31.2% efficiency",
    summary:
      "Imperial researchers have developed a tandem perovskite-silicon solar cell that converts 31.2% of sunlight into electricity — a record for this class of cells and close to the theoretical limit for silicon.",
    whyItMatters:
      "More efficient solar panels mean fewer panels needed for the same energy output, cutting installation costs and accelerating the shift away from fossil fuels.",
    coolnessScore: 88,
    vcScore: null,
    signals: ["Patent granted", "Innovate UK £1.8M", "Spin-out in progress"],
    isNew: false,
  },
  {
    id: "5",
    institution: "UCL",
    department: "Genetics, Evolution & Environment",
    date: "Nov 2025",
    tags: ["Genetics", "Health"],
    title: "Gene variant identified that protects against severe COVID-19 outcomes",
    summary:
      "A genome-wide study of 85,000 participants identified a rare variant in the OAS1 gene that dramatically reduces risk of ICU admission in COVID-19 patients, pointing to new therapeutic targets.",
    whyItMatters:
      "Understanding why some people fare better than others against viral infection could lead to treatments that replicate this natural protection.",
    coolnessScore: 72,
    vcScore: null,
    signals: ["Wellcome Trust funded", "Nature paper", "62 media mentions"],
    isNew: false,
  },
];

const TOPICS = [
  "All", "AI", "Biotech", "Climate", "Neuroscience",
  "Genetics", "Materials Science", "Drug Discovery",
];

/* ── Main component ───────────────────────────────────────────── */

function ResearchFeed() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? mockFeed
      : mockFeed.filter((item) => item.tags.includes(activeTag));

  return (
    <div style={{ fontFamily: "var(--rs-sans)" }}>
      <UpgradeBanner />

      {/* Topic filter */}
      <div
        className="flex items-center gap-2 flex-wrap mb-8"
        style={{ borderBottom: "1px solid var(--color-border)", paddingBottom: "1rem" }}
      >
        {TOPICS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "5px 12px",
              borderRadius: "2px",
              border: activeTag === tag ? "1px solid var(--rs-amber)" : "1px solid var(--color-border)",
              background: activeTag === tag ? "rgba(200,134,10,0.1)" : "transparent",
              color: activeTag === tag ? "var(--rs-amber)" : "var(--color-muted-foreground)",
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="flex flex-col">
        {filtered.map((item, i) => (
          <FeedCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ── Feed card ────────────────────────────────────────────────── */

function FeedCard({ item, index }: { item: ResearchItem; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const isLocked = item.vcScore === null;

  return (
    <article
      style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "1.75rem 0",
        animationDelay: `${index * 0.06}s`,
      }}
      className="rs-animate-fade-up"
    >
      <div className="grid lg:grid-cols-[1fr_200px] gap-6 items-start">
        {/* Left: content */}
        <div>
          {/* Meta row */}
          <div className="flex items-center flex-wrap gap-2 mb-3">
            <InstitutionPill institution={item.institution} />
            {item.isNew && (
              <span
                style={{
                  fontFamily: "var(--rs-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--rs-amber)",
                  background: "rgba(200,134,10,0.1)",
                  padding: "2px 7px",
                  borderRadius: "2px",
                }}
              >
                New
              </span>
            )}
            {item.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--rs-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-foreground)",
                  background: "var(--color-muted)",
                  padding: "2px 7px",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
            <span
              className="hidden sm:inline"
              style={{
                fontFamily: "var(--rs-mono)",
                fontSize: "0.58rem",
                letterSpacing: "0.08em",
                color: "var(--color-muted-foreground)",
                marginLeft: "auto",
              }}
            >
              {item.department} · {item.date}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "var(--rs-serif)",
              fontSize: "1.15rem",
              lineHeight: 1.3,
              color: "var(--color-foreground)",
              marginBottom: "0.6rem",
              cursor: "pointer",
            }}
            onClick={() => setExpanded(!expanded)}
          >
            {item.title}
          </h2>

          {/* Summary */}
          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "var(--color-muted-foreground)",
              marginBottom: expanded ? "0.75rem" : 0,
            }}
          >
            {item.summary}
          </p>

          {/* Why it matters (expanded) */}
          {expanded && (
            <div
              style={{
                borderLeft: "2px solid var(--rs-amber)",
                paddingLeft: "0.875rem",
                marginBottom: "0.75rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--rs-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--rs-amber)",
                  marginBottom: "0.4rem",
                }}
              >
                Why it matters
              </p>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--color-muted-foreground)" }}>
                {item.whyItMatters}
              </p>
            </div>
          )}

          {/* Signals + toggle */}
          <div className="flex items-center flex-wrap gap-2 mt-3">
            {item.signals.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--rs-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-foreground)",
                  border: "1px solid var(--color-border)",
                  padding: "2px 7px",
                  borderRadius: "2px",
                }}
              >
                {s}
              </span>
            ))}
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                marginLeft: "auto",
                fontFamily: "var(--rs-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-muted-foreground)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              {expanded ? "Show less ↑" : "Read more ↓"}
            </button>
          </div>
        </div>

        {/* Right: scores */}
        <div className="flex lg:flex-col gap-3">
          <ScoreWidget label="Coolness" value={item.coolnessScore} locked={false} />
          <ScoreWidget label="VC Readiness" value={item.vcScore ?? 0} locked={isLocked} />
        </div>
      </div>
    </article>
  );
}

/* ── Score widget ─────────────────────────────────────────────── */

function ScoreWidget({ label, value, locked }: { label: string; value: number; locked: boolean }) {
  return (
    <div
      style={{
        background: "var(--color-muted)",
        border: "1px solid var(--color-border)",
        borderRadius: "4px",
        padding: "12px 14px",
        minWidth: "90px",
        flex: "1",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <p
        style={{
          fontFamily: "var(--rs-mono)",
          fontSize: "0.55rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-muted-foreground)",
          marginBottom: "4px",
        }}
      >
        {label}
      </p>

      {locked ? (
        <div className="flex items-center gap-1.5">
          <Lock className="h-3.5 w-3.5" style={{ color: "var(--rs-amber)" }} />
          <span
            style={{
              fontFamily: "var(--rs-mono)",
              fontSize: "0.65rem",
              color: "var(--color-muted-foreground)",
              letterSpacing: "0.08em",
            }}
          >
            Pro only
          </span>
        </div>
      ) : (
        <>
          <p
            style={{
              fontFamily: "var(--rs-serif)",
              fontSize: "1.5rem",
              lineHeight: 1,
              color: value >= 75 ? "var(--rs-amber)" : "var(--color-foreground)",
            }}
          >
            {value}
          </p>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              width: `${value}%`,
              background: "var(--rs-amber)",
              opacity: 0.4,
            }}
          />
        </>
      )}
    </div>
  );
}

/* ── Institution pill ─────────────────────────────────────────── */

function InstitutionPill({ institution }: { institution: "UCL" | "Imperial" }) {
  return (
    <span
      style={{
        fontFamily: "var(--rs-mono)",
        fontSize: "0.58rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        padding: "2px 8px",
        borderRadius: "2px",
        background: institution === "UCL" ? "rgba(59,130,246,0.1)" : "rgba(139,92,246,0.1)",
        color: institution === "UCL" ? "rgb(96,165,250)" : "rgb(167,139,250)",
        border: institution === "UCL" ? "1px solid rgba(59,130,246,0.2)" : "1px solid rgba(139,92,246,0.2)",
      }}
    >
      {institution}
    </span>
  );
}

/* ── Upgrade banner ───────────────────────────────────────────── */

function UpgradeBanner() {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 p-4"
      style={{
        background: "rgba(200,134,10,0.06)",
        border: "1px solid rgba(200,134,10,0.2)",
        borderRadius: "4px",
      }}
    >
      <div className="flex items-start gap-3">
        <Sparkles className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "var(--rs-amber)" }} />
        <div>
          <p
            style={{
              fontFamily: "var(--rs-sans)",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "var(--color-foreground)",
              marginBottom: "2px",
            }}
          >
            Unlock VC Readiness Scores
          </p>
          <p
            style={{
              fontFamily: "var(--rs-sans)",
              fontSize: "0.8rem",
              color: "var(--color-muted-foreground)",
            }}
          >
            See patent signals, funding stage, and commercial readiness for every paper. Upgrade to Pro.
          </p>
        </div>
      </div>

      <Link
        to="/app/polar/subscriptions"
        className="inline-flex items-center gap-2 shrink-0"
        style={{
          fontFamily: "var(--rs-sans)",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.02em",
          color: "var(--rs-ink)",
          background: "var(--rs-amber)",
          padding: "8px 16px",
          borderRadius: "2px",
          textDecoration: "none",
          whiteSpace: "nowrap",
          transition: "background 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--rs-amber-light)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.background = "var(--rs-amber)";
        }}
      >
        <TrendingUp className="h-3.5 w-3.5" />
        Upgrade to Pro
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
