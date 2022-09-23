import React from 'react'
import { motion } from 'framer-motion'

const MoneyBack = () => {
  return (
    <motion.div initial={{
      x: -100,
    }}
    transition={{
      duration: 1,
    }}
    whileInView={{ x: 0 }}
    viewport={{ once: true }} className='text-hostinger-Dark-blue flex py-16 flex-col items-center space-y-10'>
        <h3 className='text-2xl md:text-4xl font-extrabold'>30-Day Money-Back Guarantee</h3>
        <h4 className='text-xl font-bold text-hostinger-Dark-blue/70 max-w-2xl text-center'>We&apos;ll refund your payment if you&apos;re not 100% satisfied with Hostinger. No hassle, no risk.</h4>
        <button className="hover:shadow-lg active:scale-90 transition transform ease-out flex items-center text-xl space-x-3 text-white bg-hostinger-pink shadow-2xl hover:drop-shadow-[0px_0px_10px_#FF306F] px-14 py-4 rounded-xl duration-500 cursor-pointer">
          <span>Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </button>
    </motion.div>
  )
}

export default MoneyBack