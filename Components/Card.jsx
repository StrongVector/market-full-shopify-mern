
import React from 'react'
// import mainDoctor from '../src/imgs/projects/doctor/mainDoctor.png'
// import has from '../src/imgs/hassan2.png'

const Card = ({data}) => {
  return (
    <div className='w-56 bg-white rounded-lg shadow-lg p-1  pb-4 cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-4'>
    <h2 className='font-bold text-3xl '>{data.lostDate?data.lostDate:data.company}
    </h2>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <h2 className='text-xl font-medium  text-slate-800'>
              {data.title?data.title:data.quantity? data.quantity+' الكمية':data.company  }
            <p className='text-xl font-light'>{data.color &&  " اللون " +data.color  }
            </p>

            </h2>
            {/* <h2 className=' font-light text-gray-600'>{data.idNum + ' '}رقم اللوحة</h2>
            <h2 className=' font-light text-gray-600'>{data.color + ' '}اللون </h2> */}

            <p className=''>{data.shasi && data.shasi + ' الشاسي'}</p>

        </div>


    </div>
  )
}

export default Card