import React from 'react'
import CardsList from './CardsList'
import SubTitle from './SubTitle'
import Pagginations from './Pagginations'

const LostedCarsC = () => {
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
        <SubTitle title ={" العربات المفقودة حسب الشركه المنتجة"}/>
            <CardsList data ={cars}/> 
            <Pagginations/>
        
    </div>
  )
}

export default LostedCarsC