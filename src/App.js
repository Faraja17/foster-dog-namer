import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Success from './Components/Success';
import Failure from './Components/Failure';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        < Route path ='/home' element = {<Home />} />
        < Route path ='/success' element = {<Success />} />
        < Route path ='/failure' element = {<Failure />} />
      </Routes>
    </Router>
  );
};

export default App;
