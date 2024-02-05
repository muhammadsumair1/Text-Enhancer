import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



//In JSX we can write html and js in one page or file IN return brackets in JSX we can 
// only write one tag i.e div tag or h1 tag or p. If we want more tag then we used fragments.
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert ({
   msg: message,
   type: type
    })
    setTimeout(() =>{
    setAlert(null);
    },3000)
  }
  

  const changemode = () =>{
    if(mode === "light"){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode is Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode is Enabled","success");
    }
  }  
  return (
    // "<></>"This is JSX fragment
  <>
  <Router>
    <Navbar title = "Text Enhancer" mode = {mode}  changemode={changemode}/>
    <Alert Alert={alert}/>
    <div className="container ">
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/about" element={<About />}>
          </Route>
          {/* <Route path="/">
              <Textform heading = "Enter Your Text" showAlert={showAlert} mode = {mode}/>
          </Route> */}
          <Route exact path="/" element={<Textform heading = "Enter Your Text" showAlert={showAlert} mode = {mode}/>} >
          </Route>
        </Routes>
    </div>
  </Router>
    </>
  );
}

export default App;
