import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/ProNav";
import Footer from "../components/Footer.jsx";
import healthhero from "../assets/healthcareimshero.png";
import healthcaredevices from "../assets/healthcareimsdevices.png";
import TransformImage from "../assets/business-transformation.png";
import windows from "../assets/windows-logo.png";
import { Link } from "react-router-dom";

// Animation variants for the new section
const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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

// Animation component for scroll-triggered slide-up animations
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

export default function SkynetPro() {
  // Animation control for the transform section
  const transformAnimation = {
    ref: useRef(null),
    controls: useAnimation(),
  };

  const [transformRef, transformInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  transformAnimation.ref = transformRef;

  useEffect(() => {
    if (transformInView) {
      transformAnimation.controls.start("visible");
    }
  }, [transformInView, transformAnimation.controls]);

  return (
    <div>
      <div className="min-h-full flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden p-2 md:p-0">
        {/* TechParticles as background */}
        <TechParticles />

        {/* Content container with higher z-index */}
        <div className="relative z-10">
          {/* Floating Navbar */}
          <div className="absolute top-[-10px] md:top-[-20px] sm:top-[-15px] left-0 right-0 z-50 p-2">
            <Navbar />
          </div>

          <main className="flex-1 pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="bg-transparent py-12 md:py-16 lg:py-24 p-2">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                      HEALTH<span className="text-blue-400">CARE</span> IMS
                    </h1>

                    <ScrollAnimation delay={0.2}>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg">
                        Healthcare IMS is tailored for Hospitals, Health
                        Centers, Medical Clinics, Pharmacies, and Laboratories
                        of any scale. With Healthcare IMS all your data
                        including patient details are stored and handled
                        securely ensuring patients' privacy.
                      </p>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.3}>
                      <div className="mb-6 md:mb-8">
                        <p className="text-sm text-gray-500 mb-2">
                          Compatible With
                        </p>
                        <div className="flex items-center ">
                          <img
                            src={windows}
                            alt="Windows"
                            className="h-6 md:h-8 w-auto mr-3 md:mr-4"
                          />
                        </div>
                      </div>
                    </ScrollAnimation>
                  </motion.div>

                  {/* Right Content - Product Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative">
                      <img
                        src={healthhero}
                        alt="SKYNET Pro Hero"
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            {/* Product Features Grid */}
            <section className="bg-white  py-12 md:py-16 lg:py-20 p-2">
              <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left - Multiple Device Images */}

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="w-full md:w-[800px] h-auto">
                      <img src={healthcaredevices} alt="SKYNET Pro Devices" />
                    </div>
                  </motion.div>

                  {/* Right - Features List */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <ScrollAnimation delay={0.3}>
                      <div className="text-[15px] space-y-6 display grid grid-cols-3 md:grid-cols-1 md:ml-70">
                        {["Hospitals", "Care Homes", "Medical Practices"].map(
                          (feature, i) => (
                            <div
                              key={i}
                              className="flex items-start space-x-3 md:space-x-4"
                            >
                              <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                              <span className="text-gray-700 md:text-lg">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </ScrollAnimation>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="bg-transparent py-16 md:py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <ScrollAnimation delay={0.1}>
                  <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Key <span className="text-blue-500">Features</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Discover what makes HEALTHCARE IMS ultimate solution for
                      your Healthcare business
                    </p>
                  </div>
                </ScrollAnimation>

                {/* Top Row - 3 Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {/* User-Friendly */}
                  <ScrollAnimation delay={0.1}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="text-center bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer border border-blue-50 hover:border-blue-100"
                    >
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          User-Friendly
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                          It is designed in such a way that it is easy to
                          consume and understand the functions provided at a
                          glance, as well as to learn very quickly. Everything
                          can be operated from a keyboard as well as a touch.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Adjustable & Scalable */}
                  <ScrollAnimation delay={0.2}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="text-center bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer border border-blue-50 hover:border-blue-100"
                    >
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Adjustable & Scalable
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                          The ability to multitask has been developed. And if
                          that isn’t enough, additional features can also be
                          created to your bespoke requirements.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Smart Automation */}
                  <ScrollAnimation delay={0.3}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="text-center bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer border border-blue-50 hover:border-blue-100"
                    >
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Smart Automation
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                          Healthcare data must be handled securely, enabling our
                          system to perform tasks intelligently, reduce risks,
                          and eliminate the hassle of manual management.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollAnimation>
                </div>

                {/* Bottom Row - 2 Features (Centered) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl">
                  {/* Reliability */}
                  <ScrollAnimation delay={0.4}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="text-center bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer border border-blue-50 hover:border-blue-100"
                    >
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-10 h-10 text-blue-600"
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
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Reliability
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                          Your business keeps running during internet or power
                          failures sales, billing, tables, and kitchen orders
                          continue smoothly, while all data, including the last
                          transaction, stays securely stored.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollAnimation>

                  {/* Security */}
                  <ScrollAnimation delay={0.5}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                      }}
                      className="text-center bg-white shadow-lg rounded-2xl p-8 h-full flex flex-col justify-between transition-all duration-300 cursor-pointer border border-blue-50 hover:border-blue-100"
                    >
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <svg
                            className="w-10 h-10 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Security
                        </h3>
                        <p className="text-gray-600 text-md leading-relaxed">
                          Many businesses address external fraud, but internal
                          threats often go unnoticed and harder to resolve. We
                          help identify, prevent, and mitigate fraud, protecting
                          your business from risks inside and out.
                        </p>
                      </div>
                    </motion.div>
                  </ScrollAnimation>
                </div>
              </div>
            </section>

            {/* Call to Action Section - Replaced with new design */}
            <motion.section
              ref={transformAnimation.ref}
              animate={transformAnimation.controls}
              variants={slideUpVariants}
              initial="hidden"
              className="bg-white py-8 sm:py-10 md:py-12 lg:py-16 rounded-2xl sm:rounded-3xl relative overflow-hidden my-8 sm:my-10 md:my-12 lg:my-16"
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
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
