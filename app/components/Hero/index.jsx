import styles from "./style.module.scss";
import Image from "next/image";
import Image1 from "../../../public/Pictures/Image1.jpg";
import { useScroll, useTransform, motion} from 'framer-motion'
import {useRef, useEffect} from 'react'
export default function index() {
    
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end']
  })
 
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);


  return (
    <main ref = { containerRef} className={styles.container}>
      <div className={styles.sticky} >
        <motion.div  style={{opacity: opacity}}>
        <Image src={Image1} className={styles.image} fill alt='image'/>
        <div className={styles.text}>
          <h1>WELCOME, I'M</h1>
          <h1 className = {styles.name}>ALEX STEEVES</h1>
          <h3>Software developer and Computer Engineering Graduate</h3>
        </div>
        </motion.div>
        
        
      </div>
    </main>
  );
}
