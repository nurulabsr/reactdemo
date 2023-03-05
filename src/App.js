import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Pages/Home/Home';
function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes >
    </BrowserRouter>
  );
}

export default App;
