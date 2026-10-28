import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <p className="eyebrow">404 / Page not found</p>
        <h1>This page is not here.</h1>
        <p>The address may be incorrect, or the page may have moved.</p>
        <Link href="/" className="button button-primary">Return to HERBAYU</Link>
      </div>
    </main>
  );
}
