import React from "react";
import MainText from "./MainText";
import Navbar from "./Navbar";
import SideTitle from "./SideTitle";
import Shoe from './Shoe.jsx';

function MainPage() {
    return (
        <div className="main">
            <SideTitle />
            <Navbar />
            <Shoe />
            <MainText />
        </div>
    )
}

export default MainPage;