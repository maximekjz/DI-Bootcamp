import React, { useState, useEffect } from 'react';

function Vote() {
  
  const style_language = {
    display: 'inline-block',
    border: '1px solid #000',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: 'lightyellow',
  }

  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  const addCount=(index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes +=1;
    setLanguages(newLanguages)
  }


  return(
    <>
      <div style = {style_language}>
        <h1>Vote your Language!</h1>
      </div>
      {languages.map((languages, index) =>(
      <div key = {index} style= {style_language}>
        <h5>{languages.name}:{languages.votes}</h5>
        <button onClick={()=>addCount(index)}>Click Here!</button>
      </div>
      ))}
    </>
  )

}

export default Vote