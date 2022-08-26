import React from "react";
import MainText from "./MainText";
import Navbar from "./Navbar";
import SideTitle from "./SideTitle";

function MainPage() {
    return (
        <div className="main">
            <SideTitle />
            <Navbar />
            <MainText />
        </div>
    )
}

export default MainPage;