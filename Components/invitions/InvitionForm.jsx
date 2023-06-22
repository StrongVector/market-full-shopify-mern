import React from 'react'

const InvitionForm = () => {
  return (
    <div className='flex flex-col gap-4 p-4 
    bg-white shadow-lg rounded-lg'>
       <h2 className='text-2xl font-semibold text-right'>
            الانضمام للمبادرة
        </h2>
        <div className='flex flex-col'>
        {/* <div className=' flex-col justify-center items-center gap-1 text-center
 bg-white w-full p-6 pb-1
'> */}
          <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'> الأسم</p>
<input type="text"  className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
      
       {/* </div> */}
       {/* <div className=' flex-col justify-center items-center gap-1 text-center
 bg-white w-full p-6 pb-3
'> */}
                 <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>المدينة</p>
<input type="text"  className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>التصنيف</p>
<input type="text"  className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>رقم الهاتف</p>
<input type="text"  className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
     <button className='bg-orange-400 text-white px-6 w-24 text-center self-center py-2 font-medium rounded-lg 
     shadow-lg mt-4
     hover:opacity-80'>تسجيل</button>
       {/* </div> */}
       </div>
   </div>
  )
}

export default InvitionForm