import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import {
  ArrowLeft, Fuel, Gauge, Settings, MapPin, Calendar,
  CheckCircle, MessageCircle, ArrowUpRight,
} from 'lucide-react'
import { allCars } from '../data/cars'
import { CarGallery } from '../components/CarGallery'

export function CarDetailPage() {
  const { id } = useParams()
  const car = allCars.find((c) => c.id === Number(id))

  if (!car) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
        <Helmet>
          <title>Auto no encontrado — SL Cars</title>
        </Helmet>
        <div className="text-center">
          <p className="text-white/40 text-lg font-normal mb-4">Auto no encontrado</p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-normal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>
        </div>
      </div>
    )
  }

  const specs = [
    { icon: Calendar, label: 'Año', value: car.year },
    { icon: Gauge, label: 'Kilómetros', value: car.km },
    { icon: Fuel, label: 'Combustible', value: car.fuel },
    { icon: Settings, label: 'Transmisión', value: car.transmission },
    { icon: MapPin, label: 'Ubicación', value: car.location || 'San Luis' },
  ]

  return (
    <>
      <Helmet>
        <title>{`${car.brand} ${car.model} (${car.year}) — SL Cars`}</title>
        <meta name="description" content={`${car.brand} ${car.model} ${car.year} · ${car.price} · ${car.km} · ${car.fuel} · ${car.transmission}. Consultá por este vehículo en SL Cars, San Luis.`} />
      </Helmet>
      <div className="bg-[#0a0a0f] min-h-screen">
      {/* Back link */}
      <div className="px-4 md:px-8 lg:px-12 pt-6">
        <div className="max-w-[1536px] mx-auto">
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm font-normal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al catálogo
          </Link>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-[1536px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <CarGallery images={car.images} alt={`${car.brand} ${car.model}`} />
            </motion.div>

            {/* Detail */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Header */}
              <div>
                <p className="text-white/50 text-xs uppercase tracking-[0.25em] mb-2 font-normal">
                  {car.brand}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight">
                  {car.model}
                </h1>
                <p className="text-white/40 text-sm font-normal mt-1.5">{car.color} · {car.year}</p>
              </div>

              {/* Price */}
              <div className="glass rounded-2xl p-5 flex items-center justify-between">
                <span className="text-white/50 text-sm font-normal">Precio</span>
                <span className="text-2xl md:text-3xl font-normal text-white tracking-tight">{car.price}</span>
              </div>

              {/* Specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="glass rounded-xl p-4 flex flex-col gap-2">
                    <Icon className="w-4 h-4 text-white/40" />
                    <span className="text-white/40 text-[11px] sm:text-xs uppercase tracking-wider font-normal">{label}</span>
                    <span className="text-white/80 text-sm font-normal">{value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              {car.description && (
                <div>
                  <h3 className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3 font-normal">Descripción</h3>
                  <p className="text-white/60 text-sm font-normal leading-relaxed">{car.description}</p>
                </div>
              )}

              {/* Features */}
              {car.features && car.features.length > 0 && (
                <div>
                  <h3 className="text-white/60 text-xs uppercase tracking-[0.25em] mb-3 font-normal">Equipamiento</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {car.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-white/30 shrink-0" />
                        <span className="text-white/60 text-sm font-normal">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="glass rounded-2xl p-6 flex flex-col gap-4 mt-4">
                <p className="text-white/90 font-normal text-lg">¿Te interesa este auto?</p>
                <p className="text-white/45 text-sm font-normal">Consultá ahora por WhatsApp o dejános tu consulta.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    disabled
                    title="WhatsApp desactivado en esta demo"
                    className="flex items-center justify-center gap-2 flex-1 py-3.5 px-5 rounded-xl bg-[#25D366]/50 text-white/60 text-sm font-normal cursor-not-allowed"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp (demo)
                  </button>
                  <motion.a
                    href="/#contacto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 flex-1 py-3.5 px-5 rounded-xl bg-white/15 hover:bg-white/22 border border-white/15 text-white text-sm font-normal transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Enviar consulta
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
