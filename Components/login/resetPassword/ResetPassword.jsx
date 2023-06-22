import React from 'react'
import SubTitle from '../../Utils/SubTitle'

const ResetPassword = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3  mt-3 w-fit 
     '>
        <div className='bg-white rounded-lg shadow-lg p-6'>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <p className='text-slate-600 font-light'>قم بإدخال عنوان بريدك الألكتروني حتى يصلك رابط التجديث</p>
        <input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="عنوان بريدك الالكتروني"/>
       <button className='bg-orange-400 text-white px-4 py-2 
       font-medium rounded-lg shadow-lg mt-2 hover:opacity-90'>إرسال</button>
     </div>
     </div>
    </div>
  )
}

export default ResetPassword