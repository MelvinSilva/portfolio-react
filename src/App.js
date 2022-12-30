import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from "./contexts/ThemeContext";
import BtnToggle from "./components/BtnToggle";
import { Suspense } from 'react';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

i18next.use(initReactI18next).use(Backend).init({
  backend: {
    loadPath: './translations/{{ lng }}/translations.json'
  },
  lng: "fr",
  fallbackLng: "fr",
})

function App() {
  return (
    <div>
      <Suspense fallback={null}>
      <ThemeContextProvider>
        <BtnToggle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </Suspense>
    </div >
  );
}

export default App;
