import React from 'react'
import { motion } from 'framer-motion'
import bgImage from '../assets/background-10.png';
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-32">

      {/* BACKGROUND IMAGE WITH SMOOTH ZOOM */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.15 }}
        viewport={{ once: true }}
        transition={{
          duration: 16,
          ease: 'easeOut',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GRADIENT OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* FLOATING BLUR ORBS */}
      <motion.div
        className="absolute w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl top-20 left-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl bottom-20 right-10"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Data{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            Redefined
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl text-gray-300"
        >
          Your insight, our expertise.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed"
        >
          We help answer your most pressing research questions. Whether you need
          full-service support or sample-only solutions, we provide the insights
          to make actionable business decisions.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold shadow-xl hover:scale-105 transition">
            Explore Solutions
          </button>
          <button className="px-8 py-4 rounded-full font-bold border border-white/20 text-cyan-400 hover:bg-white/10 transition">
            Talk to Experts
          </button>
        </motion.div>
      </div>



     
    </section>
  )
}

export default Hero
