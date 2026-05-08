"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 text-white overflow-hidden">
      
      {/* TOP SECTION */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 pt-16 sm:pt-20 lg:pt-24 pb-10">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 border-b border-white/10 pb-14">
          
          {/* COMPANY */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">
              Kalyani Finance
            </h2>

            <p className="text-gray-400 mt-5 leading-7 text-sm sm:text-base">
              Helping businesses and individuals achieve financial success
              through trusted investment planning, wealth management,
              and smart financial solutions.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">
              
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-600 transition duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-500 transition duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-sky-500 transition duration-300 flex items-center justify-center hover:scale-110"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm sm:text-base">
              
              <Link
                href="/"
                className="hover:text-blue-400 transition flex items-center gap-2 group"
              >
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-blue-400 transition flex items-center gap-2 group"
              >
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                About Us
              </Link>

              <Link
                href="/service"
                className="hover:text-blue-400 transition flex items-center gap-2 group"
              >
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Services
              </Link>

              <Link
                href="/blog"
                className="hover:text-blue-400 transition flex items-center gap-2 group"
              >
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Blog
              </Link>

              <Link
                href="/contact"
                className="hover:text-blue-400 transition flex items-center gap-2 group"
              >
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Contact
              </Link>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Our Services
            </h3>

            <div className="flex flex-col gap-4 text-gray-400 text-sm sm:text-base">
              
              <p className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Wealth Management
              </p>

              <p className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Investment Planning
              </p>

              <p className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Business Consulting
              </p>

              <p className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Risk Management
              </p>

              <p className="hover:text-blue-400 transition cursor-pointer flex items-center gap-2 group">
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition" />
                Financial Advisory
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-6 text-gray-400 text-sm sm:text-base">
              
              <div className="flex items-start gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-blue-500">
                  <FaMapMarkerAlt />
                </div>

                <p className="leading-6">
                  Pune, Maharashtra, India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-blue-500">
                  <FaPhoneAlt />
                </div>

                <p>
                  +91 7350247244
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="min-w-[42px] h-[42px] rounded-full bg-white/10 flex items-center justify-center text-blue-500">
                  <FaEnvelope />
                </div>

                <p className="break-all">
                  support@kalyanifinance.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
          
          <p className="text-gray-500 text-sm">
            © 2026 Kalyani Finance. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-500">
            
            <Link
              href="/"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="hover:text-blue-400 transition"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;