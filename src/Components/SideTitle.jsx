import React from "react";
import Logo from '../Assets/logo.svg';

function SideTitle() {
    return (
        <div className="sideline">
            <div className="logo">
                <img src={Logo} alt="/" />
            </div>
            <div className="side-text">
                <h5>
                    Style Takes Over
                </h5>
            </div>
        </div>
    )
}

export default SideTitle;