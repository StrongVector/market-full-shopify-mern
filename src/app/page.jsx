"use client"
import React from 'react'
import Hero from '../../Components/Hero'
import SearchBox from '../../Components/SearchBox'
import LotCallRecording from '../../Components/LotCallRecording'
import RelatedBtns from '../../Components/RelatedBtns'
import LostedCarrsY from '../../Components/LostedCarrsY'
import LostedCarsC from '../../Components/LostedCarsC'
import CurruntlyAddedCars from '../../Components/CurruntlyAddedCars'



const Home = () => {


  return (
    <div className='flex flex-col justify-center items-center flex-wrap gap-4 container mx-auto
  ' >
    <Hero/>
    <RelatedBtns/>
    <SearchBox/>
    <LotCallRecording/>
    <LostedCarrsY/>
    <LostedCarsC/>
    <CurruntlyAddedCars/>
    {/* <Table/> */}

    </div>
  )
}

export default Home