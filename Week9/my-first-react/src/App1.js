import User from "./components/User"
const user = require('./users.json')
console.log(user);


function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
        {
            user.map((item, indx)=> {
                // return<User key={item.id}{...item}/>
                return <User article = {item} key={indx}/>
            })
        }
      </header>
    </div>
  );
}
export default App1;
