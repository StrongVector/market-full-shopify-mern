import React from 'react'
import SubTitle from '../SubTitle'

const CallContact = () => {
  return (
    <div className='flex flex-col justify-center items-center gab-6 p-4 mt-4'>
      <SubTitle title ={'شارك في عودة السيارة لصاحبها'} className ='mb-3' />
      <div className='flex flex-col justify-center items-center gab-3 p-4 mt-3
       bg-white rounded-lg shadow-lg text-black'>
   <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>اسمك
</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الهاتف
</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'
>

رقم هاتف بديل
</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>تفاصيل مهمة</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border h-16
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div> 
 
     <button className='bg-orange-400 text-white px-6 py-2  font-medium rounded-lg shadow-lg 
     hover:opacity-60'>إرسال
     </button>
      </div>
    </div>
  )
}

export default CallContact