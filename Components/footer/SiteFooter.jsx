import React from 'react'
import Footer from './Footer'
import SudaneseTaem from './SudaneseTaem'

const SiteFooter = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 bg-slate-800 text-white p-6'>
    <div className='lg:w-full flex  justify-center gap-4 items-center flex-wrap 
     '>
        <SudaneseTaem/>
        <div className='flex-grow'>

        <Footer/>
        </div>
    </div>
    <h2 className='font-bold text-xl mt-4 mb-1'>الفريق السوداني للاستجابة للكوارث</h2>

    </div>
  )
}

export default SiteFooter