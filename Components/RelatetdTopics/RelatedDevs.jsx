import React from 'react'
import HelpAdivces from './HelpAdivces'
import Initiatives from './Initiatives'
import ImportantQuestions from './ImportantQuestions'

const RelatedDevs = () => {
  return (
    <div className='flex justify-center items-start gap-3 flex-wrap mb-4'>
<HelpAdivces/>
<Initiatives/>
<ImportantQuestions/>
    </div>
  )
}

export default RelatedDevs