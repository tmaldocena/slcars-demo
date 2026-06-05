import { useState, useCallback, useEffect, useRef, type TouchEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react'

export function CarGallery({ images, alt }: { images: string[]; alt: string }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const touchStart = useRef(0)

  const next = useCallback(() => setCurrent((p) => (p + 1) % images.length), [images.length])
  const prev = useCallback(() => setCurrent((p) => (p - 1 + images.length) % images.length), [images.length])

  const handleTouchStart = (e: TouchEvent) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, next, prev])

  return (
    <>
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl group">
        <div
          className="aspect-[16/10] relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${alt} · Foto ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setLightbox(true)}
            />
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Counter + expand */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setLightbox(true)}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Expand className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/80 text-xs font-normal">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              i === current
                ? 'border-white/60 opacity-100'
                : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={img}
              alt={`${alt} · Miniatura ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(false)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-normal z-10">
              {current + 1} / {images.length}
            </div>

            {/* Lightbox arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Lightbox image */}
            <motion.img
              key={`lb-${current}`}
              src={images[current]}
              alt={`${alt} · Foto ${current + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
