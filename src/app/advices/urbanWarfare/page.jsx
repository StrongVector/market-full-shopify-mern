import React from 'react'
import UrpanWarfare from '../../../../Components/SaftyAdvices/urbanwarfare/UrpanWarfare'
import SubTitle from '../../../../Components/Utils/SubTitle'

const page = () => {
  return (
    <div className='flex flex-col my-4'>
        <SubTitle title={'أرشادات أثناء حرب المدن'} className = 'items-center'/>
        <UrpanWarfare/>
    </div>
  )
}

export default page