"use client"
import React from 'react'
import SubTitle from '../SubTitle'
import CardsList from '../CardsList'

import Pagginations from '../Pagginations'
// import { useRouter } from 'next/router'

const Losted = () => {
  // const model =use
  // console.log(model.query);
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