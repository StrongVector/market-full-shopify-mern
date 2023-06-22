import React from 'react'
import {SiGmail} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'
import Link from 'next/link'



const Footer = () => {
  return (
  <div className='flex justify-center gap-32'>
   <div className='flex flex-col justify-center items-center gap-4'>
    <h3 className='text-lg'>روابط مهمة</h3>
    <div className='flex flex-col gap-2'>
      <Link href='/'>احصائيات</Link>
      <Link href='/'>ميثاق الطوارئ</Link>

    </div>
   </div>
   <div className='flex flex-col justify-center items-center gap-4'>
   <h3 className='text-lg'>اتصل بنا</h3>
   <div className='flex flex-col gap-2'>
      <a href='mailto:tnseeg.sd@gmail.com'>tnseeg.sd@gmail.com</a>
      <div className='flex justify-center items-center gap-4'>
      <a target='-blank' href='https://chat.whatsapp.com/H4XG0PZBOJNBIDylXslrxO'><ImWhatsapp/></a>
      <a target='-blank' href='https://web.facebook.com/TnseegSudan'><BsFacebook/></a>
      </div>

    </div>

   </div>
  </div>
  )
}

export default Footer