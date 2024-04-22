import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"

// component import
import Button from './Button'

// image import
import pick5 from "../assets/images/pick5.jpg"

function Taste() {
    const secRef = useRef()
    const isView = useInView(secRef)
  return (
    <section 
        id="taste-organic"  
        className='lg:my-[150px] overflow-hidden text-white h-[80vh] flex items-center'
        style={{
            backgroundImage:`url(${pick5})`,
            backgroundColor:"skyblue",
            backgroundBlendMode:"darken",
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}
        ref={secRef}
    >
        <div className='w-[90%] m-auto text-xl text-center '>
            <motion.h2
                initial={{scaleY:0, opacity:0}}
                animate={{scaleY:isView?1:0, opacity:isView?1:0}}
                transition={{delay:0.3, duration:0.5}} 
                className="lg:text-[90px] text-[50px] leading-[50px] lg:mb-[50px] mb-[20px] lg:leading-[90px] capitalize"
            >ready to taste organic excellence?</motion.h2>
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:isView?1:0}}
                transition={{delay:0.4, duration:0.5}} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Voluptatem aspernatur consequuntur vero <br /> molestias quam iusto!
            </motion.p>
            <Button text="Order Now" isView={isView} color="white"/>
        </div>
    </section>
  )
}

export default Taste