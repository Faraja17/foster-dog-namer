import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import './App.css';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        < Route path ='/home' element = {<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
