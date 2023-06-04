import React from 'react'

import ResonChart from './ResonChart'

const ResonStatistics = () => {


  return (
    <div className=' w-10/12 mx-auto md:w-auto flex flex-wrap justify-center items-start gap-0 p-4 pt-8 md:gap-1
    md:mb-1
    rounded-lg shadow-lg  bg-white'>
            <div>
            <h3 className='font-semibold'>العربات المفقودة حسب  سبب الفقدان</h3>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-4 '>
                <span>سرقة</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>نهب مسلح</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                <span>غير محدد</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
              
            </div>
        </div>
        <ResonChart/>
    
    </div>
  )
}






export default ResonStatistics