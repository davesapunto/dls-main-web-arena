import React from "react";
import '../Header/maincontent.css';
import { Element } from "react-scroll";
const MainContent = () => {
    return (
        <Element name="home">
            <div className="main-content">
                <div>
                    CREATE, ORGANIZE, AND JOIN <br /> TOURNAMENTS
                </div>
            </div>
        </Element>
    );
}

export default MainContent