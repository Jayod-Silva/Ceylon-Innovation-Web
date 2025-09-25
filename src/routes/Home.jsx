import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkynetPro from "../assets/skynet-pro-hero.png";
import SkynetRetail from "../assets/reatailhero.png";
import HealthcareIMS from "../assets/healthcareimshero.png";
import StarsIMS from "../assets/StarsIMS.png";
import TransformImage from "../assets/business-transformation.png";
import WorldMap from "../assets/world-dots.png";
import Marians from "../assets/marians.png";
import Avenra from "../assets/avenra.png";
import Mobitel from "../assets/mobitel.png";
import School from "../assets/school.png";
import SMC from "../assets/smc.png";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

import LogoLoop from "../components/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
import { FaFlutter, FaGithub, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { PiFileCSharpFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

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

// Simplified scroll animation hook
const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Updated slideUpVariants
const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Updated to use the new scroll animation approach
  const featuresAnimation = useScrollAnimation(0.1);
  const productsAnimation = useScrollAnimation(0.1);
  const sliderAnimation = useScrollAnimation(0.1);
  const transformAnimation = useScrollAnimation(0.1);

  const [activeProductTab, setActiveProductTab] = useState("pro");
  const productTabs = [
    { id: "pro", label: "SKYNET Pro" },
    { id: "retail", label: "SKYNET Retail" },
    { id: "health", label: "HEALTHCARE IMS" },
    { id: "stars", label: "STARS IMS" },
  ];
  const activeProductIndex = productTabs.findIndex(
    (t) => t.id === activeProductTab
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 700,
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    centerPadding: isMobile ? "20px" : "80px",
    focusOnSelect: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Enhanced Tech Particles Background */}
      <TechParticles />

      {/* Floating Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}

        <section className="relative z-0 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem] overflow-hidden mt-[-200px] md:mt-[-100px] lg:mt-0">
          <video
            id="Home"
            className="absolute inset-0 object-cover w-full h-full rounded-b-[2rem] md:rounded-b-[3rem] lg:rounded-b-[4rem]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/landing.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 w-full h-full bg-black/60 z-10 pointer-events-none"></div>

          {/* Hero Content */}
          <div className="relative z-20 w-full px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto text-center mt-[15rem] sm:mt-[18rem] md:mt-[12rem] lg:mt-0">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
                style={{ fontFamily: "Roboto, sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovate Your Business Future With
                <br />
                <span className="text-cyan-400">Ceylon Innovation</span>
              </motion.h1>

              <motion.p
                className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 mt-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We Provide Cutting-Edge Technology Solutions Tailored To Your
                Business Needs. From ERP System To Mobile Apps, We've Got You
                Covered
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 md:mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to="/Contact">
                  <motion.button
                    className="bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 hover:from-blue-600 hover:to-cyan-400 text-white px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full font-medium transition-colors text-xs sm:text-sm md:text-base"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &lt; &gt; Start Your Project
                  </motion.button>
                </Link>

                <Link to="/About">
                  <motion.button
                    className="text-white hover:text-gray-300 px-4 py-2 sm:px-5 sm:py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base mt-3 sm:mt-0 mb-12 sm:mb-0"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    See more &rarr;
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Statistics Panel */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-40 w-full max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 md:p-6 rounded-b-[30px] md:rounded-b-[40px]">
                <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-8 text-center">
                  <ScrollAnimation delay={0.1}>
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-regular text-white mb-1 sm:mb-2">
                        <CountUp
                          start={0}
                          end={1000}
                          duration={2.5}
                          separator=","
                        />
                        +
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Software Installations
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.3}>
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-regular text-white mb-1 sm:mb-2">
                        <CountUp start={0} end={10} duration={6} />+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Years Innovation
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={0.2}>
                    <div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-regular text-white mb-1 sm:mb-2">
                        <CountUp start={0} end={25} duration={4} />+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Software Developers
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation delay={0.1}>
              <div className="text-center mb-10 px-1">
                <h2 className="text-2xl  md:text-4xl font-bold text-gray-900 mb-4">
                  Technology <span className="text-blue-400">Behind Our</span>{" "}
                  Solutions
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                  We partner with top companies to deliver exceptional digital
                  solutions
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="h-20 relative overflow-hidden md:mt-20">
                <LogoLoop
                  logos={[
                    {
                      node: <SiReact className="text-gray-300" size={55} />,
                      title: "React",                
                    },
                    {
                      node: <SiNextdotjs className="text-gray-300" />,
                      title: "Next.js",
                    },
                    {
                      node: <IoLogoJavascript className="text-gray-300" />,
                      title: "JavaScript",           
                    },
                    {
                      node: (
                        <SiTailwindcss className="text-gray-300" size={60} />
                      ),
                      title: "Tailwind CSS", 
                    },
                    {
                      node: <FaFlutter className="text-gray-300" size={42} />,
                      title: "Flutter",
                    },           
                    {
                      node: <FaGithub className="text-gray-300" size={45} />,
                      title: "Github",
                    },
                    {
                      node: <SiDotnet className="text-gray-300" size={70} />,
                      title: ".NET",
                    },
                    {
                      node: <FaCss3Alt className="text-gray-300" size={60} />,
                      title: "CSS",
                    },
                    {
                      node: <FaHtml5 className="text-gray-300" size={60} />,
                      title: "HTML",
                    },
                    {
                      node: <DiMsqlServer className="text-gray-300" size={60} />,
                      title: "sqlServer",
                    },
                    {
                      node: <TbBrandCSharp className="text-gray-300" size={60} />,
                      title: "C#",
                    },
                    
                    
                    
                  ]}
                  speed={70}
                  direction="left"
                  logoHeight={48}
                  gap={120}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                  ariaLabel="Technology partners"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Content wrapper */}
        <div className="px-5 md:px-6 lg:px-8 xl:px-10 mt-8 md:mt-16 lg:mt-16 mx-1 sm:mx-2 md:mx-4 lg:mx-8">
          {/* Features Section */}
          <motion.section
            ref={featuresAnimation.ref}
            animate={featuresAnimation.controls}
            variants={slideUpVariants}
            initial="hidden"
            className=" backdrop-blur-sm max-w-7xl mx-auto py-8 sm:py-10 md:py-12 lg:py-16 rounded-2xl"
          >
            <ScrollAnimation delay={0.1}>
              <div className="flex flex-col lg:flex-row items-start justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 gap-4 sm:gap-6">
                <div className="lg:max-w-2xl">
                  <h1
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 sm:mb-4 md:ml-10 text-center md:text-left leading-tight"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    <span className="text-blue-400">Innovative Features</span>{" "}
                    Our Company
                    <br /> Delivers To You
                  </h1>
                </div>
                <div className="text-gray-500 text-sm sm:text-base md:text-md lg:max-w-md lg:text-right mr-10">
                  We Always Take Care Of Our Clients. Comfort Of Our Clients
                  With Technology And Innovation
                </div>
              </div>
            </ScrollAnimation>

            <div className="py-8 sm:py-10 md:py-2 px-2 sm:px-4">
              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl w-full">
                  {/* Responsibility Card */}
                  <ScrollAnimation delay={0.1}>
                    <motion.div
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md md:hover:shadow-xl transition-shadow cursor-pointer h-full border border-blue-100"
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(33,105,176,0.15)",
                        transition: {
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                        },
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mt-5">
                        Responsibility
                      </h3>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-md leading-7 text-justify md:mt-5">
                        We take full responsibility in delivering secure,
                        ethical, and reliable IT solutions. Every project is
                        handled with accountability, transparency, and complete
                        ownership, ensuring that our clients receive nothing
                        less than excellence.
                      </p>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Bespoke Card */}
                  <ScrollAnimation delay={0.2}>
                    <motion.div
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer h-full border border-blue-100"
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(33,105,176,0.15)",
                        transition: {
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                        },
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mt-5">
                        Bespoke
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-6 sm:leading-7 mb-3 sm:mb-4 md:mb-5 text-justify md:mt-5">
                        Every business is unique, and so are our solutions. We
                        design and develop custom IT systems that align
                        seamlessly with your goals, workflows, and long-term
                        vision. From tailored applications to specialized
                        integrations.
                      </p>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Innovation Card */}
                  <ScrollAnimation delay={0.3}>
                    <motion.div
                      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 cursor-pointer h-full border border-blue-100"
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(33,105,176,0.15)",
                        transition: {
                          type: "spring",
                          stiffness: 250,
                          damping: 20,
                        },
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#2169B0]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mt-5">
                        Innovation Service
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-[14.5px] leading-6 sm:leading-7 mb-3 sm:mb-4 md:mb-5 text-justify md:mt-5">
                        We thrive on innovation by blending creativity with
                        cutting-edge technology. Our solutions are designed to
                        be future-ready, leveraging the latest tools,
                        frameworks, and best practices in the industry. We bring
                        fresh ideas to every project.
                      </p>
                    </motion.div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Products Section */}
          <motion.section
            id="products"
            ref={productsAnimation.ref}
            animate={productsAnimation.controls}
            variants={slideUpVariants}
            initial="hidden"
            className="backdrop-blur-sm w-full py-8 sm:py-10 md:py-12 relative z-10 mt-[-50px] "
          >
            <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10 rounded-2xl sm:rounded-3xl">
              <ScrollAnimation delay={0.1}>
                <div className="text-center mb-6 sm:mb-8 md:mb-10">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                    Our <span className="text-blue-400">Products</span>
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 max-w-2xl mx-auto px-2">
                    We have many products For You with Affordable Price
                  </p>
                </div>
              </ScrollAnimation>

              {/* Tabs */}
              <ScrollAnimation delay={0.2}>
                <div className="mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10 md:mb-12 px-2">
                  <div className="relative border-b border-gray-200">
                    <div className="flex flex-wrap text-xs sm:text-sm text-gray-600">
                      {productTabs.map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveProductTab(tab.id)}
                          className={`flex-1 min-w-[90px] sm:min-w-[120px] px-2 sm:px-3 md:px-4 py-2 font-medium transition-colors ${
                            activeProductTab === tab.id
                              ? "text-blue-400"
                              : "hover:text-blue-400"
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <motion.div
                      className="absolute bottom-[-1.5px] h-[3px] sm:h-[3.5px] bg-blue-400 rounded-full"
                      initial={false}
                      animate={{
                        left: `${
                          (activeProductIndex / productTabs.length) * 100
                        }%`,
                        width: `${100 / productTabs.length}%`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      style={{ left: 0, width: `${100 / productTabs.length}%` }}
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 px-2">
                {/* SKYNET Pro */}
                <ScrollAnimation delay={0.3}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("pro")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("pro");
                    }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "pro"
                        ? "ring-2 ring-blue-400/40 shadow-md"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-100">
                      <img
                        src={SkynetPro}
                        alt="SKYNET Pro"
                        className="  w-[65%] h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 text-gray-500 text-justify mb-3 sm:mb-4">
                        SKYNET Pro is built with the latest technology to manage
                        the entire hospitality business. It supports large-scale
                        operations and can handle unlimited transactions in the
                        industry
                      </p>
                      <div className="text-center">
                        <Link
                          to="/skynet-pro"
                          className="inline-block text-blue-400 font-medium text-md md:text-base hover:text-blue-600 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* SKYNET Retail */}
                <ScrollAnimation delay={0.4}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("retail")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("retail");
                    }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "retail"
                        ? "ring-2 ring-blue-400/40 shadow-md"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-100">
                      <img
                        src={SkynetRetail}
                        alt="SKYNET Retail"
                        className="w-4/5 md:w-[70%] h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 text-gray-500 text-justify mb-3 sm:mb-4">
                        SKYNET Retail is tailored for supermarkets, salons,
                        liquor, and clothing stores, enabling seamless
                        transactions, efficient management, and improved
                        customer service for modern retail businesses.
                      </p>
                      <div className="text-center">
                        <Link
                          to="/skynet-retail"
                          className="inline-block text-blue-400 font-medium text-md md:text-base hover:text-blue-600 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* HEALTHCARE IMS */}
                <ScrollAnimation delay={0.5}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("health")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("health");
                    }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "health"
                        ? "ring-2 ring-blue-400/40 shadow-md"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-100">
                      <img
                        src={HealthcareIMS}
                        alt="HEALTHCARE IMS"
                        className="w-4/5 md:w-[65%] h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 text-gray-500 text-justify mb-3 sm:mb-4">
                        HEALTHCARE IMS serves hospitals, labs, clinics, and
                        pharmacies of any size. Fully customizable to client
                        needs, it ensures secure storage and efficient
                        management of all user data.
                      </p>
                      <div className="text-center">
                        <Link
                          to="/healthcare-ims"
                          className="inline-block text-blue-400 font-medium text-md md:text-base hover:text-blue-600 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>

                {/* STARS IMS */}
                <ScrollAnimation delay={0.6}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setActiveProductTab("stars")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setActiveProductTab("stars");
                    }}
                    className={`bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm transition-all will-change-transform h-full ${
                      activeProductTab === "stars"
                        ? "ring-2 ring-blue-400/40 shadow-md"
                        : "hover:shadow-lg"
                    }`}
                  >
                    <div className="aspect-[4/3] flex items-center justify-center bg-blue-100">
                      <img
                        src={StarsIMS}
                        alt="STARS IMS"
                        className="w-4/5 md:w-[95%] h-auto object-contain p-2"
                      />
                    </div>
                    <div className="p-3 sm:p-4 md:p-5">
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 sm:leading-6 text-gray-500 text-justify mb-3 sm:mb-4">
                        STARS IMS is designed for schools, tutors, colleges, and
                        universities, offering advanced, secure technology to
                        efficiently manage educational institutes with
                        reliability, safety, and modern features.
                      </p>
                      <div className="text-center">
                        <Link
                          to="/stars-ims"
                          className="inline-block text-blue-400 font-medium text-md md:text-base hover:text-blue-600 transition-colors"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              </div>
            </div>
          </motion.section>

          <ScrollAnimation delay={0.1}>
            <div className="text-center mb-8 md:mb-10 md:mt-10 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight z-10">
                Organizations Achieving Growth Using
                <br />
                <span className="text-blue-400">Our Product Solutions</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-4">
                Trusted by leading companies worldwide to deliver exceptional
                digital transformation results
              </p>
            </div>

            <ScrollAnimation delay={0.5}>
              {/* Enhanced Superb Slider Section with Perfectly Centered Logos */}
              <section className="backdrop-blur-sm max-w-7xl mx-auto py-12 md:py-30 relative overflow-hidden min-h-[500px] flex items-center z-20">
                <div className="absolute inset-0 opacity-[0.2] md:opacity-[0.1]">
                  <img
                    src={WorldMap}
                    alt="World Map Background"
                    className=" w-[100%] md:w-[72%] h-auto object-cover  md:ml-[15%]  mt-10"
                  />
                </div>

                <div className="relative z-10 w-full">
                  <div className="mx-auto max-w-6xl mt-[-210px] md:mt-0 relative h-80 flex items-center justify-center pl-15 md:pl-47">
                    <style>
                      {`
                    .superb-carousel { 
                      position: relative; 
                      padding: 30px 0; 
                      width: 100%;
                    }
                    .slick-list {
                      padding: 10px 0 !important;
                      overflow: visible !important;
                    }
                    .slick-track {
                      display: flex !important;
                      align-items: center !important;
                    }
                    .slick-slide { 
                      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
                      transform: scale(0.8) translateY(20px); 
                      opacity: 0.5; 
                      filter: blur(2px) grayscale(0.7); 
                      display: flex !important;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                      transform-origin: center center;
                    }
                    .slick-slide.slick-active { 
                      opacity: 0.8; 
                      transform: scale(0.9) translateY(10px); 
                      filter: blur(1px) grayscale(0.3); 
                    }
                    .slick-center { 
                      transform: scale(1.6) translateY(-5px) !important; 
                      opacity: 1 !important; 
                      filter: blur(0px) grayscale(0) !important; 
                      z-index: 20; 
                    }
                    @media (max-width: 640px) {
                      .slick-slide { transform: scale(0.85) translateY(15px); }
                      .slick-slide.slick-active { transform: scale(0.95) translateY(8px); }
                      .slick-center { transform: scale(1.15) translateY(-3px) !important; }
                    }
                    .slick-slide > div {
                      display: flex !important;
                      justify-content: center;
                      align-items: center;
                      height: 100%;
                      width: 100%;
                    }
                    .slick-slide img { 
                      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
                      position: relative; 
                      z-index: 2; 
                      background: transparent; 
                      margin: 0 auto;
                      width: auto;
                      object-fit: contain;
                      transform-origin: center center;
                    }
                    @media (max-width: 640px) {
                      .slick-slide img { 
                        max-height: 60px !important; 
                        max-width: 120px;
                      }
                    }
                    @media (min-width: 641px) and (max-width: 1024) {
                      .slick-slide img { 
                        max-height: 80px !important; 
                        max-width: 160px;
                      }
                    }
                    @media (min-width: 1025px) {
                      .slick-slide img { 
                        max-height: 100px !important; 
                        max-width: 200px;
                      }
                    }
                    .slick-center img {
                      max-height: 120px !important;
                    }
                    @media (max-width: 640px) {
                      .slick-center img {
                        max-height: 70px !important;
                      }
                    }
                    .slick-dots { 
                      bottom: -40px; 
                      display: flex !important; 
                      justify-content: center; 
                      gap: 6px; 
                    }
                    @media (min-width: 768px) { 
                      .slick-dots { bottom: -60px; gap: 8px; } 
                    }
                    .slick-dots li { margin: 0; }
                    .slick-dots li button { 
                      width: 10px; 
                      height: 10px; 
                      border-radius: 50%; 
                      background: linear-gradient(145deg, #e2e8f0, #cbd5e1); 
                      border: 2px solid rgba(59, 130, 246, 0.3); 
                      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
                      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
                    }
                    @media (min-width: 768px) { 
                      .slick-dots li button { width: 12px; height: 12px; } 
                    }
                    .slick-dots li button:before { display: none; }
                    .slick-dots li.slick-active button { 
                      background: #3b82f6; 
                      border-color: rgba(59, 130, 246, 0.6); 
                      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4); 
                      transform: scale(1.3); 
                    }
                    .slick-dots li:hover button { 
                      transform: scale(1.2); 
                      border-color: rgba(59, 130, 246, 0.5); 
                    }
                    .slick-center img { 
                      animation: float 6s ease-in-out infinite; 
                    }
                    @keyframes float {
                      0%, 100% { transform: translateY(0px) rotate(0deg); }
                      25% { transform: translateY(-5px) rotate(0.5deg); }
                      50% { transform: translateY(-8px) rotate(0deg); }
                      75% { transform: translateY(-3px) rotate(-0.5deg); }
                    }
                    @media (max-width: 640px) {
                      @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        25% { transform: translateY(-3px); }
                        50% { transform: translateY(-5px); }
                        75% { transform: translateY(-2px); }
                      }
                    }
                  `}
                    </style>

                    <div className="superb-carousel">
                      <Slider
                        {...{
                          ...settings,
                          autoplaySpeed: 1000,
                          speed: 700,
                          customPaging: (i) => <button />,
                          beforeChange: (oldIndex, newIndex) => {},
                        }}
                      >
                        <div className="px-2 flex justify-center items-center h-full">
                          <img
                            src={Avenra}
                            alt="Avenra"
                            className="object-contain transition-all duration-500 mx-auto"
                          />
                        </div>

                        <div className="px-2 flex justify-center items-center h-full">
                          <img
                            src={Marians}
                            alt="Marians"
                            className="object-contain transition-all duration-500 mx-auto"
                          />
                        </div>
                        <div className="px-2 flex justify-center items-center h-full">
                          <img
                            src={Mobitel}
                            alt="Mobitel"
                            className="object-contain transition-all duration-500 mx-auto"
                          />
                        </div>

                        <div className="px-2 flex justify-center items-center h-full">
                          <img
                            src={School}
                            alt="School"
                            className="object-contain transition-all duration-500 mx-auto"
                          />
                        </div>

                        <div className="px-2 flex justify-center items-center h-full">
                          <img
                            src={SMC}
                            alt="SMC"
                            className="object-contain transition-all duration-500 mx-auto"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          </ScrollAnimation>

          {/* Ready to Transform Your Business Section */}
          <motion.section
            ref={transformAnimation.ref}
            animate={transformAnimation.controls}
            variants={slideUpVariants}
            initial="hidden"
            className="bg-white py-8 md:py-12 lg:py-16 rounded-2xl sm:rounded-3xl relative overflow-hidden my-8 sm:my-10 md:my-12 lg:my-16"
          >
            
            <div className="relative z-10 px-4 sm:px-5 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
                {/* Left Content */}
                <ScrollAnimation delay={0.1}>
                  <div className="text-gray-800 lg:ml-8 xl:ml-12 2xl:ml-20 px-2 sm:px-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-tight">
                      Ready To Transform Your Business?
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 leading-relaxed">
                      Let's Discuss Your Project Requirements And Create A
                      Custom Solution That Perfectly Fits Your Business Needs.
                    </p>
                    <Link to="/contact">
                      <motion.button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-colors text-xs sm:text-sm md:text-base cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Let's Discuss
                      </motion.button>
                    </Link>
                  </div>
                </ScrollAnimation>

                {/* Right Image */}
                <ScrollAnimation delay={0.2}>
                  <div className="relative mt-6 sm:mt-8 lg:mt-0 px-2 sm:px-0 md:ml-40">
                    <div className="rounded-xl sm:rounded-2xl overflow-hidden">
                      <img
                        src={TransformImage}
                        alt="Transform Your Business"
                        className="w-130 h-auto object-cover"
                      />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 max-w-xs sm:max-w-sm w-full relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
          >
            <button
              className="absolute top-1 right-1 sm:top-2 sm:right-2 text-gray-600 hover:text-gray-900 font-bold text-lg sm:text-xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <img
              src={StarsIMS}
              alt="Special Offer"
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-gray-700 mt-3 sm:mt-4 text-center text-xs sm:text-sm">
              Check out our latest offer!
            </p>
            <div className="mt-3 sm:mt-4 flex justify-center">
              <button
                className="bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm cursor-pointer"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
