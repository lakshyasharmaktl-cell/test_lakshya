import React from "react";

export default function App() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand Name */}
      <h1 className="text-xl font-bold">MyWebsite</h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#services" className="hover:text-gray-400">Services</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
}
