'use client'
import { motion, AnimatePresence, easeIn } from "framer-motion"
import { easeOut } from "framer-motion/dom"

export const MyComponent = ({ isVisible }:{isVisible:boolean}) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
      transition={{duration:5,ease:easeIn}}
      className="bg-blue-500 h-56 w-20 rounded-lg"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      />
    )}
  </AnimatePresence>
)