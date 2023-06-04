import React from 'react'
import YearStatistics from './YearStatistics'

const ModelStatistics = () => {
  return (
    <div className='w-10/12 mx-auto md:w-auto  flex flex-wrap justify-center items-start  gap-4 p-4 pt-8 md:gap-8
    rounded-lg shadow-lg  bg-white'>
            <div>
            <h3 className='font-semibold'>العربات المفقودة حسب سنة الصنع</h3>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-4 '>
                <span>1997</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>1998</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                <span>1999</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>2000</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>2001</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>   <p className='flex items-center gap-4 '>
                    <span>2002</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
            </div>
        </div>
        <YearStatistics/>
    </div>
  )
}

export default ModelStatistics