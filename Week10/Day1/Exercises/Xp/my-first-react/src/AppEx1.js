import React from "react";
import {useEffect} from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import './App.css';

function ThemeSwitcher(){
  const {theme, toggleTheme} = useTheme()
  return (
    <>
    <button onClick={toggleTheme}>Toggle Theme</button>
    <p>Current Theme: {theme}</p>
    </>
  )
}

function AppContent () {
  const {theme} = useTheme()

  useEffect(()=> {
    document.body.className=`${theme}-theme`
  }, [theme])

  return (
    <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
    </div>
  )
}

function App() {
  return (
    <>
    <ThemeProvider>
        <AppContent/>
    </ThemeProvider>
    </>
  );
}

export default App;
