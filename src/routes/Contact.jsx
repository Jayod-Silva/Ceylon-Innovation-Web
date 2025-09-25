import Navbar from '../components/ProNav.jsx'
import Footer from '../components/Footer.jsx'
import hero from '../assets/ceylon-inovations.png'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    title: '',
    name: '',
    email: '',
    businessType: '',
    contactNumber: '',
    location: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const formRef = useRef(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    try {
      await emailjs.send(
        'service_orkiim9',
        'template_vf7fkmq',
        {
          title: form.title,
          name: form.name,
          email: form.email,
          contactNumber: form.contactNumber,
          businessType: form.businessType,
          location: form.location,
          message: form.message,
        },
        'G4uH0YYjdNW_C6WoI'
      )
      setStatus('success')
      setForm({
        title: '',
        name: '',
        email: '',
        businessType: '',
        contactNumber: '',
        location: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <TechParticles />

      <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative h-64 sm:h-80 md:h-96">
          <div className="absolute inset-0">
            <img 
              src={hero} 
              alt="Contact hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative container-width h-full px-4 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl md:text-5xl font-bold text-center"
            >
              Contact Us
            </motion.h1>
          </div>
        </section>

        {/* Intro Section */}
        <section className="bg-white py-12">
          <div className="container-width px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Let's Build Something Great Together
              </h2>
              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  At Ceylon Innovation, we are passionate about creating powerful, user-friendly,
                  and scalable web solutions that help businesses grow. Whether you need a brand-new website, an
                  e-commerce platform, a custom web application, or ongoing support and upgrades, our expert team is
                  ready to assist.
                </p>
                <p>
                  We believe every project starts with a conversation. Share your ideas, challenges, or goals with us, 
                  and we'll work with you to craft the right digital solution. Fill out the form, send us an email, or 
                  give us a call and let's take the first step toward building your digital future.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map + Form Section - Responsive Layout */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout: Stacked (map above, form below) */}
            <div className="lg:hidden space-y-8">
              {/* Map Section for Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-64 rounded-xl overflow-hidden shadow-lg"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26627.342231717954!2d79.86017786324952!3d7.220515629601584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cb6c28738405%3A0x9929b748309020af!2sCeylon%20Innovation%20Services%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1758764578512!5m2!1sen!2slk"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title='Ceylon Innovation Location Map'
                ></iframe>
              </motion.div>

              {/* Form Section for Mobile */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-6"
              >
                <h3 className="text-xl font-bold text-center text-slate-900 mb-2">Quotation Request Form</h3>
                <p className="text-slate-600 text-sm mb-6 text-center">Fill out the form below and we'll get back to you soon</p>
                
                <form onSubmit={onSubmit} className="space-y-4">
                  <div>
                    <input
                      name="title"
                      placeholder="Subject"
                      value={form.title}
                      onChange={onChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={form.contactNumber}
                        onChange={onChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <input
                        name="businessType"
                        placeholder="Business Type"
                        value={form.businessType}
                        onChange={onChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <input
                      name="location"
                      placeholder="Location"
                      value={form.location}
                      onChange={onChange}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={form.message}
                      onChange={onChange}
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    />
                  </div>

                  {status === 'success' && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 text-sm">Thanks! We'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                    >
                      {status === 'submitting' ? 'Submitting…' : 'Submit'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Desktop Layout: Overlay (original layout) */}
            <div className="hidden lg:block relative">
              {/* Map Background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-x-0 top-0 h-full"
              >
                <div className="w-full h-full rounded-[20px] overflow-hidden shadow-lg border border-white/20 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26627.342231717954!2d79.86017786324952!3d7.220515629601584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cb6c28738405%3A0x9929b748309020af!2sCeylon%20Innovation%20Services%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1758764578512!5m2!1sen!2slk"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full absolute inset-0"
                    title='Ceylon Innovation Location Map'
                  ></iframe>
                </div>
              </motion.div>

              {/* Form Overlay */}
              <div className="relative z-10 lg:left-30">
                <div className="flex justify-end">
                  <motion.div
                    ref={formRef}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 p-6 sm:p-8"
                  >
                    <h3 className="text-xl font-bold text-center text-slate-900 mb-2">Quotation Request Form</h3>
                    <p className="text-slate-600 text-sm mb-6 text-center">Fill out the form below and we'll get back to you soon</p>
                    
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div>
                        <input
                          name="title"
                          placeholder="Subject"
                          value={form.title}
                          onChange={onChange}
                          required
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <input
                          name="name"
                          placeholder="Name"
                          value={form.name}
                          onChange={onChange}
                          required
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={onChange}
                          required
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <input
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={form.contactNumber}
                            onChange={onChange}
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <input
                            name="businessType"
                            placeholder="Business Type"
                            value={form.businessType}
                            onChange={onChange}
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <input
                          name="location"
                          placeholder="Location"
                          value={form.location}
                          onChange={onChange}
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows="4"
                          value={form.message}
                          onChange={onChange}
                          required
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-vertical"
                        />
                      </div>

                      {status === 'success' && (
                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-green-700 text-sm">Thanks! We'll get back to you soon.</p>
                        </div>
                      )}
                      
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-700 text-sm">{error}</p>
                        </div>
                      )}
                      
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'submitting'}
                          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                        >
                          {status === 'submitting' ? 'Submitting…' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </div>
  )
}