import React from 'react'
import SubTitle from './SubTitle'
import CardsList from './CardsList'
import Pagginations from './Pagginations'

const CurruntlyAddedCars = () => {
    let cars = [
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665},
    ]
  return (
    <div>
        <SubTitle title= {"العربات المضافه حديثا"}/>
        <CardsList data ={cars}/>
      <Pagginations/>
    </div>
  )
}

export default CurruntlyAddedCars