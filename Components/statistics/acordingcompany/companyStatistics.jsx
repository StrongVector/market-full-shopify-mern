import React from 'react'
import CompanyCharts from './CompanyCharts'

const CompanyStatistics = () => {


  return (
    <div className='w-10/12 mx-auto md:w-auto flex flex-wrap justify-center items-start  gap-4 p-4 pt-8 md:gap-8
    rounded-lg shadow-lg  bg-white'>
            <div>
            <h3 className='font-semibold'>العربات المفقودة حسب  الشركة</h3>
            <div className='flex flex-col gap-3 mt-6'>
                <p className='flex items-center gap-4 '>
                <span>تايوتا</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>هونداي</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                <span>كيا</span>
                    <span> 812 عربية </span>
                    <span>98.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>هوندا</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
                <p className='flex items-center gap-4 '>
                    <span>ميتسوبيشي</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>   <p className='flex items-center gap-4 '>
                    <span>نيسان</span>
                    <span> 559 عربية </span>
                    <span>19.5</span>

                </p>
            </div>
        </div>
        <CompanyCharts/>
    
    </div>
  )
}



export default CompanyStatistics