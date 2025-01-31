import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import SignUpButton from "./SignUpButton";
import SignInButton from "./SignInButton";
import LogOutButton from "./LogOutButton";
import AuthOverlay from "./AuthOverlay";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAuthOverlay, setIsOpenAuthOverlay] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false); 
  const [authLayoutType, setAuthLayoutType] = useState(""); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickedSignUpButton = () => {
    console.log("clicked on sign up button");
    setIsOpenAuthOverlay(true);
    setIsFadingOut(false);
    setAuthLayoutType("sign-up-page-1");
  }
  const onClickedSignInButton = () => {
    console.log("clicked on sign up button");
    setIsOpenAuthOverlay(true);
    setIsFadingOut(false);
    setAuthLayoutType("sign-in-page-1");
  }

  const closeOverlay = () => {
    setIsFadingOut(true); // Start the fade-out effect
    setTimeout(() => {
      setIsOpenAuthOverlay(false); // Close overlay after animation
    }, 300); 
  }

  const setSignInState = (state) => {
    console.log("setSignInState: ", state);
    setIsLoggedIn(state);
    setIsOpenAuthOverlay(false);
  }

  const onClickLogOutButton = () => {
    console.log("onClickLogOutButton: ");
    setIsLoggedIn(false);
    setIsOpenAuthOverlay(false);
  }

  return (
    <>
    <header className="bg-primary-light">
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
        <nav className="hidden md:flex items-center space-x-4">
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
          { !isLoggedIn ? <SignInButton onClick={()=>onClickedSignInButton()}/> : <></>}
          { !isLoggedIn ? <SignUpButton onClick={()=>onClickedSignUpButton()}/>: <LogOutButton onClick={onClickLogOutButton}/>}


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

<AuthOverlay isOpen={isOpenAuthOverlay} closeOverlay={closeOverlay} isFadingOut={isFadingOut} authLayoutType={authLayoutType}   signInSuccessState={(state)=>setSignInState(state)}/>

</>
  );
};

export default Header;
