import React, { useState } from "react";
import wall1 from "../assets/wall1.jpg";
import wall2 from "../assets/wall2.jpg";
import wall3 from "../assets/wall3.jpg";
import wall4 from "../assets/wall4.jpg";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {

    const [currentSlide, setCurrentSlide] =useState(0)

    const prevSlide=()=>{
setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
    }
    const nextSlide=()=>{
setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
    }



  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className=" w-screen h-[100vh] relative">
         <div style={{transform:`translateX(-${currentSlide * 100}vw )`}} className="w-[400vw] h-full flex transition-transform duration-1000">
          <img
            src={wall2}
            alt=""
            className="w-full h-screen object-cover"
            loading="priority"
          />
          <img
            src={wall1}
            alt=""
            className="w-full h-screen object-cover"
            loading="priority"
          />
          <img
            src={wall3}
            alt=""
            className="w-full  h-screen object-cover"
            loading="priority"
          />
          <img
            src={wall4}
            alt=""
            className="w-full  h-screen object-cover"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gtay-800 duration-300">
            {" "}
            <HiArrowLeft />
          </div>

          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gtay-800 duration-300">
            {" "}
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
