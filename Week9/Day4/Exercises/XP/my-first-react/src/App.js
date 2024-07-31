import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav"
import Profile from "./components/Profile"
import Shop from "./components/Shop"
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary'
import PostList from "./components/PostList"
import Example1 from "./components/Example1"
import Example2 from "./components/Example2"
import Example3 from "./components/Example3"



const Root = () => {
  return(
    <>
      <Nav />
      <Outlet/>
    </>
  )
}

const HomeScreen =()=>{
  return <Home/>
}

const ProfileScreen =()=>{
  return <Profile/>  
}

const ShopScreen =()=>{
  return <Shop/>
}

function App() {
  // return (
/**Exerice 1 */ 
  //   <>
  //     <BrowserRouter>
  //       <header>
  //         <nav>
  //           <Nav />
  //         </nav>
  //       </header>
  //       <ErrorBoundary>
  //         <Routes>
  //           <Route path="/" element={<HomeScreen/>}/>
  //           <Route path="/profile" element={<ProfileScreen/>}/>
  //           <Route path="/shop" element={<ShopScreen/>}/>
  //         </Routes>
  //       </ErrorBoundary>
  //     </BrowserRouter>
  //   </>

  /**Exerice 2 */ 
  // <PostList/>

  /**Exerice 3 */ 
  // <>
  // <Example1 />
  // <Example2 />
  // <Example3 />
  // </>

// )
  /**Exercice 4 */
  const ex_4 = async() =>{
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
  
    try{
      const res = await fetch("https://webhook.site/14f0cf00-3308-4902-bd41-6804f89d7185",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    });
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <button onClick={ex_4}>Press me to post some data</button>
  )
}

export default App;
