import React from 'react'
import SiteChart from './SiteChart'

const LostedCarsBystuts = () => {
  return (
    <div className=' mx-auto md:w-auto flex flex-wrap justify-center items-center  gap-4 p-4 pt-8 md:gap-10
    rounded-lg shadow-lg  bg-white'>
        <div>
            <h3 className='font-semibold'>العربات المفقودة حسب الحالة</h3>
            <div className="relative overflow-x-auto my-3">
    <table className="w-full text-sm  text-gray-500 border border-x-slate-300 dark:text-gray-400 text-center">

        <thead className="text-xs text-gray-100 uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-2 py-3 text-center w-fit">
                    الحالة
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
عربية مفقودة                </th>
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
عربية مجهولة</th>
                <td className="px-2 py-4">
                    550
                </td>
                <td className="px-2 py-4">
                    90%
                </td>
              </tr>
            
            
        </tbody>
    </table>
</div>
        </div>
        <SiteChart/>
    </div>
  )
}

export default LostedCarsBystuts