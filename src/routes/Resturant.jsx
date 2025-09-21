import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import choys from "../assets/choys.jpg";
import pizza from "../assets/pizza boss.jpg";
import spice from "../assets/spice food.jpg";
import thanduri from "../assets/thanduri.jpg";
import delight from "../assets/delight.jpg";
import ramya from "../assets/siri ramya.png";

// Section data
const sections = [
  {
    title: "Choy’s Waterfront Residence",
    description: `Choy’s Waterfront Residence, Negombo enhances hospitality operations with integrated 
    solutions, ensuring efficient management, seamless guest services, and an exceptional stay 
    experience with faster response to guest needs.`,
    imgSrc: choys,
  },
  {
    title: "Pizza Boss",
    description: `Pizza Boss manages order processing, menu customization, kitchen operations, 
    delivery tracking, inventory management, and intelligent reporting.`,
    imgSrc: pizza,
  },
  {
    title: "Spice Food Court",
    description: `Spice Food Court manages order processing, menu customization, kitchen operations, 
    table & delivery management, inventory control, and intelligent reporting.`,
    imgSrc: spice,
  },
  {
    title: "Tandoori Indian Cuisine, Kandy",
    description: `Tandoori Indian Cuisine, Kandy provides complete dining solutions with authentic 
    Indian flavors, modern kitchen equipment, customized menu options, timely service, 
    ingredient management, and intelligent reporting.`,
    imgSrc: thanduri,
  },
  {
    title: "Delight - Kandy",
    description: `Delight, Kandy provides complete dining solutions with delicious menu offerings, 
    modern kitchen facilities, customized orders, timely service, inventory management, 
    and intelligent reporting.`,
    imgSrc: delight,
  },
  {
    title: "Siri Ramya - Kandy",
    description: `Siri Ramya, Kandy delivers exceptional dining experiences with flavorful dishes, 
    efficient kitchen operations, personalized menu options, prompt service, stock management, 
    and smart reporting.`,
    imgSrc: ramya,
  },
];

export default function Restaurant() {
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
              Restaurant
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The SKYNET Software For Restaurant Management – Handles order & billing, kitchen operations, 
              table reservations, inventory & supply, customer management, and sales analytics for efficient, 
              data-driven restaurant operations.
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
                {/* Background highlight for alternate sections */}
                {idx % 2 === 0 && (
                  <div className="absolute inset-0 left-[-100px] right-0 w-screen bg-gradient-to-r from-blue-50 to-transparent"></div>
                )}

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 px-6 sm:px-8 lg:px-12">
                  {/* Image */}
                  <motion.div
                    className="lg:w-1/2 flex justify-center"
                    whileHover={{ scale: 1.08, rotate: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative w-72 h-72 sm:w-100 sm:h-100 overflow-hidden rounded-[40px] rounded-tr-[0px] shadow-xl group">
                      <img
                        src={section.imgSrc}
                        alt={section.title}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-200/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
