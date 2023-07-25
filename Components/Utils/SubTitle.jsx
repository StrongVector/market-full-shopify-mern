import Link from 'next/link'
import React from 'react'

const SubTitle = ({title}) => {
  return (
    <div className='container mx-auto mt-4 flex justify-between items-center px-3'>
      <h3 className=' text-3xl 
      font-bold capitalize p-3 text-blue-600 '>
          {title}
      </h3>
      <Link href='/' className='px-3 py-1 border border-blue-600 text-blue-600
      hover:bg-blue-600 hover:text-white rounded-lg'>
        Load More
      </Link>
    </div>
  )
}

export default SubTitle