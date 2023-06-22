import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto p-3 w-fit'>
         <div className='flex flex-col justify-center items-start gap-2 mb-4'>
<p className='text-right'>اسم المستخدم</p>
<input type="text"  className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
             <div className='flex flex-col justify-center items-start gap-2 mb-4'>
<p className='text-right'>كلمة المرور</p>
<input type="text"  className="w-64 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1" placeholder=""/>
     </div>
           
     <button className='bg-orange-400 text-white px-6 py-2 font-medium rounded-lg shadow-lg mt-8
     hover:opacity-90'>بحث</button>
     <div className=' flex flex-col justify-center items-center gap-2 my-3'>
        <Link href='/accounts/password/reset' 
        className='text-orange-400 font-light hover:text-orange-600'>هل نسيت كلمة المرور ؟</Link>
        <Link href='/register/as/volunteer/' className='text-orange-400 font-light 
         hover:text-orange-600'>سجل كمتطوع</Link>

     </div>
    </div>
  )
}

export default LoginForm