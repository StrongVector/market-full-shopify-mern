import Image from 'next/image'
import React from 'react'
import logo from '../public/imgs/tnseegLogo.jpg'

const SudaneseTaem = () => {
  return (
    <div className=' flex justify-center items-start gap-3 py-2'>
                <Image src={logo} alt ="logo" width={120} height={120}/>
    <p className='font-medium text-slate-100 flex mt-2'>
                

    <span className='font-semibold text-white'>
    الفريق السوداني للإستجابة للكوارث
    
    </span>
    <span>            
    فريق تطوعي يسعى للربط بين المبادرات العاملة في مجال الأغاثة و تخفيف أثار الكارثة رسالتنا (ننجو معا)
    </span> 
                </p>
     </div>
  )
}

export default SudaneseTaem