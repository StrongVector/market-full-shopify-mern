import Image from 'next/image'
import React from 'react'
import {AiFillNotification} from "react-icons/ai"


const Hero = () => {

  return (
    <div className='container mx-auto mt-4 p-4 flex flex-col justify-center items-center gap-3' id = 'home'>
    <p className='flex justify-center items-center gap-2'>
      <span className='text-2xl font-semibold'>نداءت الاستغاثة</span>
      <AiFillNotification/>
    </p>
    <p className='font-medium flex'>
      <span className='flex flex-row-reverse'>
      <span>755</span>
    <span>عربيه مفقودة</span>
      </span>

    <san>__</san>
    <span className='flex'>
    <span>19</span>
    <span>عربيه مجهولة</span>

    </span>

    </p>
   

    </div>
  )
}

export default Hero