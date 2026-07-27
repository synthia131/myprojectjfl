import { tools } from "@/lib/tools";
import TrustScore from "@/components/TrustScore";

export default function Home() {
  const ranked = [...tools].sort((a, b) => a.rank - b.rank);

  return (
    <main className="container" style={{ padding: "48px 24px" }}>
      <h1 className="display" style={{ fontSize: 40, maxWidth: 640 }}>
        The 2026 AI companion apps worth your money — ranked by privacy, features, and value.
      </h1>
      <p style={{ color: "var(--text-muted)", maxWidth: 560, marginTop: 12 }}>
        We test every app ourselves before it makes this list. Update the copy in{" "}
        <code>lib/tools.js</code> with your own findings before publishing.
      </p>

      <div style={{ marginTop: 40, display: "grid", gap: 20 }}>
        {ranked.map((tool) => (
          <div key={tool.slug} className="card" style={{ display: "grid", gridTemplateColumns: "48px 1fr 220px 140px", gap: 24, alignItems: "center" }}>
            <span className="display" style={{ fontSize: 28, color: "var(--accent)" }}>
              {tool.rank}
            </span>
            <div>
              <h3 style={{ margin: 0, fontSize: 20 }}>{tool.name}</h3>
              <p style={{ margin: "4px 0", color: "var(--text-muted)", fontSize: 14 }}>{tool.tagline}</p>
              <a href={`/reviews/${tool.slug}`} style={{ fontSize: 14 }}>
                Read full review →
              </a>
            </div>
            <TrustScore trustScore={tool.trustScore} />
            <div style={{ textAlign: "right" }}>
              <div style={{ marginBottom: 8, fontWeight: 600 }}>{tool.price}</div>
              <a className="btn" href={tool.affiliateLink} rel="sponsored nofollow">
                Try it
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
