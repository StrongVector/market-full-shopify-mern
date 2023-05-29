import React from 'react'
import {SiGmail} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'



const Footer = () => {
  return (
    <div className=' w-full flex justify-between items-center gap-16 flex-wrap px-4 lg:px-24 py-3  text-white'>
        <div className='flex flex-col justify-center items-center gap-4 p-2 lg:ml-96'>
            <p className='text-lg font-medium '>روابط مهمة</p>
            <p>أحصائيات</p>
            <p>
                ميثاق الطوارئ
                </p>

        </div>
        <div className='flex flex-col  items-center gap-4 p-2 lg:mr-16'>
            <p className='text-lg font-medium '>اتصل بنا</p>

          <p className='flex items-center gap-2'>
            <spn><SiGmail/></spn>
            <spn>   tnseeg.sd@gmail.com</spn>

        </p>
        <div className='flex gap-4'>
        <p className='flex items-center gap-2'>
            <spn><ImWhatsapp/></spn>
            <spn>واتساب</spn>

        </p>
        <p className='flex items-center gap-2'>
            <spn><BsFacebook/></spn>
            <spn>فيسبوك</spn>

        </p>
        </div>
      

        </div>
        <div></div>
        <div></div>

    </div>
  )
}

export default Footer