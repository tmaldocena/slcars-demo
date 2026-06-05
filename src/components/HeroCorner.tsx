import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight } from 'lucide-react'

export function HeroCorner() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#0a0a0f] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6"
    >
      <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#0a0a0f" />
        </svg>
      </div>

      <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#0a0a0f" />
        </svg>
      </div>

      <div className="bg-white/10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/15 flex-shrink-0">
        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[15px] md:text-[18px] font-normal text-white/90">
          Financiación
        </span>
        <Link
          to="/financiacion"
          className="flex items-center gap-1 text-white/50 hover:text-white/75 transition-colors"
        >
          <span className="text-[11px] md:text-[13px] font-normal">Simular cuotas</span>
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  )
}
