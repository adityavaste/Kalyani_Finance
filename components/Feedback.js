"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    thumbnail: "/video1.jpg",
    url: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    name: "Priya Mehta",
    role: "Investor",
    thumbnail: "/video2.jpg",
    url: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    thumbnail: "/video3.jpg",
    url: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div>
      {/* ================= FOUNDER SECTION ================= */}

      <div className="w-full py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 text-black">
        <div className="max-w-7xl mx-auto">
          {/* Main Card */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* LEFT IMAGE */}
            <div className="relative h-full">
              <img
                src="/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.avif"
                alt="Founder"
                className="w-full h-[280px] sm:h-[400px] lg:h-[550px] object-cover"
              />

              {/* Experience Card */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-blue-600 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  15+
                </h3>

                <p className="text-xs sm:text-sm text-white">
                  Years Experience
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="p-6 sm:p-8 lg:p-14">
              {/* Small Heading */}
              <p className="text-blue-600 uppercase tracking-[3px] text-xs sm:text-sm font-semibold">
                Founder Message
              </p>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mt-4">
                Building Financial Confidence For Every Client
              </h2>

              {/* Description */}
              <p className="mt-5 text-gray-600 leading-7 text-sm sm:text-base">
                At Kalyani Finance, we focus on smart financial solutions,
                business growth strategies, and long-term wealth planning.
                Our goal is to help individuals and businesses achieve
                financial stability with confidence.
              </p>

              {/* Goals */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="font-semibold text-lg">
                    Smart Investments
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    Strategic wealth management solutions for long-term growth.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition">
                  <h4 className="font-semibold text-lg">
                    Trusted Guidance
                  </h4>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    Reliable financial planning tailored for business success.
                  </p>
                </div>
              </div>

              {/* Founder Info */}
              <div className="mt-10 flex items-center gap-4">
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl">
                    Chandrakant Satpute
                  </h4>

                  <p className="text-sm text-gray-500">
                    Founder & Financial Advisor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VIDEO TESTIMONIALS ================= */}

      <div className="w-full bg-gradient-to-b from-slate-950 to-slate-900 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-white">
        
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Trusted By Our Clients Worldwide
          </h2>

          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Real stories from our satisfied clients
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-7xl mx-auto">
          
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setActiveVideo(video.url)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:scale-[1.03] transition duration-300 shadow-xl">
                
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-600 p-4 rounded-full shadow-lg group-hover:scale-110 transition duration-300">
                    <FaPlay className="text-white text-lg" />
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/90 to-transparent">
                  <h4 className="font-semibold text-lg">
                    {video.name}
                  </h4>

                  <p className="text-sm text-gray-300">
                    {video.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VIDEO MODAL ================= */}

        {activeVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">
            
            <div className="relative w-full max-w-5xl">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-2 text-white text-3xl hover:scale-110 transition"
              >
                ✕
              </button>

              {/* Video */}
              <iframe
                className="w-full h-[220px] sm:h-[350px] md:h-[500px] rounded-2xl"
                src={activeVideo + "?autoplay=1"}
                title="Video testimonial"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoTestimonials;