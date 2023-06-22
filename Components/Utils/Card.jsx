
import React from 'react'

const Card = ({data}) => {

  return (
    <div className='w-56 bg-white rounded-lg shadow-lg p-1  pb-4 cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-4'>
    <h2 className='font-bold text-3xl mb-1'>{data.lostDate?data.lostDate:data.company}
    </h2>
        <div className='flex flex-col justify-center items-center gap-3 '>
            <h2 className='text-2xl font-semibold  text-slate-800'>

              {data.title?data.title:data.quantity? data.quantity+' الكمية':data.company  }
            </h2>
            <p className='text-xl font-light text-slate-600'>{data.color &&  " اللون " +data.color  }
            </p>
            <p className=' text-slate-600'>{data.shasi &&  ' الشاسي  '+data.shasi +' '}</p>
            <p className='text-lg font-light  text-slate-600'>{data.idNum?'   رقم اللوحة   ' + data.idNum:'' }
            </p>
            <p className='text-lg font-light  text-slate-600'>{data.callId?'   رقم النداء   ' +data.callId:'' }
           
            </p>

        </div>

    </div>
  )
}

export default Card