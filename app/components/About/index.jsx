import styles from "./style.module.scss";
import KPark from "../../../public/Pictures/About/KPark.jpg";
import IronRing from "../../../public/Pictures/About/IronRing.jpg";
import MageBlood from "../../../public/Pictures/About/MageBlood.jpg";
import Profile from "../../../public/Pictures/About/Profile.jpg";
import OctoPi from "../../../public/Pictures/About/OctoPi.jpg";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import AboutCard from './AboutCard'

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);



  const pictures = [
  

    {
      src: KPark,

      scale: scale5,
    },

    {
      src: Profile,

      scale: scale6,
    },
    {
      src: OctoPi,

      scale: scale8,
    },
    {
        src: MageBlood,
  
        scale: scale9,
      },
      {
        src: IronRing,
  
        scale: scale10,
      },
  ];

  return (
    <div id = "about" ref={container} className={styles.container}>
      <div className={styles.sticky}>
        <motion.div style = {{scale:scale4}} className = {styles.el}>
            <AboutCard />
        </motion.div>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
