import React from 'react'
import { FaPlus } from "react-icons/fa6";

import { useRef } from 'react'

const input = (props) => {

const inputBox = useRef()


  return (
    <div>
            <div className="flex gap-2 justify-between items-center " >
          <input type="text" placeholder="Enter todo here"  className="w-full bg-black px-2 py-1 outline-none border-none border-2px rounded " ref ={inputBox} />
          <button className='rounded-[50%] bg-black h-[30px] w-[30px] border-noen flex justify-center items-center' onClick={() => {props.handler(inputBox.current.value)
            inputBox.current.value = "";}
            } ><FaPlus className="text-[#d1c9c9]    text-[23px]" /></button>
        </div>
    </div>
  )
}

export default input
