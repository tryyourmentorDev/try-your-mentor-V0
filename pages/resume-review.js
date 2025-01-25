import { useState } from 'react';
import Layout from '../components/Layout';

export default function ResumeReview() {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Résumé review request submitted!\nDescription: ' + description);
    setDescription('');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 shadow rounded">
        <h2 className="text-2xl font-bold mb-4">Résumé Review</h2>
        <p className="mb-4 text-gray-600">
          Upload your résumé or describe your needs. We’ll connect you with a mentor for feedback.
        </p>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span>Description / Notes:</span>
            <textarea
              className="border mt-1 p-2 w-full"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="bg-brandPurple text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}
