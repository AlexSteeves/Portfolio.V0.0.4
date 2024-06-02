"use client";
/* eslint-disable react/no-unescaped-entities */
import styles from "./style.module.scss";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="m-0 max-w-[25vw] h-fit md:h-[25vh] bg-[#F7F7F7] flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-1 p-5">
      
      <div className="text-cBackground lg:row-start-1 lg:col-start-1 w-full text-start md:w-3/4">
        <h1 className=" m-0 p-0 uppercase whitespace-nowrap" style={{fontSize: "calc(12px + 0.15vw)"}}>about me</h1>
        <h3 className=" m-0 p-0 leading-[1.1] font-light text-balance" style={{fontSize: "calc(5px + 0.05vw)"}}>
          I love building responsive and useable applications, with a focus on scalability. I have a strong passion for programming and love to learn new things.
        </h3>
      </div>

    
      <div className="mt-5 md:mt-0 text-cBackground lg:row-start-2 lg:col-start-2 w-full text-start md:w-3/4">
        <h1 className="uppercase whitespace-nowrap m-0 p-0" style={{fontSize: "calc(12px + 0.15vw)"}}>ENGINEERING</h1>
        <h3 className="m-0 p-0 leading-[1.1] font-light text-balance " style={{fontSize: "calc(5px + 0.05vw)"}}>
          With a degree in Computer Engineering, work experience with Java, SQL as well as data science, and many projects built using React/Next.JS, I am interested in just about every part of Software whether that's low/high level programming, or frontend/backend.
        </h3>
      </div>
    </div>
  );
}
