import React from "react";
import gif from "../Assests/Images/download.gif";

function Invest(){
    return(
<div className="InvestConatiner">
    
    <div>
        <img  src={gif} className="giphy-embed" ></img>
    </div>
    
    
    <div className="InvestDescriptionContainer">
        <div>Want to invest?</div> 
        <div> This is the description of what deepML is for the investors so that we peak interest and they decide to contact us and nerd out about how awesome this is. This is the description of what deepML is for the investors so that we peak interest and they decide to contact us and nerd out about how awesome this is. This is the description of what deepML is for the investors so that we peak interest and they decide to contact us and nerd out about how awesome this is.
This is the description of what deepML is for the investors so that we peak interest and they decide to contact us and nerd out about how awesome this is.This is the description of what deepML is for the investors so that we peak interest and they decide to contact us and nerd out about how awesome this is.
        </div>
        <div className="PitchDeckContainer">
            <div> Want the pitch deck?</div>
            <input placeholder="Enter Email"/>
        </div>
    </div>
    
</div>

    )
}

export default Invest

/*
style={"width:100%;height:0;padding-bottom:104%;position:relative;"}
style="position:absolute" */