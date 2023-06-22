import React from 'react'

const Volunteers = () => {
    const volunteers = []
  return (
    <div className='flex flex-col gap-4 p-4 
    bg-white shadow-lg rounded-lg'>
       <h2 className='text-2xl font-semibold text-right'>
            قائمة المتطوعين
               </h2>
       <div>
       {
        volunteers.length === 0 ?<h2 className='text-2xl font-semibold'>لا يوجد متطوعين</h2>:
            volunteers.map((iteam,ind)=>{
                return(
                    <div key={ind} className='flex justify-start items-center gap-2'>
                        <span className='text-sm'>{(ind +1)+ ' - '}</span>
                        <p className='flex items-center gap-2'>
                        <span className=' text-slate-800 font-light mb-2 w-32 '>
                            {iteam.name   }
                            </span>
                            <span className='text-slate-800 font-light'>
                           { iteam.phone} 
                            </span>
                        </p>
                    </div>
                )
            })
        
           
}
       </div>
   </div>
  )
}

export default Volunteers