import React from 'react'
import productsList from '../../../../Data';
import CardsList from '../../../../Components/Utils/CardsList';
import SubTitle from '../../../../Components/Utils/SubTitle';

const page = ({params}) => {
  const {category} = params;
  const data = productsList.filter((product)=>{
    return product.category === category;
  })
  return (
    <div className='mt-6 p-2'>
      <SubTitle title={`${category} Products`}/>
      <CardsList data={data}/>
    </div>
  )
}

export default page