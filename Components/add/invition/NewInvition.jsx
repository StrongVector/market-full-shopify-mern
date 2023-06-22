import React from 'react'
import SubTitle from '../../Utils/SubTitle'
import InvitionForm from './InvitionForm'

const NewInvition = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <SubTitle title={'أضف مبادرة جديدة'}/>
        <InvitionForm/>
    </div>
  )
}

export default NewInvition