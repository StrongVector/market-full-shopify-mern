import React from 'react'
import HelpAdivces from './RelatedDev/HelpAdivces'
import Initiatives from './RelatedDev/Initiatives'
import ImportantQuestions from './RelatedDev/ImportantQuestions'

const RelatedDevs = () => {
  return (
    <div className='flex justify-center items-center gap-3 flex-wrap mb-4'>
<HelpAdivces/>
<Initiatives/>
<ImportantQuestions/>
    </div>
  )
}

export default RelatedDevs