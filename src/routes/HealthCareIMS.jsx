import { motion,useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import healthcareimshero from '../assets/healthcareimshero.png';
import healthcareimsdevices from '../assets/healthcareimsdevices.png';
import business from '../assets/business-transformation.png';
import windows from '../assets/windows-logo.png';


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
            delay: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function SkynetPro() {
  return (
    <div className="min-h-full flex flex-col bg-white px-4 sm:px-6 lg:px-16">
      {/* Floating Navbar */}
      <div className="absolute top-[-20px] md:top-[-20px] sm:top-[-15px] xs:top-[-10px] left-0 right-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  HEALTH<span className="text-blue-600">care</span> IMS
                </h1>

                <ScrollAnimation delay={0.2}>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                    Healthcare IMS is tailored for Hospitals, Health Centers, Medical Clinics, Pharmacies, and Laboratories of any scale. With Healthcare IMS all your data including patient details are stored and handled securely ensuring patients' privacy.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={0.3}>
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-2">Compatible With:</p>
                    <div className="flex items-center">
                      <img src={windows} alt="Windows" className="h-8 w-auto mr-4" />
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
                    src={healthcareimshero}
                    alt="SKYNET Pro Hero"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Features Grid */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Multiple Device Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={healthcareimsdevices}
                  alt="SKYNET Pro Devices"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>

              {/* Right - Features List */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ScrollAnimation delay={0.3}>
                  <div className="space-y-6">
                    {['Hospitals','Care Homes','Medical Practices'].map((feature, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              </motion.div>
            </div>
          </div>
        </section>

        {/* {/* Key Features Section - Updated layout */}
<section className="bg-white py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    {/* Top Row - 3 Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* User-Friendly */}
      <ScrollAnimation delay={0.1}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">User-Friendly</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            It is designed in such a way that it is easy to consume and understand the functions provided at a glance, as well as to learn very quickly. Everything can be operated from a keyboard as well as a touch.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Adjustable & Scalable */}
      <ScrollAnimation delay={0.2}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Adjustable & Scalable</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The ability to multitask has been developed. And if that isn’t enough, additional features can also be created to your bespoke requirements.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Smart Automation */}
      <ScrollAnimation delay={0.3}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Automation</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Healthcare data must be handled securely, enabling our system to perform tasks intelligently, reduce risks, and eliminate the hassle of manual management.
          </p>
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
          className="text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your business keeps running during internet or power failures sales, billing, tables, and kitchen orders continue smoothly, while all data, including the last transaction, stays securely stored.
          </p>
        </motion.div>
      </ScrollAnimation>

      {/* Security */}
      <ScrollAnimation delay={0.5}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Many businesses address external fraud, but internal threats often go unnoticed and harder to resolve. We help identify, prevent, and mitigate fraud, protecting your business from risks inside and out.
          </p>
        </motion.div>
      </ScrollAnimation>
    </div>
  </div>
</section>

        {/* Ready to Transform Your Business Section */}
        <section className="bg-white py-16 md:py-20 rounded-3xl relative overflow-hidden mb-16">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300/10 rounded-full blur-lg"></div>
          </div>

          <div className="relative z-10 px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-gray-800"
              >
                <ScrollAnimation delay={0.1}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Ready To Transform Your Business?
                  </h2>
                </ScrollAnimation>
                
                <ScrollAnimation delay={0.2}>
                  <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                    Let's Discuss Your Project Requirements And Create A Custom Solution That Perfectly Fits Your Business Needs.
                  </p>
                </ScrollAnimation>
                
                <ScrollAnimation delay={0.3}>
                  <motion.button 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Discuss
                  </motion.button>
                </ScrollAnimation>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <ScrollAnimation delay={0.4}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <motion.img
                      src={business}
                      alt="Business Transformation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </ScrollAnimation>

                {/* Decorative floating elements */}
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-500/30 rounded-full blur-sm"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}