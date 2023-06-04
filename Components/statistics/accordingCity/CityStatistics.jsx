import React from 'react'

import CityCharts from './CityCharts'

const CityStatistics = () => {

  return (
    <div className='w-10/12 mx-auto md:w-auto flex flex-wrap justify-center items-start
      gap-4 px-4 pb-2 pt-8 md:gap-8
    rounded-lg shadow-lg  bg-white'>
            <div>
            <h3 className='font-semibold'>العربات المفقودة حسب المدينة</h3>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-4 '>
                <span>الخرطوم</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>امدرمان</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                <span>بحري</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
              
            </div>
        </div>
        <CityCharts/>
    
    </div>
  )
}






export default CityStatistics