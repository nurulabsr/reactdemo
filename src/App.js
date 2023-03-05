import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from './components/Pages/Home/Home';
import HomeDetails from './components/Pages/DelailsPage/HomeDetails';
import Error from './components/Pages/Error/Error';
function App() {
  return (
    <BrowserRouter className="App">
    <Routes>
      <Route exect path="/" element={<Home />} />
      <Route exect path ="/details" element={<HomeDetails/>}></Route>
      <Route path="*" element={<Error/>} />
    </Routes >
    </BrowserRouter>
  );
}

export default App;
