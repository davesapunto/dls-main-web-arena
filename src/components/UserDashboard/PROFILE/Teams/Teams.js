import React, { useEffect, useState } from "react";
import './Teams.css';
import { doc, getDoc } from "firebase/firestore";
import { auth, DB } from "../../../firebase-config";

const Teams = () => {

    const [page, setPage] = useState(1);
    var hasTeam = false;

    const fetchData = async () => {

        try {
            const data = (await getDoc(doc(DB, 'users', auth.currentUser.uid))).data(); //data ng naka auth na user
            
            if (data.team.length != 0) {
                hasTeam = !hasTeam;
            } else {
                hasTeam = false;
            }

        } catch (error) {

        }

    }

    useEffect(() => {
        fetchData();
    });

    const CreateATeam = () => {
        return (
            <div className="team-create">
                <div style=
                {
                    {
                        width: '93%',
                        height: '70vh',
                        backgroundColor: 'black',
                        borderRadius: 50,
                        color: 'white'
                    }
                }>
                    <h1 style={{textAlign: 'center'}}>CREATE A TEAM</h1>
                    <form style={{margin: 50}}>
                        <h2>Team Name</h2>
                        <input type='text' placeholder="Team Name" required/>
                        <h2>Description</h2>
                        <input type='text' placeholder="Description" required/>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="Teams">
            {hasTeam ? (
                <div>
                    <h1>TEST HAS TEAM</h1>
                </div>) : (page === 1 ? <div style=
                    {
                        {
                            textAlign: 'center',
                            color: 'grey',
                            fontSize: 10
                        }
                    }>
                        <h1>You haven’t joined any team yet. Find or create a team to get started!</h1><br></br>
                        <button id="team-btn" onClick={() => setPage(2)}>JOIN A TEAM</button>
                        <h1>OR</h1>
                        <button id="team-btn" onClick={() => setPage(3)}>CREATE A TEAM</button>
                    </div> : page === 3 ? <CreateATeam/> : null)}
        </div>
    );
}

export default Teams