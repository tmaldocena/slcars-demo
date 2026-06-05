import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Catálogo', path: '/catalogo' },
  { label: 'Financiación', path: '/financiacion' },
  { label: 'Nosotros', path: '/nosotros' },
]

export function Navbar({ variant = 'hero' }: { variant?: 'hero' | 'page' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  return (
    <nav
      className={`flex items-center justify-between py-6 px-6 md:px-10 w-full z-20 ${
        variant === 'page'
          ? 'relative bg-[#0a0a0f] border-b border-white/5'
          : 'relative'
      }`}
    >
      <div className="flex-1">
        <Link to="/" className="font-normal tracking-tighter text-xl text-white/90 md:text-sm md:tracking-[0.2em] md:uppercase md:text-white/50">
          <span className="md:hidden">SL Cars</span>
          <span className="hidden md:inline">SL Cars</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 text-white/80 font-normal text-sm">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.path}
              className={`cursor-pointer hover:text-white transition-colors ${
                isActive(link.path) ? 'text-white' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right CTA */}
      <div className="flex-1 flex justify-end items-center gap-3">
        <motion.a
          href={pathname === '/' ? '#contacto' : '/#contacto'}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-white/15 backdrop-blur-md text-white rounded-full pl-2 pr-4 md:pr-5 py-1.5 md:py-2 gap-2 hover:bg-white/25 transition-colors border border-white/20 cursor-pointer"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
          </div>
          <span className="text-xs md:text-sm font-normal">Consultar ahora</span>
        </motion.a>

        <button
          className="md:hidden text-white/80 hover:text-white p-3"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 glass-light rounded-2xl mx-4 mt-1 py-4 px-6 flex flex-col gap-4 z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-[rgba(30,50,90,0.85)] font-normal text-base py-3 border-b border-black/5 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
