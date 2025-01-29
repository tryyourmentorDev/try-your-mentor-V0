// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p>
        &copy; {new Date().getFullYear()} tryYourMentor. All rights reserved.
      </p>
      <div className="mt-2">
        <a href="https://www.facebook.com" className="mx-2">
          Facebook
        </a>
        <a href="https://www.twitter.com" className="mx-2">
          Twitter
        </a>
        <a href="https://www.linkedin.com" className="mx-2">
          LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
