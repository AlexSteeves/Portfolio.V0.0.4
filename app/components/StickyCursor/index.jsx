'use client';
import { useEffect } from 'react';
//import styles from './style.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function index({stickyElement}) {

  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  }

  const manageMouseMove = e => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove)
    }
  }, [])

  return (
    <div >
      <motion.div 
        style={{
          left: smoothMouse.x, 
          top: smoothMouse.y,
        }} 
        className="fixed w-5 h-5 bg-black rounded-full opacity-50 z-50 pointer-events-none">
      </motion.div>
    </div>
  )
}