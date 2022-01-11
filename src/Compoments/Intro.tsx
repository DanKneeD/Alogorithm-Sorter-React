import React from "react";

function Intro(){
    return(
<div>
    <section className="IntroUpperHalf">
            <section className="LeftUpper">
                <div className="IntroTitle">An app for personalizing gifs with your face</div>
                <body className="IntroDiscription">DeepSwap takes your picture and swaps it into your favourite gifs you can download and share.</body>
                <div className="IntroButtonContainer">
                <button className="DL-IOS-BTN">Download iOS</button>
                <button className="DL-Android-BTN">Download Android</button>
            </div>
            </section>
            <section className="RightUpper">
            <div>iphone pic goes here</div>
        </section>
    

    </section>

    <section className="IntroLowerHalf">
        <head> How does it work?</head>
        <div> Step by steps goes here</div>
    </section>
    
</div>

    )
}

export default Intro