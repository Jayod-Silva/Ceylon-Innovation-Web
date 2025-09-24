import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

import { useEffect, useRef } from "react";

// Enhanced Tech Vibe Floating Particles Component
const TechParticles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced Particle class with tech vibe
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1; // Slightly larger particles
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.random() * 50 + 59}, ${
          Math.random() * 50 + 130
        }, ${Math.random() * 50 + 246}, ${Math.random() * 0.5 + 0.3})`;
        this.angle = 0;
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.05 + 0.01;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Add subtle pulsing effect
        this.angle += this.pulseSpeed;
        this.pulse = Math.sin(this.angle) * 0.5 + 0.5;

        if (this.x > canvas.width + 5 || this.x < -5) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height + 5 || this.y < -5) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        // Draw glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;

        // Draw main particle with pulse effect
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
          this.x,
          this.y,
          this.size * (0.8 + this.pulse * 0.4),
          0,
          Math.PI * 2
        );
        ctx.fill();

        // Draw inner highlight for tech look
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(
          this.x - this.size * 0.3,
          this.y - this.size * 0.3,
          this.size * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.shadowBlur = 0;
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Draw connection lines with tech-inspired pattern
    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            // Create tech-style connection with gradient
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            gradient.addColorStop(0, p1.color);
            gradient.addColorStop(1, p2.color);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8;

            // Draw dotted line for tech look
            ctx.setLineDash([3, 3]);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw connection nodes
            ctx.fillStyle = p1.color;
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, 1.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = p2.color;
            ctx.beginPath();
            ctx.arc(p2.x, p2.y, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    // Draw network grid in the background
    const drawGrid = () => {
      const gridSize = 50;
      const offsetX = (Date.now() / 100) % gridSize;
      const offsetY = (Date.now() / 100) % gridSize;

      ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
      ctx.lineWidth = 0.5;

      // Draw horizontal lines
      for (let y = offsetY; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw vertical lines
      for (let x = offsetX; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background grid
      drawGrid();

      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      drawConnections();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"
    />
  );
};

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <TechParticles />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero Section */}
          <motion.section
            className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white bg-cover bg-center min-h-[300px] md:min-h-[400px]"
            style={{ backgroundImage: `url(${skyLogo})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 ">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4 mt-20"
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
          <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-2 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
              {/* Text Content - 2/3 width on desktop, full width on mobile */}
              <div className="lg:col-span-2 space-y-6 md:space-y-8 mt-0 md:mt-5">
                <ScrollAnimation delay={0.1}>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-regular text-justify">
                    <span className="text-blue-400 font-bold">
                      Ceylon Innovation Services (PVT) LTD
                    </span>{" "}
                    is a leading software and business solutions provider,
                    originally established in 2001 as SS Computer Systems.
                    Evolving over the years, we have grown into a trusted
                    partner for businesses worldwide, delivering top-quality,
                    tailor-made IT solutions that empower organizations to
                    thrive in a rapidly changing digital era.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify font-regular">
                    We specialize in business automation, software development,
                    and consultation services, guiding clients through the next
                    generation of business innovation powered by technology.
                    From startups to well-established global corporations, we
                    bridge the gap between business and technology, ensuring our
                    clients gain a competitive edge through innovative,
                    high-value solutions.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify font-regular">
                    Today, our diverse global team of 25+ professionals work
                    around the clock, driven by a shared passion for innovation.
                    We are dedicated to creating unique products, techniques,
                    and capabilities that distinguish us from other providers.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify font-regular">
                    Founded and led by{" "}
                    <span className="font-bold">Shalitha De Soysa</span> , our
                    journey is built on visionary leadership and a relentless
                    commitment to excellence. Described by clients as extremely
                    innovative, Shalitha is the driving force behind every
                    bespoke IT solution we design and develop.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <p className="text-black text-lg md:text-xl leading-relaxed font-bold text-justify">
                    At Ceylon Innovation Services, we are more than just a
                    service provider we are your solution.
                  </p>
                </ScrollAnimation>
              </div>

              {/* CEO Profile - 1/3 width on desktop, full width on mobile */}
              <div className="lg:col-span-1 flex flex-col items-center mt-8 md:mt-0">
                <ScrollAnimation delay={0.4}>
                  {/* Container for image and background - Desktop Layout */}
                  <div className="hidden lg:block relative w-full max-w-xs h-80 mb-6">
                    {/* Gray rectangle behind CEO image */}
                    <div className="absolute w-75 h-139 bg-gray-200 rounded-tr-[80px] top-6 right-0 left-36 z-10"></div>

                    {/* CEO image */}
                    <div className="absolute w-50 md:w-128 h-auto object-cover rounded-lg left-0 top-10 z-20 ">
                      <div className="absolute inset-0 bg-white rounded-lg shadow-lg">
                        <motion.img
                          src={ceoImage}
                          alt="Shalitha De Soysa - Founder & CEO"
                          className="w-full h-auto"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout for CEO Image */}
                  <div className="lg:hidden flex flex-col items-center">
                    <div className="w-64 h-[340px] md:w-72 md:h-[500px] relative mb-6 z-20">
                      {/* Gray background behind CEO image */}
                      <div className="absolute inset-0 bg-gray-200 w-50 h-77 ml-14 rounded-tr-[40px] z-10"></div>

                      {/* CEO image */}
                      <div className="absolute inset-0 z-20 rounded-lg overflow-hidden z-20">
                        <motion.img
                          src={ceoImage}
                          alt="Shalitha De Soysa - Founder & CEO"
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="text-center mt-[-40px] lg:mt-70 lg:ml-15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Shalitha De Soysa
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-1">
                      BSC(HONS) in Computer Science, PG, CERT,
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mb-1">
                      PG, DP, MBA, Spec in Accounting
                    </p>
                    <p className="font-medium text-gray-800 mt-2 bg-blue-100 inline-block px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base">
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
            className="py-8 md:py-16 bg-gray-200 md:ml-58 md:mr-40 md:rounded-tl-[80px] md:rounded-br-[80px]"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-left text-gray-900 ml-20">
              Gallery
            </h2>
          </motion.section>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
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
                columns={2} // Default to 2 columns for mobile
                mdColumns={3} // 3 columns for medium screens and up
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
              className="text-center mt-8 md:mt-12"
            ></motion.div>
          </div>
        </main>

        {/* Footer - Responsive margin */}
        <div className="mt-1970 md:mt-510">
          <Footer />
        </div>
      </div>
    </div>
  );
}
