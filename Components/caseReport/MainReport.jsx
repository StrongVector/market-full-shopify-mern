import React from 'react'
import SubTitle from '../SubTitle'
import TheftReport from './TheftReport'
import ArmedRobbery from './ArmedRobbery'
import UnDefindReson from './UnDefindReson'

const MainReport = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 p-2 pt-4'>
        <SubTitle className ='mt-4' title ={"تحليل أسباب الفقدان "}/>
        <TheftReport/>
        <ArmedRobbery/>
        <UnDefindReson/>
    </div>
  )
}

export default MainReport