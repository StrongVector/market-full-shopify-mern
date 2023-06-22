import React from 'react'
import Description from './Description'
import Contact from './Contact'
import InvitionForm from '../InvitionForm'
import WorkFields from './WorkFields'
import Volunteers from './Volunteers'

const Saidnee = () => {
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

export default Saidnee