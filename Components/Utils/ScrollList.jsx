import React from 'react'
import productsList from '../../Data'
import Card from './Card'

const ScrollList = () => {
  return (
    <div className='relative flex items-center'>
        <div id='slider'
        className=' flex items-center relative gap-2 
        overflow-x-scroll  whitespace-nowrap scroll-smooth'
        >
            {
                    productsList.map((product)=>{
                        return <Card key={product.id} data={product} />
                    })
            }
          </div>
    </div>
  )
}

export default ScrollList