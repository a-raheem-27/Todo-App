import React from "react";
import { IoIosAddCircle } from "react-icons/io";

import Navbar from "./components/Navbar";
import { useRef, useEffect, useState } from "react"
import Item from "./components/item"
import Input from "./components/input"
import Box from "./components/box"

const App = () => {

  const [todos, settodos] = useState([])

  const addTodoHandler = (item ) =>{
    console.log(item); 
    
    
    settodos([
      ...todos,
      {
        item,
        time: new Date().toLocaleTimeString()
      }
    
    ]
  )
    
  }

  const removeTodo = (id) =>{
    console.log(id);

    const newTodos = todos.filter(

      (d,index) => {
        if (index !== id ){
          return true;
        }
        else{
          return false
        }
        
  
      }
      
     
    )
    settodos(newTodos);
    
  }

  




  return (
    <div className="bg-[#202020] h-screen select-none whitespace-nowrap ">
      <Navbar />

      <main className="bg-[#565656]  h-[80vh] overflow-y-auto  w-5/12 m-auto mt-5 p-4 rounded-2xl text-[#FFFFFF] ">
        <Input handler = {addTodoHandler}  />
        <Box data = {todos} removeHandler= {removeTodo}  />

      </main>

    </div>
  );
};

export default App;
