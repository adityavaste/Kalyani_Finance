"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaUserTie,
  FaChartLine,
  FaDollarSign,
  FaShieldAlt,
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
  FaChartPie,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      img: "/homeimage1.webp",
      title: "TRUSTED FINANCIAL PARTNER",
      heading: "SMART FINANCIAL SOLUTIONS FOR YOUR GROWTH",
      desc: "We provide strategic financial planning, investment solutions, and risk management.",
      btnText: "GET CONSULTATION",
      btnLink: "/contact",
    },
    {
      img: "/homeimage2.webp",
      title: "WEALTH MANAGEMENT",
      heading: "BUILD, MANAGE & GROW YOUR WEALTH CONFIDENTLY",
      desc: "Our experts help you maximize returns while minimizing financial risks.",
      btnText: "OUR SERVICES",
      btnLink: "/services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const services = [
    {
      icon: <FaDollarSign />,
      title: "Capital Markets",
      desc: "Providing insight-driven transformation to investment banks.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Insurance",
      desc: "Helping insurance firms innovate and optimize strategies.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Blockchain",
      desc: "Secure and transparent blockchain powered solutions.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technology Advisory",
      desc: "Modern financial technology solutions for businesses.",
    },
    {
      icon: <FaUsers />,
      title: "Finance & Risk",
      desc: "Advanced analytics to improve financial performance.",
    },
    {
      icon: <FaChartPie />,
      title: "Portfolio Management",
      desc: "Optimizing portfolios for growth and stability.",
    },
  ];

  const banks = [
    { name: "HDFC Bank", logo: "/download.png" },
    { name: "ICICI Bank", logo: "/ICICI_Bank_Logo.svg.png" },
    { name: "SBI", logo: "/download (1).png" },
    { name: "Axis Bank", logo: "/download (2).png" },
    { name: "Kotak", logo: "/download (3).png" },
    { name: "BOB", logo: "/download (4).png" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* TOP BAR */}
      <div className="hidden md:flex bg-white text-sm px-6 lg:px-16 py-3 justify-between items-center">
        <div className="flex gap-6 text-gray-600 flex-wrap">
          <span>En</span>
          <span>Global</span>
          <span>Mon - Fri 10:00-18:00</span>

          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            +91-7350247244
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEnvelope />
          support@kalyanifinance.com
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[650px] md:h-[750px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${
              current === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.img}
              alt="slide"
              className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                current === index ? "scale-110" : "scale-100"
              }`}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-slate-900/80"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 z-10 text-white">
              {/* TOP HEADER */}
              <div className="w-full px-6 md:px-12 lg:px-20 py-12 flex justify-around items-center">
                <h1 className="text-2xl md:text-4xl font-bold">
                  Kalyani Finance
                </h1>

                {/* DESKTOP STATS */}
                <div className="hidden lg:flex gap-10 text-sm text-gray-300">
                  <div>
                    10+ Years
                    <br />
                    <span className="text-xs">Experience</span>
                  </div>

                  <div>
                    5000+ Clients
                    <br />
                    <span className="text-xs">Trusted</span>
                  </div>

                  <div>
                    ISO Certified
                    <br />
                    <span className="text-xs">Company</span>
                  </div>
                </div>

                {/* MOBILE MENU */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden text-2xl"
                >
                  {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
              </div>

              {/* NAVBAR */}
              <div className="hidden md:flex justify-center mt-0">
                <div className="bg-slate-900/90 backdrop-blur-md rounded-xl px-8 py-4 flex gap-8 text-white shadow-lg">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/service">Services</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              {/* MOBILE MENU */}
              {menuOpen && (
                <div className="md:hidden bg-slate-900/95 mx-6 mt-4 rounded-xl p-6 flex flex-col gap-4 text-center">
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/service">Services</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              )}

              {/* HERO TEXT */}
             <div className="h-full flex items-center px-6 md:px-16 lg:px-24 justify-center -mt-25 ">
                <div className="max-w-4xl mt-[-80px] md:mt-0">
                  <h2
                    className={`text-blue-400 tracking-[4px] text-sm md:text-base transition-all duration-[900ms] delay-200 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.title}
                  </h2>

                  <h1
                    className={`text-3xl sm:text-4xl md:text-6xl font-bold mt-4 leading-tight transition-all duration-[900ms] delay-400 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.heading}
                  </h1>

                  <p
                    className={`mt-5 text-sm md:text-lg text-gray-200 max-w-2xl transition-all duration-[900ms] delay-600 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    {slide.desc}
                  </p>

                  <div
                    className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-[900ms] delay-800 ${
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <Link href={slide.btnLink}>
                      <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                        {slide.btnText}
                      </button>
                    </Link>

                    <button className="w-full sm:w-auto px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ARROWS */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-20"
        >
          ❮
        </button>

        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white z-20"
        >
          ❯
        </button>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/917350247244"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full text-white shadow-lg z-50"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* FEATURES */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* CARD */}
          <div className="flex gap-5 hover:-translate-y-1 transition">
            <div className="bg-white p-4 rounded-full shadow-md h-fit">
              <FaClock className="text-blue-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                On Time Service.
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-7">
                We ensure timely financial solutions with precision and reliability.
              </p>
            </div>
          </div>

          <div className="flex gap-5 hover:-translate-y-1 transition">
            <div className="bg-white p-4 rounded-full shadow-md h-fit">
              <FaUserTie className="text-blue-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Professional Team.
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-7">
                Experienced experts providing trusted advice and strategies.
              </p>
            </div>
          </div>

          <div className="flex gap-5 hover:-translate-y-1 transition">
            <div className="bg-white p-4 rounded-full shadow-md h-fit">
              <FaChartLine className="text-blue-600 text-2xl" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Business Analysis.
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-7">
                Data-driven financial analysis for better business decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="bg-white py-20 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Services We Provide
          </h2>

          <p className="text-gray-500 mt-3 tracking-[3px] text-sm">
            COVERED IN THESE AREAS
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 text-center shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="text-4xl flex justify-center text-orange-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BANKS */}
      <div className=" py-20 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Banking Partners
          </h2>

          <p className="text-gray-500 mt-3">
            Trusted collaborations with financial institutions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 flex justify-center items-center hover:shadow-lg transition"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-10 object-contain "
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative py-16 md:py-20">
        <img
          src="/homeimage1.webp"
          alt="cta"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-blue-900/80"></div>

        <div className="relative z-10 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Wanna Talk To Us?
            </h2>

            <p className="mt-4 text-orange-300 max-w-2xl">
              Please feel free to contact us. We're happy to help you with all
              your financial questions.
            </p>
          </div>

          <Link href="/contact">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;