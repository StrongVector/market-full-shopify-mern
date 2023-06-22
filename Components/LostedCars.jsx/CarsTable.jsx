import React from 'react'

const CarsTable = ({cars}) => {
 
  return (
    <div className='w-full md:w-11/12 mx-auto my-4'>
        
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
    
            <thead className="text-xs text-gray-100 uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                   
                    <th scope="col" className="px-2 py-3">
                        العربية
                    </th>
                    <th scope="col" className="px-2 py-3">
                        العدد
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map((car,ind)=>{ 
                        return(
                        <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-2 py-4 font-medium w-fit
                         text-gray-900 whitespace-nowrap dark:text-white">
                                {car.company? car.company :car.lostDate}
                        </th>
                        <td className="px-2 py-4">
                            {car.quantity}
                        </td>

                    </tr>)
                 
                    })
                }
           
             
                
            </tbody>
        </table>
    </div>
    
        </div>
  )
}

export default CarsTable