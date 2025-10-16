import React, { useState } from "react";
import { Menu, X, Home, Info, Briefcase, Phone } from "lucide-react";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white shadow-lg sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">MyBrand</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2">
            <Home size={18} /> Home
          </li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2">
            <Info size={18} /> About
          </li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2">
            <Briefcase size={18} /> Services
          </li>
          <li className="hover:text-blue-400 cursor-pointer flex items-center gap-2">
            <Phone size={18} /> Contact
          </li>
        </ul>

        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden text-2xl"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-950 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col mt-6 space-y-6 text-lg font-medium px-6">
          <li className="hover:text-blue-400 flex items-center gap-3 cursor-pointer">
            <Home size={20} /> Home
          </li>
          <li className="hover:text-blue-400 flex items-center gap-3 cursor-pointer">
            <Info size={20} /> About
          </li>
          <li className="hover:text-blue-400 flex items-center gap-3 cursor-pointer">
            <Briefcase size={20} /> Services
          </li>
          <li className="hover:text-blue-400 flex items-center gap-3 cursor-pointer">
            <Phone size={20} /> Contact
          </li>
        </ul>
      </div>

      {/* Background Overlay when Sidebar Opens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}
