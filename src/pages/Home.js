/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import Logo3D from "../components/Logo3D";
import MyProjects from "../components/MyProjects";
import Presentation from "../components/Presentation";
import Stack from "../components/MyStack";
import Contact from "../components/Contact";
import { ThemeContext } from "../contexts/ThemeContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyServices from "../components/MyServices";
import BtnToggle from "../components/BtnToggle";
import WhatsappButton from "../components/WhatsappButton";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "home" : "home light"} id="home">
      <BtnToggle />
      <Header />
      <Logo3D />
      <Presentation />
      <Stack />
      <MyProjects />
      <MyServices />
      <Contact />
      <WhatsappButton />
      <Footer />
    </div>
  );
};

export default Home;
