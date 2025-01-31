import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        console.log(res)
        router.push('/login');
      } else {
        alert('Sign-up failed, user may already exist');
      }
    } catch (err) {
      console.error('Sign-up error:', err);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label className="block mb-2">
            <span>Email:</span>
            <input
              className="border mt-1 p-2 w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block mb-4">
            <span>Password:</span>
            <input
              className="border mt-1 p-2 w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-brandPurple text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Layout>
  );
}
