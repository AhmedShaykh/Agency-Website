import React from "react";
import SideTitle from "./SideTitle";
import Navbar from "./Navbar";
import EllipseBG from "./EllipseBG";
import Shoe from './Shoe.jsx';
import MainText from "./MainText";
import Ellipse from "./Ellipse";

function MainPage() {
    return (
        <div className="main">
            <SideTitle />
            <Navbar />
            <EllipseBG />
            <Shoe />
            <MainText />
            <Ellipse />
        </div>
    )
}

export default MainPage;