import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";



function App() {
  return (
    <div>
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
