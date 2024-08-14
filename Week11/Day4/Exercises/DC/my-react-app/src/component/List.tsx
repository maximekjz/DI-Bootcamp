import React, {ReactElement} from "react";


// Todo Type: Define the Todo type, representing the structure of a to-do item, which includes an id and text property.
export type Todo = {
    id: number;
    text: string;
}

// Generic List Component: Create a generic List component that accepts an array of items and a rendering function (renderItem). 
// The List component uses the renderItem function to render each item in the list.
type ListProps <T> = {
    items: T[];
    renderItem: (item:T) => React.ReactNode
}

const List = <T,>({items, renderItem}: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, index)=> (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    )
}

export default List