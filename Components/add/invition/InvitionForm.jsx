import React from 'react'

const InvitionForm = () => {
  return (
    <div className=''>
      <div className=' flex-col justify-center items-center gap-3 text-center
 bg-white w-full p-6 pb-3 rounded-lg
'>
 <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>الاسم</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div>  
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>الأسم المختصر</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" />
     </div>  
 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الهاتف</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>  البريد الالكتروني</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>نبذة مختصرة</p>
<textarea  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "></textarea>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'> العنوان</p>
<textarea  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "></textarea>
     </div> 
     <div>
        <p className='py-3 font-semibold'>تم التسجيل بواسطة</p>
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>اسمك</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div>
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الهاتف</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div>
     </div>

     <button className='bg-orange-400 text-white px-6 py-2 font-medium rounded-lg shadow-lg mt-8
     hover:opacity-80'>حفظ</button>
</div>
    </div>
  )
}

export default InvitionForm