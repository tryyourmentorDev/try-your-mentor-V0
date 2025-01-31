import { auth, googleProvider } from "../../lib/firebase-client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

let fakeUsers = [];
// For a real app, store users in a DB (e.g., Firebase, Postgres, etc.)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const query = req.query;

    if (query?.type === 'google') {
      try {
        const userCredential = await signInWithPopup(auth, googleProvider);
        const user = userCredential.user;
        return res.status(200).json({ message: 'Logged In', user });
      } catch (error) {
        return res.status(403).json({ message: 'Logged In', error: error });
      }
    }else{
      const { email, password, name } = req.body;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return res.status(201).json({ message: 'User created', user });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json(fakeUsers);
  }

  return res.status(405).end();
}
