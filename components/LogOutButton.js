// src/components/StartButton.tsx
import React from "react";

const LogOutButton = ({onClick}) => (
  <button className="border-2 border-white rounded-4xl text-white font-kanit bg-transparent py-2 px-8 hover:bg-primary-light hover:border-secondary-light hover:text-secondary-light transition duration-500"
  onClick={() => onClick()}>
   Log Out
  </button>
);

export default LogOutButton;
