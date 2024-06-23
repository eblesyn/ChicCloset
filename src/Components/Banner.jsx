import React, { useState } from 'react'
import wall1 from '../assets/wall1.jpg'
import wall2 from '../assets/wall2.jpg'
import wall3 from '../assets/wall3.jpg'
import wall4 from '../assets/wall4.jpg'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'

const Banner = () => {
    const [currentSlide, setCurrentSlide]= useState(0)
    const prevSlide=()=>{
         setCurrentSlide(currentSlide === 0?3:(prev)=>prev - 1)
    }
    const nextSlide=()=>{
        setCurrentSlide(currentSlide ===3?0: (prev)=> prev + 1)
    }

  return (
    <div className='w-full h-auto overflow-x-hidden'>
<div className='w-screen h-[650px] relative'>
    <div className='w-[400vw] h-full flex transition-transform duration-1000'  style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={wall1} alt="wallpaper1" className='w-screen h-full object-cover' loading='priority' />
        <img src={wall2} alt="wallpaper2" className='w-screen h-full object-cover' loading='priority' />
        <img src={wall3} alt="wallpaper3" className='w-screen h-full object-cover' loading='priority' />
        <img src={wall4} alt="wallpaper4" className='w-screen h-full object-cover' loading='priority' />
    </div>
    <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
    <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
<HiArrowLeft/>
    </div>
    <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
<HiArrowRight/>
    </div>
    </div>
    
</div>
    </div>
  )
}

export default Banner