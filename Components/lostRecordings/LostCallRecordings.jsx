import React from 'react'
import RecordingForm from './RecordingForm'

const LostCallRecordings = () => {
  return (
    <div id='addLostCall' className='container mx-auto  flex flex-col justify-start
        items-center gap-2  rounded-md'>
        <div className=' flex flex-col gap-3 border border-slate-300 rounded-2xl shadow-lg'>
 
<div className='flex flex-col items-center justify-center w-full gap-2
 bg-white p-6  rounded-2xl'>
<p className='font-medium text-[18px]  mb-6'>
            تسجيل نداء فقدان عربيه أو عربيه مجهولة
        </p>
    <p className=' text-right justify-items-end text-[18] font-medium mt-4'>التصنيف</p>
        <div className='flex justify-center items-center gap-2 mt-4'>
        <div className="flex items-center mb-4 mt-2">
    <input id="default-radio-1" type="radio" value="" name="default-radio" onChange={()=>{}}
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
     dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
      dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1"
     className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300">عربيه مفقودة</label>
</div>
<div className="flex items-center -mt-2">
    <input checked id="default-radio-2" type="radio" value=""onChange={()=>{}} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
    focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2
     dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="mr-2 text-sm font-medium text-gray-900
     dark:text-gray-300">عربيه مجهولة</label>
     </div>
</div>
<RecordingForm/>

</div>

</div>


        {/* </div> */}

    </div>
  )
}

export default LostCallRecordings