import Image from 'next/image'
import React from 'react'
import logo from '../../public/imgs/tnseegLogo.jpg'

const SudaneseTaem = () => {
  return (
    <div className=' flex justify-center items-start gap-3 py-2 '>
                <Image src={logo} alt ="logo" width={120} height={140}/>
    <p className='font-medium text-slate-100   flex flex-col justify-start items-start gap-2'>
                

    <span className='font-semibold text-white'>
    الفريق السوداني للإستجابة للكوارث
    
    </span>
    <span className=' w-64 text-sm'>            
    

الفريق السوداني للإستجابة للكوارث ( تنسيق ) فريق تطوعي مُتخصص في تعزيز التواصل والتنسيق
 والربط بين المبادرات التطوعية العاملة في مجال الإغاثة وتخفيف آثار الكارثة، يسعى الفريق لتحقيق الرسالة ( ننجو معاً ).
    </span> 
                </p>
     </div>
  )
}

export default SudaneseTaem