'use client'
import React, { useEffect, useState } from 'react'
import FoodDetails from '../../../../../Components/FoodDetails';
import FoodList from '../../../../../Data';

const page = ({params}) => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true)
  })
   const {id} = params;
  const data =  FoodList.filter((iteam)=>{
        return(iteam.id == id)
   })
   console.log(data);
    
  return !mounted? null : (
    <div className='flex flex-col  min-h-[90dvh]'>
      <FoodDetails data={data[0]}/>

    </div>
  )
}

export default page