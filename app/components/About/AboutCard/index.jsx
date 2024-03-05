'use client'
import styles from './style.module.scss'
import Image from 'next/image';


export default function AboutMe() {
 
  return (
    <div className={styles.container}>
        <div className={styles.aboutText}>
          <h1>ABOUT</h1>
          <h3>I love building responsive and useable applications, with a focus on scalability. I has a strong passion for programming and love to learn new things.</h3>
        </div>

     
    </div>
  );
}