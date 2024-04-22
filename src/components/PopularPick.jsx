import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

// images imports
import pick1 from "../assets/images/pick1.jpg"
import pick2 from "../assets/images/pick2.jpg"
import pick3 from "../assets/images/pick3.jpg"
import pick4 from "../assets/images/pick4.jpg"
import pick5 from "../assets/images/pick5.jpg"

function PopularPick() {
    const secRef = useRef()
    const isView = useInView(secRef)
  return (
    <section id="popular-pick"  className='lg:my-[150px] overflow-hidden' ref={secRef}>
        <div className='w-[90%] m-auto text-xl text-center'>
            <div>
                <motion.h2 
                    initial={{scaleY:0, opacity:0}}
                    animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                    transition={{delay:0.3, duration:0.5}}
                    className='lg:text-[70px] text-4xl font-light lg:leading-[60px] leading-8 mb-5 capitalize'
                >Popular organic peak</motion.h2>
                <motion.p
                    initial={{opacity:0}}
                    animate={{opacity:isView?1:0}}
                    transition={{delay:0.4, duration:0.5}} >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ut velit nesciunt delectus vel 
                    expedita nam magnam rem unde sit aliquam dignissimos,<br />
                     soluta eius laudantium harum necessitatibus, reprehenderit repudiandae et. Cupiditate.
                </motion.p>
                
            </div>
        </div>

        <div className='flex gap-5 mt-10'>
            <div  className='flex-grow-0 flex-shrink-0 w-[350px]'>
                <img src={pick1} alt="pick img"/>
                <div className='flex justify-between'>
                    <span>Lorem ipsum</span>
                    <span>organic</span>
                </div>
            </div>

            <div className='flex-grow-0 flex-shrink-0 w-[350px]'>
                <img src={pick2} alt="pick img"/>
                <div className='flex justify-between'>
                    <span>Lorem ipsum</span>
                    <span>organic</span>
                </div>
            </div>

            <div className='flex-grow-0 flex-shrink-0 w-[350px]'>
                <img src={pick3} alt="pick img" />
                <div className='flex justify-between'>
                    <span>Lorem ipsum</span>
                    <span>organic</span>
                </div>
            </div>

            <div className='flex-grow-0 flex-shrink-0 w-[350px]'>
                <img src={pick4} alt="pick img" />
                <div className='flex justify-between'>
                    <span>Lorem ipsum</span>
                    <span>organic</span>
                </div>
            </div>

            <div  className='flex-grow-0 flex-shrink-0 w-[350px]'>
                <img src={pick5} alt="pick img" />
                <div className='flex justify-between'>
                    <span>Lorem ipsum</span>
                    <span>organic</span>
                </div>
            </div>
    
        </div>
    </section>
  )
}

export default PopularPick