"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
// import SignUpButton from "./SignUpButton";
// import SignInButton from "./SignInButton";
// import LogOutButton from "./LogOutButton";
// import AuthOverlay from "./AuthOverlay";

const Header = () => {
  

  return (
    <header className="bg-primary-light">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link href="/" className="text-xl font-bold text-white">
        tryYourMentor
      </Link>
      <nav className="flex space-x-4">
        <Link href="/services" className="text-white hover:text-secondary-light transition duration-300">
          Services
        </Link>
        <Link href="/about-us" className="text-white hover:text-secondary-light transition duration-300">
          About Us
        </Link>
      </nav>
    </div>
  </header>
  );
};

export default Header;