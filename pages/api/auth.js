export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    global.fakeUsers = global.fakeUsers || [];
    const user = global.fakeUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      return res.status(200).json({ message: 'Logged in successfully' });
    }
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  return res.status(405).end();
}
