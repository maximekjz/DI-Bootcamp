import { useState, useEffect } from "react";
import quotes from './listQuotes'

const colors = [
    'darkred',
    'red',
    'green',
    'blue',
    'yellow',
    'cyan',
    'magenta',
    'orange',
    'purple',
    'pink'
  ];

  const colorsBack = [
    'green',
    'blue',
    'yellow',
    'cyan',
    'magenta',
    'orange',
    'purple',
    'pink',
    'darkred',
    'red',
  ];

  const colorsButton = [
    'red',
    'green',
    'blue',
    'yellow',
    'cyan',
    'magenta',
    'orange',
    'purple',
    'pink',
    'darkred',
  ];
const Quote = () => {
    const [quotation, setQuotation] = useState(null)
    const [Indx, setIndx] = useState([]);
    const [color, setColors] = useState("")
    const [colorBack, setColorBack] = useState("")
    const [colorButton, setColorButton] = useState("")

    const getRandomIdx = () => {
        let randomIndex
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
          } while (Indx.includes(randomIndex));
    
          return randomIndex;
    }

    const getRandomColor = () => {
        let randomColor = Math.floor(Math.random() * colors.length);
          return randomColor;
    }

    const updateQuote = () => {
        if (Indx.length===quotes.length){
            console.log('All quotes have been displayed');
        }
        const index = getRandomIdx();
        const index_color = getRandomColor();
        setQuotation(quotes[index])
        setIndx(prev => [...prev, index])
        setColors(colors[index_color])
        setColorBack(colorsBack[index_color])
        setColorButton(colorsButton[index_color])
    }
    useEffect(()=>{
    updateQuote()
    document.body.style.backgroundColor = colorBack;
}, [])


return (
    <>
        {quotation ? (
        <header style = {{backgroundColor: color}} >
            <p >"{quotation.quote}"</p>
            <p style = {{fontWeight:'italic', fontSize:'12px'}}>- {quotation.author}</p>
            <button onClick={updateQuote} style = {{backgroundColor:colorButton}}>New quote</button>
        </header>
        ) : (
          <p>Loading...</p>
        )}

    </>
  );
};
export default Quote