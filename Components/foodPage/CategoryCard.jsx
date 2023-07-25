import Link from 'next/link'
import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import { getFilterd } from '../../redux/dataSlice'
import FoodList from '../../Data'
const CategoryCard = ({data,ind}) => {
  const dispatch = useDispatch()
  const hundleFilter = ()=>{
    let filterArr = FoodList
    if(data.title == 'Burger'){
          filterArr = filterArr.filter((item)=>{
            return item.title == 'Burger'
          })
    }else if(data.tile == 'pizza'){
      filterArr = filterArr.filter((item)=>{
        return item.title == 'Pizza'
      })
    }
      dispatch(getFilterd(filterArr));
      console.log('pass');
      
  }
  return (
    <Link href={`/${data.ref}`} key={ind} className='w-24 p-3 flex flex-col justify-center items-center
      rounded-lg     shadow-[0_1px_10px_rgb(0,0,0,0.2)] hover:text-white
      hover:scale-105 transition-all hover:bg-blue-600  text-blue-600'>
                    <p className='text-xl  hover:text-white font-light'>{data.logo}</p>
                    <h2 className='text-lg  hover:text-white'>{data.title}</h2>
                  
    </Link>
  )
}

export default CategoryCard