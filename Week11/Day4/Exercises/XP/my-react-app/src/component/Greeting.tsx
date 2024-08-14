import React, {ReactElement} from "react";


export type GreetingProps = {
    name: string
}

const Greeting = ({name}:GreetingProps): ReactElement => {    
    return (
        <>
            <h2>Hi {name}</h2>
        </>
    )
}

export default Greeting