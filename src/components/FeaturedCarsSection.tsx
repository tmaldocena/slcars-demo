import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredCars } from '../data/cars'
import { CarCard } from './CarCard'

export function FeaturedCarsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="catalogo" className="bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20 md:py-28">
      <div className="max-w-[1536px] mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div ref={ref}>
            <motion.p
              className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3 font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Vehículos disponibles
            </motion.p>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Autos <span className="text-white/50">destacados</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/catalogo"
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-normal transition-colors pb-1 border-b border-white/20 hover:border-white/50 self-start md:self-auto"
            >
              Ver catálogo completo
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredCars.map((car, i) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
