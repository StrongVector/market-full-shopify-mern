import React from 'react'

const WorkFields = () => {
    const workFields =[]
  return (
     
    <div className='flex flex-col gap-4 p-4
    bg-white shadow-lg rounded-lg'>
       <h2 className='text-2xl font-semibold text-right'>
            مجالات العمل
       </h2>
       <div>
        {
            workFields.length === 0?<h2 className='text-2xl font-semibold'>لا توجد مجالات عمل</h2>
            :
            workFields.map((iteam,ind)=>{
                return(
                    <p key={ind} className='flex justify-start items-center gap-2'>
                        <span className='text-sm'>{(ind +1)+ ' - '}</span>
                        <span className=' text-slate-800 font-light mb-2 '>{iteam.data}</span>
                    </p>
                )
            })
        
           
}
          
       </div>
   </div>
  )
}

export default WorkFields