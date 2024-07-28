import './App.css';
import Hello from "./Hello"

let arr= [
  {title:"aaa", sub:"nnnn", body: "lorem ipsum dolur sit"},
  {title:"bbb", sub:"mmm", body: "lorem ipsum dolur sit"},
  {title:"ccc", sub:"ooo", body: "lorem ipsum dolur sit"},
  {title:"ddd", sub:"ppp", body: "lorem ipsum dolur sit"}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          arr.map((item, indx)=> {
            return<Hello article={item} key={indx}/>
          })
        }
        {/* Hello...
        <Hello title={arr[0].title} sub={arr[0].sub} />
        <Hello title={arr[1].title} sub={arr[1].sub}/> */}
      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello...
//         <Hello title="my title1" sub="my subtitle1" />
//         <Hello title="my title2" sub="my subtitle1"/>
//       </header>
//     </div>
//   );
// }

export default App;
