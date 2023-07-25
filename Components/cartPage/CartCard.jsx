import Image from "next/image";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity } from "../../redux/CartSlice";
// import { decQuantity, incQuantity } from "../../redux/CartSlice";

const CartCard = ({ data }) => {
  // const [qunatity, setQuantity] = useState(1);
  // let  value = useSelector((state) => state.cart).filter((as) => {
  //   return as.id === data.id;
  // });

  
    const dispach = useDispatch()

  const incrementQty = (data) => {
    dispach(incQuantity(data))
    //  incQuantity(data);
    
    // console.log("incing " +data.quantity);
    // console.log(`from cartcard quantity ${value[0].quantity}`);
    // setQuantity(value[0].quantity)
    
  };

  const decrementQty = (data) => {
   
    dispach(decQuantity(data));
    // console.log("decning");
  };

  return (
    <main
      className=" bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] 
     p-3
    flex flex-col justify-center items-center gap-2"
    >
      <section>
        <Image src={data.img} alt="food" className="w-44 h-36" />
      </section>

      <section className="">
        <div className="flex flex-col justify-center items-center gap-1  ">
          <h2 className="font-bold text-2xl mb-1">{data.title}</h2>
          
          <section className="flex flex-col justify-center items-center gap-2 mt-1">

          <p className="flex flex-row justify-center items-center gap-3">
            <span className="text-blue-600 font-medium text-lg ">
              quantity 

              </span>

              <span className="text-white bg-blue-600 font-medium rounded-full px-2 py-1 ">
              {data.quantity}

              </span>
              

            </p>
            <div className="flex justify-center items-center gap-2 mt-1">
            <p
              onClick={() => incrementQty(data)}
              className="font-semibold px-2 text-lg py-1 cursor-pointer rounded-sm border bg-blue-600 text-white"
            >
              +
            </p>
           
            <span className="text-blue-600 font-medium text-lg">
              {data.price *  data.quantity}$

              </span>
            <p
              onClick={() => decrementQty(data)}
              className=" rounded-sm text-lg  font-semibold px-2 py-1 cursor-pointer bg-blue-600 text-white"
            >
              -
            </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default CartCard;
