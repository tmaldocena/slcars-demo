import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react'
import { allCars, brands, fuelTypes, transmissions } from '../data/cars'
import { CarCard } from '../components/CarCard'

function parsePrice(p: string) {
  return parseInt(p.replace(/[^0-9]/g, ''), 10)
}

export function CatalogPage() {
  return (
    <>
      <Helmet>
        <title>Catálogo — SL Cars | El auto que soñás</title>
        <meta name="description" content="Explorá nuestro catálogo completo de autos usados y nuevos en San Luis. Filtros por marca, precio, combustible y más." />
      </Helmet>
      <CatalogContent />
    </>
  )
}

function CatalogContent() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [searchText, setSearchText] = useState(searchParams.get('q') || '')
  const [brandFilter, setBrandFilter] = useState(searchParams.get('brand') || 'Todas')
  const [fuelFilter, setFuelFilter] = useState('Todos')
  const [transmissionFilter, setTransmissionFilter] = useState('Todas')
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = useMemo(() => {
    let result = [...allCars]

    if (searchText) {
      const q = searchText.toLowerCase()
      result = result.filter(
        (c) =>
          c.brand.toLowerCase().includes(q) ||
          c.model.toLowerCase().includes(q) ||
          c.color.toLowerCase().includes(q)
      )
    }

    if (brandFilter !== 'Todas') {
      result = result.filter((c) => c.brand === brandFilter)
    }

    if (fuelFilter !== 'Todos') {
      result = result.filter((c) => c.fuel.includes(fuelFilter))
    }

    if (transmissionFilter !== 'Todas') {
      result = result.filter((c) => c.transmission === transmissionFilter)
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
        break
      case 'price-desc':
        result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
        break
      case 'year-desc':
        result.sort((a, b) => b.year - a.year)
        break
      case 'year-asc':
        result.sort((a, b) => a.year - b.year)
        break
      case 'km-asc':
        result.sort((a, b) => parsePrice(a.km) - parsePrice(b.km))
        break
    }

    return result
  }, [searchText, brandFilter, fuelFilter, transmissionFilter, sortBy])

  return (
    <div className="bg-[#0a0a0f] min-h-screen">
      {/* Hero bar */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0a0a0f]" />
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 px-4 md:px-8 lg:px-12 pt-24 pb-16 md:pb-20">
          <div className="max-w-[1536px] mx-auto">
            <motion.p
              className="text-white/40 text-xs uppercase tracking-[0.25em] mb-3 font-normal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {filteredCars.length} vehículos disponibles
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Catálogo <span className="text-white/50">completo</span>
            </motion.h1>

            {/* Search + filter bar */}
            <motion.div
              className="glass rounded-2xl p-3 flex flex-col gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {/* Mobile: 2 rows of 2 | Desktop: single row */}
                <div className="flex flex-row gap-2 sm:contents">
                  <div className="flex items-center gap-2 flex-[2] px-4 py-3 sm:py-2.5 rounded-xl bg-white/8 border border-white/10">
                    <Search className="w-4 h-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Buscar por marca, modelo o color..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-white/80 outline-none font-normal placeholder:text-white/30"
                    />
                  </div>

                  <div className="flex items-center gap-2 flex-1 px-4 py-3 sm:py-2.5 rounded-xl bg-white/8 border border-white/10">
                    <span className="text-white/40 text-xs uppercase tracking-wider font-normal shrink-0">Marca</span>
                    <select
                      value={brandFilter}
                      onChange={(e) => setBrandFilter(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-white/80 outline-none cursor-pointer font-normal appearance-none"
                    >
                      {brands.map((b) => (
                        <option key={b} value={b} className="bg-[#0a0a0f]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-row gap-2 sm:contents">
                  <div className="relative flex-1 sm:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="h-full w-full px-4 py-3 sm:py-2.5 rounded-xl bg-white/8 border border-white/10 text-sm text-white/80 outline-none cursor-pointer font-normal appearance-none"
                    >
                      <option value="default" className="bg-[#0a0a0f]">Ordenar</option>
                      <option value="price-asc" className="bg-[#0a0a0f]">Menor precio</option>
                      <option value="price-desc" className="bg-[#0a0a0f]">Mayor precio</option>
                      <option value="year-desc" className="bg-[#0a0a0f]">Más nuevo</option>
                      <option value="year-asc" className="bg-[#0a0a0f]">Más viejo</option>
                      <option value="km-asc" className="bg-[#0a0a0f]">Menos km</option>
                    </select>
                    <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl text-sm font-normal transition-colors ${
                      showFilters
                        ? 'bg-white/15 text-white border border-white/20'
                        : 'bg-white/8 text-white/60 border border-white/10 hover:bg-white/12'
                    }`}
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filtros
                  </button>
                </div>
              </div>

              {/* Expanded filters */}
              {showFilters && (
                <motion.div
                  className="flex flex-wrap gap-3 pt-2 border-t border-white/10"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/10">
                    <span className="text-white/40 text-xs uppercase tracking-wider font-normal">Combustible</span>
                    <select
                      value={fuelFilter}
                      onChange={(e) => setFuelFilter(e.target.value)}
                      className="bg-transparent text-sm text-white/80 outline-none cursor-pointer font-normal appearance-none"
                    >
                      {fuelTypes.map((f) => (
                        <option key={f} value={f} className="bg-[#0a0a0f]">{f}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/10">
                    <span className="text-white/40 text-xs uppercase tracking-wider font-normal">Transmisión</span>
                    <select
                      value={transmissionFilter}
                      onChange={(e) => setTransmissionFilter(e.target.value)}
                      className="bg-transparent text-sm text-white/80 outline-none cursor-pointer font-normal appearance-none"
                    >
                      {transmissions.map((t) => (
                        <option key={t} value={t} className="bg-[#0a0a0f]">{t}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 md:px-8 lg:px-12 pb-20 md:pb-28">
        <div className="max-w-[1536px] mx-auto">
          {filteredCars.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 text-lg font-normal">No encontramos vehículos con esos filtros.</p>
              <p className="text-white/30 text-sm font-normal mt-2">Probá con otros criterios de búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
              {filteredCars.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
