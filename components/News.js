"use client";

import React from "react";
import Link from "next/link";

const posts = [
  {
    title: "Top Investment Strategies for 2026",
    desc: "Discover smart investment strategies to grow your wealth in the coming year.",
    date: "Jan 12, 2026",
    img: "/blog1.jpg",
    link: "/blog/investment-strategies",
  },
  {
    title: "How to Manage Financial Risk Effectively",
    desc: "Learn how to protect your business and investments from financial risks.",
    date: "Feb 05, 2026",
    img: "/blog2.jpg",
    link: "/blog/financial-risk",
  },
  {
    title: "Why Financial Planning is Important",
    desc: "A complete guide to building a strong financial future with proper planning.",
    date: "Mar 01, 2026",
    img: "/blog3.jpg",
    link: "/blog/financial-planning",
  },
];

const LatestNews = () => {
  return (
    <div>
      {/* ================= BLOG SECTION ================= */}

      <div className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20">
        
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
            Latest Updates
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
            Latest News & Insights
          </h2>

          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Insights, updates & financial tips from our experts
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
          
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                
                {/* Date */}
                <p className="text-sm text-blue-600 font-medium">
                  {post.date}
                </p>

                {/* Title */}
                <h3 className="mt-3 text-xl font-bold text-slate-900 leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 text-sm leading-7">
                  {post.desc}
                </p>

                {/* Read More */}
                <Link href={post.link}>
                  <button className="mt-6 text-blue-700 font-semibold hover:underline">
                    Read More →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/blog">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300 hover:scale-105">
              View All Articles
            </button>
          </Link>
        </div>
      </div>

      {/* ================= SUCCESS SECTION ================= */}

      <div className="w-full bg-[#f8fafc] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
        
        {/* Heading */}
        <div className="text-center relative mb-16">
          
          <h1 className="absolute inset-0 flex items-center justify-center text-[60px] sm:text-[90px] md:text-[140px] font-black text-gray-100 -z-0 select-none">
            SUCCESS
          </h1>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-blue-600 text-sm font-semibold">
              What We Have Done
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
              Our Success Stories
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-700">
              10K+
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              All Time Clients
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-700">
              979
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Clients This Year
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-700">
              300+
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              New Projects
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100">
            <h3 className="text-3xl lg:text-4xl font-bold text-blue-700">
              35%
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Avg Profit Increased
            </p>
          </div>
        </div>

        {/* ================= CONTACT SECTION ================= */}

        <div className="max-w-7xl mx-auto mt-16 lg:mt-24">
          
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT */}
            <div className="bg-slate-950 text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
              
              {/* Glow */}
              <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

              <div className="relative z-10">
                
                <p className="uppercase tracking-[3px] text-blue-400 text-sm font-semibold">
                  Contact Us
                </p>

                <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
                  Request A Call Back
                </h2>

                <p className="mt-6 text-gray-300 leading-7 text-sm sm:text-base">
                  Fill out the form and our financial experts will
                  contact you shortly with the best solutions for your business.
                </p>

                {/* Features */}
                <div className="mt-8 space-y-5">
                  
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      ✓
                    </div>

                    <p className="text-gray-200 text-sm">
                      Professional Financial Guidance
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      ✓
                    </div>

                    <p className="text-gray-200 text-sm">
                      Fast & Secure Communication
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      ✓
                    </div>

                    <p className="text-gray-200 text-sm">
                      Trusted By Thousands Of Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="p-6 sm:p-8 lg:p-12 bg-white">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full mt-4 bg-gray-100 px-5 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-medium transition duration-300 hover:scale-105">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;