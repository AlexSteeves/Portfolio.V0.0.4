'use client'
/* eslint-disable react/no-unescaped-entities */

import styles from "./style.module.scss";
import Image from "next/image";
import Trees from "../../../public/Pictures/HeroPage/Trees.jpg";
import { useScroll, useTransform, motion} from 'framer-motion'
import {useRef, useEffect} from 'react'
export default function Index() {
    
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end']
  })
 
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


  return (
    <main ref = { containerRef} className="h-[150vh] relative">
      
      <div className={styles.sticky} >
        <motion.div  style={{opacity: opacity}}>
        <Image src={Trees} className={styles.image} fill alt='image'/>
        <div className=" whitespace-nowrap flex flex-col justify-center text-center text-text px-10">
<<<<<<< HEAD
          <div className = "z-50 leading-[0.95] " >
            <p className = "uppercase my-0 py-0 font-bold" style = {{fontSize: 'calc(16px + 11vw)'}}>WELCOME, I'M</p>
            <p className = "ml-[3%] uppercase my-0 font-bold" style = {{fontSize: 'calc(16px + 11vw)'}}>ALEX STEEVES</p>
          </div>
          
          <h4 className = "mt-5 whitespace-normal z-50 " style = {{fontSize: 'calc(16px + 1vw)'}} >Software developer and Computer Engineering Graduate</h4>
=======
          <h1 className = "text-5xl md:text-7xl lg:text-9xl z-50">WELCOME, I'M</h1>
          <h1 className = "ml-[5%] text-5xl md:text-7xl lg:text-9xl z-50">ALEX STEEVES</h1>
          <h4 className = "mt-1 whitespace-normal z-50 text-xl md:text-3xl lg:text-5xl ">Software developer and Computer Engineering Graduate</h4>
>>>>>>> e701dc68b292bca60a435f068ef31b55577d8f96
        </div>
        </motion.div>
        
        
      </div>
    
    </main>
  );
}
