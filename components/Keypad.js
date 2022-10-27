

import React from 'react'

export default function Keypad(props) {


  let {val,setVal,back,clear,calculate}=props;
  return (
    <div  className="button" >
        
      
      
        <button name="" onClick={(e)=>setVal(val+e.target.value)} value="0">0</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="1">1</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="2">2</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="3">3</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="4">4</button>

      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="5">5</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="6">6</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="7">7</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="8">8</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="9">9</button>

      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="+">+</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="-">-</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="*">*</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value="/">/</button>
      <button name="" onClick={calculate} value="=">=</button>
      <button name="" onClick={(e)=>setVal(val+e.target.value)} value=".">.</button>

      <button name="" onClick={back} value=".">back</button>
      <button name="" onClick={clear} value=".">clear</button>
    



    </div>
  )
}
