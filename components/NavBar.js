import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-brandPurple p-4 text-white">
      <div className="font-bold text-lg">
        <Link href="/">TryYourMentor</Link>
      </div>
      <div>
        <Link href="/resume-review" className="mr-4 hover:text-gray-200">
          Resume Review
        </Link>
        <Link href="/login" className="mr-4 hover:text-gray-200">
          Login
        </Link>
        <Link href="/signup" className="hover:text-gray-200">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
