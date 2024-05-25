import React from "react";
import bee from "../assets/bee.png";
import cartbag from '../assets/cartbag.png'
import userbag from '../assets/user.jpg'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const Header = () => {
  const productData = useSelector((state)=> state.chic.productData);
  const userInfo = useSelector((state)=> state.chic.userInfo);
  return (
    <div className="w-full h-20 border-b-[1px] bg-white border-b-gray-800 font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex  items-center gap-2 ">
          <Link to = "/">
          <div className=" flex items-center">
          <div className= " relative flex items-center bg-black h-16  w-16 rounded-full">
       <img src={bee} alt="logo" className="w-28 h-25 " />
            <p className=" text-black text-2xl flex items-center italic bold">ChicCloset</p>
      
          </div>
          </div>
          
          </Link>
         
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to ="/">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
          </ul>
          <Link to = "/cart">
          <div className="relative">
            <img src={cartbag} alt="cart" className="w-8"  />
            <span className="absolute w-6 top-2 left-1 flex items-center justify-center font-semibold ">{productData.length}</span>
          </div>
          </Link>
          <Link to = "/login">
          <img src={userInfo?userInfo.image : userbag

          } alt=""  className="w-8 h-8 rounded-full"/>
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
          }
        </div>
      </div>
      
    </div>
  );
};

export default Header;
