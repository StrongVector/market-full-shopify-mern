"use client"
import React from 'react'
import Hero from '../../Components/Hero'
import SearchBox from '../../Components/SearchBox'
import LotCallRecording from '../../Components/lostRecordings/LostCallRecordings'
import RelatedBtns from '../../Components/NavigationBtn'
import CurruntlyAddedCars from '../../Components/LostedCars.jsx/CurrntlyAdded/CurruntlyAddedCars'
import LostedCarsContainer from '../../Components/LostedCars.jsx/LostedCarsContainer'
import RelatedTopics from '../../Components/relatedLinks/RelatedTopics'
import RelatedDevs from '../../Components/RelatetdTopics/RelatedDevs'



const Home = () => {


  return (
    <div className='flex flex-col justify-center items-center flex-wrap gap-4 container mx-auto
  ' >
    <Hero/>
    <RelatedBtns/>
    <SearchBox/>
    <LotCallRecording/>
    <LostedCarsContainer/>

    <CurruntlyAddedCars/>
    <RelatedTopics/>
    <RelatedDevs/>
   
    </div>
  )
}

export default Home