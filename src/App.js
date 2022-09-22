import React from 'react';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams
} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Navbar title="Prop Title Blow"/> */}
    <div className="container"><h1 style={{textAlign: "center"}}>Text Analyzer</h1></div><hr/>  
      <br/>

    <Router className="container">
    
        <Routes>
          <Route exact path="/" element={<TextForm  heading="Enter Your Clutter Here"/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>

    </Router>
   </>
  );
}

export default App;
