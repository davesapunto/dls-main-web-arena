import React, { useEffect, useState } from "react";
import './Teams.css';
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { auth, DB } from "../../../firebase-config";

const Teams = () => {

    const [page, setPage] = useState(1);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [header, setHeader] = useState(null);

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
            console.log(error.message);
        }

    }

    const submit = async () => {
        const storage = getStorage();
        let url = '';
        const headerRef = ref(storage, `header/${header.name}`);
        await uploadBytes(headerRef, header);

        url = getDownloadURL(headerRef);

        console.log(url);

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
                        <h2>TEAM BANNER</h2>
                        <input type='file' style={{width: '95%'}} onChange={(e) => setHeader(e.target.files[0])}/><br></br>
                        <div style=
                        {
                            {
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        }>
                            <button style=
                            {
                                {
                                    textAlign: 'center', 
                                    marginTop: 50, 
                                    width: 200, 
                                    height: 60, 
                                    borderRadius: 50,
                                    cursor: 'pointer',
                                    backgroundColor: 'grey',
                                    color: 'white',
                                    fontSize: 25
                                }
                            } onClick={submit}>SUBMIT</button>
                        </div>
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