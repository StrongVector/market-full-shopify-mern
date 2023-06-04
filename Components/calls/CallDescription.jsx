import React from 'react'
import CallCard from './CallCard'
import CallCarInfo from './CallCarInfo'

const CallDescription = () => {
  return (
    <div className='grid grid-cols-2 bg-white p-4 gap-3 rounded-lg shadow-lg mt-4'>
        <div><CallCarInfo/></div>
        <div><CallCard/></div>


    </div>
  )
}

export default CallDescription