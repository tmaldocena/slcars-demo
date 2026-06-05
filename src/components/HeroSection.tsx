import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Navbar } from './Navbar'
import { HeroBadge } from './HeroBadge'
import { HeroStatsCard } from './HeroStatsCard'
import { HeroCorner } from './HeroCorner'
import { Search, ChevronDown } from 'lucide-react'

const brands = ['Todos', 'BMW', 'Mercedes', 'Toyota', 'Audi', 'VW', 'Ford']

export function HeroSection() {
  const [selectedBrand, setSelectedBrand] = useState('Todos')
  const navigate = useNavigate()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (selectedBrand !== 'Todos') params.set('brand', selectedBrand)
    navigate(`/catalogo?${params.toString()}`)
  }

  return (
    <>
      <Helmet>
        <title>SL Cars — El auto que soñás, al alcance que merecés</title>
        <meta name="description" content="Concesionaria en San Luis con más de 500 vehículos verificados. Financiación propia, atención personalizada y entrega en todo el país." />
      </Helmet>
      <div className="w-full h-dvh h-screen flex items-center justify-center p-3 md:p-5 bg-[#0a0a0f]">
        <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-none flex flex-col items-center bg-white/10 group">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-[65%] lg:object-center z-0"
          >
            <source
              src="https://www.pexels.com/es-es/download/video/2053100.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
          <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/30 to-transparent" />

          <div className="relative z-10 w-full h-full flex flex-col items-center">

            <Navbar variant="hero" />

            <div className="w-full flex flex-col items-center pt-6 md:pt-10 px-6 text-center max-w-4xl mx-auto">
              <HeroBadge />

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-white mb-3 tracking-tight leading-[1.05]"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                El auto que soñás,<br />
                <span className="text-white/70">al alcance que merecés.</span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-xl font-normal mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Más de 500 vehículos verificados, financiación propia y atención personalizada.
                Encontrá tu próximo auto hoy.
              </motion.p>

              <motion.div
                className="w-full max-w-2xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55 }}
              >
                <div className="glass-light rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
                  <div className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-white/40 cursor-pointer">
                    <span className="text-[rgba(30,50,90,0.5)] text-xs uppercase tracking-wider font-normal">Marca</span>
                    <select
                      value={selectedBrand}
                      onChange={(e) => setSelectedBrand(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-[rgba(30,50,90,0.9)] outline-none cursor-pointer font-normal appearance-none"
                    >
                      {brands.map(b => <option key={b}>{b}</option>)}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[rgba(30,50,90,0.4)]" />
                  </div>

                  <div className="flex items-center gap-2 flex-1 px-4 py-2.5 rounded-xl bg-white/40 cursor-pointer">
                    <span className="text-[rgba(30,50,90,0.5)] text-xs uppercase tracking-wider font-normal">Precio</span>
                    <select className="flex-1 bg-transparent text-sm text-[rgba(30,50,90,0.9)] outline-none cursor-pointer font-normal appearance-none">
                      <option>Cualquier precio</option>
                      <option>Hasta USD 15.000</option>
                      <option>USD 15.000 – 25.000</option>
                      <option>USD 25.000 – 40.000</option>
                      <option>Más de USD 40.000</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-[rgba(30,50,90,0.4)]" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSearch}
                    className="flex items-center justify-center gap-2 bg-[rgba(30,50,90,0.9)] hover:bg-[rgba(30,50,90,1)] text-white rounded-xl px-6 py-2.5 text-sm font-normal transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Buscar
                  </motion.button>
                </div>
              </motion.div>
            </div>

            <HeroStatsCard />
            <HeroCorner />
          </div>
        </section>
      </div>
    </>
  )
}
