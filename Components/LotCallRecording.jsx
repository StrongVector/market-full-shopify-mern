import React from 'react'

const LotCallRecording = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col justify-start    items-center gap-3  rounded-md'>
      
        {/* <div> */}
        <div className=' flex flex-col gap-4 border border-slate-300 rounded-2xl shadow-lg'>
          
<div className='flex flex-col items-end justify-end w-full gap-2 bg-white p-6  rounded-2xl'>
<p className='font-medium text-[20px]  mb-6'>
            تسجيل نداء فقدان عربيه أو عربيه مجهولة
        </p>
    <p className='justify-self-start text-right text-[18] font-medium'>التصنيف</p>
        <div className="flex items-center mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" onChange={()=>{}}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
      dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1"
     className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">عربيه مفقودة</label>
</div>
<div className="flex items-center -mt-2">
    <input checked id="default-radio-2" type="radio" value=""onChange={()=>{}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
     dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900
     dark:text-gray-300">عربيه مجهولة</label>
</div>

<div className=' flex-col justify-center items-center gap-3 text-center bg-white w-full p-8 pb-3
'>
 <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>المدينة</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                            اكتب المدينة"/>
     </div>   
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>نوع العربية</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                               مثلا بوكسي"/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>الشركه المصنعه</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                                مثلا تويوتا"/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>رقم اللوحة</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                             "/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>سنة الصنع</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                             "/>
     </div> 

     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>رقم الشاسيه</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                             "/>
     </div> 

     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>اللون</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 pla focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" "/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>وصف عام</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500 text-sm  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="                     علامات مميزة للعربية"/>
     </div> 

     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>سبب الفقدان</p>
<input type="text"  className="mt-1 flex-grow px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="   "/>
     </div> 

     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>مكان الفقد</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="        "/>
     </div> 

     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>اسمك</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="    "/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>رقم الهاتف</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
     <div className='flex flex-row-reverse justify-center items-center gap-4'>
<p className='w-24'>رقم هاتف بديل</p>
<input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="  "/>
     </div> 
      
     <button className='bg-orange-400 px-6 py-2 font-medium rounded-lg shadow-lg mt-8
     hover:opacity-60'>بحث</button>
</div>
</div>

</div>


        {/* </div> */}

    </div>
  )
}

export default LotCallRecording