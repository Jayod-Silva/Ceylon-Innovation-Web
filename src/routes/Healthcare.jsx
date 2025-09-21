import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import pharma from "../assets/pharma-ifs.png";
import abesekara from "../assets/abesekara-dental.png";
import suwana from "../assets/suwana-hospital.png";
import emerald from "../assets/emerald-pharmacy.png";
import lifecare from "../assets/lifecare-hospital.png";

// Section data
const sections = [
  {
    title: "Pharma IFS",
    description: `Business systems are often disparate applications bolted together, which can drastically limit your access to data for key business decisions, prevent staff moving efficiently between tasks and slow down your reactions to change. IFS may be a way to avoid it.`,
    imgSrc: pharma,
  },
  {
    title: "Abesekara Dental",
    description: `Comprehensive Dental Care Management handles patient records, appointment scheduling, treatment planning, imaging integration, inventory management and intelligent reports.`,
    imgSrc: abesekara,
  },
  {
    title: "Suwana Hospital",
    description: `Suwana Hospital Ceylon provides comprehensive healthcare services with advanced patient care, modern medical equipment, clinical diagnostics, emergency support, and intelligent reporting.`,
    imgSrc: suwana,
  },
  {
    title: "Emerald Pharmacy",
    description: `Emerald Pharmacy Ceylon specializes in comprehensive pharmaceutical services with accurate prescription handling, advanced stock and inventory management, seamless supplier coordination, patient-focused support, modern diagnostic equipment, and intelligent reporting for better decision-making.`,
    imgSrc: emerald,
  },
  {
    title: "Life Care Hospital",
    description: `Life Care Hospital provides comprehensive healthcare services with advanced patient management, specialized medical treatments, modern diagnostic equipment, clinical laboratory services, emergency and critical care support, and intelligent reporting for improved healthcare delivery.`,
    imgSrc: lifecare,
  },
];

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <div className="absolute top-[-10px] md:top-[-20px] sm:top-[-15px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Healthcare
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The SKYNET Software For Patient Management, Billing & Finance,
              Pharmacy Management, Laboratory Management, Inventory & Supply
              Chain, Customer Relationships Management, Data Analytics &
              Reporting
            </motion.p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-24 sm:space-y-28 md:space-y-32">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                className="relative flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20 py-20"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Full-width rectangle background for alternate sections */}
                {idx % 2 === 0 && (
                  <div className="absolute inset-0 left-[-100px] right-0 w-screen bg-gradient-to-r from-blue-50 to-transparent"></div>
                )}

                {/* Container for content */}
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 px-6 sm:px-8 lg:px-12">
                  {/* Image */}
                  <motion.div
                    className="lg:w-1/2 flex justify-center"
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative w-72 h-72 sm:w-100 sm:h-100 overflow-hidden rounded-[50px] rounded-tr-[0px] shadow-xl group">
                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    className="lg:w-1/2 text-center lg:text-left"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                      {section.title}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
