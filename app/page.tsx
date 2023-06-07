import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 text-gray-300">
      <h1 className="mb-6 text-center text-7xl">
        Explore the realm of audiovisual art.
      </h1>
      <p className="mb-6 text-center text-xl">
        Discover captivating works of art, groundbreaking experiments, and
        innovative procedures that push the boundaries of creativity. Join our
        community today and unleash your own creative potential in the realm of
        audiovisual composition.
      </p>
      <button className="rounded-lg bg-green-700 px-5 py-3 font-semibold transition-all duration-100 hover:bg-green-600 active:bg-green-700">
        Start Exploring Now!
      </button>
    </main>
  );
}
