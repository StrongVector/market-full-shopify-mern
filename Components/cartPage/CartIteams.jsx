import React from 'react'
import { useSelector } from 'react-redux';
import CartList from './CartList';


const CartIteams = () => {
    const iteams = useSelector(state=>state.cart);

  return (
    <div>
        <p className='bg-blue-600 rounded-lg text-white my-3 w-fit px-16 py-2 text-center text-lg font-medium'>
            {iteams.length ===0 ?` Your cart is empty`:` you have ${iteams.length} elements `}
        </p>
        <CartList data={iteams}/>
    </div>
  )
}

export default CartIteams