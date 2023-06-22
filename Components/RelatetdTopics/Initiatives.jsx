import Link from 'next/link'
import React from 'react'

const Initiatives = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-8 bg-white rounded-lg 
    shadow-lg w-10/12 md:w-auto'>
        <div className='flex justify-between gap-8 items-center'>
            <p className='font-semibold mb-3 text-lg md:text-xl' >مبادرات يمكن التواصل معها</p>
            <Link href='/add/new/invition' 
             className=' w-fit hover:opacity-30 cursor-pointer 
             px-2 py-1 rounded-lg bg-orange-400 text-white text-sm md:text-base'> سجل مبادرة</Link>

        </div>
        <p className=' w-full cursor-pointer'>
                 
                <Link href='/register/as/volunteer/sudaneseTeam'>مبادرة نداء حوجات
                </Link>
            </p>

            <Link href='/register/as/volunteer/sudaneseTeam' className=' w-full cursor-pointer'>
             
                <span> 
مبادرة سلامات السودان
                </span>
            </Link>

            <Link href='/register/as/volunteer/sudaneseTeam' className=' w-full cursor-pointer'>
                    
                <span>
                    مبادرة نداء السودان
                </span>
            </Link>

            <Link href='/register/as/volunteer/sudaneseTeam' className=' w-full cursor-pointer'>
                 
                 <span>مبادرة نداء حوجات
                 </span>
             </Link>
 
             <Link href='/register/as/volunteer/sudaneseTeam' className=' w-full cursor-pointer'>
              
                 <span> 
                    مبادرة مأوى
                 </span>
             </Link>
 
             <Link href='/register/as/volunteer/sudaneseTeam' className=' w-full cursor-pointer'>
                     
                 <span>
مبادرة الفريق السوداني للاستجابه للكوارث                 
</span>
             </Link>
    </div>
  )
}

export default Initiatives