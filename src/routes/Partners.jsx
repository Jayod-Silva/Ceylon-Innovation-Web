import Navbar from "../components/ProNav.jsx";
import Footer from "../components/Footer.jsx";
import hero from "../assets/sky-logo.svg";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { useEffect, useRef, useState } from "react";

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

export default function Partners() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    businessAddress: "",
    country: "",
    contactPerson: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const formRef = useRef(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      await emailjs.send(
        "service_orkiim9", // your service ID
        "template_2o8rgf5", // you'll need to create a new template for partners
        {
          firstName: form.firstName,
          lastName: form.lastName,
          businessName: form.businessName,
          businessAddress: form.businessAddress,
          country: form.country,
          contactPerson: form.contactPerson,
          email: form.email,
          phoneNumber: form.phoneNumber,
          subject: form.subject,
          message: form.message,
        },
        "G4uH0YYjdNW_C6WoI" // your public key
      );
      setStatus("success");
      setForm({
        firstName: "",
        lastName: "",
        businessName: "",
        businessAddress: "",
        country: "",
        contactPerson: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-full flex flex-col bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden ">
      <TechParticles />
      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative">
            <div className="h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] w-full overflow-hidden">
              <img
                src={hero}
                alt="Partners hero"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0">
                <div className="container-width h-full px-4 flex items-start sm:items-center">
                  <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-25 text-white drop-shadow-md text-3xl md:text-4xl  font-bold"
                  >
                    Become a Partner
                  </motion.h1>
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="container-width px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="-mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 max-w-4xl bg-white/95 backdrop-blur rounded-2xl shadow border border-slate-200 p-5 sm:p-7 mx-auto"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-900">
                WHY BECOME A CEYLON INNOVATION RESELLER?
              </h2>
              <p className="mt-4 text-slate-700 text-sm sm:text-base text-justify">
                At CEYLON INNOVATION we are energetic about what we do! What
                separates us from the opposition is the nature of our items, the
                help we give and the experience we have inside the software
                business. Turning into a CEYLON INNOVATION affiliate implies we
                can furnish you with a huge scope of items and administrations.
                We have numerous local and independent businesses who sell,
                install and support our products all over the globe.
              </p>
            </motion.div>
          </section>

          {/* Partner Form */}
          <section className="container-width px-4 sm:px-6 lg:px-8 py-10">
            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white opacity-100 rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7 max-w-4xl mx-auto"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Partner Inquiry Form
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* First Column */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      value={form.firstName}
                      onChange={onChange}
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      name="businessName"
                      value={form.businessName}
                      onChange={onChange}
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Country *
                    </label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={onChange}
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                {/* Second Column */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={form.lastName}
                      onChange={onChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Business Address
                    </label>
                    <input
                      name="businessAddress"
                      value={form.businessAddress}
                      onChange={onChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Contact Person
                    </label>
                    <input
                      name="contactPerson"
                      value={form.contactPerson}
                      onChange={onChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={onChange}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Message field */}
              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  required
                  className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {status === "success" && (
                <p className="mt-4 text-green-600">
                  Thanks for your interest! We'll get back to you soon.
                </p>
              )}
              {error && <p className="mt-4 text-red-600">{error}</p>}

              <div className="mt-6 flex justify-end">
                <button
                  disabled={status === "submitting"}
                  className="px-5 py-2.5 rounded-md bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50"
                >
                  {status === "submitting" ? "Submitting…" : "Send Message"}
                </button>
              </div>
            </motion.form>
          </section>

          {/* Partner Badge Section */}
          <section className="bg-slate-100 py-10">
            <div className="container-width px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-sm p-6 text-center max-w-3xl mx-auto"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  SLTMobitel SME & LME Island Wide Partner
                </h3>
                <div className="h-px bg-slate-200 my-4"></div>
                <p className="text-sm text-slate-600">
                  Our partners benefit from our extensive network and support
                  system. Join us today to expand your business opportunities.
                </p>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
