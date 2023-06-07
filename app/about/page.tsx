import { Metadata } from 'next';

export const dynamic = 'force-static';
// ^ being explicit by saying this is a static page.

export const metadata: Metadata = {
  title: 'About us',
  description: 'An open hub for audiovisual artists.',
};

type aboutProps = {};

export default function About({}: aboutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-gray-300">
      <h1>About</h1>
      <p>An open hub for audiovisual artists.</p>
    </main>
  );
}
