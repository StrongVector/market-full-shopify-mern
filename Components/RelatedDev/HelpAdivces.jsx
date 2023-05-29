import React from 'react'
import{GrNotes} from 'react-icons/gr'

const HelpAdivces = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-8 w-10/12 md:w-auto'>
        <p className='font-semibold mb-3 text-xl'>أدله ارشادية</p>
        <div className='flex flex-col justify-center items-center gap-4 '>
            <p className='flex items-center gap-2 w-full cursor-pointer'>
                    <span><GrNotes/></span>
                <span>أرشادات السلامة أثناء حرب المدن
                </span>
            </p>

            <p className='flex items-center gap-2 w-full cursor-pointer'>
                    <span><GrNotes/></span>
                <span>أرشادات التعامل مع الجثث أثناء الحرب
                </span>
            </p>

            <p className='flex items-center gap-2 w-full cursor-pointer'>
                    <span><GrNotes/></span>
                <span>أرشادات الحركة والتنقل أثناء الحرب
                </span>
            </p>

        </div>
    </div>
  )
}

export default HelpAdivces