import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import ThemeContextProvider from "./contexts/ThemeContext";
import BtnToggle from "./components/BtnToggle";



function App() {


  return (
    <div>
      <ThemeContextProvider>
        <BtnToggle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
