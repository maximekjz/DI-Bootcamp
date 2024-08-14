import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const increment = () => {
        setCount(count+1)
    }
    
    const decrement = () => {
        setCount(count-1)
    }

    return (
        <>
            <button onClick={increment}>Increment</button>
            {count}
            <button onClick={decrement}>Decrement</button>
        </>
    )
} 


export default Counter
 

