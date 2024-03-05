'use client'
import { useState} from 'react'

import styles from './style.module.scss'
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav'

export default function index(){
    const[isActive, setIsActive] =useState(false);
    return(
        <main className = {styles.container}>
           
            <h5>
                Alex Steeves
            </h5>
    


        
            <div onClick={() =>{setIsActive(!isActive)}} className={styles.button}>
                <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
     
           
         
        </main>
    )
}