'use client'
import React from 'react'
import FoodDetails from '../../../../../Components/FoodDetails';
import FoodList from '../../../../../Data';

const page = ({params}) => {
   const {id} = params;
  const data =  FoodList.filter((iteam)=>{
        return(iteam.id == id)
   })
   console.log(data);
    
  return (
    <div className='flex flex-col'>
      <FoodDetails data={data[0]}/>

    </div>
  )
}

export default page