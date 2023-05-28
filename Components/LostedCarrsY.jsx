import React from 'react'
import CardsList from './CardsList'
import SubTitle from './SubTitle'
import Pagginations from './Pagginations'

const LostedCarrsY = () => {
//     let cars =[
//         {lostDate:'2014' ,title:'بوكسي 2014',color:'ابيض',description:'مكان الفقد بحري',idNum:44344},
//         {lostDate:'2014' ,title:'مورنينغ 2014',color:'ابيض',description:'مكان الفقد امدرمان',idNum:128567},
//         {lostDate:'2014' ,title:'امجاد 2004',description:'مكان شارع الستين',
//         color:"كحلي",idNum:2319834},
//         {lostDate:'2014' ,title:'اكسنت مضلع 2004',description:'مكان شارع الستين',
//         color:"سيلفر",idNum:2319834}

// ]
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
        <SubTitle title ={"العربات المفقوده حسب سنه الصنع"}/>
         <CardsList data ={cars}/>  
         <Pagginations/> 
    </div>
  )
}

export default LostedCarrsY