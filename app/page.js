"use client";
import Hero from "./components/Hero";
import "./globals.css";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Preloader from "./components/PreLoader";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "lenis/dist/lenis.css";
import { useScroll } from "framer-motion";
import Slider from "./components/SharedComponents/Slider";

import "./components/Hero/styles.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <main className="relative gradient-animate" ref={container}>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}

      <Hero />

      <About />

      <Slider text="Selected Works" direction="-1" progress={scrollYProgress} />
      <Projects />
      <Slider text="Experience" direction="1" progress={scrollYProgress} />
      <Experience />

      <Footer />
    </main>
  );
}
