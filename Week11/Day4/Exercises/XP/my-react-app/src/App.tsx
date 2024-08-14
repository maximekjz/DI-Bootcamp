import React from 'react';
import Greeting from './component/Greeting'
import Counter from './component/Count'
import UserCard from './component/Card'
import FetchUsers from './component/Fetch'

function App() {
  return (
    <>
      {/* <Greeting name='John'/> */}
      {/* <Counter /> */}
      {/* <UserCard />
      <UserCard name='John'/>
      <UserCard age={12}/>
      <UserCard age={12} name='John'/> */}
      <FetchUsers/>
    </>
  );
}

export default App;

