"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import hassan from "../../public/imgs/logo.jpg";
import {FiMenu } from 'react-icons/fi'
import { AiFillHome } from 'react-icons/ai';
import {BiLogIn} from 'react-icons/bi'
import Link from 'next/link';

const NavBar = () => {

    let[toggle,setToggle] = useState(false);
    const handleToggle =()=>{
        setToggle(!toggle);
    }
  return (
    <nav className=' m-0  px-8 bg-white '> 

        {/* mobile nav */}
    <div className='container mx-auto  md:hidden flex justify-between items-center flex-wrap px-2 pl-3 py-4'>
    <Link href='/' className='flex justify-center items-center gap-2 cursor-pointer'>
       <span className='text-2xl -mt-1 font-bold text-orange-400'>تنسيق </span>
       {/* <span className='text-3xl -mt-2 font-bold'>تنسيق</span> */}
      <Image className='rounded-full' src={hassan} alt="logo" width={30} height={30} />
    </Link>
    <span onClick={handleToggle}>{<FiMenu className='text-3xl'/>}</span>

    { toggle &&
     <div className='w-screen text-center mt-8'>
      <ul>
         <Link href='/' className='flex justify-center items-center gap-1 pb-2 link'>
         <span><AiFillHome className='text-xl'/></span><span>الرئيسية</span>
         </Link>
         {/*  */}
         <Link href='/login' className='flex justify-center items-center gap-1 link'>
         <span><BiLogIn className='text-2xl'/></span><span>تسجيل الدخول</span>
         </Link>
      </ul>
    </div>}

    </div> 
    

    {/* desktop nav */}
    <div className=' hidden md:flex flex-row justify-between items-center px-16 pr-10 pl-20 py-4 '>
    
    <Link href='/' className='flex  justify-center items-center gap-2 cursor-pointer'>
      <Image className='rounded-full' src={hassan} alt="logo" width={30} height={30} />
       <span className='text-3xl -mt-1 font-bold text-orange-400'>تنسيق </span>
    </Link>
    <ul className='flex justify-center items-center gap-4'>
    <Link href='/' className='flex justify-center items-center gap-1 hover:opacity-70'>
         <span><AiFillHome className='text-xl'/></span><span>الرئيسية</span>
         </Link>
         {/*  */}
         <Link href='/login' className='flex justify-center items-center gap-1 hover:opacity-70'>
         <span><BiLogIn className='text-2xl'/></span><span>تسجيل الدخول</span>
         </Link>
    </ul>
    </div>
    
    </nav>
  )
}

export default NavBar