// src/components/StartButton.tsx
import React from "react";

const SignUpButton = ({onClick}) => (
  <button className="border-2 border-white rounded-4xl text-white font-kanit bg-transparent py-2 px-8 hover:bg-primary-light hover:border-secondary-light hover:text-secondary-light transition duration-300"
  onClick={() => onClick()}>
    Sign Up
  </button>
);

export default SignUpButton;
