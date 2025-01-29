import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#5e17eb]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-white">
          tryYourMentor
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Link
            href="/resume-review"
            className="mx-2 text-white hover:text-gray-200"
          >
            Resume Review
          </Link>
          <Link href="/courses" className="mx-2 text-white hover:text-gray-200">
            Courses
          </Link>
          <Link href="/mentors" className="mx-2 text-white hover:text-gray-200">
            Mentoring
          </Link>
          <Link href="/login" className="mx-2 text-white hover:text-gray-200">
            Login
          </Link>
          <Link href="/signup" className="mx-2 text-white hover:text-gray-200">
            Sign Up
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#5e17eb] p-4">
          <div className="flex flex-col items-center">
            <Link
              href="/resume-review"
              className="py-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Resume Review
            </Link>
            <Link
              href="/courses"
              className="py-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/mentors"
              className="py-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Mentoring
            </Link>
            <Link
              href="/login"
              className="py-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="py-2 text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
