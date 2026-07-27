import os, html

BASE = os.path.dirname(os.path.abspath(__file__))

tools = [
    {"slug": "tool-one", "name": "Tool One", "tagline": "Placeholder tagline — replace with your own positioning", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2", "Placeholder pro 3"], "cons": ["Placeholder con 1", "Placeholder con 2"], "link": "#"},
    {"slug": "tool-two", "name": "Tool Two", "tagline": "Placeholder tagline", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2"], "cons": ["Placeholder con 1"], "link": "#"},
    {"slug": "tool-three", "name": "Tool Three", "tagline": "Placeholder tagline", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2"], "cons": ["Placeholder con 1"], "link": "#"},
    {"slug": "tool-four", "name": "Tool Four", "tagline": "Placeholder tagline", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2"], "cons": ["Placeholder con 1"], "link": "#"},
    {"slug": "tool-five", "name": "Tool Five", "tagline": "Placeholder tagline", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2"], "cons": ["Placeholder con 1"], "link": "#"},
    {"slug": "tool-six", "name": "Tool Six", "tagline": "Placeholder tagline", "price": "$—/mo", "privacy": 0, "features": 0, "value": 0, "pros": ["Placeholder pro 1", "Placeholder pro 2"], "cons": ["Placeholder con 1"], "link": "#"},
]

def header(depth=""):
    return f'''  <div class="age-gate-banner">18+ only. This site reviews adult-oriented AI products. By continuing you confirm you are of legal age in your jurisdiction.</div>
  <header>
    <div class="container">
      <a href="{depth}index.html" class="logo display">CompanionRank</a>
      <nav>
        <a href="{depth}compare.html">Compare</a>
        <a href="{depth}blog.html">Guides</a>
      </nav>
    </div>
  </header>
'''

def footer(depth=""):
    return f'''  <footer>
    <div class="container">
      <p>Affiliate disclosure: CompanionRank earns a commission when you sign up through links on this site. This doesn't affect our rankings, which reflect our own testing and criteria.</p>
      <p style="margin-top:12px"><a href="{depth}legal/privacy.html">Privacy Policy</a> &middot; <a href="{depth}legal/terms.html">Terms</a> &middot; <a href="{depth}legal/disclosure.html">Affiliate Disclosure</a></p>
    </div>
  </footer>
'''

def page_shell(title, body, depth=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{html.escape(title)}</title>
<link rel="stylesheet" href="{depth}style.css">
</head>
<body>
{header(depth)}
{body}
{footer(depth)}
</body>
</html>
'''

def meter(label, value):
    return f'''<div class="meter-row">
  <span class="meter-label">{label}</span>
  <div class="meter"><div class="meter-fill" style="width:{value}%"></div></div>
  <span class="meter-value">{value}</span>
</div>'''

def trust_block(t):
    return meter("Privacy", t["privacy"]) + meter("Features", t["features"]) + meter("Value", t["value"])

# ---------- index.html ----------
rows = ""
for i, t in enumerate(tools, start=1):
    rows += f'''<div class="card rank-row">
  <span class="rank-number display">{i}</span>
  <div>
    <h3 style="margin:0;font-size:20px">{t['name']}</h3>
    <p style="margin:4px 0;color:var(--text-muted);font-size:14px">{t['tagline']}</p>
    <a href="reviews/{t['slug']}.html" style="font-size:14px">Read full review &rarr;</a>
  </div>
  <div>{trust_block(t)}</div>
  <div style="text-align:right">
    <div style="margin-bottom:8px;font-weight:600">{t['price']}</div>
    <a class="btn" href="{t['link']}" rel="sponsored nofollow">Try it</a>
  </div>
</div>
'''

index_body = f'''<main class="container" style="padding:48px 24px">
  <h1 class="display" style="font-size:40px;max-width:640px">The 2026 AI companion apps worth your money — ranked by privacy, features, and value.</h1>
  <p style="color:var(--text-muted);max-width:560px;margin-top:12px">We test every app ourselves before it makes this list. Edit <code>generate.py</code> (or the HTML directly) with your own findings before publishing.</p>
  <div style="margin-top:40px">
    {rows}
  </div>
</main>'''

with open(os.path.join(BASE, "index.html"), "w") as f:
    f.write(page_shell("Best AI Companion Apps — Independent Reviews & Comparisons", index_body))

# ---------- compare.html ----------
trows = ""
for t in tools:
    trows += f'''<tr>
  <td><a href="reviews/{t['slug']}.html">{t['name']}</a></td>
  <td>{t['price']}</td>
  <td>{t['privacy']}</td>
  <td>{t['features']}</td>
  <td>{t['value']}</td>
  <td><a class="btn" href="{t['link']}" rel="sponsored nofollow">Try it</a></td>
</tr>
'''

compare_body = f'''<main class="container" style="padding:48px 24px">
  <h1 class="display" style="font-size:32px">Full Comparison</h1>
  <div style="overflow-x:auto;margin-top:24px">
    <table>
      <thead><tr><th>App</th><th>Price</th><th>Privacy</th><th>Features</th><th>Value</th><th></th></tr></thead>
      <tbody>{trows}</tbody>
    </table>
  </div>
</main>'''

with open(os.path.join(BASE, "compare.html"), "w") as f:
    f.write(page_shell("Full Comparison — CompanionRank", compare_body))

# ---------- blog.html ----------
blog_body = '''<main class="container" style="padding:48px 24px;max-width:640px">
  <h1 class="display">Guides</h1>
  <p style="color:var(--text-muted)">This is where your SEO content goes — "how does AI companion pricing work," "is this legal in my country," "privacy tips," etc. Duplicate one of the review HTML files as a starting template for each new post.</p>
</main>'''
with open(os.path.join(BASE, "blog.html"), "w") as f:
    f.write(page_shell("Guides — CompanionRank", blog_body))

# ---------- reviews/*.html ----------
os.makedirs(os.path.join(BASE, "reviews"), exist_ok=True)
for t in tools:
    pros = "".join(f"<li>{p}</li>" for p in t["pros"])
    cons = "".join(f"<li>{c}</li>" for c in t["cons"])
    body = f'''<main class="container" style="padding:48px 24px;max-width:720px">
  <p style="color:var(--accent);font-size:14px;margin-bottom:8px">Review</p>
  <h1 class="display" style="font-size:36px">{t['name']}</h1>
  <p style="color:var(--text-muted);font-size:18px;margin-top:8px">{t['tagline']}</p>

  <div class="card" style="margin-top:32px">
    <h3 style="margin-top:0">Trust Score</h3>
    {trust_block(t)}
  </div>

  <div class="pros-cons">
    <div class="card">
      <h3 style="margin-top:0;color:var(--accent)">Pros</h3>
      <ul>{pros}</ul>
    </div>
    <div class="card">
      <h3 style="margin-top:0;color:var(--text-muted)">Cons</h3>
      <ul>{cons}</ul>
    </div>
  </div>

  <div style="margin-top:32px;display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:20px;font-weight:600">{t['price']}</span>
    <a class="btn" href="{t['link']}" rel="sponsored nofollow">Visit {t['name']} &rarr;</a>
  </div>

  <p style="color:var(--text-muted);font-size:12px;margin-top:40px">This review reflects our own testing. We may earn a commission if you sign up through the link above.</p>
</main>'''
    with open(os.path.join(BASE, "reviews", f"{t['slug']}.html"), "w") as f:
        f.write(page_shell(f"{t['name']} Review — CompanionRank", body, depth="../"))

# ---------- legal pages ----------
os.makedirs(os.path.join(BASE, "legal"), exist_ok=True)

legal_pages = {
    "disclosure": ("Affiliate Disclosure", '''<p>CompanionRank participates in affiliate programs for the products reviewed on this site. This means we earn a commission when you sign up for or purchase a subscription through links on this site, at no extra cost to you.</p>
<p>This financial relationship does not influence our rankings or reviews, which are based on our own testing criteria (privacy practices, feature set, and pricing value). We aim to be transparent about this relationship in compliance with FTC guidelines on endorsements and testimonials.</p>
<p style="color:var(--text-muted);font-size:13px">Replace this placeholder with your actual review methodology once you've picked and tested your affiliate programs.</p>'''),
    "privacy": ("Privacy Policy", '''<p style="color:var(--text-muted)">Placeholder — replace before launch. At minimum, cover: what data you collect (analytics, cookies, email signups if any), how affiliate links/tracking work, whether you use any third-party analytics, and how users can contact you with privacy questions. Consider a generator like Termly, or a lawyer if you'll operate in the EU/UK (GDPR) given the sensitive nature of this niche.</p>'''),
    "terms": ("Terms of Use", '''<p style="color:var(--text-muted)">Placeholder — replace before launch. At minimum, state: this site is for adults 18+ only, you are not affiliated with the companies you review, reviews reflect your own opinions, and you are not liable for third-party products linked from this site.</p>'''),
}

for slug, (title, content) in legal_pages.items():
    body = f'''<main class="container" style="padding:48px 24px;max-width:640px">
  <h1 class="display">{title}</h1>
  {content}
</main>'''
    with open(os.path.join(BASE, "legal", f"{slug}.html"), "w") as f:
        f.write(page_shell(f"{title} — CompanionRank", body, depth="../"))

print("Done. Files generated in", BASE)
