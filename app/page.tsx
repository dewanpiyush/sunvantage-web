export default function Page() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1E33",
        color: "white",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🌅 SunVantage</h1>

      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>A quiet place to notice the morning.</p>

      <p style={{ fontSize: "0.9rem", opacity: 0.5 }}>Coming soon</p>

      <div style={{ marginTop: "3rem", fontSize: "0.8rem", opacity: 0.6 }}>
        <a href="/privacy" style={{ marginRight: "12px", color: "white" }}>
          Privacy
        </a>
        <a href="/terms" style={{ marginRight: "12px", color: "white" }}>
          Terms
        </a>
        <a href="/delete-account" style={{ color: "white" }}>
          Delete account
        </a>
      </div>
    </main>
  );
}
