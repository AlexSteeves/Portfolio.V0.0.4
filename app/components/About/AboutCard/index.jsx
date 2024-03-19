"use client";
import styles from "./style.module.scss";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="m-0   max-w-[25vw] h-[25vh] bg-[#F7F7F7] flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-1 p-5">
      {/* Align the first text to top-left on large screens */}
      <div className="text-cBackground lg:row-start-1 lg:col-start-1 w-full text-start">
        <h1 className="text-[7px] lg:text-sm m-0 p-0 uppercase">about me</h1>
        <h3 className="text-[5px] lg:text-[7px] m-0 p-0 leading-[9px]">
          I love building responsive and useable applications, with a focus on scalability. I have a strong passion for programming and love to learn new things.
        </h3>
      </div>

      {/* Align the second text to bottom-right on large screens */}
      <div className="text-cBackground lg:row-start-2 lg:col-start-2 w-full text-start">
        <h1 className="text-[7px] lg:text-sm m-0 p-0">ENGINEERING</h1>
        <h3 className="text-[5px] lg:text-[7px] m-0 p-0 leading-[9px]">
          With a degree in Computer Engineering, work experience with Java, SQL as well as data science, and many projects built using React/Next.JS, I am interested in just about every part of Software whether that's low/high level programming, or frontend/backend.
        </h3>
      </div>
    </div>
  );
}
