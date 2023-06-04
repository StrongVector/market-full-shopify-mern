
import React from 'react'
// import mainDoctor from '../src/imgs/projects/doctor/mainDoctor.png'
// import has from '../src/imgs/hassan2.png'

const Card = ({data}) => {
  return (
    <div className='w-56 bg-white rounded-lg shadow-lg p-1  pb-4 cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-4'>
    <h2 className='font-bold text-3xl mb-1'>{data.lostDate?data.lostDate:data.company}
    </h2>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <h2 className='text-xl font-medium  text-slate-800'>

              {data.title?data.title:data.quantity? data.quantity+' الكمية':data.company  }
            </h2>
            <p className='text-xl font-light'>{data.color &&  " اللون " +data.color  }
            </p>
            <p className=''>{data.shasi &&  ' الشاسي  '+data.shasi +' '}</p>
            <p className='text-xl font-light'>{data.idNum?'   رقم اللوحة   ' + data.idNum:'' }
            </p>
            <p className='text-xl font-light'>{data.callId?'   رقم النداء   ' +data.callId:'' }
           
            </p>

        
            {/* <h2 className=' font-light text-gray-600'>{data.idNum + ' '}رقم اللوحة</h2>
            <h2 className=' font-light text-gray-600'>{data.color + ' '}اللون </h2> */}


        </div>


    </div>
  )
}

export default Card