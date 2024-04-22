import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"


// icon import
import { HiArrowRight } from "react-icons/hi2";

function Questions() {
    const secRef = useRef()
    const isView = useInView(secRef)
  return (
    <section id="questions" className='my-[50px]' ref={secRef}>
        <div className='w-[90%] m-auto text-xl'>
            <motion.h2
                initial={{scaleY:0, opacity:0}}
                animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                transition={{delay:0.3, duration:0.5}}  
                className="lg:text-[90px] text-[60px] leading-[50px] text-center
                lg:mb-[50px] mb-[20px] lg:leading-[90px] capitalize"
            >Question</motion.h2>

            <div>
                <div className='flex justify-between items-center  border-black border-y py-4'>
                    <div className='lg:w-[40%]'>
                        <motion.h3
                            initial={{scaleY:0, opacity:0}}
                            animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                            transition={{delay:0.3, duration:0.5}} 
                            className='text-3xl' 
                        >what productsdo you offer</motion.h3>
                    </div>

                    <div className='flex justify-between items-center lg:w-[50%]'>
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.3, duration:0.5}} 
                            className='lg:block hidden'
                        >
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                             Culpa corporis .
                        </motion.p>
                        <div className='text-3xl'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center  border-black border-b py-4'>
                    <div className='lg:w-[40%]'>
                        <motion.h3 
                            initial={{scaleY:0, opacity:0}}
                            animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                            transition={{delay:0.4, duration:0.5}} 
                            className='text-3xl'
                        >What is the delivery timeframe</motion.h3>
                    </div>

                    <div className='flex justify-between items-center lg:w-[50%]'>
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.4, duration:0.5}} 
                            className='lg:block hidden'
                        >
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                             Culpa corporis .
                        </motion.p>
                        <div className='text-3xl'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center  border-black border-b py-4'>
                    <div className='lg:w-[40%]'>
                        <motion.h3 
                            initial={{scaleY:0, opacity:0}}
                            animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                            transition={{delay:0.5, duration:0.5}} 
                            className='text-3xl'
                        >Where you get your organic produce</motion.h3>
                    </div>

                    <div className='flex justify-between items-center lg:w-[50%]'>
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.5, duration:0.5}} 
                            className='lg:block hidden'
                        >
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                             Culpa corporis .
                        </motion.p>
                        <div className='text-3xl'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center  border-black border-b py-4'>
                    <div className='lg:w-[40%]'>
                        <motion.h3 
                            initial={{scaleY:0, opacity:0}}
                            animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                            transition={{delay:0.6, duration:0.5}} 
                            className='text-3xl'
                        >Can i cancel or modify my order</motion.h3>
                    </div>

                    <div className='flex justify-between items-center lg:w-[50%]'>
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.6, duration:0.5}} 
                            className='lg:block hidden'
                        >
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                             Culpa corporis .
                        </motion.p>
                        <div className='text-3xl'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center  border-black border-b py-4'>
                    <div className='lg:w-[40%]'>
                        <motion.h3 
                            initial={{scaleY:0, opacity:0}}
                            animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                            transition={{delay:0.7, duration:0.5}} 
                            className='text-3xl'
                        >Are there options for special diets</motion.h3>
                    </div>

                    <div className='flex justify-between items-center lg:w-[50%]'>
                        <motion.p 
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.7, duration:0.5}} 
                            className='lg:block hidden'
                        >
                            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                             Culpa corporis .
                        </motion.p>
                        <div className='text-3xl'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Questions