import { Link } from 'react-router-dom'
import { Fuel, Gauge, Settings, ArrowUpRight } from 'lucide-react'
import { type Car } from '../data/cars'

const tagColors: Record<string, string> = {
  'Destacado': 'bg-[rgba(30,50,90,0.85)] text-white',
  'Oportunidad': 'bg-amber-500/90 text-white',
  'Nuevo ingreso': 'bg-emerald-500/90 text-white',
}

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      to={`/catalogo/${car.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {car.tag && (
          <span className={`absolute top-3 left-3 text-[10px] font-normal uppercase tracking-wider px-2.5 py-1 rounded-full ${tagColors[car.tag]}`}>
            {car.tag}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 md:p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider font-normal mb-0.5">
              {car.brand}
            </p>
            <h3 className="text-white/90 text-base md:text-lg font-normal leading-tight">
              {car.model}
            </h3>
            <p className="text-white/40 text-xs font-normal mt-0.5">{car.year} · {car.color}</p>
          </div>
          <p className="text-white font-normal text-base md:text-lg shrink-0">{car.price}</p>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-white/10">
          {[
            { icon: Gauge, val: car.km },
            { icon: Fuel, val: car.fuel },
            { icon: Settings, val: car.transmission },
          ].map(({ icon: Icon, val }) => (
            <span key={val} className="flex items-center gap-1 text-white/50 text-xs font-normal">
              <Icon className="w-3 h-3" />
              {val}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
