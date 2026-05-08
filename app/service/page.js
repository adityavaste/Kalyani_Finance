"use client";

import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import {
  FaCar,
  FaHome,
  FaUserTie,
  FaHeartbeat,
  FaShieldAlt,
  FaBusinessTime,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const loanServices = [
  {
    title: "Car Loan",
    desc: "Flexible financing solutions with low interest rates for your dream vehicle.",
    icon: <FaCar />,
  },
  {
    title: "Home Loan",
    desc: "Affordable home financing with fast approval and trusted support.",
    icon: <FaHome />,
  },
  {
    title: "Personal Loan",
    desc: "Quick and secure personal loans for your financial needs.",
    icon: <FaUserTie />,
  },
  {
    title: "Business Loan",
    desc: "Grow your business with customized business funding solutions.",
    icon: <FaBusinessTime />,
  },
];

const insuranceServices = [
  {
    title: "Health Insurance",
    desc: "Protect your family with comprehensive healthcare coverage.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Car Insurance",
    desc: "Reliable car protection plans with affordable premiums.",
    icon: <FaCar />,
  },
  {
    title: "Life Insurance",
    desc: "Secure your loved ones’ future with trusted life insurance plans.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Property Insurance",
    desc: "Protect residential and commercial properties against risks.",
    icon: <FaHome />,
  },
];

const ServicesPage = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#f5f7fb] overflow-hidden">
        
        {/* ================= HERO SECTION ================= */}

        <section className="relative min-h-[500px] md:min-h-[650px] flex items-center justify-center text-center overflow-hidden">
          
          {/* Background */}
          <img
            src="/services-banner.jpg"
            alt="services"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-blue-950/70"></div>

          {/* Content */}
          <div className="relative z-10 px-4 sm:px-6 md:px-10 max-w-5xl">
            
            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-blue-400 text-xs sm:text-sm font-semibold">
              Our Services
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-5 leading-tight">
              Smart Financial Solutions
              <span className="text-blue-400 block mt-2">
                For Your Future
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Explore our modern financial services including loans,
              insurance, investment planning, and wealth management.
            </p>

            <Link href="/contact">
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition duration-300 hover:scale-105 shadow-xl shadow-blue-500/20">
                Get Consultation
              </button>
            </Link>
          </div>
        </section>

        {/* ================= LOAN SERVICES ================= */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
          
          <div className="text-center mb-14">
            
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Loan Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
              Fast & Flexible Loan Solutions
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {loanServices.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-7 lg:p-8 shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
              >
                
                {/* Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mt-8">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mt-4 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Button */}
                  <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= INSURANCE SERVICES ================= */}

        <section className="bg-slate-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">
            
            {/* Heading */}
            <div className="text-center mb-14">
              
              <p className="uppercase tracking-[4px] text-blue-400 text-sm font-semibold">
                Insurance Services
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Secure Your Future With Confidence
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              
              {insuranceServices.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-7 lg:p-8 hover:bg-white/10 transition duration-500 hover:-translate-y-3"
                >
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg shadow-blue-500/20">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mt-8">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-400 mt-4 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Button */}
                  <button className="mt-8 flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all duration-300">
                    Learn More <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              Trusted Financial Expertise For Modern Clients
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              We provide personalized financial services designed to help individuals and businesses achieve stability, growth, and peace of mind.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />

                <p className="text-gray-700">
                  Fast Approval & Hassle-Free Process
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />

                <p className="text-gray-700">
                  Trusted By Thousands Of Clients
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />

                <p className="text-gray-700">
                  Secure & Transparent Financial Solutions
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-xl mt-1" />

                <p className="text-gray-700">
                  Professional Financial Consultation
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact">
              <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition duration-300 hover:scale-105 shadow-xl shadow-blue-500/20">
                Get Free Consultation
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            
            <img
              src="/finance-services.jpg"
              alt="finance"
              className="rounded-[30px] lg:rounded-[40px] shadow-2xl object-cover w-full"
            />

            {/* Floating Card */}
            <div className="relative lg:absolute lg:-bottom-8 lg:-left-8 bg-white rounded-3xl shadow-2xl p-6 lg:p-8 w-full sm:w-72 border border-gray-100 mt-6 lg:mt-0">
              
              <h3 className="text-4xl font-bold text-blue-600">
                10K+
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed text-sm sm:text-base">
                Clients Trusted Our Financial Services Worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;