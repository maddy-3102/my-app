import React,{useState} from 'react';

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,Route,Routes
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type) =>{
       setAlert({
          msg: message,
          type: type
       })
       setTimeout(() => {
         setAlert(null);
       }, 1900);
  }

  const toggleMode = ()=>{
       if(mode==='light'){
         setMode('dark');
         document.body.style.backgroundColor = 'rgb(50, 51, 59)';
         showAlert("DarkMode has been enabled","success");
       }
       else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("LightMode has been enabled","success");
       }
  }
  return (
  <>
   <Router>
    
   <Navbar title="TextMania" mode= {mode} toggleMode= {toggleMode} about="About Us"/>

   <Alert alert={alert}/>

    <Routes>

   <Route path='/' element={
   <div className='container my-3'><TextForm showAlert={showAlert} heading="Enter the text to analyze below:"mode= {mode} /> </div>}/>

    <Route path='/about' element={<About/>}></Route>

   </Routes>
   </Router>
  </>
  );
}

export default App;
