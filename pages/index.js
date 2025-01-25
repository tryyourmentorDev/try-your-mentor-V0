import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col items-center text-center bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Get expert coaching and reviews</h1>
        <p className="text-gray-600 mb-6">
          Work with industry experts and mentors to level up your career.
        </p>
        <Link href="/signup" className="bg-brandPurple text-white px-6 py-3 rounded hover:bg-purple-600">
          Find Your Mentor
        </Link>
      </section>
    </Layout>
  );
}
