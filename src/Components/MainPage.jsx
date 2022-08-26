import React from "react";
import MainText from "./MainText";
import Navbar from "./Navbar";
import SideTitle from "./SideTitle";
import Shoe from './Shoe.js';

function MainPage() {
    return (
        <div className="main">
            <SideTitle />
            <Navbar />
            <MainText />
            <Shoe />
        </div>
    )
}

export default MainPage;