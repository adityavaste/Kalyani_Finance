"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full bg-[#f8fafc] overflow-hidden">
        {/* HERO */}
        <div className="relative bg-slate-950 py-20 md:py-28 px-4 sm:px-6 md:px-20 text-white overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-400 text-xs md:text-sm font-semibold">
              Contact Us
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mt-5 leading-tight">
              Let’s Talk About Your
              <span className="text-blue-500 block md:inline">
                {" "}
                Financial Goals
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-gray-300 mt-5 text-sm sm:text-base md:text-lg leading-relaxed">
              Our experts are ready to help you with investment planning,
              wealth management, business funding, and financial consulting.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-14 md:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {/* LEFT INFO */}
          <div className="lg:col-span-1 space-y-6">
            {/* CARD */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg md:text-xl">
                <FaPhoneAlt />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-5 md:mt-6">
                Call Us
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed text-sm md:text-base">
                Speak directly with our financial advisors.
              </p>

              <p className="text-base md:text-lg font-semibold text-blue-700 mt-4 md:mt-5 break-all">
                +91 7350247244
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg md:text-xl">
                <FaEnvelope />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-5 md:mt-6">
                Email Address
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed text-sm md:text-base">
                Send your queries anytime.
              </p>

              <p className="text-sm md:text-lg font-semibold text-blue-700 mt-4 md:mt-5 break-all">
                support@kalyanifinance.com
              </p>
            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 hover:-translate-y-1 transition duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700 text-lg md:text-xl">
                <FaMapMarkerAlt />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mt-5 md:mt-6">
                Office Location
              </h3>

              <p className="text-gray-500 mt-3 leading-relaxed text-sm md:text-base">
                Pune, Maharashtra, India
              </p>

              <div className="mt-4 md:mt-5 flex items-start gap-3 text-gray-600 text-sm md:text-base">
                <FaClock className="text-blue-600 mt-1" />
                <span>Mon - Sat : 10 AM - 7 PM</span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* TOP */}
            <div className="bg-slate-950 text-white p-6 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-52 md:w-72 h-52 md:h-72 bg-blue-600/20 blur-3xl rounded-full"></div>

              <div className="relative z-10">
                <p className="uppercase tracking-[3px] md:tracking-[4px] text-blue-400 text-xs md:text-sm font-semibold">
                  Get In Touch
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 leading-snug">
                  Request A Free Consultation
                </h2>

                <p className="text-gray-300 mt-4 md:mt-5 max-w-2xl leading-relaxed text-sm md:text-base">
                  Fill out the form below and our finance experts will contact
                  you shortly with personalized solutions.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-gray-100 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-100 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-gray-100 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                />

                <select className="bg-gray-100 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm md:text-base">
                  <option>Select Service</option>
                  <option>Investment Planning</option>
                  <option>Business Funding</option>
                  <option>Wealth Management</option>
                  <option>Financial Advisory</option>
                </select>
              </div>

              <textarea
                rows="6"
                placeholder="Tell us about your requirements"
                className="w-full mt-4 md:mt-5 bg-gray-100 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
              ></textarea>

              {/* FEATURES */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                  <h4 className="font-bold text-blue-700 text-2xl md:text-xl">
                    10K+
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Trusted Clients
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                  <h4 className="font-bold text-blue-700 text-2xl md:text-xl">
                    15+
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Years Experience
                  </p>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4 text-center border border-blue-100">
                  <h4 className="font-bold text-blue-700 text-2xl md:text-xl">
                    24/7
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    Customer Support
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button className="mt-8 w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl transition duration-300 hover:scale-105 font-semibold shadow-lg shadow-blue-500/20 text-sm md:text-base">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* EXTRA SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 pb-16 md:pb-24">
          <div className="bg-slate-950 rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center">
            {/* LEFT */}
            <div className="p-6 sm:p-8 md:p-14 text-white">
              <p className="uppercase tracking-[3px] md:tracking-[4px] text-blue-400 text-xs md:text-sm font-semibold">
                Why Choose Us
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5 leading-tight">
                Trusted Financial Solutions For Modern Businesses
              </h2>

              <p className="mt-5 md:mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
                We combine financial expertise with personalized service to
                help businesses and individuals make smarter financial
                decisions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm md:text-base">
                    Personalized Financial Planning
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm md:text-base">
                    Secure & Transparent Process
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>

                  <p className="text-gray-200 text-sm md:text-base">
                    Expert Investment Guidance
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="h-full">
              <img
                src="/contact-finance.jpg"
                alt="finance"
                className="w-full h-full object-cover min-h-[280px] md:min-h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/917350247244"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl z-50 transition duration-300 hover:scale-110"
        >
          <FaWhatsapp className="text-xl md:text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;