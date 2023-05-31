"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hassan from "../public/imgs/logo.jpg";

import {FiMenu } from 'react-icons/fi'

import {BsTelephone } from 'react-icons/bs'
import {BsInfoCircle} from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai';
import {BiLogIn} from 'react-icons/bi'
// import {AiOutlineHome} from 'react-icons/ai'


const NavBar = () => {



    let[toggle,setToggle] = useState(true);
    const handleToggle =()=>{
        setToggle(!toggle);
    }
  return (
    <nav className=' m-0  px-8 bg-white '> 
        {/* mobile nav */}
    <div className='container mx-auto  md:hidden flex justify-between items-center flex-wrap px-2 pl-3 py-4'>
    <span className='flex justify-center items-center gap-2'>
       <span className='text-2xl -mt-1 font-bold text-orange-400'>تنسيق </span>
       {/* <span className='text-3xl -mt-2 font-bold'>تنسيق</span> */}
      <Image className='rounded-full' src={hassan} alt="logo" width={30} height={30} />
    </span>
    <span onClick={handleToggle}>{<FiMenu className='text-3xl'/>}</span>

    { toggle &&
     <div className='w-screen text-center mt-8'>
      <ul>
         <li className='flex justify-center items-center gap-1 pb-2 link'>
         <span><AiFillHome className='text-xl'/></span><span>الرئيسية</span>
         </li>
         {/*  */}
         <li className='flex justify-center items-center gap-1 link'>
         <span><BiLogIn className='text-2xl'/></span><span>تسجيل الدخول</span>
         </li>
      </ul>
    </div>}

    </div> 
    

    {/* desktop nav */}
    <div className=' hidden md:flex flex-row justify-between items-center px-16 pr-10 pl-20 py-4 '>
    
    <span className='flex  justify-center items-center gap-2'>
      <Image className='rounded-full' src={hassan} alt="logo" width={30} height={30} />
       <span className='text-3xl -mt-1 font-bold text-orange-400'>تنسيق </span>
    </span>
    <ul className='flex justify-center items-center gap-4'>
    <li className='flex justify-center items-center gap-1'>
         <span><AiFillHome className='text-xl'/></span><span>الرئيسية</span>
         </li>
         {/*  */}
         <li className='flex justify-center items-center gap-1'>
         <span><BiLogIn className='text-2xl'/></span><span>تسجيل الدخول</span>
         </li>
    </ul>
    </div>
    
    </nav>
  )
}

export default NavBar