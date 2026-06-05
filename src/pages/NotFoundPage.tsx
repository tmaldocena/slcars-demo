import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada — SL Cars</title>
      </Helmet>
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <motion.p
          className="text-white/10 text-[120px] md:text-[180px] font-normal leading-none tracking-tighter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          404
        </motion.p>
        <motion.h1
          className="text-2xl md:text-3xl font-normal text-white tracking-tight mt-2 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Página no encontrada
        </motion.h1>
        <motion.p
          className="text-white/40 text-sm font-normal mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 glass text-white rounded-xl px-6 py-3 text-sm font-normal hover:bg-white/12 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  )
}
