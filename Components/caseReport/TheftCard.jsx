import React from 'react'

const TheftCard = ({data}) => {
  return (
    <div className='w-56 bg-white rounded-lg shadow-lg p-1 mb-2 pb-4 cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-4'>
    <h2 className='font-bold text-3xl '>{data.title}
    </h2>

        <div className='flex flex-col justify-center items-center gap-3 '>
        <h2 className='text-xl font-light'>
              {'المالك'+" : "+data.owner }
            </h2>
            <h2 className='text-xl font-light'>
              {'الهاتف'+" : "+data.phone }
            </h2>
            <p className='text-xl font-light'>{data.color &&  " اللون " +data.color  }
            </p>

<h2 className='text-sm font-semibold  text-slate-800'>
              {'سبب الفق'+" : "+data.theftPlace }
            </h2>

        </div>


    </div>
  )
}

export default TheftCard