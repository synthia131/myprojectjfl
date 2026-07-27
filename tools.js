export default function TrustScore({ trustScore }) {
  const rows = [
    { label: "Privacy", value: trustScore.privacy },
    { label: "Features", value: trustScore.features },
    { label: "Value", value: trustScore.value },
  ];

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {rows.map((row) => (
        <div key={row.label} style={{ display: "grid", gridTemplateColumns: "80px 1fr 32px", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.label}</span>
          <div className="meter">
            <div className="meter-fill" style={{ width: `${row.value}%` }} />
          </div>
          <span style={{ fontSize: 13, color: "var(--text-muted)", textAlign: "right" }}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}
