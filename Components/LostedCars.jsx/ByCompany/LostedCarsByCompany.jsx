import React from 'react'
import CardsList from '../../Utils/CardsList'

import Pagginations from '../../Utils/Pagginations'

const LostedCarsByCompany = () => {
    let cars = [
        {company:'تويوتا',quantity:84},
        {company:'هونداي',quantity:64},
        {company:'كيا',quantity:20},
        {company:'ميتسوبيشي',quantity:84},
        {company:'نيسان',quantity:84},
        {company:'باجاج',quantity:84},
        {company:'لكسز',quantity:14},


    ]
  return (
    <div>

            <CardsList data ={cars}/> 
            <Pagginations/>
        
    </div>
  )
}

export default LostedCarsByCompany 