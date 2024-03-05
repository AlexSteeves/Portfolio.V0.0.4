"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import { opacity, slideUp } from "./anim";

const words = ["Alex Steeves Portfolio"];

export default function Index() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const text1 = "Alex Steeves".split(" ");
  const text2 = "Portfolio @2024"

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const animation = {
    initial:{y: "100%"},
    enter: i =>({y:"0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay : 0.25 * i}})
    
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >

        <div className = {styles.text} >
            <div>
            <motion.p variants ={animation} initial="initial" animate={"enter"}>
                Alex Steeves
            </motion.p>
            </div>
            <div>
            <motion.p variants ={animation} initial="initial" animate={"enter"} custom={0.5}>
                Portfolio @2024
            </motion.p>
            </div>
            
            <div>
           
           
            </div>
            
        </div>
      
    </motion.div>
  );
}
