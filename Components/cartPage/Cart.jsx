import React from 'react'
import { useSelector } from 'react-redux';
import CartIteams from './CartIteams';
import Checkout from './Checkout';

const Cart = () => {

  return (
    <main className=' w-fit flex flex-col justify-center items-start flex-wrap gap-y-4 lg:gap-x-80 p-6'>
        <section className='flex-grow'><CartIteams/></section>
        <section><Checkout/></section>

    </main>
  )
}

export default Cart