import React from 'react'

import ResonChart from './ResonChart'

const ResonStatistics = () => {


  return (
    <div className='  mx-auto md:w-auto flex flex-wrap justify-center items-center gap-0 p-4 pt-8 md:gap-1
    md:mb-1
    rounded-lg shadow-lg  bg-white'>
            <div>
            <h3 className='font-semibold'>العربات المفقودة حسب  سبب الفقدان</h3>
            <div>
     
            <div className="relative overflow-x-auto my-3">
    <table className="w-full text-sm  text-gray-500 border border-x-slate-300 dark:text-gray-400 text-center">

        <thead className="text-xs text-gray-100 uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-2 py-3 text-center w-fit">
                    السبب
                </th>
                <th scope="col" className="px-2 py-3">
                    العدد
                </th>
                <th scope="col" className="px-2 py-3">
                    النسبة
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        النهب المسلح
                </th>
                <td className="px-2 py-4">
                    550
                </td>
                <td className="px-2 py-4">
                    90%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
السرقة                </th>
                <td className="px-2 py-4">
                    250
                </td>
                <td className="px-2 py-4">
                    80%
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
          غير مدد
                </th>
                <td className="px-2 py-4">
                    350
                </td>
                <td className="px-2 py-4">
                    77%
                </td>
              </tr>
            
        </tbody>
    </table>
</div>
           
        </div>
              
           
        </div>
        <ResonChart/>
    
    </div>
  )
}






export default ResonStatistics