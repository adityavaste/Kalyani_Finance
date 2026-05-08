"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";


import {
  FaArrowRight,
  FaCalendarAlt,
  FaUser,
  FaSearch,
} from "react-icons/fa";

const blogs = [
  {
    title: "5 Smart Financial Planning Tips For 2026",
    desc: "Discover powerful financial planning strategies to secure your future and grow wealth confidently.",
    img: "/blog1.jpg",
    category: "Finance",
    author: "Admin",
    date: "April 24, 2026",
  },

  {
    title: "Why Health Insurance Is Important Today",
    desc: "Learn how health insurance protects your finances and ensures peace of mind during emergencies.",
    img: "/blog2.jpg",
    category: "Insurance",
    author: "Kalyani Finance",
    date: "April 20, 2026",
  },

  {
    title: "How To Get Fast Approval For Home Loans",
    desc: "Understand the key factors banks consider before approving your dream home loan application.",
    img: "/blog3.jpg",
    category: "Loans",
    author: "Finance Expert",
    date: "April 18, 2026",
  },

  {
    title: "Top Investment Options For Young Professionals",
    desc: "Explore modern investment opportunities designed for long-term financial growth.",
    img: "/blog4.jpg",
    category: "Investment",
    author: "Admin",
    date: "April 12, 2026",
  },

  {
    title: "Best Car Insurance Plans Explained",
    desc: "Compare modern car insurance plans and choose the best protection for your vehicle.",
    img: "/blog5.jpg",
    category: "Insurance",
    author: "Insurance Advisor",
    date: "April 08, 2026",
  },

  {
    title: "Business Loans For Startups Made Easy",
    desc: "Everything startups need to know before applying for a business loan.",
    img: "/blog6.jpg",
    category: "Business",
    author: "Finance Team",
    date: "April 01, 2026",
  },
];

const Page = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-[#f5f7fb] overflow-hidden">
        {/* HERO SECTION */}
        <section className="relative min-h-[400px] md:h-[450px] flex items-center justify-center text-center overflow-hidden px-4">
          <img
            src="/blog-banner.jpg"
            alt="blog"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 to-blue-950/70"></div>

          <div className="relative z-10 max-w-4xl py-20 md:py-0">
            <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-400 text-xs md:text-sm font-semibold">
              Latest News & Articles
            </p>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mt-5 md:mt-6 leading-tight">
              Financial Insights
              <span className="text-blue-400 block md:inline">
                {" "}
                & Expert Blogs
              </span>
            </h1>

            <p className="mt-5 md:mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Stay updated with modern financial strategies, investment tips,
              insurance guidance, and business insights.
            </p>
          </div>
        </section>

        {/* SEARCH BAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 -mt-8 md:-mt-10 relative z-20">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-6 flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-lg md:text-xl mx-auto md:mx-0">
              <FaSearch />
            </div>

            <input
              type="text"
              placeholder="Search finance articles..."
              className="w-full outline-none text-base md:text-lg text-gray-700 px-2"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl transition duration-300 whitespace-nowrap text-sm md:text-base">
              Search
            </button>
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-white rounded-[24px] md:rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-60 md:h-72 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-blue-600 text-white px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg">
                    {blog.category}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  {/* META */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-blue-600" />
                      {blog.author}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-blue-600" />
                      {blog.date}
                    </div>
                  </div>

                  {/* TITLE */}
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-5 md:mt-6 leading-snug group-hover:text-blue-600 transition duration-300">
                    {blog.title}
                  </h2>

                  {/* DESC */}
                  <p className="text-gray-500 mt-4 md:mt-5 leading-relaxed text-sm md:text-base">
                    {blog.desc}
                  </p>

                  {/* BUTTON */}
                  <Link href="/blog-details">
                    <button className="mt-6 md:mt-8 flex items-center gap-3 text-blue-600 font-semibold hover:gap-5 transition-all duration-300 text-sm md:text-base">
                      Read More
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="px-4 sm:px-6 md:px-20 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto bg-slate-950 rounded-[24px] md:rounded-[40px] p-6 sm:p-10 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="uppercase tracking-[4px] md:tracking-[5px] text-blue-400 text-xs md:text-sm font-semibold">
                Newsletter
              </p>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mt-5 md:mt-6 leading-tight">
                Get Weekly Financial Updates & Tips
              </h2>

              <p className="mt-5 md:mt-6 text-gray-400 text-sm md:text-lg leading-relaxed">
                Subscribe to receive modern finance insights, loan updates,
                insurance guidance, and investment tips directly in your inbox.
              </p>

              <div className="mt-8 md:mt-10 bg-white rounded-2xl md:rounded-3xl p-4 flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 outline-none text-gray-700 text-sm md:text-base rounded-xl"
                />

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl transition duration-300 whitespace-nowrap text-sm md:text-base">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default Page;