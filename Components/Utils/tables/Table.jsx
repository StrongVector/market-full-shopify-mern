import Link from 'next/link'
import React from 'react'

const Table = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto my-4'>
        
<div className="relative overflow-x-auto">
    <table className="w-full text-sm  text-gray-500 dark:text-gray-400 text-right">

        <thead className="text-xs text-center text-gray-100 uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-2 py-3  w-fit">
                    #
                </th>
                <th scope="col" className="px-2 py-3">
                    المبادرة
                </th>
                <th scope="col" className="px-2 py-3">
                    التفاصيل
                </th>
                <th scope="col" className="px-2 py-3">
                    عدد المتطوعين
                </th>
                <th scope="col" className="px-2 py-3">
                    التسجيل
                    </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <Link href='\register/as/volunteer\sudaneseTeam' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</Link>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        2
                </th>
                <td className="px-2 py-4">
                    زواتك
                </td>
                <td className="px-2 py-4 w-fit">
                هي مبادرة اتت لسد الحاجة ، قم باضافة الحوجة الخاصة بك وسوف يتم التواصل معك لتوفيرها               </td>
                <td className="px-2 py-4 text-center">
                    0
                </td>
               
                <td className="px-2 py-4">
                   <Link Link href='\register/as/volunteer\sudaneseTeam' className=' py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</Link>
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        3
                </th>
                <td className="px-2 py-4">
نداء                </td>
                <td className="px-2 py-4 w-fit">
                منصة خاصة بنشر ومتابعة الحوجات ونداءات الإستغاثة. أو إعلانات الوفرة التي تتم عن طريق المواطنين
     </td>
                <td className="px-2 py-4 text-center">
                    1
                </td>
               
                <td className="px-2 py-4 ">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white text-center">
                        4
                </th>
                <td className="px-2 py-4">

ساعدني              
 </td>
                <td className="px-2 py-4 text-right w-fit">
              نقوم بتسهيل التواصل بين مقدمين الخدمات و الباحثين عنها في السودان     
      </td>
                <td className="px-2 py-4 text-center">
                    1
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr> <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-2 py-4 font-medium w-fit
                 text-gray-900 whitespace-nowrap dark:text-white">
                        1
                </th>
                <td className="px-2 py-4">
                    تنسيق
                </td>
                <td className="px-2 py-4 w-fit">
نهدف للربط بين المبادرات وتخفيف اثار الكارثة                </td>
                <td className="px-2 py-4 text-center">
                    11
                </td>
               
                <td className="px-2 py-4">
                   <a href='#' className='py-1 px-2 bg-orange-400 text-white rounded-lg'>انضم</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table