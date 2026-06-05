import { useState, type FormEvent } from 'react'
import { motion } from 'motion/react'
import { MessageCircle, Phone, Mail, ArrowUpRight, MapPin, CheckCircle } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real app this would post to a backend
    console.log('Contact form submitted:', formData)
    setSent(true)
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contacto — SL Cars | El auto que soñás</title>
      </Helmet>
      <section id="contacto" className="bg-[#0a0a0f] px-4 md:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-[1536px] mx-auto">

          <div className="relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80"
              alt="SL Cars showroom"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(30,50,90,0.8)] to-black/60" />

            <div className="relative z-10 p-8 md:p-14 lg:p-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

              {/* Left */}
              <div className="flex-1">
                <motion.p
                  className="text-white/50 text-xs uppercase tracking-[0.25em] mb-4 font-normal"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  ¿Listo para encontrar tu auto?
                </motion.p>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal text-white leading-tight tracking-tight mb-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Hablemos hoy.<br />
                  <span className="text-white/55">Sin compromiso.</span>
                </motion.h2>
                <motion.p
                  className="text-white/55 text-sm md:text-base font-normal leading-relaxed max-w-md"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Nuestros asesores responden en menos de 1 hora. Contanos qué buscás
                  y te armamos las mejores opciones.
                </motion.p>

                <motion.div
                  className="flex flex-col gap-2 mt-7"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {[
                    { Icon: Phone, text: '+54 11 5987-6543' },
                    { Icon: Mail, text: 'hola@slcars.com.ar' },
                    { Icon: MapPin, text: 'Av. San Martín 1234, San Luis' },
                  ].map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-white/60" />
                      </div>
                      <span className="text-white/60 text-sm font-normal">{text}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right */}
              <motion.div
                className="w-full lg:w-auto lg:min-w-[340px] glass rounded-2xl p-6 md:p-8 flex flex-col gap-4"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-white/90 font-normal text-lg leading-snug">
                  ¿Encontraste un auto que te interesa?
                </p>
                <p className="text-white/45 text-sm font-normal">
                  Escribinos por WhatsApp y un asesor te contacta de inmediato.
                </p>

                <button
                  disabled
                  title="WhatsApp desactivado en esta demo"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl bg-[#25D366]/50 text-white/60 text-sm font-normal cursor-not-allowed"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp (demo)
                </button>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:border-white/25 transition-colors font-normal"
                  />
                  <input
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:border-white/25 transition-colors font-normal"
                  />
                  <textarea
                    placeholder="¿Qué auto buscás?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-white/8 border border-white/10 rounded-xl px-4 py-3 text-sm text-white/80 placeholder:text-white/30 outline-none focus:border-white/25 transition-colors font-normal resize-none"
                  />
                  {sent ? (
                    <div className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm font-normal">
                      <CheckCircle className="w-4 h-4" />
                      Consulta enviada. Te contactamos pronto.
                    </div>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-white/15 hover:bg-white/22 border border-white/15 text-white text-sm font-normal transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                      Enviar consulta
                    </motion.button>
                  )}
                </form>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/8">
            <span className="text-white/30 text-sm font-normal">© 2025 SL Cars. Todos los derechos reservados.</span>
            <span className="text-white/20 text-sm font-normal">Hecho con ✨ por <a href="https://maguitostudio.com.ar" target="_blank" rel="noopener noreferrer" className="text-white/30 text-sm font-normal hover:underline">Maguito Studio</a></span>
          </div>
        </div>
      </section>
    </>
  )
}
