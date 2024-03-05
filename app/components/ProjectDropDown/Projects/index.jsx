
import styles from './style.module.scss'
import { projects} from './projectData.js'
import Card from './Card'
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
export default function index() {


    const container = useRef(null);

    const { scrollYProgress } = useScroll({
  
      target: container,
  
      offset: ['start start', 'end end']
  
    })
   
   
    

    return (
        <div ref={container} className={styles.container}>
            {
                projects.map((project, i)=>{
                    const targetScale = 1 - ((projects.length-i)* 0.05);
                    return <Card key={`p_${i}`} {...project} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
                })
            }
        </div>
    );
}