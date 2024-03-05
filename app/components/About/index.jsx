import styles from "./style.module.scss";
import Image1 from "../../../public/Pictures/About/Image1.jpg";
import Image2 from "../../../public/Pictures/About/Image2.jpg";
import Image3 from "../../../public/Pictures/About/Image3.jpg";
import Image4 from "../../../public/Pictures/About/Image4.jpg";
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
      src: Image2,

      scale: scale5,
    },

    {
      src: Image3,

      scale: scale6,
    },
    {
      src: Image4,

      scale: scale8,
    },
    {
        src: Image1,
  
        scale: scale9,
      },
  ];

  return (
    <div ref={container} className={styles.container}>
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
