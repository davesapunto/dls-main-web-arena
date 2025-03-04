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
                <h1>SELECT A GAME</h1>
                <div className="modal-card">
                    <div className="card">
                        <h1>TEST</h1>
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