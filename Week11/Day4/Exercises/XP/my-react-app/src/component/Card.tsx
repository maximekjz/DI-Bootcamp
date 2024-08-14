import React from "react";


export type UserCardProps = {
    name: string,
    age: number
}

const UserCard = ({name, age}:UserCardProps) => {    
    const displayName = name ? name:'No name provided'
    const displayAge = age !== undefined ? age : 'No age provided'
    return (
        <>
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
            <h2>name: {displayName}</h2>
            <h2>age: {displayAge}</h2>
        </div>
        </>
    )
}

export default UserCard