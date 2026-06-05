import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { CheckCircle } from 'lucide-react'
import { whyUs } from '../data/cars'

const reasons = [
  'Revisión técnica de 150 puntos en cada vehículo',
  'Financiación sin banco, aprobación en 24 horas',
  'Documentación 100% en orden, sin sorpresas',
  'Asesor dedicado de lunes a sábado',
  'Garantía mecánica de 3 a 12 meses',
  'Tomamos tu usado como parte de pago',
]

export function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20 md:py-28">
      <div className="max-w-[1536px] mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-14 md:mb-20">
          <motion.p
            className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3 font-normal"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Por qué elegirnos
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-[56px] font-normal text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Más de 12 años <span className="text-white/50">construyendo</span><br />
            confianza real.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {whyUs.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass p-5 md:p-6 rounded-2xl flex flex-col gap-1"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-3xl md:text-4xl font-normal text-white tracking-tight">
                  {stat.number}
                </span>
                <span className="text-white/80 text-sm font-normal">{stat.label}</span>
                <span className="text-white/35 text-xs font-normal">{stat.sub}</span>
              </motion.div>
            ))}
          </div>

          {/* Right — reasons list */}
          <div className="flex flex-col gap-3">
            <motion.p
              className="text-white/50 text-sm font-normal leading-relaxed mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              En SL Cars no vendemos autos. Construimos relaciones a largo plazo con cada cliente.
              Esto es lo que nos diferencia:
            </motion.p>

            {reasons.map((reason, i) => (
              <motion.div
                key={reason}
                className="flex items-start gap-3 py-3 border-b border-white/8 last:border-0"
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <CheckCircle className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm font-normal leading-relaxed">{reason}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
