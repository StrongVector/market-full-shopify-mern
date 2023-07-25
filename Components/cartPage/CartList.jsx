import React from 'react'
import CartCard from './CartCard';

const CartList = ({data}) => {
  
  return (
    <div className=' container mx-auto mt-4 lg:mt-2 flex flex-row justify-center items-center gap-3 flex-wrap p-4'>
      {data.map((car,ind)=>{return(<CartCard key ={ind} data ={car}/>)})}
     
       
    </div>
  )
}

export default CartList