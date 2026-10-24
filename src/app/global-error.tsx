"use client";

export default function GlobalError({
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#f3efe7",
          color: "#1c2421",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <main style={{ maxWidth: 640, margin: "0 auto", padding: "6rem 1.25rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 500, lineHeight: 1.15 }}>
            This page could not be loaded
          </h1>
          <p
            style={{
              fontFamily: "'Segoe UI', sans-serif",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: "1.5rem",
              minHeight: "3rem",
              border: 0,
              background: "#0f4f56",
              color: "#f7f3ec",
              padding: "0.75rem 1.25rem",
              fontFamily: "'Segoe UI', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
