import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { motion } from 'framer-motion'
import hero from '../assets/sky-logo.png'
import schoolImg from '../assets/school.png'
import churchImg from '../assets/smc.png'

export default function Charity() {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero + Title */}
        <section className="relative">
          <div className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] w-full overflow-hidden">
            <img src={hero} alt="Ceylon Innovation Charity" className="h-full w-full object-cover" />
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
                Ceylon Innovation’s<span className="block text-sky-700">Charity</span></h1>

              <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-sm sm:text-base">
                We believe that good business also means leaving the world a better place than you found it. With our
                charity service program, we give back to the communities around us and uplift their living conditions
                in the way we can.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="container-width px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">St. Mary's College,
                <br className="hidden sm:block"/> Chilaw</h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-prose">
                St. Mary's Boys' National College is a premier school in Chilaw. As a community service by
                Ceylon Innovation, Star IMS software has been provided to the school free of charge. Today, the
                school as well as the students and teachers are getting great service from it.
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
                  <pattern id="ciDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1.5" cy="1.5" r="1.5" className="fill-current" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#ciDots)" />
              </svg>
              <div className="w-full max-w-md aspect-square overflow-hidden rounded-[200px] rounded-tl-[120px] border-4 border-white shadow">
                <img
                  src={schoolImg}
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
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Our Lady of Good
                <br className="hidden sm:block"/> Voyage Church - Duwa</h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-prose">
                We have provided management systems to Duwa & Negombo Pitipana churches as a charity work by Ceylon
                Innovation (PVT) LTD.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


