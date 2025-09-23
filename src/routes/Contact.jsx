import { useRef, useState } from 'react'
import Navbar from '../components/ProNav.jsx'
import Footer from '../components/Footer.jsx'
import hero from '../assets/ceylon-inovations.png'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

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
        'service_orkiim9',       // your service ID
        'template_vf7fkmq',      // your template ID
        {
          title: form.title,
          name: form.name,
          email: form.email,
          contactNumber: form.contactNumber,
          businessType: form.businessType,
          location: form.location,
          message: form.message,
        },
        'G4uH0YYjdNW_C6WoI'      // your public key
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

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] w-full overflow-hidden">
            <img src={hero} alt="Contact hero" className="h-full w-full object-cover" />
            <div className="absolute inset-0">
              <div className="container-width h-full px-4 flex items-start sm:items-center">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-8 sm:mt-0 text-white drop-shadow-md text-2xl md:text-5xl font-bold"
                >
                  Contact Us
                </motion.h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className=" relative md:right-70 container-width px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="-mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 max-w-2xl bg-white/45 backdrop-blur rounded-2xl shadow border border-slate-200 p-5 sm:p-7 mx-auto"
          >
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center text-slate-900">
              Let's Build Something Great Together
            </h3>
            <p className="mt-3 text-slate-700 text-sm sm:text-base text-justify">
              At <a href="#" className="text-sky-700 font-medium underline">Ceylon Innovation</a>, we are passionate about creating powerful, user-friendly,
              and scalable web solutions that help businesses grow. Whether you need a brand-new website, an
              e-commerce platform, a custom web application, or ongoing support and upgrades, our expert team is
              ready to assist.
            </p>
            <p className="mt-4 text-slate-700 text-sm sm:text-base text-justify">
              We believe that every successful project begins with a meaningful conversation. Whether you have a new idea, a challenge you’re trying to solve, or a goal you want to achieve, we’re here to listen. Our team takes the time to truly understand your vision, your business, and the unique opportunities in front of you. From there, we work together to design and deliver a digital solution that not only meets your needs but also sets the foundation for future growth.

You don’t have to have all the answers—that’s where we come in. Share your thoughts, questions, or even early concepts, and we’ll help shape them into something impactful. Simply fill out the form, send us an email, or give us a call. Let’s take the first step toward building your digital future together—one conversation at a time.
            </p>
          </motion.div>
        </section>

        {/* Map + Form */}
        <section className="container-width px-5 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm"
            >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0594976108596!2d79.84688787261408!3d7.2340543927721255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2cb6c28738405%3A0x9929b748309020af!2sCeylon%20Innovation%20Services%20(PVT)%20LTD!5e0!3m2!1sen!2slk!4v1758439742175!5m2!1sen!2slk"
               width="100%" 
               height="420" 
               style={{ border: 0 }}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           
            </motion.div>

            {/* Form */}
            <motion.form
              ref={formRef}
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-7"
            >
              <h3 className="text-xl font-bold text-slate-900">Quotation Request Form</h3>
              <div className="mt-5 grid grid-cols-1 gap-4">
                <div>
                  <input
                    name="title"
                    placeholder="Subject"
                    value={form.title}
                    onChange={onChange}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <input
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={form.contactNumber}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <input
                    name="businessType"
                    placeholder="Business Type"
                    value={form.businessType}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <input
                    name="location"
                    placeholder="Location"
                    value={form.location}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    required
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                {status === 'success' && (
                  <p className="text-green-600">Thanks! We'll get back to you soon.</p>
                )}
                {error && <p className="text-red-600">{error}</p>}
                <div className="flex justify-end">
                  <button
                    disabled={status === 'submitting'}
                    className="px-5 py-2.5 rounded-md bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit'}
                  </button>
                </div>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
