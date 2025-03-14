 import React, { useState } from "react";
import './TCREATE.css';
import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { DB } from "../firebase-config";
import { auth } from "../firebase-config";


const TournamentCreation = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [mode, setMode] = useState('');
    const [game, setGame] = useState('');
    const [checkin, setCheckin] = useState('');
    const [report, setReport] = useState('');
    const [screenshot, setScreenshot] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    //settings
    const [platform, setPlatform] = useState('');
    const [checkin, isCheckin] = useState(false);

    //Socials
    const [discord, setDiscord] = useState("");
    const [twitch, setTwitch] = useState("");
    const [domain, setDomain] = useState("");
    const [website, setWebsite] = useState("");
    const [facebook, setFacebook] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    const Next = () =>{
        setCurrentPage(currentPage + 1);
    }

    const saveData = async () => {
        //backend
        const user = doc(DB, 'users', auth.currentUser.uid);
        const userAUTH = await getDoc(user);
        console.log(userAUTH.data());

        const data = {
            name: name,
            type: type,
            mode: mode,
            game: game,
            owner: userAUTH.data().username,
            settings: {
                
            },
            players: {
                
            },
            socials: {
                Discord: discord,
                Twitch: twitch,
                Domain: domain,
                Website: website,
                Facebook: facebook,
                Twitter: twitter,
                Instagram: instagram,
                Youtube: youtube
            }
        }
        try {
            await setDoc(doc(DB, 'tournaments', name), data).then(() => {
                alert('tournament added');
            });
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="tournament">
            <div className="selection-type">
                <h1>SETUP</h1>
                <h1>CONTACT INFO</h1>
                <h1>ROLE</h1>
            </div>
            {/*Page to for the setup*/}
            {currentPage === 1 && (
                <>
                    <h1 style={{color: 'white', marginBottom: 20}}>SETUP</h1>
                    <div className="setup">
                        <p style=
                        {
                            {
                                margin: 0,
                                marginBottom: 0,
                                fontSize: 30
                            }
                        }>Name</p>
                        <input type="text" style=
                        {
                            {
                                width: '130%',
                                backgroundColor: '#1d1c1c',
                                height: 30,
                                fontSize: 20
                            }
                        } placeholder="Tournament Name" value={name} onChange={(text) => setName(text.target.value)} required/>
                        <p style=
                        {
                            {
                                margin: 0,
                                marginBottom: 0,
                                fontSize: 30
                            }
                        }>Game</p>
                        <select className="game-select-option" onChange={(e) => setGame(e.target.value)}>
                            <option>SELECT GAME</option>
                            <option>VALORANT</option>
                            <option>MOBILE LEGENDS</option>
                            <option>LEAGUE OF LEGENDS</option>
                        </select>
                        <p style=
                        {
                            {
                                margin: 0,
                                marginBottom: 0,
                                fontSize: 30
                            }
                        }>Type</p>
                        <div class="radio-input" style=
                        {
                            {
                                marginTop: 15,
                            }
                        }>
                        <label>
                            <input type="radio" id="value-1" name="value-radio" value="1" onClick={() => setType('PERSONAL')} required/>
                            <span>Personal</span>
                        </label>
                        <label>
                            <input type="radio" id="value-2" name="value-radio" value="2" onClick={() => setType('BUSINESS')} required/>
                            <span>Business</span>
                        </label>
                        <span class="selection"></span>
                        </div>
                    </div>
                    <div className="setup-selection">
                        <div className={mode === 'SINGLE ELIMINATION' ? 'single-elims' : 'card-selection'} onClick={() => 
                        {
                            setMode('SINGLE ELIMINATION');
                        }}>
                            <h1>SINGLE ELIMINATION</h1>
                        </div>
                        <div className={mode === 'DOUBLE ELIMINATION' ? 'double-elims' : 'card-selection'} onClick={() => {
                            setMode('DOUBLE ELIMINATION');
                        }}>
                            <h1>DOUBLE ELIMINATION</h1>
                        </div>
                    </div>
                    <div className="page-button1">
                        <button 
                        className = "next-button"
                        onClick={() => Next()}>
                                NEXT
                        </button>
                    </div>
            </>
            )}
            {currentPage === 2 && (

                <>
                    <div className ="setup-page">
                        <h1>
                            Game Region/Server
                        </h1>
                        <h1>
                            Platform
                        </h1>
                        <input placeholder="Select your region/Server">
                        </input>
                        <input placeholder="Select your Platform">
                        </input>
                    </div>
                    <div className="setup-page2">
                        <h1>
                            Check-in
                        </h1>
                        <div className="setup-page2-1">
                            <button onClick={
                                () => {
                                    setCheckin(false);
                                }
                            }>
                                Disabled
                            </button>
                            <button onClick={
                                () => {
                                    setCheckin(true);
                                }
                            }>
                                Enabled
                            </button>
                        </div>
                        <h1>
                            Match Score Reporting
                        </h1>
                        <div className="setup-page2-1">
                            <button onClick={() => {
                                setReport('GM ONLY');
                            }}>
                                Game Masters Only
                            </button>
                            <button onClick={() => {
                                setReport('GM AND PL');
                            }}>
                                Game Masters and Players
                            </button>
                        </div>
                        <h1>
                            Required Screenshot
                        </h1>
                        <div className="setup-page2-1">
                            <button onClick={() => {
                                setScreenshot(false);
                            }}>
                                Disabled
                            </button>
                            <button onClick={() => {
                                setScreenshot(true);
                            }}>
                                Enabled
                            </button>
                        </div>
                    </div>
                    <div className = "page-button2">
                        <button 
                        className ="previous-button"
                        onClick={() => setCurrentPage(1)}>
                            PREVIOUS
                        </button>
                        <button 
                        className ="next-button"
                        onClick={() => Next()}>
                            NEXT
                        </button>
                    </div>
                </>
            )}
            {currentPage === 3 && (
                <>
                    <div className = "page-2">
                        <input placeholder="Discord Invite Link" onChange={(e) => {setDiscord(e.target.value)}}>
                        </input>
                        <input placeholder="Your Twitch Username" onChange={(e) => {setTwitch(e.target.value)}}>
                        </input>
                        <input placeholder="Contact@your-domain.com" onChange={(e) => {setDomain(e.target.value)}}>
                        </input>
                        <input placeholder="https://www-your-website.com" onChange={(e) => {setWebsite(e.target.value)}}>
                        </input>
                        <input placeholder="Your Facebook Username" onChange={(e) => {setFacebook(e.target.value)}}>
                        </input>
                        <input placeholder="Your Youtube Username" onChange={(e) => {setYoutube(e.target.value)}}>
                        </input>
                        <input placeholder="Your Twitter Username" onChange={(e) => {setTwitter(e.target.value)}}>
                        </input>
                        <input placeholder="Your Instagram Username" onChange={(e) => {setInstagram(e.target.value)}}>
                        </input>
                    </div>
                    <div className = "page-button2">
                        <button 
                        className ="previous-button"
                        onClick={() => setCurrentPage(1)}>
                            PREVIOUS
                        </button>
                        <button 
                        className ="next-button"
                        onClick={() => Next()}>
                            NEXT
                        </button>
                    </div>
                </>
            )}
            {currentPage === 4 &&(
                <>
                    <div className="page-button2">
                        <button 
                        className ="previous-button"
                        onClick={() => setCurrentPage(2)}>
                            PREVIOUS
                        </button>
                        <button 
                        onClick={saveData}
                        className="next-button">
                            SUBMIT
                        </button>
                    </div>
                </>

            )}
        </div>
    );
}

const ContactInfo = () => {
    
}

export default TournamentCreation