"use client";
/* eslint-disable react/no-unescaped-entities */

import "./styles.css";

export default function Index() {
  return (
    <div
      className="relative min-h-screen z-1 text-white mix-blend-difference"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center ">
        <div className="whitespace-nowrap flex flex-col gap-8 justify-center text-center overflow-hidden ">
          <div className="z-50 flex flex-col gap-2">
            <p
              className="uppercase font-[300] leading-[100%]  "
              style={{ fontSize: "calc(16px + 9vw)" }}
            >
              WELCOME, I'M
            </p>
            <p
              className="uppercase font-[300] leading-[100%] "
              style={{ fontSize: "calc(16px + 9vw)" }}
            >
              ALEX STEEVES
            </p>
          </div>

          <h4
            className="whitespace-normal z-50 "
            style={{ fontSize: "calc(16px + 1vw)" }}
          >
            Software developer and Computer Engineering Graduate
          </h4>
        </div>
      </div>
    </div>
  );
}
