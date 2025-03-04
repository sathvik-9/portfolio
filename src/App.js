import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import Projects from './Projects';
import WeatherApp from './WeatherApp';
import About from './About';
import CalculatorApp from './CalculatorApp';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/weatherapp' element={<WeatherApp />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/calculator' element={<CalculatorApp />}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
