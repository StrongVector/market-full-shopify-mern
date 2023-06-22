import React from 'react'
import CardsList from '../../Utils/CardsList'

import Pagginations from '../../Utils/Pagginations'

const LostedCarsByYear = () => {

let cars= [
    {lostDate:1999,quantity:12},
    {lostDate:2006,quantity:32},
    {lostDate:2007,quantity:32},
    {lostDate:2008,quantity:32},
    {lostDate:2009,quantity:32},
    {lostDate:2010,quantity:32},

    {lostDate:2011,quantity:16},
    {lostDate:2012,quantity:8},
    {lostDate:2013,quantity:8},
    {lostDate:2014,quantity:8},
    {lostDate:2015,quantity:8},
    {lostDate:2016,quantity:8},
    {lostDate:2017,quantity:55},
    {lostDate:2018,quantity:8},
    {lostDate:2019,quantity:8},
    {lostDate:2019,quantity:8},
    {lostDate:2020,quantity:8},
    {lostDate:2021,quantity:8},
    {lostDate:2022,quantity:8},
    {lostDate:2022,quantity:97}

]
  return (
    <div>
         <CardsList data ={cars}/>  
         <Pagginations/> 
    </div>
  )
}

export default LostedCarsByYear