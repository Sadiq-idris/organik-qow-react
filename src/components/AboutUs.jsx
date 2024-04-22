import React, {useRef} from 'react'
import { motion, useInView } from "framer-motion"


// image imports
import aboutImg from "../assets/images/aboutImg2.jpg"

function AboutUs() {
    const secRef = useRef()
    const isView = useInView(secRef)

  return (
    <section id="about-us" className='my-[50px]' ref={secRef}>
        <div className='w-[90%] m-auto text-xl mb-14'>
            <div className='flex lg:flex-row flex-col gap-10'>
                <div className='lg:w-[30%]'>
                    <motion.h2 
                        initial={{scaleY:0, opacity:0}}
                        animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                        transition={{delay:0.3, duration:0.3}}
                        className='lg:text-[40px] text-4xl origin-bottom font-light lg:leading-[40px] leading-8 italic'
                    >About Us</motion.h2>
                </div>

                <div className='lg:w-[60%]'>
                    <motion.h2 
                        initial={{scaleY:0, opacity:0}}
                        animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                        transition={{delay:0.4, duration:0.5}} 
                        className='lg:text-[40px] origin-top text-4xl font-light lg:leading-[50px] leading-8 mb-5'
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Atque quae cupiditate illum inventore autem ea odit fugit,
                          itaque qui impedit!
                    </motion.h2>
                    <div className='flex lg:flex-row flex-col gap-5'>
                        <motion.p
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.5, duration:0.5}} 
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio, 
                            quos commodi provident architecto inventore velit tempora aliquid eius fuga!
                        </motion.p>
                        <motion.p
                            initial={{opacity:0}}
                            animate={{opacity:isView?1:0}}
                            transition={{delay:0.5, duration:0.5}} 
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odio, 
                            quos commodi provident architecto inventore velit tempora aliquid eius fuga!
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <motion.img 
                initial={{scale:1.5}}
                animate={{scale:isView?1:0}}
                transition={{delay:0.8, duration:0.5}} 
                src={aboutImg} 
                alt="image of fruits" 
                className='h-[600px] w-full object-cover' 
            />
        </div>
    </section>
  )
}

export default AboutUs