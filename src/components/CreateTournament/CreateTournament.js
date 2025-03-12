import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { UserDashboard } from "../UserDashboard/UserDashboard";
import "./CreateTournament.css"
import { FaCamera } from "react-icons/fa";

const CreateTournament = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    //Storing Info
    const [discord, setDiscord] = useState("")
    const [twitch, setTwitch] = useState("")
    const [domain, setDomain] = useState("")
    const [website, setWebsite] = useState("")
    const [facebook, setFacebook] = useState("")
    const [youtube, setYoutube] = useState("")
    const [twitter, setTwitter] = useState("")
    const [instagram, setInstagram] = useState("")
    const [name, setName] = useState("")


    if(!user){
        navigate("../SignUp")
    }
    else{
        return(
        
        <div className="content-tournament-creator">
            <div className ="content-button">
                <button className="button-1">
                BASICS
                </button>
                <button className ="button-2">
                CONTACT INFO
                </button>
                <button className="button-3">
                ROLE
                </button>
            </div>
            <div className ="content-line"/>
            <h1>
                SETUP
            </h1>
            <div className = "content-setup">
                <p>
                    Name
                </p>
                <input className ="content-input" placeholder="Name your Organization">

                </input>
                <p>
                    Type
                </p>
                <button>

                </button>
            </div>
            <div className= "content-setup-image">
                    <div className="logo-image">
                        <p>
                            Logo
                        </p>
                        <input  
                        className="logo-image-div" 
                        type="image"
                        src=""
                        />
                    </div>
                    <div className="logo-background">
                        <p>
                            Header Images
                        </p>
                        <input 
                        className="logo-background-div" 
                        type="image"
                        src=""
                        />
                    </div>
                </div>
                <button className="contain-next">
                        Next
                </button>
        </div>
        );
    }
};


export default CreateTournament;