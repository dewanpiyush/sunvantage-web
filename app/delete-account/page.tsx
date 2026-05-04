export default function DeleteAccountPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B1E33",
        color: "white",
        fontFamily: "system-ui",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
        <a href="/" style={{ opacity: 0.6, fontSize: "0.9rem", color: "white" }}>
          ← Back
        </a>

        <h1 style={{ marginTop: "20px" }}>Delete your SunVantage account</h1>

        <p>To request deletion of your account and associated data, please email:</p>

        <p>
          <a href="mailto:hello@sunvantage.app" style={{ color: "white" }}>
            hello@sunvantage.app
          </a>
        </p>

        <p>Include your registered email address in the request.</p>

        <p>We will process your request within a reasonable timeframe and confirm once completed.</p>
      </div>
    </main>
  );
}
