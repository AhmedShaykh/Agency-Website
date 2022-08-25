import React from "react";
import Logo from '../Assets/logo.svg';

function SideTitle() {
    return (
        <div className="sideline">
            <div className="logo">
                <img src={Logo} alt="/" />
            </div>
            <div className="side-text">
                <p>
                    Style Takes Over
                </p>
            </div>
        </div>
    )
}

export default SideTitle;