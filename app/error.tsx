"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="route-error">
      <div className="route-error-card">
        <p className="route-error-message">
          Something went wrong. Please reload the page or come back later.
        </p>
        <button className="route-error-reload" onClick={reset} type="button">
          Reload page
        </button>
      </div>
    </main>
  );
}
