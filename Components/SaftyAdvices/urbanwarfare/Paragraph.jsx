import React from 'react'

const Paragraph = (data) => {

  return (
    <div className='flex flex-col justify-center items-center gap-3 p-2'>
        <h3>{data.title}</h3>
        <p>{data.text}</p>

    </div>
  )
}

export default Paragraph