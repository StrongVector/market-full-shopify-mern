import React from 'react'
import Pagginations from '../Pagginations';
import TheftCard from './TheftCard';

const UnDefindReson = () => {
    
    let cars = [
        {title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,
        theftPlace:'غير محدد ' 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,
theftPlace:'غير محدد ' 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,
theftPlace:'غير محدد ' 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,
theftPlace:'غير محدد ' 
},
{title:"بوكسي ",owner:'محمد علي', idNum:44344,color:"ابيض",phone:'0912300000' ,
theftPlace:'غير محدد ' 
},

 
    ]
  return (
    <div className='container mx-auto flex flex-col justify-center items-center gap-3'>
    <h2 className='text-2xl font-semibold'>غير محدد</h2>
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

export default UnDefindReson