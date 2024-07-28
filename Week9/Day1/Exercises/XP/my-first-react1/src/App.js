import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'


function App() {
  const myelement = <h1>I Love JSX!</h1>;
  let sum = 5+5
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
         {myelement}
         <h2>"React is {sum} times better with JSX"</h2>
      </header>
    </div>
  );
}


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};


function username() {
  return (
    <div className="App2">
    <header className="App-header2">
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <h3>Fav animals: </h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals}/>
    </header>
  </div>
  )
}

function exercise() {
  return (
    <Exercise/>
  )
}

export default exercise;