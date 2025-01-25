let fakeUsers = [];
// For a real app, store users in a DB (e.g., Firebase, Postgres, etc.)

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    const existingUser = fakeUsers.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Create new user
    fakeUsers.push({ email, password });
    return res.status(201).json({ message: 'User created' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(fakeUsers);
  }

  return res.status(405).end();
}
