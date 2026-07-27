@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --bg: #0B1120;
  --bg-raised: #131B2E;
  --text: #F5F3FF;
  --text-muted: #94A3B8;
  --accent: #C4B5FD;
  --accent-dim: #8B7CD6;
  --border: #1E293B;
  --radius: 10px;
}

* { box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  line-height: 1.6;
}

h1, h2, h3, .display {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  letter-spacing: -0.01em;
}

a { color: var(--accent); text-decoration: none; }
a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

.container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

.card {
  background: var(--bg-raised);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}

.btn {
  display: inline-block;
  background: var(--accent);
  color: #0B1120;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.btn:hover { background: var(--accent-dim); }

.meter {
  height: 6px;
  border-radius: 4px;
  background: var(--border);
  overflow: hidden;
}
.meter-fill {
  height: 100%;
  background: var(--accent);
}

.age-gate-banner {
  background: #1E1030;
  border-bottom: 1px solid var(--border);
  padding: 8px 0;
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; }
}
