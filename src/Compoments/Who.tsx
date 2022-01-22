import React from "react";
import Cube from "../Assests/Images/FaceImage.png"
import Dan from "../Assests/Images/dan.png"

function Who(){
    return(
<div className="WhoAreWeContainer">
    <div className="WhoAreWeContainerTitle">
      Who is deepML?
    </div>

    <div className="WhoAreWeContainerDiscription">
    The goal of DeepML is to create an environment where the users can create and the companies can promote.
    </div>

    <section className="WhoAreWeListContainer">
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
        <div>
            <img src={Cube}  />
            <div>FirstName LastName</div>
            <div>Team Role</div>
        </div>
      
    </section>

</div>

    )
}

export default Who