"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      
      {/* ================= TOP BAR ================= */}

      <div className="bg-slate-950 text-gray-300 hidden md:flex items-center justify-between px-6 lg:px-20 py-3 text-sm">
        
        {/* LEFT */}
        <div className="flex items-center gap-6 lg:gap-8">
          
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-500" />

            <span className="text-xs lg:text-sm">
              +91 7350247244
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />

            <span className="text-xs lg:text-sm">
              support@kalyanifinance.com
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <p className="text-gray-400 hidden lg:block">
          Trusted Financial Solutions For Modern Businesses
        </p>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        
        <div className="max-w-7xl mx-auto h-[80px] lg:h-[90px] px-4 sm:px-6 lg:px-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 cursor-pointer">
              Kalyani
              <span className="text-blue-600">Finance</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-slate-700">
            
            <Link
              href="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </Link>

            <Link
              href="/service"
              className="hover:text-blue-600 transition duration-300"
            >
              Services
            </Link>

            <Link
              href="/blog"
              className="hover:text-blue-600 transition duration-300"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden lg:flex">
            
            <Link href="/contact">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/20">
                Get Consultation
              </button>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-slate-900"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-6 py-6 flex flex-col gap-5 shadow-xl">
            
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 transition text-base font-medium"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 transition text-base font-medium"
            >
              About
            </Link>

            <Link
              href="/service"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 transition text-base font-medium"
            >
              Services
            </Link>

            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 transition text-base font-medium"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 hover:text-blue-600 transition text-base font-medium"
            >
              Contact
            </Link>

            {/* MOBILE BUTTON */}
            <Link href="/contact">
              <button className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition duration-300">
                Get Consultation
              </button>
            </Link>

            {/* MOBILE CONTACT */}
            <div className="border-t border-gray-200 pt-5 mt-2 space-y-4 text-sm text-gray-600">
              
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />

                <span>+91 7350247244</span>
              </div>

              <div className="flex items-center gap-3 break-all">
                <FaEnvelope className="text-blue-600" />

                <span>support@kalyanifinance.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;