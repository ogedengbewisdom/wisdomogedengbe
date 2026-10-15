"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "var(--page, #111214)",
          color: "var(--text, #f4f4f5)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main className="route-error">
          <div className="route-error-card">
            <p className="route-error-message">
              Something went wrong. Please reload the page or come back later.
            </p>
            <button
              className="route-error-reload"
              onClick={reset}
              type="button"
            >
              Reload page
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
