// src/components/StartButton.tsx
import { div, tr } from "framer-motion/client";
import React, { useState } from "react";

const SignUpOverlay = ({signInSucessState}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSignInSuccess, setIsSignInSuccess] = useState(false);

  const habdleSubmit = async (e) => {
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      signInSucessState(true);
    } catch (error) {
      console.log(error);
    }
  }
  const habdleSubmitGoogle = async (e) => {
    try {
      const res = await fetch('/api/users?type=google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  const signUpContent = (
    <div className="">
      <h2 className="text-3xl font-kanit text-p1 mb-4">
        Create a new account
      </h2>
      <p className="text-sm font-kanit text-p2 mb-4">
        Already have an account?{" "}
        <a href="#" className="text-primary-light font-kanit">
          Sign in
        </a>
      </p>

      <div className="space-y-4 mb-4">
        {/* Name Field */}
        <div>
          <label className="block text-p2 font-kanit mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            className="block text-p2 font-kanit mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="Enter your email"
            required
          />
          {/* <p className="text-sm text-red-500 mt-1">{"errors.name"}</p> */}
        </div>

        {/* Password Field */}
        <div>
          <label
            className="block text-p2 font-kanit mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary-light text-white font-kanit py-2 rounded-lg hover:bg-primary-dark transition duration-300"
          onClick={habdleSubmit}
        >
          Sign Up
        </button>
      </div>

      <div className="flex items-center justify-center text-gray-400 my-4">
          <span className="h-px bg-gray-300 w-1/3"></span>
          <span className="mx-2 text-sm">OR</span>
          <span className="h-px bg-gray-300 w-1/3"></span>
        </div>

      {/* Sign-In Options */}
      <div className="space-y-4">
        <button className="w-full flex items-center font-kanit justify-center py-2 border rounded-lg bg-gray-100 hover:bg-gray-200"
        onClick={habdleSubmitGoogle}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Google"
            className="h-5 w-5 mr-2 font-kanit"
          />
          Continue with Google
        </button>
        <button className="w-full flex items-center font-kanit justify-center py-2 border rounded-lg bg-gray-100 hover:bg-gray-200">
          <img
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
            alt="Facebook"
            className="h-5 w-5 mr-2"
          />
          Continue with Facebook
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        By joining, you agree to the{" "}
        <a href="#" className="text-purple-600">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-purple-600">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );


  // const signUpContainer = (
    
  // );


  
  return (
<div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Column (hidden on mobile) */}
        <div className="hidden lg:block">
          <img
            src="assets/images/sign-up-image-1.png"
            alt="Placeholder"
            className="w-full h-auto"
          />
        </div>

        {/* Text Content Column */}
        <div>
      {signUpContent}
        </div>
      </div>
    </div>
  );
};

export default SignUpOverlay;
