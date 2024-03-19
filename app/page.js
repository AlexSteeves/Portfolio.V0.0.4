"use client";


import styles from "./style.module.scss";
import Hero from "./components/Hero";
import "./globals.css";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Preloader from "./components/PreLoader";

import Footer from "./components/Footer";


import Experience from './components/Experience'

import Projects from './components/Projects'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 500);
    })();
  }, []);

  return (
    <main className={styles.container}>
      
   
  <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      
     
      <Hero />
      <About />
      <Projects />
      <Experience />
      
      <Footer  />
      
  
    </main>
  );
}
