import React from "react";
import '../GreyPage/GameSelect.css';
import { useState } from "react";


const SelectGameModal = () => {
    return (
        <div className="GameModal">
        </div>
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
        {active ? <SelectGameModal/> : null}
        </>
    );
}

export default SelectGame