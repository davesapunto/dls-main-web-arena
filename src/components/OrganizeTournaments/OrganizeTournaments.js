import "../OrganizeTournaments/OrganizeTournaments.css"
import React from "react";
import { Element } from "react-scroll";

const OrganizeTournaments = () => {

    return(
        <>
        <Element name="org_tourna">
            <div className="contain">
                <div className ="org-text">
                    JOIN, CREATE, AND ORGANIZE your tournaments<br /> with ease. Get started TODAY!
                    <button href="" className = "org-contain">
                        CREATE MY TOURNAMENT
                    </button>
                </div>
            </div>
        </Element>
        </>
    )
}


export default OrganizeTournaments;