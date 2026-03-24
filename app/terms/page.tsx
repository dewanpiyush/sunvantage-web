export default function TermsPage() {
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
        <a href="/" style={{ opacity: 0.6, fontSize: "0.9rem" }}>
          ← Back
        </a>

        <h1 style={{ marginTop: "20px" }}>Terms of Use</h1>

        <p style={{ opacity: 0.6 }}>Last updated: March 2026</p>

        <p>
          SunVantage is a space for mindful, respectful sharing of sunrise moments. By using the app, you agree to the following:
        </p>

        <h3>Eligibility</h3>
        <p>You must be at least 13 years old to use the app.</p>

        <h3>Use of the app</h3>
        <ul>
          <li>You will use the app respectfully and lawfully</li>
          <li>You will not upload harmful, explicit, or abusive content</li>
        </ul>

        <h3>Content</h3>
        <p>
          You retain ownership of the content you upload. By sharing it, you allow SunVantage to display it within the app.
        </p>

        <h3>Moderation</h3>
        <p>
          We may remove content or restrict access if it violates these terms or community standards.
        </p>

        <h3>Availability</h3>
        <p>The service is provided “as is” and may evolve over time.</p>

        <h3>Limitation of liability</h3>
        <p>
          SunVantage is not liable for any indirect or incidental damages arising from use of the service.
        </p>

        <h3>Updates</h3>
        <p>These terms may be updated as the app evolves.</p>

        <h3>Contact</h3>
        <p>For any questions, contact: hello@sunvantage.app</p>
      </div>
    </main>
  );
}
