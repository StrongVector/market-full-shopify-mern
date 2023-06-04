import React from 'react'
import SiteChart from '../SiteChart'

const LostedCarsBystuts = () => {
  return (
    <div className='w-10/12 mx-auto md:w-auto flex flex-wrap justify-center items-start  gap-4 p-4 pt-8 md:gap-10
    rounded-lg shadow-lg  bg-white'>
        <div>
            <h3 className='font-semibold'>العربات المفقودة حسب الحالة</h3>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-4 '>
                    <span>عربية مفقودة</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>عربية مجهولة</span>
                    <span> 152 عربية </span>
                    <span>19.5</span>

                </p>
            </div>
        </div>
        <SiteChart/>
    </div>
  )
}

export default LostedCarsBystuts