import React from 'react'
import Description from './Description'
import WorkFields from './WorkFields'
import InvitionForm from '../InvitionForm'
import Contact from './Contact'
import Volunteers from './Volunteers'

const SudaneseTeam = () => {
  return (
    <div className='flex flex-col gap-3 my-4 px-8'>
        <div className='flex gap-4 flex-wrap '>
            <div className='flex flex-col gap-3'>
                <Description/>
                <Contact/>
                <InvitionForm/>

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

export default SudaneseTeam