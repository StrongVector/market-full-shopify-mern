import React from 'react'
import LostedCarsBystuts from './acourdingStatus/LostedCarsBystuts'

import ModelStatistics from './accordingModel/ModelStatistics'
import CompanyStatistics from './acordingcompany/companyStatistics'
import CityStatistics from './accordingCity/CityStatistics'
import ResonStatistics from './accordingReson/ResonStatistics'
import SubTitle from '../SubTitle'

const SiteStatistics = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-6 '>
        <SubTitle title={'الأحصائيات'} className ='my-3'/>
        <LostedCarsBystuts/>
        <ModelStatistics/>
        <CompanyStatistics/>
        <CityStatistics/>
        <ResonStatistics/>
        
        
        </div>
  )
}

export default SiteStatistics