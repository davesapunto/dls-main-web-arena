import React from "react";
import '../GreyPage/GameSelect.css';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Tournaments from "../tournaments/tournaments";

export var selectedGame = localStorage.getItem('game');


const SelectGameModal = () => {
    return (
        <motion.div 
        initial=
        {
            {
                y: -500
            }
        }
        animate=
        {
            {
                opacity: 1,
                y: 1
            }
        }
        exit=
        {
            {
                y: -500
            }
        }
        transition=
        {
            {duration: .2}
        }
        className="GameModal">
            <div className="modal-contents">
                <h1 style=
                {
                    {
                        marginBottom: 0
                    }
                }>SELECT A GAME</h1>
                <div className="modal-card">
                    <div className="card-modal" onClick={() => {
                        selectedGame = 'MOBILE LEGENDS'
                        localStorage.setItem('game', selectedGame);
                        window.location.reload();
                    }}>
                        <h1>MOBILE LEGENDS</h1>
                        <img src={require('../images/GIFS/layla-mlbb.gif')}/>
                    </div>
                    <div className="card-modal" onClick={() => {
                        selectedGame = 'VALORANT'
                        localStorage.setItem('game', selectedGame);
                        window.location.reload();
                    }}>
                        <h1>VALORANT</h1>
                        <img src={require('../images/GIFS/222056.gif')}/>
                    </div>
                    <div className="card-modal" onClick={() => {
                        selectedGame = 'LEAGUE OF LEGENDS'
                        localStorage.setItem('game', selectedGame);
                        window.location.reload();
                    }}>
                        <h1>LEAGUE <br/>OF LEGENDS</h1>
                        <img src={require('../images/GIFS/giphy.gif')}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const PlatformModal = () => {
    return (
        <motion.div 
        initial=
        {
            {
                y: -500
            }
        }
        animate=
        {
            {
                opacity: 1,
                y: 1
            }
        }
        exit=
        {
            {
                y: -500
            }
        }
        transition=
        {
            {duration: .2}
        }
        className="GameModal">
            <div className="modal-contents">
                <h1 style=
                {
                    {
                        marginBottom: 0
                    }
                }>SELECT PLATFORM</h1>
                <div className="modal-card">
                    <div className="card-modal">
                        <h1>MOBILE</h1>
                        <img src={require('../images/GIFS/original-956ded2007b762cb919a783aeb0d61b3.gif')}/>
                    </div>
                    <div className="card-modal">
                        <h1>PC</h1>
                        <img src={require('../images/GIFS/7RT5.gif')}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const SelectGame = () => {

    const [active, setActive] = useState(false);
    const [platform, setPlatform] = useState(false);

    return (
        <>
        <div className="selectgames">
            <div className="game-select" onClick={() => 
                {
                    setPlatform(false)
                    active ? setActive(false) : setActive(true)
                }}
            >
                <p>SELECT GAME</p>
            </div>
            <div className="game-select" onClick={() => 
                {
                    setActive(false)
                    platform ? setPlatform(false) : setPlatform(true)
                }}>
                <p>PLATFORM</p>
            </div>
        </div>
        <AnimatePresence>
            {active ? <SelectGameModal/> : null}
            {platform ? <PlatformModal/> : null}
        </AnimatePresence>
        <Tournaments game={selectedGame}/>
        </>
    );
}

export default SelectGame