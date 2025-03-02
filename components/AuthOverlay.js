// src/components/StartButton.tsx
import { div } from "framer-motion/client";
import React from "react";
import SignInOverlay from "./SignInOverlay";
import SignUpOverlay from "./SignUpOverlay";

const AuthOverlay = ({isOpen, isFadingOut, authLayoutType, closeOverlay, signInSuccessState}) => {


  const renderContent = (authLayoutType) => {
    switch (authLayoutType) {
      case "sign-in-page-1":
        return <SignInOverlay signInSucessState={(state)=>signInSuccessState(state)}/>;
      case "sign-up-page-1":
        return <SignUpOverlay signInSucessState={(state)=>signInSuccessState(state)}/>;
      default:
        return <></>;
    }
  };
  
  return (
    <div>
      {isOpen && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"}`}>
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] p-6">
            <button
              onClick={()=>closeOverlay()}
              className="text-gray-400 hover:text-gray-800 float-right"
            >
              ✖
            </button>
            {/* <div className="w-full"> */}
            {renderContent(authLayoutType)}
            {/* </div> */}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthOverlay;
