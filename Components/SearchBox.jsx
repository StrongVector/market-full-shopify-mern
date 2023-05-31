import React from 'react'

const SearchBox = () => {
  return (
    <div className='bg-slate-800 text-white rounded-lg p-4 
    flex flex-col justify-center items-center gap-6'>
        <p>البحث برقم الإستغاثة أو رقم اللوحة أو رقم الشاسي</p>


      

  <input type="text"  className="mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500  w-full rounded-md flex justify- place-content-center
     sm:text-sm focus:ring-1" placeholder="ابحث هنا"  />
     <button className='bg-orange-400 px-6 py-2 font-medium rounded-lg shadow-lg'>بحث</button>
     <div className='flex justify-between items-center gap-4 flex-col md:flex-row md:gap-4'>
    <p className='cursor-pointer px-3 py-1 border border-white rounded-lg'>تسجيل فقدان جديد</p>
    <p className='cursor-pointer border border-white rounded-lg px-3 py-1'>البحث في العربات المسجلة</p>
    </div>
    </div>
  )
}

export default SearchBox