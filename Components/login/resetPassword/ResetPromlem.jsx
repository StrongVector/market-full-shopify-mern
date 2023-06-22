import Link from 'next/link'
import React from 'react'

const ResetPromlem = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 p-6 text-slate-600 bg-white rounded-lg shadow-lg'>
        <h3 className='text-xl font-semibold'>في حال مواجهةاي صعوبات</h3>
        <div className='flex flex-col gap-3 font-semibold'>
            <p className=''>الرجاء التواصل عبر </p>
            <div className='flex flex-col gap-1'>
                <p>0963144047</p>
                <p>tnseeq.sd.gmail.com</p>
            </div>
            <div>
                <p className='text-sm'>
                    ليس لديك حساب في المنصة فضلا قم <Link href='/login' className=' text-base text-orange-400 m-1'>بتسجيل الدخول</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default ResetPromlem