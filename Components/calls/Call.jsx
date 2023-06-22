import React from 'react'
import SubTitle from '../Utils/SubTitle'
import CallDescription from './CallDescription'
import CallContact from './CallContact'

const Call = () => {
  return (
    <div className='flex flex-col justify-center items-center gab-4 p-4'>
    <SubTitle title ={'عربية مفقودة'}/>
    <CallDescription/>
    <CallContact/>
    </div>
  )
}

export default Call