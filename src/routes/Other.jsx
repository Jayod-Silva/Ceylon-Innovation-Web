import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// import mariyans from "../assets/marians.png";
import dushan from "../assets/dushan.jpg";
import zamgems from "../assets/zam gems.jpg";
import rohanwine from "../assets/rohan wine.jpg";
import junewine from "../assets/june wine.jpg";
import hemas from "../assets/hemas.jpg";

// Section data
const sections = [
  // {
  //   title: "Mariyans",
  //   description:
  //     "Mariyans Music Group providing complete music solutions with high-quality recordings, modern studio facilities, customized compositions, timely releases, project management, and intelligent reporting.",
  //   imgSrc: mariyans,
  // },
  {
    title: "Dushan Jayathilaka",
    description:
      "Dushan Jayathilaka Music Group delivering exceptional music services with creative compositions, state-of-the-art studio facilities, personalized productions, timely project completion, efficient workflow, and insightful performance reporting.",
    imgSrc: dushan,
  },
  {
    title: "ZAM Gems",
    description:
      "ZAM Gems delivering exceptional gemstone services with certified quality, modern processing facilities, customized designs, timely order fulfillment, efficient inventory management, and insightful sales reporting.",
    imgSrc: zamgems,
  },
  {
    title: "Rohan Wine",
    description:
      "Rohan Wine delivering exceptional beverage services with premium wine selections, modern storage facilities, personalized recommendations, timely order fulfillment, efficient inventory management, and insightful sales reporting.",
    imgSrc: rohanwine,
  },
  {
    title: "June Wine - Hettipola",
    description:
      "June Wine, Hettipola offering premium wine experiences with carefully curated selections, modern storage solutions, tailored customer service, prompt delivery, streamlined inventory management, and detailed sales insights.",
    imgSrc: junewine,
  },
  {
    title: "Hemas - Kurunegala",
    description:
      "Hemas, Kurunegala delivering exceptional wine services with premium selections, modern storage facilities, personalized customer service, timely order fulfillment, efficient inventory management, and insightful sales reporting.",
    imgSrc: hemas,
  },
];

export default function Other() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
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
              Other Industries
            </h1>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The SKYNET Software for Music Management, Gems Management, Wine Store
              Management, and various other industry solutions with comprehensive business
              automation, inventory management, customer relationships, and intelligent
              reporting.
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
                  <div className="absolute inset-0 left-[-100px] right-[-100px] w-screen bg-gradient-to-r from-blue-50 to-transparent"></div>
                )}

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
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
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
