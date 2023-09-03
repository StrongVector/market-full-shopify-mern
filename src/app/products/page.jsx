'use client'
import React, { useEffect, useState } from 'react'
import CategoriesList from '../../../Components/foodPage/CategoriesList'
import SubTitle from '../../../Components/Utils/SubTitle'
import CardsList from '../../../Components/Utils/CardsList'


import productsList from '../../../Data'


const Food  = () => {
  const [mounted,setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  })
  return (
    mounted == false ? null:
  
    <div className='pt-8'>
        <SubTitle title= {'Categories'}/>
        <CategoriesList/>
  <SubTitle title ={' featured List'}/>

        <CardsList data={productsList}/>
    </div>
  )
}

export default Food 