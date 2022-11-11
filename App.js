import React, { useState } from "react";

//Result screen imported
import Result from "./components/Result";

//keypad component imported
import Keypad from "./components/Keypad";

import "./app.css";

export default function App() {
  //mathmatical operations of numbers are done in values state
  const [values, setvalues] = useState("");

  //calculate function will evaluates the results of mathmatical operation
  //eval inbuilt function performs the necessary mathmatical operation
  function calculate() {
    try {
      setvalues(eval(values));
    } catch (error) {
      setvalues("error ,press clear for new calculation");
    }
  }

  //clear function will do the erase all data and can helps in doing new mathmatical operation
  function clear() {
    setvalues(" ");
  }

  //back function will perform the backspace operation
  function back() {
    try {
      setvalues(values.slice(0, -1));
    } catch (error) {
      setvalues("press clear for new calculation");
    }
  }

  return (
    <div>
      <div className="calculator-body">
        <h1 className="heading"> CALCULATOR </h1>

        <Result values={values} setvalues={setvalues} />

        <Keypad
          values={values}
          setvalues={setvalues}
          back={back}
          clear={clear}
          calculate={calculate}
        />
      </div>
    </div>
  );
}



//hosting
//https://youtu.be/IokPiSZpXDY
