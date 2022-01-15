import React from 'react';
import Header from "./Compoments/Header"
import Intro from "./Compoments/Intro"
import Who from "./Compoments/Who"
import Invest from "./Compoments/Invest"
import Contact from "./Compoments/Contact"
import Footer from "./Compoments/Footer"
import './MainPage.css';

function App() {
  return (
    <div className="background">
      <div className='LandingPage' >    
        <Header/>
        <Intro/>
        <Who/>
        <Invest/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
