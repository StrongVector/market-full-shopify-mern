import React from 'react'
import{FaHandshake} from "react-icons/fa"
import SubTitle from '../Utils/SubTitle'
import Link from 'next/link'

const RelatedTopics = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 mt-8 '>
        <h2 className='text-2xl font-semibold flex items-center justify-center gap-2'>
            <span>يدك معانا</span>
            <span><FaHandshake className='text-2xl w-6 h-6' /></span>
        </h2>
        <p>شارك في تعزيز التنسيق</p>
        {/* <div> */}
        <div className='flex flex-row-reverse justify-center items-center gap-4 flex-wrap p-2'>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSeQmc09mOBGZdW85bAZqhkHzLKzx3S4VJIihzuwqB6aTcoGig/viewform'
         className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'
         target='-blank'>
           أضف مقترح
        </a>
        <a target='-blank'
        href = 'https://docs.google.com/forms/d/e/1FAIpQLSdlanHMAy1rPPQBhGpqvrgJTw5RYg8tXUBZTaQ0w29XpHeUag/viewform?pli=1' className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
أضف سؤال مهم
        </a>
        <Link href='/add/new/invition' className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
            سجل مبادره تطوعية
        </Link>
        <Link href='/register/as/volunteer' className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
         تطوع في احد المبادرات
        </Link>
       

        </div>
        <SubTitle title ={"أنظر ايضا"}/>

    </div>
  )
}

export default RelatedTopics