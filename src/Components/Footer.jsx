import React from 'react'
import bee from '../assets/bee.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
import { FaGithub, FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsPaypal, BsPersonFill, BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineLocationOn } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
<div className='max-w-screen-xl mx-auto grid grid-cols-4'>
  {/* ===========logo section==========*/}
    <div className='flex flex-col gap-5'>
     <div className="bg-white h-16  w-16 rounded-full ">
            <img src={bee} alt="logo" className="w-28 h-25 " />
            <p className='text-white text-sm tracking-wide '>BestQuality</p>
            </div>
            <div className='flex gap-2 mt-3'>
<img src={card1} alt="" className='w-6' />
<img src={card2} alt="" className='w-6' />
<img src={card3} alt="" className='w-6' />
<img src={card4} alt=""  className='w-6'/>
            </div>
            <div className='flex items-center gap-2 '>
          <FaGithub  className='hover:text-white duration-300 cursor-pointer'/>
          <FaFacebook  className='hover:text-white duration-300 cursor-pointer' />
          <FaYoutube  className='hover:text-white duration-300 cursor-pointer' />
          <BsTwitterX   className='hover:text-white duration-300 cursor-pointer'/>
           <FaInstagramSquare   className='hover:text-white duration-300 cursor-pointer'/>
          </div> 
    </div>
    {/*========locateUs Section======*/}
    <div>
<h2 className='text-2xl font-semibold text-white mb-4'>Locate Us</h2>
<div className='text-base flex flex-col gap-2'>
  <p>Taiwo Blessing (senarmi)</p>
  <p>Mobile: 09042795981</p>
  <p>Phone:08168472839</p>
  <p>e-mail: eblesyno@gmail.com</p>
</div>
    </div>
     {/*========Profile Section======*/}
    <div>
    <h2 className='text-2xl font-semibold text-white mb-4'>Profile</h2>
     <div className='flex flex-col gap-2 text-base'>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursuor-pointer'>
      <span>
        <BsPersonFill/>
      </span>
      my account
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursuor-pointer'>
      <span>
        <BsPaypal/>
      </span>
      checkout
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursuor-pointer'>
      <span>
        <FaHome/>
      </span>
      order tracking
    </p>
    <p className='flex items-center gap-3 hover:text-white duration-300 cursuor-pointer'>
      <span>
        <MdOutlineLocationOn/>
      </span>
      help & support
    </p>
    </div>
    </div>
 {/*========email Section======*/}
    <div className='flex flex-col justify-center'>
      <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail' type="text" />
      <button className='bg-transparent text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
    </div>

</div>

    </div>
  )
  
}

export default Footer