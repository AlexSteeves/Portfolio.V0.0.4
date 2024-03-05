'use client'
import styles from './style.module.scss'
import Image from 'next/image';


export default function AboutMe() {
 
  return (
    <div className={styles.container}>
        <div className={styles.aboutText}>
          <h3>ABOUT</h3>
          <h4>I love building responsive and useable applications, with a focus on scalability. I has a strong passion for programming and love to learn new things.</h4>
        </div>

     
    </div>
  );
}