import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopBar from './TopBar/TopBar';



function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>
    </div>
  )
}

export default App;
