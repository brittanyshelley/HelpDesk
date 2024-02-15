import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3x1">Not Found</h2>
      <p>This page does not exist</p>
      <p>Go back to the <Link href="/">Dashboard</Link></p>
    </main>
  );
}

