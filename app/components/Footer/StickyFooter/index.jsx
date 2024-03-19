"use client";
import React, { useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function index() {
  const container = useRef();
  const paths = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });

  useEffect(() =>{
    scrollYProgress.on("change", e =>{
        paths.current.forEach((path, i) =>{
            path.setAttribute("startOffset", -40 + (i * 40) + (e * 40)+ "%");
        })
    })
  }, [])

  return (
    <div ref={container}>
      <svg className="w-full mb-28" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className = "text-[6px] uppercase  " style={{fill:"var(--primary-color)"}}>
            {
                [...Array(3)].map((_,i)=>{
                    return <textPath key={i} ref={ref => paths.current[i] = ref} startOffset={i * 40 + "%"} href="#curve">Don't Hesitate to Reach Out</textPath>
                })
                
            }
        </text>
      </svg>
      <StickyBottom scrollProgress={scrollYProgress} />
    </div>
  );
}

const StickyBottom = ({ scrollProgress }) => {
  const ResumePath = process.env.PUBLIC_URL + "/Resume/Software_Resume.pdf";
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  return (
    <div className="h-[250] bg-black overflow-hidden">
      <motion.div
        style={{ y }}
        className="h-full bg-black text-white flex justify-center items-center gap-10 p-10"
      >
        <a target="_blank" href="https://github.com/AlexSteeves">
            <FaGithub className = "h-10 w-10 hover:text-accent duration-300" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/alexander-steeves/">
            <FaLinkedin className = "h-10 w-10 hover:text-accent duration-300" />
        </a>
        
        <a target="_blank" href="https://drive.google.com/file/d/106mlDGR48O86jS9WynJ65GBKPDMHlqVM/view?usp=sharing" className = "hover:text-accent duration-300"><h5 className="text-lg md:text-xl lg:text-2xl">Resume</h5></a>
        <a target="_blank" href="mailto:alqusteeves@gmail.com" className = "hover:text-accent duration-300"><h5 className="text-lg md:text-xl lg:text-2xl">Contact</h5></a>

        
       
      </motion.div>
     
    </div>
  );
};
