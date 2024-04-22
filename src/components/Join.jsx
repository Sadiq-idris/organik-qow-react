import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"


// icon import
import { HiArrowRight } from "react-icons/hi2";

function Join() {
    const secRef = useRef()
    const isView = useInView(secRef)
  return (
    <section 
        id="join" 
        ref={secRef} 
        className='lg:mt-[150px] overflow-hidden text-white lg:h-[80vh] h-[60vh] flex items-center bg-blue-800'
    >
        <div className='w-[90%] m-auto text-xl text-center '>
            <motion.h2
                initial={{scaleY:0, opacity:0}}
                animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                transition={{delay:0.3, duration:0.5}} 
                className="lg:text-[90px] text-[50px] leading-[50px] lg:mb-[50px] mb-[20px] lg:leading-[90px] capitalize"
            >join the <br /> community</motion.h2>
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:isView?1:0}}
                transition={{delay:0.4, duration:0.5}} 
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Voluptatem aspernatur consequuntur vero <br /> molestias quam iusto!
            </motion.p>
            <div className='flex justify-center'>
                <motion.div 
                    initial={{scale:0, opacity:0}}
                    animate={{scale:isView?1:0, opacity:isView?1:0}}
                    transition={{delay:0.5, duration:0.5}}
                    className='border  border-white px-5 py-2 rounded flex items-center mt-5 justify-start'
                >
                    <input 
                        type="email" 
                        className='border-none outline-none text-white bg-transparent placeholder:text-white'
                        placeholder='type your email'
                    />
                    <div className="text-3xl cursor-pointer">
                        <HiArrowRight/>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Join