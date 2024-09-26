import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import React, {useState} from 'react'
// import Alert from './components/Alert';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



// import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  
  // const [alert ,setAlert] = useState(null);

  // const showAlert = (message , type) =>{
  //    setAlert({
  //     msg : message,
  //     type : type 
  //    })
  // }
 const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "gray";
      // showAlert("Dark mode has been activated");
    }
    // else if(mode === "dark" || "light"){
    //   setMode('red')
    //   document.body.style.backgroundColor = "red";
    // }

    // else if(mode === "dark" || "light" ){
    //   setMode('green')
    //   document.body.style.backgroundColor = "green";
    // }

    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
      // showAlert("light mode has been activated" , "success");
      
    }
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title = "jarin3" mode={mode} toggleMode = {toggleMode}/>
     {/* remove about to deploy my react app */}
     {/* <Alert alert = {alert}/> */}

     {/* <Routes> */}
           {/* <Route  path="/about" element ={<About/>}> */}
              
           {/* </Route> */}
           {/* <Route path="/" element ={<Textform heading=" enter the text to analyze" mode={mode}/>}> */}
           <Textform heading=" enter the text to analyze" mode={mode}/>
                   {/* <Textform showAlert = {showAlert} heading=" enter the text to analyze" mode={mode}/> */}       
           {/* </Route> */}
    {/* </Routes> */}

     
     {/* <About/> */}
{/*     </Router> */}
    </>
  ); 
}

export default App;
