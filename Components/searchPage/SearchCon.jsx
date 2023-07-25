import React, { useRef, useState } from "react";
import CardsList from "../Utils/CardsList";
import productsList from "../../Data";
import { useEffect } from "react";

const SearchCon = () => {
    const key = useRef('');
    const [value,setValue] =useState('')
    let filterdData = productsList;
    let [Data,setData]=useState(filterdData);

    const handleChange = ()=>{

      console.log('worked');
    setValue(key.current.value)
    // Data.filter((ele)=>{
    //   return ele.title.includes(key.current.value)||ele.description.includes(key.current.value)

    // })
                   
    }
    useEffect(()=>{
    // console.log(value);
    setData(Data = productsList.filter((ele)=>{
      return ele.title.toLowerCase().includes(key.current.value)||ele.description.toLowerCase().includes(key.current.value)
    })  )
    console.log(Data);
      // setValue()
    },[value])
 
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4">

      <section>

        <div className="flex  justify-start flex-wrap items-center gap-2 mb-4">
          
          <input
        ref={key}
        onChange={handleChange}
          
                      type="text"
            className="w-72 mt-1 px-3 py-2 bg-white border
   shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none text-slate-800
    focus:border-sky-500 focus:ring-sky-500   rounded-md flex justify-start
     sm:text-sm focus:ring-1"
            placeholder=" search here ..."
          />
          {/* <button className="bg-blue-700 text-white rounded-lg px-3 py-1"
           onClick={ handleChange}>Search</button> */}
        </div>
      </section>
      <section className="mt-6 flex flex-col justify-center gap-3">{
       <main>       
        <p className={Data.length ===0?` text-lg font-light `:`text-lg font-medium `}>
          {Data.length === 0?'loading':`Results: ${Data.length}`}
        </p>
       
        <CardsList data={Data}/>
        </main>  
      }
      </section>
    </div>
  );
};

export default SearchCon;
