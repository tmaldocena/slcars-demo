import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Shield, Heart, Users, Zap } from 'lucide-react'
import { whyUs } from '../data/cars'

const values = [
  { icon: Shield, title: 'Transparencia', desc: 'Cada auto tiene un informe de 150 puntos. Mostramos todo, sin sorpresas.' },
  { icon: Heart, title: 'Compromiso', desc: 'Estamos en San Luis desde 2013. Conocemos el mercado y a nuestra gente.' },
  { icon: Users, title: 'Atención personalizada', desc: 'Un asesor dedicado de principio a fin. Sin call centers.' },
  { icon: Zap, title: 'Agilidad', desc: 'Aprobación en 24hs y entrega coordinada en todo el país.' },
]

const team = [
  { name: 'Martín Rodríguez', role: 'Director General', initials: 'MR' },
  { name: 'Lucía Fernández', role: 'Gerente Comercial', initials: 'LF' },
  { name: 'Gonzalo Pérez', role: 'Asesor de ventas', initials: 'GP' },
  { name: 'Carla Méndez', role: 'Posventa y entregas', initials: 'CM' },
]

export function AboutPage() {
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  return (
    <>
      <Helmet>
        <title>Nosotros — SL Cars | El auto que soñás</title>
        <meta name="description" content="Conocé SL Cars, concesionaria en San Luis con más de 12 años de trayectoria. Transparencia, compromiso y atención personalizada." />
      </Helmet>
      <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0a0f]" />
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-24 pb-16 md:pb-20">
          <div className="max-w-[1536px] mx-auto">
            <motion.p
              className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3 font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nosotros
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Más de una década <span className="text-white/50">haciendo lo correcto</span>
            </motion.h1>
            <motion.p
              className="text-white/50 text-sm md:text-base font-normal leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              SL Cars nació en San Luis con una idea simple: vender autos de forma honesta, transparente y con servicio de verdad.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[1536px] mx-auto">
          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-5">
                Nuestra <span className="text-white/50">historia</span>
              </h2>
              <div className="flex flex-col gap-4 text-white/50 text-sm sm:text-base font-normal leading-relaxed">
                <p>
                  SL Cars abrió sus puertas en 2013 en San Luis capital. Lo que empezó como un pequeño
                  local con 5 autos se convirtió en una de las concesionarias más confiables de la provincia.
                </p>
                <p>
                  Hoy contamos con más de 500 vehículos vendidos al año, un equipo de profesionales
                  dedicados y clientes en todo el país. Pero seguimos operando como el primer día:
                  con honestidad, sin vueltas y poniendo al cliente primero.
                </p>
                <p>
                  Todos nuestros autos pasan por una revisión técnica de 150 puntos. No vendemos
                  problemas, vendemos soluciones.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h3 className="text-white/60 text-xs uppercase tracking-[0.25em] mb-5 font-normal">Nuestros valores</h3>
              <div className="flex flex-col gap-5">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                      <v.icon className="w-4 h-4 text-white/60" />
                    </div>
                    <div>
                      <h4 className="text-white/80 text-sm font-normal mb-0.5">{v.title}</h4>
                      <p className="text-white/40 text-xs sm:text-sm font-normal leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
            {whyUs.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass p-5 md:p-6 rounded-2xl flex flex-col gap-1"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
              >
                <span className="text-3xl md:text-4xl font-normal text-white tracking-tight">{stat.number}</span>
                <span className="text-white/80 text-sm font-normal">{stat.label}</span>
                <span className="text-white/35 text-xs sm:text-sm font-normal">{stat.sub}</span>
              </motion.div>
            ))}
          </div>

          {/* Team */}
          <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-8">
            Conocé <span className="text-white/50">nuestro equipo</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="glass rounded-2xl p-5 md:p-6 flex flex-col items-center text-center gap-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-lg font-normal">{member.initials}</span>
                </div>
                <div>
                  <h3 className="text-white/80 text-sm font-normal">{member.name}</h3>
                  <p className="text-white/40 text-xs sm:text-sm font-normal mt-0.5">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
