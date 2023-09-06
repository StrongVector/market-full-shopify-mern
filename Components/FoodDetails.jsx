import Image from "next/image";
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";

import { useDispatch } from "react-redux";
import { BuyEl } from "../redux/CartSlice";

const FoodDetails = ({ data }) => {
  const [stuts, setStuts] = useState("Buy");
  const [isDesible, setIsDesible] = useState(false);

  const dispatch = useDispatch();
  const hundleBuy = (data) => {
    setStuts("Added");
    setIsDesible(true);
    const el = { ...data, quantity: 1 };
    dispatch(BuyEl(el));
  };
  return (
    <div
      className="flex justify-center items-center
     bg-white gap-x-96 min-h-[90dvh] gap-y-4 p-4 lg:pt-8 flex-wrap-reverse "
    >
      <section className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center gap-3 text-lg">
          <h1 className="text-2xl font-bold ">{data.title}</h1>
          <p className="flex justify-center items-center gap-2">
            <span>{data.rate}</span>
            <span>
              <MdStarRate className="text-yellow-400" />
            </span>
          </p>
          <p className="text-sm text-slate-600 font-light">
            {data.description}
          </p>
          <p className="text-blue-600">{`${data.price}$`}</p>
        </div>
        <div className="">
          <button
            disabled={isDesible}
            onClick={() => hundleBuy(data)}
            className="  px-4 text-lg font-semibold py-1
             text-white bg-blue-600 rounded-lg cursor-pointer"
          >
            {stuts}
          </button>
        </div>
      </section>
      <section>
        <Image
          src={data.img}
          alt="detail-img"
          className="w-[260px] 
            md:w-[310px] md:h-[310px] h[260px object-co"
        />
      </section>
    </div>
  );
};

export default FoodDetails;
