import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThemeContextProvider from "./contexts/ThemeContext";
import { Suspense } from 'react';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import Blog from "./components/Blog";

i18next.use(initReactI18next).use(Backend).init({
  backend: {
    loadPath: './translations/{{ lng }}/translations.json'
  },
  lng: "fr",
  fallbackLng: "en",
})

function App() {
  return (
    <div>
      <Suspense fallback={null}>
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>
    </Suspense>
    </div >
  );
}

export default App;
