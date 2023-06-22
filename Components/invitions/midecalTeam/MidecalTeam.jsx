import React from 'react'
import Description from './Description'
import InvitionForm from '../InvitionForm'
import Contact from './Contact'
import WorkFields from './WorkFields'
import Volunteers from './Volunteers'

const MidecalTeam = () => {
  return (
    <div className='flex flex-col gap-3 my-4 px-8'>
    <div className='flex gap-4 flex-wrap '>
        <div className='flex flex-col gap-3'>
            <Description/>
            <InvitionForm/>
            <Contact/>

        </div>
        <div className='flex-grow'>
            <div className='flex flex-col gap-3'>
            <WorkFields/>
             <Volunteers/>
             </div>
        </div>
    </div>
</div>
  )
}

export default MidecalTeam