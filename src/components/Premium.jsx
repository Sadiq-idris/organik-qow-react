import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

// component imports
import Button from "./Button"

// image import
import premiumImg from "../assets/images/premiumImg.jpg"

function Premium() {
    const secRef = useRef()
    const isView = useInView(secRef)
  return (
    <section id="premium" className='my-[50px]' ref={secRef}>
        <div className='w-[90%] m-auto text-xl'>
            <div className='flex  lg:flex-row flex-col lg:gap-0 gap-8 justify-between items-center'>
                <div className='lg:w-[45%]'>
                    <motion.img 
                        initial={{scale:1.5}}
                        animate={{scale:isView?1:0}}
                        transition={{delay:0.5, duration:0.5}} 
                        src={premiumImg} 
                        alt="premium image" 
                        className='rounded-full w-[50%] m-auto lg:w-full lg:m-0 lg:h-[600px] object-cover' 
                    />
                </div>

                <div className='lg:w-[45%] lg:text-left text-center'>
                    <motion.h2 
                        initial={{scaleY:0, opacity:0}}
                        animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                        transition={{delay:0.3, duration:0.5}}
                        className='lg:text-[70px] origin-bottom text-4xl font-light capitalize lg:leading-[70px] leading-8 mb-5'
                    >Premium organic selection</motion.h2>
                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:isView?1:0}}
                        transition={{delay:0.4, duration:0.5}} 
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Id officiis possimus magnam ex, facilis unde reiciendis nam tenetur qui molestiae!
                    </motion.p>
                    <Button text="Details" isView={isView} color="black"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Premium