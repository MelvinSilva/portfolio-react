import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/projets" element={<MyProjects />} />    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
