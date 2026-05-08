"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import {
  FaChartLine,
  FaUsers,
  FaAward,
  FaHandshake,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#f5f7fb] text-gray-800 overflow-hidden">

        {/* HERO SECTION */}
        <section className="relative min-h-[750px] md:min-h-[650px] flex items-center justify-center text-center overflow-hidden px-4">

          <img
            src="/about-banner.jpg"
            alt="about"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071c3c]/95 via-[#0f172a]/85 to-[#102f63]/80"></div>

          {/* Glow */}
          <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-5xl">

            <p className="uppercase tracking-[4px] md:tracking-[6px] text-blue-300 text-xs md:text-sm font-semibold">
              About Kalyani Finance
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mt-5">
              Building Financial Success
              <span className="text-blue-400"> With Trust</span>
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              We help businesses, startups, and individuals achieve financial
              stability through strategic planning, smart investments,
              insurance solutions, and trusted advisory services.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-5">

              <Link href="/contact">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition duration-300 hover:scale-105 shadow-xl shadow-blue-500/20">
                  Get Consultation
                </button>
              </Link>

              <Link href="/service">
                <button className="w-full sm:w-auto border border-white/30 backdrop-blur-md px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
                  Explore Services
                </button>
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  10K+
                </h3>

                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  Happy Clients
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  15+
                </h3>

                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  Years Experience
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  98%
                </h3>

                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  Client Satisfaction
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="text-gray-300 text-xs md:text-sm mt-1">
                  Support
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ABOUT SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src="/finance-team.jpg"
              alt="team"
              className="rounded-[30px] md:rounded-[40px] shadow-2xl w-full h-[400px] sm:h-[500px] md:h-[650px] object-cover"
            />

            {/* FLOATING CARD */}
            <div className="relative md:absolute md:-bottom-10 md:-right-6 mt-6 md:mt-0 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-gray-100 w-full md:w-72">

              <h2 className="text-4xl md:text-5xl font-black text-blue-600">
                10+
              </h2>

              <p className="mt-3 text-gray-500 leading-relaxed text-sm md:text-base">
                Years Of Financial Excellence Helping Businesses &
                Individuals Grow Successfully.
              </p>

            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div>

            <p className="uppercase text-blue-600 tracking-[4px] md:tracking-[5px] text-xs md:text-sm font-semibold">
              Who We Are
            </p>

            <h2 className="mt-4 md:mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-[#0f172a] leading-tight">
              Trusted Financial Experts Helping You Grow
            </h2>

            <p className="mt-6 md:mt-7 text-gray-600 leading-relaxed text-base md:text-lg">
              Kalyani Finance is dedicated to delivering modern financial
              solutions tailored for individuals, startups, and enterprises.
              We combine industry expertise, innovation, and strategic
              insights to help clients make smarter financial decisions.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
              From wealth management to investment planning, insurance,
              and business funding, our mission is to create long-term
              value and trusted partnerships.
            </p>

            {/* CHECKPOINTS */}
            <div className="mt-8 md:mt-10 space-y-4 md:space-y-5">

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-lg md:text-xl mt-1" />

                <p className="text-gray-700 text-sm md:text-base">
                  Personalized Financial Planning
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-lg md:text-xl mt-1" />

                <p className="text-gray-700 text-sm md:text-base">
                  Secure & Transparent Solutions
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 text-lg md:text-xl mt-1" />

                <p className="text-gray-700 text-sm md:text-base">
                  Expert Investment Guidance
                </p>
              </div>

            </div>


            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-12">

              <div className="bg-white p-5 md:p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100">
                <FaChartLine className="text-3xl md:text-4xl text-blue-600 mb-4 md:mb-5" />

                <h4 className="font-bold text-lg md:text-xl">
                  Smart Investments
                </h4>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Strategic planning for long-term financial growth.
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100">
                <FaUsers className="text-3xl md:text-4xl text-blue-600 mb-4 md:mb-5" />

                <h4 className="font-bold text-lg md:text-xl">
                  Trusted Advisors
                </h4>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Expert financial consultants guiding every step.
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100">
                <FaAward className="text-3xl md:text-4xl text-blue-600 mb-4 md:mb-5" />

                <h4 className="font-bold text-lg md:text-xl">
                  Award Winning
                </h4>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Recognized for excellence and client satisfaction.
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100">
                <FaHandshake className="text-3xl md:text-4xl text-blue-600 mb-4 md:mb-5" />

                <h4 className="font-bold text-lg md:text-xl">
                  Strong Partnerships
                </h4>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Building trusted and lasting financial relationships.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* WHY CHOOSE US */}
        <section className="bg-slate-950 py-20 md:py-28 px-4 sm:px-6 md:px-20 relative overflow-hidden">

          <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <div className="relative z-10 max-w-7xl mx-auto">

            <div className="text-center max-w-3xl mx-auto">

              <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-400 text-xs md:text-sm font-semibold">
                Why Choose Us
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-5 leading-tight">
                Modern Financial Solutions For Every Need
              </h2>

              <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
                We combine financial expertise, technology, and personalized
                support to help clients achieve stability and growth.
              </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14 md:mt-20">

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-10 hover:bg-white/10 transition duration-300">

                <FaShieldAlt className="text-4xl md:text-5xl text-blue-400" />

                <h3 className="text-xl md:text-2xl font-bold text-white mt-6 md:mt-8">
                  Secure Solutions
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
                  Transparent and secure financial services you can trust.
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-10 hover:bg-white/10 transition duration-300">

                <FaGlobe className="text-4xl md:text-5xl text-blue-400" />

                <h3 className="text-xl md:text-2xl font-bold text-white mt-6 md:mt-8">
                  Global Reach
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
                  Serving businesses and individuals with world-class support.
                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[30px] p-8 md:p-10 hover:bg-white/10 transition duration-300">

                <FaHandshake className="text-4xl md:text-5xl text-blue-400" />

                <h3 className="text-xl md:text-2xl font-bold text-white mt-6 md:mt-8">
                  Trusted Partnerships
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed text-sm md:text-base">
                  Long-term financial relationships focused on client success.
                </p>

              </div>

            </div>

          </div>
        </section>


        {/* CTA SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-20 md:py-28">

          <div className="bg-gradient-to-r from-blue-700 to-slate-900 rounded-[30px] md:rounded-[40px] p-8 sm:p-10 md:p-20 text-center relative overflow-hidden">

            <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-3xl mx-auto">

              <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-200 text-xs md:text-sm font-semibold">
                Get Started
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-5 md:mt-6 leading-tight">
                Let’s Build Your Financial Future Together
              </h2>

              <p className="mt-5 md:mt-6 text-blue-100 text-base md:text-lg leading-relaxed">
                Connect with our finance experts today and discover smart
                solutions designed for your growth and success.
              </p>

              <Link href="/contact">
                <button className="mt-8 md:mt-10 bg-white text-blue-700 hover:bg-blue-50 px-8 md:px-10 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 inline-flex items-center gap-3">
                  Contact Us
                  <FaArrowRight />
                </button>
              </Link>

            </div>

          </div>

        </section>

      </div>
    </div>
  );
};

export default AboutPage;