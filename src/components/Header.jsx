import React, { useState } from 'react'
import {motion} from "framer-motion"
import { Spiral as Hamburger } from "hamburger-react"

function Header() {
    const [ isOpen, setIsOpen ] = useState(false)

    console.log(isOpen)

  return (
    <header className='flex items-center justify-between py-5'>
        <h1>Organik-qow</h1>

        <nav 
            className={`absolute lg:static items-center justify-center top-0 right-0 left-0 bottom-0 
            h-full w-full lg:w-auto   bg-black/80 lg:bg-transparent transition-all
             duration-300 ${isOpen? "flex opacity-100" : "hidden opacity-0"} lg:block lg:opacity-100`}
        >
            <ul 
                className='flex flex-col lg:flex-row items-center gap-[50px] 
                '
            >
                <motion.li whileHover={{scale:1.1}}>
                    <a href="#about-us">About</a>
                </motion.li>
                <motion.li whileHover={{scale:1.1}}>
                    <a href="#popular-pick">Delivery</a>
                </motion.li>
                <motion.li whileHover={{scale:1.1}}>
                    <a href="#join">Community</a>
                </motion.li>
                <motion.li whileHover={{scale:1.1}}>
                    <a href="#questions">Help</a>
                </motion.li>
                <motion.li whileHover={{scale:1.1}}>
                    <a href="#">Contact</a>
                </motion.li>
            </ul>
        </nav>
        <div className='block lg:hidden'>
            <Hamburger toggled={isOpen} toggle={setIsOpen}/>
        </div>
    </header>
  )
}

export default Header