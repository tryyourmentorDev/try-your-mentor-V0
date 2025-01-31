// src/components/StartButton.tsx
import React from "react";

const SignInButton = ({onClick}) => (
  <button className="bg-secondary-light border-2 border-secondary-light text-white font-kanit py-2 px-8 rounded-4xl hover:bg-secondary-dark hover:border-secondary-dark transition duration-300"
  onClick={() => onClick()}>
    Sign In
  </button>
);

export default SignInButton;
