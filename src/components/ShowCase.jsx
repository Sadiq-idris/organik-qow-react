import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion"

import Button from "./Button"

function ShowCase() {
  const secRef = useRef()
  const isView = useInView(secRef)

  return (
    <section id="showcase" className=' lg:py-[50px]' ref={secRef}>
        <div className='text-center'>
            <motion.h2 
              initial={{scaleY:0, opacity:0}}
              animate={{scaleY:isView?1:0, opacity:isView?1:0}}
              transition={{delay:0.3, duration:0.5}}
              className="lg:text-[100px] origin-bottom text-[60px] leading-[50px] lg:mb-[50px] mb-[20px] lg:leading-[90px]"
            >Fresh & Organic <br /> farm to table <br /> Delivery</motion.h2>
            <motion.p
              initial={{opacity:0}}
              animate={{opacity:isView?1:0}}
              transition={{delay:0.4, duration:0.5}} 
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Voluptatem aspernatur consequuntur vero <br /> molestias quam iusto!
            </motion.p>
            <Button text="Order Now" color="white" isView={isView}/>
        </div>
    </section>
  )
}

export default ShowCase