import React from 'react'
import Footer from './Footer'
import SudaneseTaem from './SudaneseTaem'

const SiteFooter = () => {
  return (
    <div className='lg:w-full flex flex-col justify-center items-center gap-2 bg-slate-800 text-white p-4'>
        <Footer/>
        <SudaneseTaem/>
        <h2 className='font-bold text-xl mt-4 mb-1'>الفريق السوداني للاستجابة للكوارث</h2>
    </div>
  )
}

export default SiteFooter