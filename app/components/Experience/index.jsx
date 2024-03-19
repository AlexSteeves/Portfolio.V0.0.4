import { experience } from "./ExperienceData";
import { useInView, motion} from 'framer-motion'
import { useRef} from 'react';
export default function index() {
  return (
    <div id="experience" className="w-[100%] px-10 md:px-[10%] py-10 text-text flex flex-col gap-16 mt-20">
      <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold">EXPERIENCE</h2>
      {experience.map((job, i) => (
        <Experience key={i} experienceData={job} />
      ))}
    </div>
  );
}

function Experience({ experienceData }) {


  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-50%" });

  const animation = {
    initial:{y:"100%"},
    enter: i => ({y:"0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i}}),


  }
  return (
    <div ref={body} className="flex flex-col gap-4 w-[80%]">
      <div className = "overflow-hidden">
        <motion.h3 variants={animation} custom={1} animate={isInView ? "enter" : "initial"} className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
          {experienceData.jobtitle}
        </motion.h3>
      </div>

      <div className = "overflow-hidden">
        <motion.h2 variants={animation} custom={2} animate={isInView ? "enter" : "initial"} className="text-xl md:text-3xl lg:text-5xl font-bold uppercase">
          {experienceData.company}
        </motion.h2>
      </div>

      <div className = "overflow-hidden">
        <motion.p variants={animation} custom={3} animate={isInView ? "enter" : "initial"} className="text-xl md:text-2xl lg:text-3xl font-regular">
          {experienceData.body}
        </motion.p>
      </div>
   
      <div className = "overflow-hidden">
      <motion.div variants={animation} custom={3} animate={isInView ? "enter" : "initial"} className="w-fit flex flex-col gap-2">
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
          TECHNOLOGIES USED:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 list-disc list-inside ">
          {experienceData.skills.map((skill) => (
            <li
              className="text-md md:text-xl lg:text-2xl font-regular"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
      </div>
    
      
    </div>
  );
}
