import { motion } from "framer-motion";
import Navbar from "../components/ProNav.jsx";
import Footer from "../components/Footer.jsx";
import rohanwine from "../assets/rohan wine.jpg";
import junewine from "../assets/june wine.jpg";
import hemas from "../assets/hemas.jpg";
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

const sections = [
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <TechParticles />

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
                The SKYNET Software for Music Management, Gems Management, Wine
                Store Management, and various other industry solutions with
                comprehensive business automation, inventory management,
                customer relationships, and intelligent reporting.
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
                    <div className="absolute inset-0 left-[-100px] right-0 w-screen pointer-events-none z-0">
                      <div
                        className="w-full h-full"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent 0%, #eff6ff 50%, transparent 100%)",
                        }}
                      />
                    </div>
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
    </div>
  );
}
