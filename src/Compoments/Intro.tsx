import React from "react";
import IphoneIMG from "../Assests/Images/Iphone.png"
import BackgroundCubes from "../Assests/Images/BGcubes.png"
import HowItWork from "../Assests/Images/HowItWorks.png"

function Intro(){
    return(
<div>
    <section className="IntroUpperHalf">
    <img src={BackgroundCubes}/>
            <section className="LeftUpper">
                <div className="IntroTitle">An app for personalizing gifs with <span  style={{color: "salmon"}}>your face</span > </div>
                <body className="IntroDiscription">DeepSwap takes your picture and swaps it into your favourite gifs you can download and share.</body>
                <div className="IntroButtonContainer">
                    <button >Download iOS</button>
                    <button >Download Android</button>
                </div>
            </section>

            <img className="IphoneGIF"src={IphoneIMG}/>

    </section>

    <section className="IntroLowerHalf">
        <div> How does it work?</div>
        <img src={HowItWork}/>
    </section>
    
</div>

    )
}

export default Intro