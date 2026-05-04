export default function PrivacyPage() {
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
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <a href="/" style={{ opacity: 0.6, fontSize: "0.9rem" }}>
          ← Back
        </a>

        <h1 style={{ marginTop: "20px" }}>Privacy Policy</h1>

        <p style={{ opacity: 0.6 }}>Last updated: March 2026</p>

        <p>
          SunVantage is designed as a quiet, private ritual. We collect the minimum data necessary to make the app work.
        </p>

        <h3>What we collect</h3>
        <ul>
          <li>Basic account information (such as email, if you sign in)</li>
          <li>Your sunrise logs and photos</li>
          <li>Basic usage data to improve the app</li>
        </ul>

        <h3>How we use it</h3>
        <ul>
          <li>To save your sunrise entries</li>
          <li>To personalize your experience</li>
          <li>To keep the platform safe and prevent misuse</li>
        </ul>

        <h3>Photos and content</h3>
        <p>
          Photos you upload may be reviewed automatically to ensure they meet community guidelines before appearing publicly.
        </p>

        <h3>Data sharing</h3>
        <p>We do not sell your personal data. We may use trusted services to operate the app.</p>

        <h3>Your control</h3>
        <ul>
          <li>You can delete your content at any time</li>
          <li>You can request account deletion</li>
        </ul>
        <p>
          To request deletion of your account and associated data, email us at hello@sunvantage.app with your registered
          email address.
        </p>

        <h3>Updates</h3>
        <p>We may update this policy as the app evolves.</p>

        <h3>Contact</h3>
        <p>hello@sunvantage.app</p>
      </div>
    </main>
  );
}
