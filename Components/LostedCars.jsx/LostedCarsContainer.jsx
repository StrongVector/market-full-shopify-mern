import React, { useState } from 'react'

import SubTitle from '../Utils/SubTitle';
import CarsTable from './CarsTable';

const LostedCarsContainer = () => {
    let [byYear,setByear] = useState("model");
    let Companycars =[
      {company:'تويوتا',quantity:84},
        {company:'هونداي',quantity:64},
        {company:'كيا',quantity:20},
        {company:'ميتسوبيشي',quantity:84},
        {company:'نيسان',quantity:84},
        {company:'باجاج',quantity:84},
        {company:'لكسز',quantity:14},


    ]
    
let Modelcars= [
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
    <div className='flex flex-col justify-center items-center gap-3 p-2'>
        <SubTitle title ={"العربات المفقوده "}/>

        <div className='flex justify-center items-center gap-2'>
                <p  onClick={()=>{setByear("year")}}
                className='bg-orange-400 px-3 py-2 cursor-pointer font-medium rounded-lg text-slate-50'>حسب الموديل
                </p>

                <p onClick={()=>{setByear("model")}}
                className='bg-orange-400 px-3 py-2 cursor-pointer rounded-lg font-medium text-slate-50'>حسب الشركة المنتجة</p>

        </div>
        {byYear=== "year"?
        <CarsTable cars = {Modelcars}/>
        :
        // <LostedCarsC/>
        <CarsTable cars = {Companycars}/>
        }
    </div>
  )
}

export default LostedCarsContainer