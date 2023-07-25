"use client"
import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero'
import SubTitle from '../../Components/Utils/SubTitle'
import CardsList from '../../Components/Utils/CardsList'
import foodImg from '../../public/imgs/heroLogo.jpg'
import FoodList from '../../Data'
import productsList from '../../Data'

const Home = () => {
 
const [mounted,setMounted] = useState(false);
useEffect(()=>{
  setMounted(true);
})

  return (
    mounted == false ? null:

    <main className=''>
 
  <Hero/>
  <SubTitle title ={'Best Products'}/>
  <CardsList data={productsList}/>
  <SubTitle title={'Most Rated'}/>
  <CardsList data={productsList}/>

    </main>
  )
}

export default Home