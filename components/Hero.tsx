import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="pb-20 pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-[50vh] lg:h-[50vh]  w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-[90vw] lg:max-w-[70vw] xl:max-w-[55vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}
          <div className="flex flex-col  md:flex-row gap-4">
            <div className="flex flex-col  justify-center md:justify-end ">
            <p className="md:tracking-wider md:text-start text-center dark:text-white text-black md:text-lg my-3 md:my-4  text-base lg:text-xl">
              Hi! I&apos;m
              </p>
              <h1 className="text-purple md:text-start text-center font-bold md:text-5xl text-4xl lg:text-6xl">
                Sri Om Sharan
              </h1>
              <p className="md:tracking-wider md:text-start text-center dark:text-white text-black md:text-base mb-6 my-3 md:my-4 text-base lg:text-xl">
                A Web Developer dedicated to creating intuitive and engaging web
                experiences.
              </p>

              <div className="md:flex hidden w-full md:flex-col justify-start lg:flex-row gap-2  md:gap-3 lg:gap-4 items-start">
                <a href="#projects">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
                <a href="/Resume.pdf" download={"optional-value"}>
                  <button className="inline-flex gap-2 text-white-100  w-full md:w-60 lg:mt-10  h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors">
                    Download Resume
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </a>
              </div>
            </div>

            <div className="flex-col gap-4 flex justify-center items-center">
              <div className="border-b-2  p-2 rounded-full border-purple">
              <img
              alt="profile picture"
                className="bg-gray-400 md:w-[500px] lg:w-[600px]   shadow-sm outline-x-purple w-72 brightness-90 contrast-100 saturate-100  rounded-full"
                src="/profile.png"
                />
                </div>

              <div className="flex items-center  justify-center md:gap-6 w-full gap-4">
                {socialMedia.map((info) => (
                  <a
                    href={info.link}
                    key={info.id}
                    target="_blank"
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-full border border-black-300"
                  >
                    <img src={info.img} alt="icons" width={20} height={20} />
                  </a>
                ))}
              </div>
              <div className="flex md:hidden flex-col gap-4 w-full items-center">
                <a className="w-full" href="#projects">
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                    
                  />
                </a>
                <a href="/Resume.pdf" className="w-full" download={"optional-value"}>
                  <button className="inline-flex gap-2 text-white-100  w-full md:w-60 md:mt-10  h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors">
                    Download Resume
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            duration={0}
            filter={false}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
