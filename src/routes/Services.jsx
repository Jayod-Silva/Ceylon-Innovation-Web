import { useEffect, useState } from 'react'
import Navbar from '../components/ProNav.jsx'
import Footer from '../components/Footer.jsx'

export default function Services() {
  const [services, setServices] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE_URL + '/api/services')
      .then(r => r.ok ? r.json() : Promise.reject('Failed to load'))
      .then(setServices)
      .catch(() => setError('Unable to load services at the moment.'))
  }, [])

  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">Services</h1>
          {error && <p className="mt-4 text-red-400">{error}</p>}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.id || s.Name} className="rounded-lg border border-slate-800 p-6 bg-slate-900/50">
                <h3 className="text-xl font-semibold">{s.name || s.Name}</h3>
                <p className="mt-2 text-slate-400">{s.description || s.Description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}



