import React from "react";
import Header from "./Compoments/Header";
import Intro from "./Compoments/Intro";
import Who from "./Compoments/Who";
import Invest from "./Compoments/Invest";
import Contact from "./Compoments/Contact";
import Footer from "./Compoments/Footer";

import "./Styles/HomePage.css";

function App() {
  return (
    <section className='background'>
      working at MainPage
      <section className='LandingPage'>
      <Header /> 
        <Intro />
        <Who />
        <Invest />
        <Contact />
        <Footer />
      </section>
    </section>
  );
}
export default App;
/* */