import React ,{Component} from 'react'

//component need to be imported
//component's name MUST start with an upper case letter.

export default function Result(props) {

  let {val,setVal}=props;

  return (
    <div className="result">
    
      {/*commenting  */}

      
      
      <input type="text" name="" value={val} onChange={(e)=>setVal(e.target.value)}/*onchange so you can manually type the number*/  />


    </div>
  )
}
