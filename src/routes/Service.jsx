import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// Images
import salapura from '../assets/salapura electrical.png';
import jayasuriya from '../assets/jayasuriya.png';
import salon from '../assets/salon mondy.jpg';
import sigiri from '../assets/sigiri motors.jpg';
import sky from '../assets/sky international.jpg';
import sonic from '../assets/super sonic.jpg';

// Section data
const sections = [
  {
    title: 'Salapura Electricals',
    description: `Salapura Electricals delivers exceptional electrical solutions with quality products, modern equipment, customized installations, timely service, efficient inventory management, and insightful performance reporting.`,
    imgSrc: salapura,
  },
  {
    title: 'Jayasooriya Care Zone',
    description: `Jayasooriya Care Zone offers advanced vehicle services with state-of-the-art workshop facilities, expert technicians, personalized maintenance solutions, fast turnaround, seamless service management, and smart performance tracking.`,
    imgSrc: jayasuriya,
  },
  {
    title: 'Salon Mondy',
    description: `Salon Mondy offers premium beauty and grooming services with skilled professionals, modern facilities, personalized treatments, timely appointments, efficient service management, and insightful client care reporting.`,
    imgSrc: salon,
  },
  {
    title: 'Sigiri Motors & Engineers',
    description: `Sigiri Motors & Engineers provides top-notch automotive and engineering services with cutting-edge tools, expert technical support, tailored solutions, quick turnaround, streamlined operations, and real-time service insights.`,
    imgSrc: sigiri,
  },
  {
    title: 'Sky International',
    description: `Sky International Vehicle Sale offers premium vehicle sales and services with a wide range of quality cars, transparent pricing, personalized customer support, seamless purchasing experience, and smart inventory management.`,
    imgSrc: sky,
  },
  {
    title: 'Super Sonic',
    description: `Super Sonic Vehicle Parts Shop provides high-quality automotive parts with a wide selection, expert guidance, fast availability, efficient inventory management, and seamless customer service for all vehicle needs.`,
    imgSrc: sonic,
  },
];

export default function Services() {
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
              Services
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The SKYNET Software for Service Management handles client onboarding, project tracking, resource allocation, invoicing & payments, customer relationship management, and performance analytics for streamlined, profitable, and data-driven service operations.
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
                {/* Light background for alternate sections */}
                {idx % 2 === 0 && (
                  <div className="absolute inset-0 left-[-100px] right-0 w-screen bg-gradient-to-r from-indigo-50 to-transparent"></div>
                )}

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 px-6 sm:px-8 lg:px-12">
                  {/* Image */}
                  <motion.div
                    className="lg:w-1/2 flex justify-center"
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 overflow-hidden rounded-[40px] rounded-tr-[0px] shadow-xl group">
                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
