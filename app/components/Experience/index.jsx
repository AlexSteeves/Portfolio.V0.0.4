import { experience } from "./ExperienceData";
import { motion } from "framer-motion";
import "./Experience.scss";
export default function index() {
  return (
    <div className="w-full h-full bg-[#F2F2F2] py-12 lg:py-24">
      <div
        id="experience"
        className="max-w-[1400px] mx-auto grid p-4 gap-4 grid-container"
      >
        {experience.map((job, index) => (
          <Experience key={index} experienceData={job} />
        ))}
      </div>
    </div>
  );
}

function Experience({ experienceData }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <div className="flex flex-col gap-4 w-full h-full bg-[#E9E9E9] text-[#13481F] p-4 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-white">
        <div className="flex flex-col">
          <span className="font-[400] uppercase tracking-[0.05em]">
            {experienceData.jobtitle}
          </span>

          <span className="font-[700] font-serif text-[1.33rem] uppercase">
            {experienceData.company}
          </span>
        </div>

        <span className="font-[300] text-balance">{experienceData.body}</span>

        <div className="flex flex-col gap-2">
          <p className="font-semibold">TECHNOLOGIES USED:</p>
          <ul
            className="grid list-disc list-inside gap-1"
            style={{
              display: "grid",
              gap: "0.5rem",
              gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
            }}
          >
            {experienceData.skills.map((skill) => (
              <li className="font-normal whitespace-nowrap" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
