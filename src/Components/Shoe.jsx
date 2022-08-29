import React from "react";
import shoe from '../Assets/Shoe.png';
import Shadow from "./Shadow";

function Shoe() {
    return (
        <div className="shoe">
            <img src={shoe} alt="/" />
            {/* <Shadow /> */}
        </div>
    )
}

export default Shoe;