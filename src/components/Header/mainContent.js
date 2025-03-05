import React from "react";
import '../Header/maincontent.css';
import { Element } from "react-scroll";
import { FaArrowCircleRight } from "react-icons/fa";

const MainContent = () => {
    return (
        <div style=
        {
            {
                zIndex: 100
            }
        }>
            <Element name="home">
            <div className="main-content">
                <div className = "content-text">
                    CREATE, ORGANIZE, AND JOIN <br /> TOURNAMENTS
                    <p>Join us and ignite the gamer within you!</p>
                    <button className ="content-box">
                    <FaArrowCircleRight
                    style={{
                        marginRight: '20px',
                        color: 'black'
                    }}
                    size="40px"
                    />
                    JOIN US NOW!
                    </button>
                </div>
            </div>
        </Element>
        </div>

    );
}

export default MainContent