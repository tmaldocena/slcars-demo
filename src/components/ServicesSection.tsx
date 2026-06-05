import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Shield, CreditCard, RotateCcw, Truck } from 'lucide-react'
import { services } from '../data/cars'

const iconMap = { Shield, CreditCard, RotateCcw, Truck } as Record<string, React.FC<{ className?: string }>>

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" className="bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20 md:py-28">
      <div className="max-w-[1536px] mx-auto">

        {/* Header */}
        <div ref={ref} className="max-w-2xl mb-12 md:mb-16">
          <motion.p
            className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3 font-normal"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Lo que hacemos
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Servicios <span className="text-white/50">que hacen</span><br />
            la diferencia.
          </motion.h2>
          <motion.p
            className="text-white/50 text-sm md:text-base font-normal leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Desde la búsqueda hasta la entrega, te acompañamos en cada paso.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon]
            return (
              <motion.div
                key={svc.title}
                className="glass p-6 md:p-7 rounded-2xl flex flex-col gap-5 hover:bg-white/12 transition-colors duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon container */}
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Icon className="w-5 h-5 text-white/70" />
                </div>

                {/* Number */}
                <span className="text-white/10 font-normal text-5xl leading-none select-none">
                  0{i + 1}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-white/90 font-normal text-base md:text-lg leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-white/45 text-sm font-normal leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
