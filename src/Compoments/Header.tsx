import React from "react";
import logoIMG from "../Assests/Images/logo.png"

function Header(){
    return(
        <div className="HeaderContainer">
            <div className="LogoContainer">
                    <img src={logoIMG} />
            </div>

            <div className="ButtonsContainer">
                <button className="AboutBTN" >About DeepML</button>
                <button className="InverstorBTN">Investor Info</button>
                <button className="LegalBTN">Legal Info</button>
                <button className="ContactBTN">Contact Us</button>
                
            </div>
        </div>
    )
}

export default Header