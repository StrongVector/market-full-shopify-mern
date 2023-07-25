
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import{FcLike} from 'react-icons/fc'


const Card = ({data}) => {

  return (
    <Link href={`/products/${data.category}/${data.id}`} 
    className='w-56 bg-white rounded-lg 
    shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative group
     p-1  pb-4 
    cursor-pointer hover:scale-105 transition-all
    flex flex-col justify-center items-center gap-2'>
      <section >
        <Image src={data.img} alt = 'food' className='w-56 h-56'/>
      </section>
        
      <section className=' bg-[#ffffffbd] w-[100%] h-[100%] top-0 opacity-0 transition duration-500
      group-hover:opacity-100 text-gray-500
      absolute ' >
       
            <div className='flex flex-col justify-center items-center gap-1 pt-2 mt-16'>
            <h2 className='font-bold text-2xl mb-1'>{data.title}
        </h2>
              <p>{data.description}</p>  
              <section className='flex flex-col justify-center items-center gap-4'>
                        <span className='absolute top-2 right-2'>
                            <FcLike className='text-3xl font-light text-white bg-w'/>
                        </span>
              <p className='text-blue-600 font-medium'>{data.price}$</p>

                    </section>
              {/* <Link href={'/'} className='px-4 py-1 mt-1 rounded-lg shadow-lg bg-blue-600 text-white'>Order</Link> */}

            </div>
        </section>
    </Link>
  )
}

export default Card