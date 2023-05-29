import React from 'react'

const Initiatives = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-8 bg-white rounded-lg 
    shadow-lg w-10/12 md:w-auto'>
        <div className='flex justify-between gap-8 items-center'>
            <p className='font-semibold mb-3 text-lg md:text-xl' >مبادرات يمكن التواصل معها</p>
            <p className=' w-fit hover:opacity-60 cursor-pointer  px-2 py-1 rounded-lg bg-orange-400 text-white'> سجل مبادرة</p>

        </div>
        <p className=' w-full cursor-pointer'>
                 
                <span>مبادرة نداء حوجات
                </span>
            </p>

            <p className=' w-full cursor-pointer'>
             
                <span> 
مبادرة سلامات السودان
                </span>
            </p>

            <p className=' w-full cursor-pointer'>
                    
                <span>
                    مبادرة نداء السودان
                </span>
            </p>

            <p className=' w-full cursor-pointer'>
                 
                 <span>مبادرة نداء حوجات
                 </span>
             </p>
 
             <p className=' w-full cursor-pointer'>
              
                 <span> 
                    مبادرة مأوى
                 </span>
             </p>
 
             <p className=' w-full cursor-pointer'>
                     
                 <span>
مبادرة الفريق السوداني للاستجابه للكوارث                 
</span>
             </p>
    </div>
  )
}

export default Initiatives