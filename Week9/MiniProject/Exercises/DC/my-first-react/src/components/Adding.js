import { useState, useEffect } from "react";

const Adding = () => {

    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result ,setResult] = useState(0)
    const [operator, setOperator] = useState("+")

    const handleNumberChange = (e) => {
        setNumber1(Number(e.target.value)); 
      };

      const handleNumberChange2 = (e) => {
        setNumber2(Number(e.target.value)); 
      };

      const handleOperator = (e) =>{
        setOperator(e.target.value)
      }

      const handleCalculate = () =>{
        let calculation
        if (operator === '+') {
          calculation = number1 + number2;
      } else if (operator === '-') {
          calculation = number1 - number2;
      } else if (operator === '*') {
          calculation = number1 * number2;
      } else if (operator === '/') {
          if (number2 === 0) {
              calculation = "Can't divide by 0";
          } else {
              calculation = number1 / number2;
          }
      } else {
          calculation = "Invalid operator";
      }
        setResult(calculation)
      }

    return(
        <>
        <input value = {number1} onChange={handleNumberChange} type='text'/>
        <input value = {number2} onChange={handleNumberChange2} type='text'/>
        <select name='operator' onChange={handleOperator} value={operator}>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='/'>/</option>        
          <option value='*'>*</option>        
          </select>
          <button onClick={handleCalculate}>Operate them!</button>
        <h1>{result}</h1>
        </>
    )

}

export default Adding


