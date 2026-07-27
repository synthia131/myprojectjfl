export default function Blog() {
  return (
    <main className="container" style={{ padding: "48px 24px", maxWidth: 640 }}>
      <h1 className="display">Guides</h1>
      <p style={{ color: "var(--text-muted)" }}>
        This is where your SEO content goes — "how does AI companion pricing work," "is this
        legal in my country," "privacy tips," etc. Add pages under <code>app/blog/[slug]</code> the
        same way the reviews are structured, or connect a CMS (Sanity, Notion) if you'd rather
        write content there and pull it in.
      </p>
    </main>
  );
}
