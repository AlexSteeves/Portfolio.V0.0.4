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
    <main ref = { containerRef} className="h-[200vh] relative">
      <div className={styles.sticky} >
        <motion.div  style={{opacity: opacity}}>
        <Image src={Trees} className={styles.image} fill alt='image'/>
        <div className=" whitespace-nowrap flex flex-col justify-center text-center text-text px-10">
          <h1 className = "text-5xl md:text-9xl lg:text-[12rem] z-50">WELCOME, I'M</h1>
          <h1 className = "ml-[5%] text-5xl md:text-9xl lg:text-[12rem] z-50">ALEX STEEVES</h1>
          <h4 className = "mt-1 whitespace-normal z-50 text-xl md:text-3xl lg:text-5xl ">Software developer and Computer Engineering Graduate</h4>
        </div>
        </motion.div>
        
        
      </div>
    </main>
  );
}
