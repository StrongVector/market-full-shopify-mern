import Link from 'next/link'
import React from 'react'

const SubTitle = ({title}) => {
  return (
    <div className='container mt-4 flex justify-between items-center px-4 lg:px-6'>
      <h3 className=' text-2xl 
      font-bold capitalize p-3 text-blue-600 '>
          {title}
      </h3>
      <Link href='/search' className='px-3 py-1 border font-light
       border-blue-600 text-blue-600
      hover:bg-blue-600 hover:text-white rounded-lg'>
        Load More
      </Link>
    </div>
  )
}

export default SubTitle