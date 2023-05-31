import React from 'react'

const RecordingForm = () => {
  return (
    
<div className=' flex-col justify-center items-center gap-3 text-center
 bg-white w-full p-6 pb-3
'>
 <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>المدينة</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" اكتب المدينة"/>
     </div>   
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>نوع العربية</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" مثلا بوكسي"/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>الشركه المصنعه</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" مثلا تويوتا"/>
     </div> 
     <div className='flex flex-col justify-start items-start  gap-2 mb-4'>
<p className='text-right'>رقم اللوحة</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>سنة الصنع</p>
<input type="text"  className="w-64 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 

     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الشاسيه</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 

     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>اللون</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 pla focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>وصف عام</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500 text-sm  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" علامات مميزة للعربية"/>
     </div> 

     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>سبب الفقدان</p>
<input type="text"  className="w-64 mt-1 flex-grow px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="   "/>
     </div> 

     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>مكان الفقد</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="        "/>
     </div> 

     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>اسمك</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الهاتف</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم هاتف بديل</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
      
     <button className='bg-orange-400 text-white px-6 py-2 font-medium rounded-lg shadow-lg mt-8
     hover:opacity-60'>بحث</button>
</div>
  )
}

export default RecordingForm