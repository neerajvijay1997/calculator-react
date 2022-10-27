import React, { useState } from "react";
import Result from "./components/Result";
import Keypad from "./components/Keypad";
import './app.css'




export default function App() {

  const [val,setVal]=useState("")



  function calculate(){
    try{ setVal(eval(val))}
    catch(error){
        setVal("error ,press clear for new calculation")}
  }


  function clear(){

    setVal(" ")

  }


  function back(){

    
    try{setVal(val.slice(0,-1))}
    catch(error){
        setVal("press clear for new calculation")
    }
        

  }



  return (
    <div>

      <div  className="calculator-body">
      
      <h1 className="heading">  CALCULATOR </h1>




      


     <Result val={val} setVal={setVal} />

     

     <Keypad   
     val={val} 
     setVal={setVal} 
     back={back} 
     clear={clear}  
     calculate={calculate} />
     </div>

    </div>
  );
}




//idea inspired from
//https://github.com/niinpatel/calculator-react
//https://youtu.be/g27PaKcFNRE



