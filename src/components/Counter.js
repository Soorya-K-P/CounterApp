import React from 'react'
import { useState } from 'react';


function Counter() {
    const [counter,setCounter]=useState(0)

    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter!=0)
        setCounter(counter-1)
    }
    function reset(){
        setCounter(0)
    }
  return (
    <div id='content'
    style= {{backgroundColor:'pink',
    flexDirection:'column',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    border:'1px solid black',
    padding:'200px',
    margin:'auto',
    }}>
      <h3>Counter Application</h3>
    <h1>{counter}</h1>
    <button
    style={{backgroundColor:'green',color:'white',padding:'5px',margin:'5px'}}
     onClick={increment}>Add</button>
    <button
     style={{backgroundColor:'red',color:'white',padding:'5px',margin:'5px'}}
     onClick={decrement}>Subtract</button>
    <button
    style={{backgroundColor:'black',color:'white',padding:'5px',margin:'5px'}}
     onClick={reset}>Reset</button>

    </div>


  )
}

export default Counter