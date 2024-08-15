import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';


const item = (props) => {

  const [done, setdone] = useState(false)



  return (
    <>
      <div  onClick={() => setdone(!done) }  className = {` item  cursor-pointer   flex justify-between items-center mt-4 select-none `}>
        <div >
           <span className='pr-1 text-[12px] text-[#d1c9c9] ' >{props.time}</span>
           <span  className={` ${done === true? 'line-through': ''}  text-[20px]`} >{props.item}</span>
        </div>
        <div className='flex gap-1  items-center' >
            <span className='border rounded-[50%] h-[30px] w-[30px] text-center flex justify-center items-center bg-black text-[#d1c9c9]  border-none' onClick={()=> props.removeHandler(props.id)} ><FaRegTrashAlt className='text-[18px' /></span>
        </div>
      </div>
    </>
  )
}

export default item
