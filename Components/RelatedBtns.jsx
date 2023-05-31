import React from 'react'

const RelatedBtns = () => {
  return (
    <div className='flex justify-center items-center gap-4 flex-wrap p-2'>
        <a href='https://tnseeg.net/cases/report'
         className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
            تحليل اسباب الفقدان
        </a>
        <a href='https://tnseeg.net/statistics'

         className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
تحليل البيانات
{/* https://tnseeg.net/statistics */}
        </a>
        <a href='https://tnseeg.net/cases/report'

        className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
            تحليل اسباب الفقدان
        </a>
        <a href='https://web.facebook.com/TnseegSudan'

         className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
         {/*  */}
         انضم لنا في الواتساب
        </a>

        <a href='https://web.facebook.com/TnseegSudan'

         className='px-2 py-2 text-orange-400 border border-orange-400
         hover:bg-orange-400 font-medium hover:text-white  text-sm rounded-lg bg-white'>
          {/* https://web.facebook.com/TnseegSudan */}
          تنسيق علي فيسبوك
        </a>

    </div>
  )
}

export default RelatedBtns