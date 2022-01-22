import React from "react";
import Logo from "../Assests/Images/logo.png"

function Footer(){
    return(
<div className="FooterContainer">
    <div className="FooterInfoContainer">
        <img src={Logo} />
        <div>
            <p>Copywrite ©2021</p>
            <p>Questions? <button className="FooterContactUsButton">Contact Us</button></p>          
        </div>
       
    </div>

</div>

    )
}

export default Footer