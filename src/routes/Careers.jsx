"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "../components/ProNav.jsx";
import Footer from "../components/Footer.jsx";
import heroImg from "../assets/landing.jpg";
import { motion } from "framer-motion";


export default function Careers() {
  const positionsRef = useRef(null);

  const scrollToPositions = () => {
    positionsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const steps = [
    {
      title: "1. Send us your application",
      text: "Upload your CV through the form provided. We're an equal opportunity employer and committed to an inclusive environment for everyone.",
    },
    {
      title: "2. We shortlist applications",
      text: "If shortlisted, we will contact you to schedule an aptitude test. If not shortlisted, we keep your application for future openings.",
    },
    {
      title: "3. Let's talk",
      text: "Excel at the aptitude test and we will schedule two rounds of interviews.",
    },
    {
      title: "4. Join us",
      text: "You will receive an offer of employment. Accept it, and you officially become a Ceylon Innovator.",
    },
  ];

 const roles = [
  { 
    title: "Sales & Marketing Executive", 
    type: "Full-time", 
    link: "https://forms.gle/p5eQdZgrsZVHX73R8"
  }, 
  { 
    title: "Intern - Business Analysis", 
    type: "Internship", 
    link: "https://forms.gle/WNUfsGVNkF38CvUA7"
  },
  { 
    title: "Intern - Software Development", 
    type: "Internship", 
    link: "https://forms.gle/z2FAwff9VpR1gCbt7"
  },
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative">
            <div className="h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px] w-full overflow-hidden ">
              <img
                src={heroImg}
                alt="Ceylon Innovation Team"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>
            <div className="container-width px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center text-slate-700"
              >
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent mt-5">
                  Build your future with us and create software that
                </span>
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                  shapes tomorrow.
                </span>
              </motion.h2>

              
            </div>
            

          </section>

          {/* Hiring Process */}
          <section className="container-width px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="bg-sky-100 backdrop-blur rounded-2xl p-5 sm:p-7 md:p-10 border border-sky-100 shadow-sm"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 text-center">
                Our Hiring Process
              </h3>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6">
                {steps.map((s, idx) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="relative pl-8"
                  >
                    <span className="absolute left-0 top-1.5 size-3 rounded-full bg-slate-900"></span>
                    {idx < steps.length - 1 && (
                      <span className="absolute left-1.5 top-4 bottom-0 w-px bg-slate-300"></span>
                    )}
                    <h4 className="font-semibold text-slate-900">{s.title}</h4>
                    <p className="text-slate-600 text-sm sm:text-base mt-1">
                      {s.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  onClick={scrollToPositions}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm sm:text-base hover:bg-slate-800 transition-colors"
                >
                  Open Positions
                </button>
              </div>
            </motion.div>
          </section>

          {/* Positions */}
          <section
            ref={positionsRef}
            className="container-width px-4 sm:px-6 lg:px-8 pb-16"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900"
            >
              Open Positions
            </motion.h3>

            <div className="mt-6 sm:mt-8 divide-y divide-slate-200 rounded-xl overflow-hidden border border-slate-200">
              {roles.map((r, idx) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white px-4 sm:px-6 py-4"
                >
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-900">
                      {r.title}
                    </h4>
                    <p className="text-slate-500 text-sm">{r.type}</p>
                  </div>
                 <a
  href={r.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-500 transition-colors text-sm"
>
  Apply Now
</a>

                </motion.div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
