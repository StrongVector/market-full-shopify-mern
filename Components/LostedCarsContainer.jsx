import React, { useState } from 'react'
import LostedCarrsY from './LostedCarrsY'
import LostedCarsC from './LostedCarsC';
import SubTitle from './SubTitle';

const LostedCarsContainer = () => {
    let [byYear,setByear] = useState("model");
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
        <LostedCarrsY/>
        :
        <LostedCarsC/>
        }
    </div>
  )
}

export default LostedCarsContainer