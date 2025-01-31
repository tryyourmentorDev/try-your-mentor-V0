import { auth, googleProvider } from "../../lib/firebase-client";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return res.status(200).json({ message: 'Logged In', userCredential });
    } catch (error) {

      return res.status(403).json({ message: 'Logged In', error: error });
    }
  }
  return res.status(405).end();
  
}
