import React from 'react'
import CardsList from '../Utils/CardsList'
import TheftCard from './TheftCard'
import Pagginations from '../Utils/Pagginations'

const TheftReport = () => {
    let cars = [
        {title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'الهجوم على المنزل ', 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'الهجوم على المنزل ', 
},        {title:"توسان ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'من معرض سيارات ', 
},        {title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'الهجوم على المنزل ', 
},        {title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'الهجوم على المنزل ', 
},
 
    ]
  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-3'>
        <h2 className='text-2xl font-semibold'>السرقه</h2>
            <div className='flex justify-center items-center gap-2 flex-wrap'>
                {
                    cars.map((car,ind)=>{
                        return(<TheftCard key ={ind} data = {car}/>);
                    })
                }
            </div>
            <Pagginations className ='mt-1'/>
    </div>
  )
}

export default TheftReport