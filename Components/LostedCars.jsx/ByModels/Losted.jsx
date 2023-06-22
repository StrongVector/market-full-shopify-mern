"use client"
import React from 'react'
import SubTitle from '../../Utils/SubTitle'
import CardsList from '../../Utils/CardsList'
import Pagginations from '../../Utils/Pagginations'

const Losted = () => {
  
    let cars = [
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665 ,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665 ,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665 ,model:2008},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2009},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2006},
        {title:"بوكسي ",idNum:44344,color:"ابيض",shasi:'asldkww' , 
        status:"عربية مفقودة",callId:878665,model:2009},
       
   
    ]
  return (
    <div className='flex flex-col justify-center items-center gap-4 p-2'>
        <SubTitle title={'السيارات المفقودة موديل 2006'}/>
        <CardsList data ={cars}/>
        <Pagginations/>
    </div>
  )
}

export default Losted