"use client"
import React from 'react'
import Hero from '../../Components/Hero'
import SearchBox from '../../Components/SearchBox'
import LotCallRecording from '../../Components/LotCallRecording'
import RelatedBtns from '../../Components/RelatedBtns'
import LostedCarrsY from '../../Components/LostedCarrsY'
import LostedCarsC from '../../Components/LostedCarsC'
import CurruntlyAddedCars from '../../Components/CurruntlyAddedCars'
import LostedCarsContainer from '../../Components/LostedCarsContainer'
import RelatedTopics from '../../Components/RelatedTopics'
import RelatedDevs from '../../Components/RelatedDevs'
import Footer from '../../Components/Footer'
import SiteFooter from '../../Components/SiteFooter'



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
    {/* <Footer/> */}
    <SiteFooter/>


    </div>
  )
}

export default Home