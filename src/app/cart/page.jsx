"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../../Components/cartPage/Cart';

const CartPage = () => {
  const [mounted,setMounted] = useState(false);
  useEffect(()=>{setMounted(true)},[])
  
 
  return !mounted? null: (
    
    <div className='pt-4 min-h-[90dvh]'>
      <Cart/>
    </div>
    
  )
}

export default CartPage