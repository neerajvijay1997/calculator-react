import React, { Component } from "react";




export default function Result(props) {
  let { values, setvalues } = props;

  return (
    <div className="result">
      {/*commenting  */}

      <input
        type="text"
        name=""
        value={values}
        onChange={(e) =>
          setvalues(e.target.value)
        } /*onchange and input tag used so you can manually type the number through screen also*/
      />
    </div>
  );
}
