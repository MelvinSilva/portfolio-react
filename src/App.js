import Home from "./pages/Home";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
