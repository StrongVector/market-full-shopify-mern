"use client";

import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { BsFillCartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { BiLogIn, BiSearch } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import Link from "next/link";
import { useSelector } from "react-redux";

// IoRestaurantSharp

const NavBar = () => {
  const cart = useSelector((state) => state.cart);

  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className=" m-0  px-8 bg-blue-600 text-white w-screen">
      {/* mobile nav */}
      <div className="container mx-auto  md:hidden flex justify-between items-center flex-wrap px-2 pl-3 py-4">
        <Link
          href="/"
          className="text-white flex justify-center items-center gap-2 cursor-pointer"
        >
          <span>
            <BsShop className="text-3xl" />
          </span>
          <span className="text-2xl -mt-1 font-bold text-white">SHOPIFY</span>
        </Link>
        <span onClick={handleToggle}>{<FiMenu className="text-3xl" />}</span>

        {toggle && (
          <div className="w-screen text-center mt-8 text-white">
            <ul className="flex flex-col items-center gap-2">
              <Link
                href="/"
                className="text-white flex justify-center items-center gap-1
           link"
              >
                <span>
                  <AiFillHome className="text-xl" />
                </span>
                <span>Home</span>
              </Link>
              <Link
                href="/products"
                className="text-white flex justify-center items-center gap-1 link"
              >
                <span>
                  <GiShoppingBag className="text-xl" />
                </span>
                <span>Products</span>
              </Link>
              <Link
                href="/cart"
                className="text-white flex justify-center items-center gap-1 link"
              >
                <span>
                  <BsFillCartFill className="text-white text-xl" />
                </span>
                <span>Cart ( {cart.length} )</span>
              </Link>
              {/*  */}
              <Link
                href="/login"
                className="text-white flex justify-center items-center gap-1 link"
              >
                <span>
                  <BiLogIn className="text-xl" />
                </span>
                <span>Login</span>
              </Link>
              <Link
                href="/search"
                className="text-white flex justify-center items-center gap-1 link"
              >
                <span>
                  <BiSearch className="text-xl" />
                </span>
                <span>Search</span>
              </Link>
            </ul>
          </div>
        )}
      </div>

      {/* desktop nav */}
     
      <div
        className=" hidden md:flex md:w-screen
     flex-row  py-4 justify-start items-center md:gap-24 lg:gap-96"
      >
        <Link
          href="/"
          className="text-white flex justify-center items-center gap-2 cursor-pointer"
        >
          <span>
            <BsShop className="text-3xl" />
          </span>
          <span className="text-2xl -mt-1 font-bold text-white">SHOPIFY</span>
        </Link>
        <ul className="flex justify-center items-center gap-6 lg:ml-24">
          <Link
            href="/"
            className="text-white flex justify-center items-center gap-1 hover:opacity-70"
          >
            <span>
              <AiFillHome className="text-xl" />
            </span>
            <span>Home</span>
          </Link>
          {/*  */}
          <Link
            href="/products"
            className="text-white flex justify-center items-center gap-1 hover:opacity-70"
          >
            <span>
              <GiShoppingBag className="text-2xl text-white" />
            </span>
            <span>Products</span>
          </Link>
          <Link
            href="/cart"
            className="text-white flex justify-center items-center gap-1 hover:opacity-70"
          >
            <span>
              <BsFillCartFill className="text-xl" />
            </span>
            <span>Cart ( {cart.length} )</span>
          </Link>
          <Link
            href="/search"
            className="text-white flex justify-center items-center gap-1 hover:opacity-70"
          >
            <span>
              <BiSearch className="text-2xl" />
            </span>
            <span>search</span>
          </Link>
          <Link
            href="/login"
            className="text-white flex justify-center items-center gap-1 hover:opacity-70"
          >
            <span>
              <BiLogIn className="text-2xl" />
            </span>
            <span>Login</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
// IoRestaurantSharp

export default NavBar;
