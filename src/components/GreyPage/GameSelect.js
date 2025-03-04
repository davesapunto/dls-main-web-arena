import React from "react";
import '../GreyPage/GameSelect.css';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
                    <div className="card-modal">
                        <h1>MOBILE LEGENDS</h1>
                        <img src={require('../images/GIFS/layla-mlbb.gif')}/>
                    </div>
                    <div className="card-modal">
                        <h1>VALORANT</h1>
                        <img src={require('../images/GIFS/222056.gif')}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const SelectGame = () => {

    const [active, setActive] = useState(false);

    return (
        <>
        <div className="selectgames">
            <div className="game-select" onClick={() => 
                {
                    active ? setActive(false) : setActive(true)
                }}>
                <p>SELECT GAME</p>
            </div>
            <div className="game-select">
                <p>PLATFORM</p>
            </div>
        </div>
        <AnimatePresence>
            {active ? <SelectGameModal/> : null}
        </AnimatePresence>
        </>
    );
}

export default SelectGame