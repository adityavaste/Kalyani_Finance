
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
} from "react-icons/fa";

const AboutPage = () => {
  return (
     <div>
      <Navbar />
    
    <div className="bg-[#f5f7fb] text-gray-800 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/about-banner.jpg"
          alt="about"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071c3c]/90 to-[#102f63]/80"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <p className="uppercase tracking-[5px] text-blue-300 text-sm mb-4">
            About Kalyani Finance
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Building Financial Success
            <span className="text-blue-400"> With Trust</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We help businesses, startups, and individuals achieve financial
            stability through strategic planning, smart investments, and trusted
            advisory services.
          </p>

          <div className="mt-8 flex justify-center gap-5 flex-wrap">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-white font-semibold transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="border border-white px-8 py-4 rounded-full text-white hover:bg-white hover:text-black transition duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>


      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="/finance-team.jpg"
            alt="team"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl w-56">
            <h2 className="text-5xl font-bold">10+</h2>
            <p className="mt-2 text-sm text-blue-100">
              Years Of Financial Excellence
            </p>
          </div>
        </div>


        {/* RIGHT CONTENT */}
        <div>
          <p className="uppercase text-blue-600 tracking-[4px] text-sm font-semibold">
            Who We Are
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight">
            Trusted Financial Experts Helping You Grow
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Kalyani Finance is dedicated to delivering modern financial
            solutions tailored for individuals, startups, and enterprises. We
            combine industry expertise, technology, and strategic insights to
            help clients make smarter financial decisions.
          </p>

          <p className="mt-5 text-gray-600 leading-relaxed text-lg">
            From wealth management to investment planning and business funding,
            our mission is to create long-term value and trusted partnerships.
          </p>


          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <FaChartLine className="text-4xl text-blue-600 mb-4" />
              <h4 className="font-bold text-lg">Smart Investments</h4>
              <p className="text-sm text-gray-500 mt-2">
                Strategic planning for long-term financial growth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <FaUsers className="text-4xl text-blue-600 mb-4" />
              <h4 className="font-bold text-lg">Trusted Advisors</h4>
              <p className="text-sm text-gray-500 mt-2">
                Expert financial consultants guiding every step.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <FaAward className="text-4xl text-blue-600 mb-4" />
              <h4 className="font-bold text-lg">Award Winning</h4>
              <p className="text-sm text-gray-500 mt-2">
                Recognized for excellence and client satisfaction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <FaHandshake className="text-4xl text-blue-600 mb-4" />
              <h4 className="font-bold text-lg">Strong Partnerships</h4>
              <p className="text-sm text-gray-500 mt-2">
                Building trusted and lasting financial relationships.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* STATS SECTION */}
      <section className="bg-[#071c3c] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-400">10K+</h2>
            <p className="mt-3 text-gray-300">Happy Clients</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-400">500+</h2>
            <p className="mt-3 text-gray-300">Business Partners</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-400">98%</h2>
            <p className="mt-3 text-gray-300">Client Satisfaction</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-bold text-blue-400">24/7</h2>
            <p className="mt-3 text-gray-300">Support Available</p>
          </div>
        </div>
      </section>


      {/* COMPANY GOAL */}
      <section className="max-w-7xl mx-auto px-6 md:px-20 py-24">
        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden grid md:grid-cols-2 items-center">

          <div className="p-10 md:p-16">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              Our Mission
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#0f172a] leading-tight">
              Empowering Financial Freedom Through Innovation
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Our goal is to simplify finance for businesses and individuals by
              offering transparent, innovative, and result-driven financial
              solutions.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              We believe in trust, growth, and long-term success through smart
              financial strategies and personalized support.
            </p>

            <button className="mt-8 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition duration-300">
              Learn More <FaArrowRight />
            </button>
          </div>

          <div className="h-full">
            <img
              src="/finance-office.jpg"
              alt="office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </div>
    </div>
  );
};

export default AboutPage;

