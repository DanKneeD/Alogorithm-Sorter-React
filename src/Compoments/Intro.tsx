import React from "react";
import IphoneIMG from "../Assests/Images/Iphone.png";
import BackgroundCubes from "../Assests/Images/BGcubes.png";
import HowItWork from "../Assests/Images/HowItWorks.png";

function Intro() {
  return (
    <section className='IntroContainer'>
      <section className='IntroUpperHalf'>
        <img className='IntroBackgroundCubes' src={BackgroundCubes} />{" "}
        <img className='IphoneGIF' src={IphoneIMG} />
        <section className='IntroDescriptionContainer'>
          <p className='IntroTitle'>
            An app for personalizing gifs with <span>your face</span>{" "}
          </p>
          <p className='IntroDiscription'>
            DeepSwap takes your picture and swaps it into your favourite gifs
            you can download and share.
          </p>
          <div className='IntroButtonContainer'>
            <button className="BTNiosdownload"
              onClick={() => {
                alert("Download not yet avaible");
              }}
            >
              Download iOS
            </button>
            <button
              onClick={() => {
                alert("Download not yet avaible");
              }}
            >
              Download Android
            </button>
          </div>
        </section>
      </section>
      <section className='IntroLowerHalf'>
        <p> How does it work?</p>
        <img src={HowItWork} />
      </section>
    </section>
  );
}
/*   
  <img className='IphoneGIF' src={IphoneIMG} />
 <img className='IntroBackgroundCubes' src={BackgroundCubes} />
*/

export default Intro;
