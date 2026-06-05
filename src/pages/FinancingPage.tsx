import { useState } from 'react'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import {
  Shield, CreditCard, CheckCircle, MessageCircle, ArrowUpRight, ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/cars'

const iconMap = { Shield, CreditCard, RotateCcw: ArrowUpRight, Truck: ArrowUpRight } as Record<string, React.FC<{ className?: string }>>

const plans = [
  {
    title: 'Plan propio SL Cars',
    desc: 'Financiación directa sin banco. Aprobación en 24 horas. Cuotas fijas en pesos o dólares.',
    features: ['Sin intervención bancaria', 'Aprobación en 24hs', 'Cuota fija en ARS o USD', 'Hasta 60 cuotas'],
  },
  {
    title: 'Plan con banco',
    desc: 'Accedé a las mejores tasas del mercado a través de nuestras alianzas bancarias.',
    features: ['Tasas preferenciales', 'Hasta 72 cuotas', 'Mínimo 20% de entrada', 'Aprobación en 48hs'],
  },
  {
    title: 'Tomamos tu usado',
    desc: 'Valuamos tu auto al instante y lo tomamos como parte de pago. Proceso 100% transparente.',
    features: ['Valuación online gratuita', 'Pago en 24hs', 'Sin trámites', 'Mejoramos cualquier oferta'],
  },
]

export function FinancingPage() {
  const [price, setPrice] = useState('25000')
  const [downPayment, setDownPayment] = useState('30')
  const [term, setTerm] = useState('36')
  const [rate, setRate] = useState('4.5')

  const carPrice = parseFloat(price) || 0
  const downPercent = parseFloat(downPayment) || 0
  const months = parseFloat(term) || 1
  const monthlyRate = (parseFloat(rate) || 0) / 100

  const downAmount = carPrice * (downPercent / 100)
  const financeAmount = carPrice - downAmount
  const monthlyPayment = financeAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

  return (
    <>
      <Helmet>
        <title>Financiación — SL Cars | El auto que soñás</title>
        <meta name="description" content="Financiación propia sin banco, aprobación en 24hs. Simulá tu cuota y encontrá el plan ideal para tu próximo auto en San Luis." />
      </Helmet>
      <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0a0f]" />
        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80"
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
              Financiación
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              El mejor plan <span className="text-white/50">para tu próximo auto</span>
            </motion.h1>
            <motion.p
              className="text-white/50 text-sm md:text-base font-normal leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Aprobación rápida, cuotas fijas y planes a tu medida. Sin vueltas.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[1536px] mx-auto">
          {/* Simulator */}
          <motion.div
            className="glass rounded-2xl p-6 md:p-10 mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-8">
              Simulá <span className="text-white/50">tu cuota</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Inputs */}
              <div className="flex flex-col gap-6">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-normal mb-2 block">
                    Precio del auto (USD)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="1000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full accent-white/60"
                  />
                  <span className="text-white/80 text-sm font-normal mt-1 block">USD {carPrice.toLocaleString()}</span>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-normal mb-2 block">
                    Entrada ({downPercent}%)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    className="w-full accent-white/60"
                  />
                  <span className="text-white/80 text-sm font-normal mt-1 block">USD {downAmount.toLocaleString()}</span>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-normal mb-2 block">
                    Plazo ({months} meses)
                  </label>
                  <input
                    type="range"
                    min="12"
                    max="72"
                    step="6"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    className="w-full accent-white/60"
                  />
                  <div className="flex justify-between text-white/30 text-xs font-normal mt-1">
                    <span>12 meses</span>
                    <span>72 meses</span>
                  </div>
                </div>

                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider font-normal mb-2 block">
                    Tasa mensual ({rate}%)
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full accent-white/60"
                  />
                  <div className="flex justify-between text-white/30 text-xs font-normal mt-1">
                    <span>2%</span>
                    <span>8%</span>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="glass-light rounded-2xl p-8 w-full max-w-sm text-center">
                  <p className="text-[rgba(30,50,90,0.5)] text-xs uppercase tracking-wider font-normal mb-2">
                    Cuota mensual estimada
                  </p>
                  <p className="text-3xl md:text-4xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight">
                    USD {isFinite(monthlyPayment) ? Math.round(monthlyPayment).toLocaleString() : '—'}
                  </p>
                  <p className="text-[rgba(30,50,90,0.4)] text-sm font-normal mt-3">
                    Entrada: USD {Math.round(downAmount).toLocaleString()} · {months} cuotas
                  </p>
                </div>
                <p className="text-white/30 text-xs font-normal text-center max-w-xs">
                  * Simulación aproximada. La tasa final depende de cada caso.
                </p>
                <button
                  disabled
                  title="WhatsApp desactivado en esta demo"
                  className="inline-flex items-center gap-2 bg-[#25D366]/50 text-white/60 rounded-xl px-6 py-3 text-sm font-normal cursor-not-allowed"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp (demo)
                </button>
              </div>
            </div>
          </motion.div>

          {/* Plans */}
          <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-8">
            Nuestros <span className="text-white/50">planes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                className="glass rounded-2xl p-6 md:p-7 flex flex-col gap-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-white/90 font-normal text-lg leading-snug">{plan.title}</h3>
                <p className="text-white/45 text-sm font-normal leading-relaxed">{plan.desc}</p>
                <div className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-white/30 shrink-0" />
                      <span className="text-white/60 text-sm font-normal">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Steps */}
          <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-8">
            Cómo <span className="text-white/50">funciona</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            {[
              { step: '01', title: 'Elegí tu auto', desc: 'Navegá nuestro catálogo y encontrá el vehículo que más te guste.' },
              { step: '02', title: 'Simulá tu plan', desc: 'Usá nuestro simulador para ver cuánto podés pagar por mes.' },
              { step: '03', title: 'Consultá sin compromiso', desc: 'Un asesor te contacta en menos de 1 hora para coordinar.' },
              { step: '04', title: 'Firmá y viajá', desc: 'Aprobación en 24hs. Una vez lista la documentación, te entregamos el auto.' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                className="glass rounded-2xl p-6 flex flex-col gap-3 flex-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="text-white/15 text-4xl font-normal">{s.step}</span>
                <h3 className="text-white/90 font-normal text-base">{s.title}</h3>
                <p className="text-white/45 text-sm font-normal leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
