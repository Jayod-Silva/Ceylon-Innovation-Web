import Navbar from "../components/ProNav.jsx";
import Footer from "../components/Footer.jsx";
import { motion } from "framer-motion";
import hero from "../assets/sky-logo.png";
import smc from "../assets/smc.png";
import churchImg from "../assets/church.jpg";
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

export default function Charity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <TechParticles />

      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero + Title */}
          <section className="relative">
            <div className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] w-full overflow-hidden">
              <img
                src={hero}
                alt="Ceylon Innovation Charity"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="container-width px-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="-mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20 bg-white/90 backdrop-blur rounded-2xl shadow border border-slate-200 p-6 sm:p-8 text-center"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
                  Ceylon Innovation’s
                  <span className="block text-sky-700">Charity</span>
                </h1>

                <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
                  We believe that good business also means leaving the world a
                  better place than you found it. With our charity service
                  program, we give back to the communities around us and uplift
                  their living conditions in the way we can.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="container-width px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  St. Mary's College,
                  <br className="hidden sm:block" /> Chilaw
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-prose">
                  St. Mary's Boys' National College is a premier school in
                  Chilaw. As a community service by Ceylon Innovation, Star IMS
                  software has been provided to the school free of charge.
                  Today, the school as well as the students and teachers are
                  getting great service from it.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative flex justify-center"
              >
                {/* Decorative dots */}
                <svg
                  aria-hidden="true"
                  className="hidden sm:block absolute -left-6 -top-6 w-28 h-28 text-slate-300"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="ciDots"
                      x="0"
                      y="0"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle
                        cx="1.5"
                        cy="1.5"
                        r="1.5"
                        className="fill-current"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#ciDots)" />
                </svg>
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-[200px] rounded-tl-[120px] border-4 border-white shadow">
                  <img
                    src={smc}
                    alt="St. Mary's College"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="container-width px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="order-last md:order-first flex justify-center"
              >
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-[200px] rounded-tl-[120px] border-4 border-white shadow">
                  <img
                    src={churchImg}
                    alt="Our Lady of Good Voyage Church - Duwa"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Our Lady of Good
                  <br className="hidden sm:block" /> Voyage Church - Duwa
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-prose">
                  We have provided management systems to Duwa & Negombo Pitipana
                  churches as a charity work by Ceylon Innovation (PVT) LTD.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
