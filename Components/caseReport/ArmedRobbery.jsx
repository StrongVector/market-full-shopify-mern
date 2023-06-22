import React from 'react'
import TheftCard from './TheftCard';
import Pagginations from '../Utils/Pagginations';

const ArmedRobbery = () => {

    let cars = [
        {title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'نهب من قوة مسلحة', 
},
{title:"بوكسي ",owner:'خضر الامين', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'نهب من قوة مسلحة', 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'نهب من قوة مسلحة', 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'نهب من قوة مسلحة', 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,theftPlace:'نهب من قوة مسلحة', 
},
 
    ]
  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-3'>
        <h2 className='text-2xl font-semibold'>النهب المسلح</h2>
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

export default ArmedRobbery