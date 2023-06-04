import React from 'react'
import FilterdList from './FilterdList'

const FilterForm = () => {
    let cars = [
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
    ]
  return (
    <div className='flex flex-col justify-center items-center gap-3 p-2 mt-3'>
        <div className='flex flex-col justify-center items-center gap-3 p-4 w-auto md:w-96
        rounded-lg bg-white text-slate-800'>
        <p className='text-lg font-semibold'>البحث و التصفية</p>

        <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>المدينة
</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=" الخرطوم"/>
     </div> 
     <div className='flex flex-col justify-start items-start gap-2 mb-4'>
<p className='text-right'>التصنيف</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder="سيارة مفقودة"/>
     </div> 
     <button className='bg-orange-400 text-white px-6 py-2  font-medium rounded-lg shadow-lg 
     hover:opacity-60'>بحث</button>
        </div>

       <FilterdList data ={cars}/>

    </div>
  )
}

export default FilterForm