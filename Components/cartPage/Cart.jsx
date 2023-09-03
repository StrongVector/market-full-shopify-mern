import React from 'react'
// import { useSelector } from 'react-redux';
import CartIteams from './CartIteams';
import Checkout from './Checkout';

const Cart = () => {

  return (
    <main className=' container mx-auto flex  justify-between items-start flex-wrap lg:flex-nowrap   p-3 '>
        <section className='flex-grow'><CartIteams/></section>
        <section><Checkout/></section>

    </main>
  )
}

export default Cart