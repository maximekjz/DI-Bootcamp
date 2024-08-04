import React from "react";
import {useRef} from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import './App.css';
import { useEffect } from "react";
import { useState } from "react";


function Count(){

const inputRef = useRef(null)
const [count, setCount] = useState(0)
const handleInputChange =()=>{
const textLength = inputRef.current.value.length
setCount(textLength)
}

return (
  <div>
    <h1>Character counter</h1>
    <textarea
      ref={inputRef}
      onChange={handleInputChange}
      placeholder="Type your text"></textarea>
      <p>Character count : {count}</p>
  </div>
  )
}

function AppEx2() {
  return (
    <>
      <Count />
    </>
  );
}

export default AppEx2;
