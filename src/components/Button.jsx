import React from 'react'
import { motion } from "framer-motion"

function Button({text, color, isView}) {
  return (
    <motion.button 
        // whileHover={{scale:1.1}}
        initial={{scale:0, opacity:0}}
        animate={{scale:isView?1:0, opacity:isView?1:0}}
        transition={{delay:0.5, duration:0.5}}
        className={`px-10 py-2 bg-transparent text-${color} border border-${color} rounded my-5`}
    >
        {text}
    </motion.button>
  )
}

export default Button