import React from "react";
import './maincontent.css';
import { Element } from "react-scroll";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router";

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
                    <NavLink to='/SignUp' style={{textDecoration: 'none'}}>
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
                    </NavLink>
                </div>



            </div>
        </Element>
        </div>

    );
}

export default MainContent