import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import hero from "../assets/sky-logo.png";
import smc from "../assets/smc.jpg";
import churchImg from "../assets/church.jpg";
import church from "../assets/kattuwa church.png";

// Charity sections
const sections = [
  {
    title: "St Francis De Sales Church, kattuwa",
    description: `We have provided management systems to Duwa & Negombo Pitipana churches as a charity work by
    Ceylon Innovation (PVT) LTD.`,
    imgSrc: church,
  },
  {
    title: "St. Mary's College, Chilaw",
    description: `St. Mary's Boys' National College is a premier school in Chilaw. As a community service by
    Ceylon Innovation, Star IMS software has been provided to the school free of charge. Today, the
    school as well as the students and teachers are getting great service from it.`,
    imgSrc: smc,
  },
  {
    title: "Our Lady of Good Voyage Church - Duwa",
    description: `We have provided management systems to Duwa & Negombo Pitipana churches as a charity work by
    Ceylon Innovation (PVT) LTD.`,
    imgSrc: churchImg,
  },
];

export default function Charity() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}
      <div className="absolute top-[-10px] md:top-[-20px] sm:top-[-15px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="pt-24 sm:pt-28 md:pt-32">
        {/* Hero / Title */}
        <section className="relative">
          <div className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] w-full overflow-hidden">
            <img
              src={hero}
              alt="Ceylon Innovation Charity"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            className="max-w-4xl mx-auto -mt-12 sm:-mt-16 md:-mt-20 bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-slate-200 p-6 sm:p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Ceylon Innovation’s{" "}
              <span className="block text-sky-700">Charity</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We believe that good business also means leaving the world a
              better place than you found it. With our charity service program,
              we give back to the communities around us and uplift their living
              conditions in the way we can.
            </p>
          </motion.div>
        </section>

        {/* Sections */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24 space-y-24 sm:space-y-28 md:space-y-32">
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
                <div className="absolute inset-0 left-[-100px] right-0 w-screen bg-gradient-to-r from-sky-50 to-transparent"></div>
              )}

              {/* Container */}
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 px-6 sm:px-8 lg:px-12">
                {/* Image */}
                <motion.div
                  className="lg:w-1/2 flex justify-center"
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden rounded-[50px] rounded-tr-[0px] shadow-xl group">
                    <img
                      src={section.imgSrc}
                      alt={section.title}
                      className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-sky-200/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    {section.title}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
