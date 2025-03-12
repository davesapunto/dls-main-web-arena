import React, { useState } from "react";
import './TCREATE.css';
import { doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import { DB } from "../firebase-config";
import { auth } from "../firebase-config";


const TournamentCreation = () => {
    const user = auth.currentUser;
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [mode, setMode] = useState('');
    const [game, setGame] = useState('');

    const saveData = async () => {
        const data = {
            name: name,
            type: type,
            mode: mode,
            game: game,
            owner: user.displayName,
            players: {
                
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
            <button onClick={saveData}>SUBMIT</button>
        </div>
    );
}

const ContactInfo = () => {
    
}

export default TournamentCreation