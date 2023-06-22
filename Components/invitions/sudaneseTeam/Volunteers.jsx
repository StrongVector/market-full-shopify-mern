import React from 'react'

const Volunteers = () => {
    const volunteers =[
        {name:'أبوبكر الطائف',phone:'0963144047'},
        {name:'نسمة مبارك',phone:'0902579871'},
        {name:'محمد عوض',phone:' 0996040724'},
        {name:'ايسر الجنيد',phone:'0990559956'},
        {name:'حسام الدين عبدالله ',phone:' 0969778457'},
        {name:'جواهر صديق الامين',phone:'0113234102'},


    ]
  return (
    <div className='flex flex-col gap-4 p-4 
    bg-white shadow-lg rounded-lg'>
       <h2 className='text-2xl font-semibold text-right'>
            قائمة المتطوعين
               </h2>
       <div>
       {
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