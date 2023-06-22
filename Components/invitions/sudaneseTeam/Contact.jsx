import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col gap-4 p-4 
    bg-white shadow-lg rounded-lg'>
       <h2 className='text-2xl font-semibold text-right'>
            بيانات الاتصال
       </h2>
       <div>
           <p className=' text-slate-800 font-light mb-2 '>
           0963144047
           </p>
           <a href='mailto:tnseeg.sd@gmail.com' className=' text-slate-800 font-light  '>
           tnseeg.sd@gmail.com
           </a>
       </div>
   </div>
  )
}

export default Contact