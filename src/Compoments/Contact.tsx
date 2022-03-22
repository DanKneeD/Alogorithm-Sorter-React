import React from "react";
import gif from "../Assests/Images/ContactUs.gif";
import BackgroundCubes from "../Assests/Images/BGcubes.png";

function Contact() {
  return (
    <div className='ContactUsContainer'>
      <img src={BackgroundCubes} />
      <div className='ContactUsInformationContainer'>
        <div> Contact Us</div>
        <div>
          Send us an email at email@email.com or give us your email and we’ll
          contact you
        </div>
        <input placeholder='Enter Email' />
      </div>
      <img src={gif} className='ContactUsGif' />
    </div>
  );
}

export default Contact;
