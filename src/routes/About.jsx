import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import skyLogo from "../assets/ceylon-inovations.png";
import ceoImage from "../assets/ceo.png";
import Masonry from "../components/Masonry";
import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.png";
import gallery4 from "../assets/gallery4.png";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.png";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";
import gallery11 from "../assets/gallery11.png";
import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.png";
import gallery14 from "../assets/gallery14.png";
import gallery15 from "../assets/gallery15.png";
import gallery16 from "../assets/gallery16.png";
import gallery17 from "../assets/gallery17.png";
import gallery18 from "../assets/gallery18.png";
import gallery19 from "../assets/gallery19.png";

// Animation component for scroll-triggered animations
const ScrollAnimation = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const galleryItems = [
  { id: "1", img: gallery1, url: "#", height: 560 },
  { id: "2", img: gallery2, url: "#", height: 600 },
  { id: "3", img: gallery3, url: "#", height: 800 },
  { id: "4", img: gallery4, url: "#", height: 500 },
  { id: "5", img: gallery5, url: "#", height: 600 },
  { id: "6", img: gallery6, url: "#", height: 380 },
  { id: "7", img: gallery7, url: "#", height: 800 },
  { id: "8", img: gallery8, url: "#", height: 400 },
  { id: "9", img: gallery9, url: "#", height: 600 },
  { id: "10", img: gallery10, url: "#", height: 300 },
  { id: "11", img: gallery11, url: "#", height: 600 },
  { id: "12", img: gallery12, url: "#", height: 900 },
  { id: "13", img: gallery13, url: "#", height: 800 },
  { id: "14", img: gallery14, url: "#", height: 506 },
  { id: "15", img: gallery15, url: "#", height: 600 },
  { id: "16", img: gallery16, url: "#", height: 440 },
  { id: "17", img: gallery17, url: "#", height: 900 },
  { id: "18", img: gallery18, url: "#", height: 600 },
  { id: "19", img: gallery19, url: "#", height: 500 },
];

export default function About() {
  const galleryControls = useAnimation();
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (galleryInView) {
      galleryControls.start("visible");
    }
  }, [galleryControls, galleryInView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-cover bg-center min-h-[400px] "
          style={{ backgroundImage: `url(${skyLogo})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <motion.h1
                  className="text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  About Us
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Text Content - 2/3 width */}
            <div className="lg:col-span-2 space-y-8 mt-5">
              <ScrollAnimation delay={0.1}>
                <p className="text-gray-700 text-lg leading-relaxed font-regular text-justify">
                  <span className="text-blue-400 font-bold">
                    Ceylon Innovation Services (PVT) LTD
                  </span>{" "}
                  is a leading software and business solutions provider,
                  originally established in 2001 as SS Computer Systems.
                  Evolving over the years, we have grown into a trusted partner
                  for businesses worldwide, delivering top-quality, tailor-made
                  IT solutions that empower organizations to thrive in a rapidly
                  changing digital era.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-regular">
                  We specialize in business automation, software development,
                  and consultation services, guiding clients through the next
                  generation of business innovation powered by technology. From
                  startups to well-established global corporations, we bridge
                  the gap between business and technology, ensuring our clients
                  gain a competitive edge through innovative, high-value
                  solutions.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-regular">
                  Today, our diverse global team of 25+ professionals work
                  around the clock, driven by a shared passion for innovation.
                  We are dedicated to creating unique products, techniques, and
                  capabilities that distinguish us from other providers.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-regular">
                  Founded and led by{" "}
                  <span className="font-bold">Shalitha De Soysa</span> , our
                  journey is built on visionary leadership and a relentless
                  commitment to excellence. Described by clients as extremely
                  innovative, Shalitha is the driving force behind every bespoke
                  IT solution we design and develop.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <p className="text-black text-xl leading-relaxed font-bold text-justify">
                  At Ceylon Innovation Services, we are more than just a service
                  provider we are your solution.
                </p>
              </ScrollAnimation>
            </div>

            {/* CEO Profile - 1/3 width */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <ScrollAnimation delay={0.4}>
                {/* Container for image and background */}
                <div className="relative w-full max-w-xs h-80 mb-6">
                  {/* Gray rectangle behind CEO image */}
                  <div className="absolute w-75 h-139 bg-gray-200 rounded-tr-[80px] top-6 right-0 left-36 z-10"></div>

                  {/* CEO image */}
                  <div className="absolute w-128 h-auto object-cover rounded-lg left-0 top-10 z-20 s">
                    <motion.img
                      src={ceoImage}
                      alt="Shalitha De Soysa - Founder & CEO"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <motion.div
                  className="text-center mt-72 ml-15"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Shalitha De Soysa
                  </h3>
                  <p className="text-gray-600 mb-1">
                    BSC(HONS) in Computer Science, PG, CERT,
                  </p>
                  <p className="text-gray-600 mb-1">
                    PG, DP, MBA, Spec in Accounting
                  </p>
                  <p className="font-medium text-gray-800 mt-2 bg-blue-100 inline-block px-5 py-3 rounded-full">
                    Founder & CEO
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Gallery Section with Fade-in Animation */}
        <motion.section
          ref={galleryRef}
          animate={galleryControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1,
              },
            },
          }}
          className="py-16 bg-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <h2 className="text-4xl font-bold text-left text-gray-900 mb-4">
                Gallery
              </h2>
            </motion.div>
            

            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.3 },
                },
              }}
            >
              <Masonry
                items={galleryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                className="mt-8"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={true}
              />
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
              className="text-center mt-12"
            ></motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer - Ensure it stays at the bottom */}
      <div className="mt-500">
        <Footer />
      </div>
    </div>
  );
}
