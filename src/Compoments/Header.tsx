import React from "react";
import logoIMG from "../Assests/Images/logo.png";

function Header() {
  return (
    <nav className='HeaderContainer'>
      <div className='LogoContainer'>
        <img src={logoIMG} />
      </div>

      <label htmlFor='nav-toggle' className='Toggle-Button '>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </label>
      <input type={"checkbox"} id='nav-toggle' className='nav-toggle'></input>

      <div className='ButtonsContainer'>
        <button className='AboutBTN'>About DeepML</button>
        <button className='InverstorBTN'>Investor Info</button>
        <button className='LegalBTN'>Legal Info</button>
        <button className='ContactBTN'>Contact Us</button>
      </div>
    </nav>
  );
}

export default Header;
