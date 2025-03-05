import React from "react";
import '../Header/maincontent.css';
import { Element } from "react-scroll";
const MainContent = () => {
    return (
        <Element name="home">
            <div className="main-content">
            <div className="text">
                <h1>TEST</h1>
            </div>
        </div>
        </Element>
    );
}

export default MainContent