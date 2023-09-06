"use client";
import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import SubTitle from "../../Components/Utils/SubTitle";
import CardsList from "../../Components/Utils/CardsList";
import foodImg from "../../public/imgs/heroLogo.jpg";
import FoodList from "../../Data";
import productsList from "../../Data";
import ScrollList from "../../Components/Utils/ScrollList";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });

  return mounted == false ? null : (
    <main className=" overflow-hidden  flex flex-col justify-center items-center gap-3 ">
      <section className="w-screen">

      <Hero/>
      </section>

      <section className="container mx-auto flex flex-col justify-center items-center gap-3">
      <section>

      <SubTitle title={"Best Products"} />
      <CardsList data={productsList.slice(0, 5)} />
      {/* <ScrollList/> */}
      </section>

      <section>

      <SubTitle title={"Most Rated"} />
      <CardsList data={productsList.slice(4, 9)} />
      </section>
      </section>
    </main>
  );
};

export default Home;
