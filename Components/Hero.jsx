"use client";
import Image from "next/image";
import React from "react";
import logo from "../public/imgs/heroImg.png";
import Link from "next/link";

const Hero = () => {
  return (
    <main
      className="container mx-auto mt-6 md:mt-16 p-4 
    flex 
    justify-center items-center md:gap-x-24 lg:gap-x-72 gap-y-8 flex-wrap-reverse"
      id="home"
    >
      <section className="flex flex-col justify-center items-center gap-3">
        <div className="flex flex-col gap-3 justify-center">
          <h1 className="text-2xl font-bold text-blue-600 capitalize w-64">
            the number #one choice your Shoping solution
          </h1>
          <p className="text-sm font-light break-words w-64">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            voluptatum vitae sit dicta! Doloremque, ipsam eum possimus, dolorem
            reprehenderit dicta rem, consequatur ad non quia quisquam ipsum
            voluptatem exercitationem ut!
          </p>
          <section className="flex items-center gap-2">
            <Link
              href="/search"
              className="px-4 py-1 shadow-lg rounded-2xl
           text-blue-600 border border-blue-600"
            >
              start Shoping
            </Link>
            <Link
              href="/login"
              className="px-4 py-1 shadow-lg rounded-2xl
           text-white bg-blue-600"
            >
              login
            </Link>
          </section>
        </div>
      </section>
      <Image
      priority={true}
        src={logo}
        alt="hero-logo"
        width={320}
        height={320}
        className="w-80 h-80 "
      />
    </main>
  );
};

export default Hero;
