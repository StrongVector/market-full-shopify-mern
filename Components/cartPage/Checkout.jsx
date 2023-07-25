import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [discount,setDescount] = useState(0);
    const iteams = useSelector(state=>state.cart);
  //  useEffect(()=>{
  //   if(iteams.length >= 1)
  //   setDescount(10 + Math.ceil(Math.random()*20));
  //  },[discount])
    const Prices = iteams.map((iteam)=>{return (iteam.price*iteam.quantity)});
    let finalPrice = 0;
    for(let i =0;i<Prices.length;i++)
    finalPrice += Prices[i];


  return (
    <main className='w-64   p-3 
     rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] pb-3'>
        <div className='flex flex-col justify-center items-center gap-2 mt-2 pb-3'>
            <h3 className='text-center text-lg font-semibold'>Bill</h3>
            <p className=' '>
              {`Total Price    :   `}
              <span className='font-semibold text-blue-600'>
                ${finalPrice}
                </span></p>
            <p className=''>
              {`discount       :   `}
              <span className='font-semibold text-blue-600'>${discount}</span></p>
            <p className='  '>{`final price    :   `}
            <span className='font-semibold text-blue-600'>${(finalPrice - discount)}</span></p>

            <p className='px-3 py-1 mt-2 rounded-lg shadow-lg bg-blue-600 text-white hover:cursor-pointer hover:opacity-90'>Chekout</p>
        </div>
        
    </main>
  )
}

export default Checkout