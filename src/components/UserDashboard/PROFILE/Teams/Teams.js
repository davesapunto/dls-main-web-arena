import React, { useEffect, useState } from "react";
import './Teams.css';
import { doc, getDoc, setDoc, collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { auth, DB } from "../../../firebase-config";
import { FaSearch } from "react-icons/fa";


const Teams = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasTeam, setTeam] = useState(false);
    const [teams, setTeams] = useState([]);
    let name = '';
    let description = '';
    let header = null;


    useEffect(() => {
        const fetchData = () => {
          try {
            const q = query(
              collection(DB, 'teams'),
              where('player_id', '==', auth.currentUser.uid)
            );
    
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              const teamsData = querySnapshot.docs.map((doc) => doc.data());
              if (teamsData.length > 0) {
                setTeam(true);
              } else {
                setTeam(false);
              }
              setLoading(false); 
            });

            return () => unsubscribe();
          } catch (error) {
            console.error(error.message);
            setLoading(false); 
          }
        };
    
        fetchData();
      }, []);
    

      useEffect(() => {
        const fetchDatas = () => {
          try {
            const teamsCollection = collection(DB, 'teams');
            const unsubscribe = onSnapshot(teamsCollection, (querySnapshot) => {
              const teamsData = querySnapshot.docs.map((doc) => doc.data());
              setTeams(teamsData);
              setLoading(false);
            });
    

            return () => unsubscribe();
          } catch (error) {
            console.error('Error fetching all teams:', error.message);
            setLoading(false);
          }
        };
    
        fetchDatas();
      }, []);

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (header && name.trim() !== '' && description.trim() !== '') {
                setLoading(true);
                let url = null;
                const storage = getStorage();
                const headerRef = ref(storage, `header/${Date.now()}_${header.name}`);
                await uploadBytes(headerRef, header).then(async () => {
                    url = await getDownloadURL(headerRef);
                    await setDoc(doc(DB, 'teams', name), {
                        owner: auth.currentUser.uid,
                        Name: name,
                        Desc: description,
                        Header: url,
                        player_id: {
                            playerID: auth.currentUser.uid
                        }
                    }).then(() => {
                        alert('team created');
                        setLoading(false);
                        setTeam(true);
                    });
                });
                
            } else {
                alert('NO INPUT');
            }
        } catch (error) { 
            console.log(error.message);
        }
    }

    const SearchTeams = () => {
        console.log(teams.map(data => data.Header));
        const teaminfo = teams.map((data, index) => 
            {
                if (index < 2) {
                    return <div key={index}>
                    <div className="team-container">
                        <div style={{width: 'inherit', height: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.644)', position: 'absolute', borderRadius: 10}}/>
                        <div style={{position: 'absolute'}}>
                            <h1 style={{marginLeft: 25}}>{data.Name}</h1>
                            <p>ID: {data.owner}</p>
                        </div>
                            <img src={data.Header} style={{width: 'inherit', height: 'inherit', objectFit: 'cover', borderRadius: 10}}/>
                        </div>
                    </div>
                }
            }
        );

        return (
            <div>
                <h1>SEARCH FOR TEAMS</h1>
                <input type="text" placeholder="Enter Team Name" style={{width: 600}}/>
                <FaSearch style={{marginLeft: 10, cursor: 'pointer'}}/>
                <div>
                    {teaminfo}
                </div>
            </div>
        );
    }

    const DisplayTeam = () => {

        const user_team = teams.filter(data => data.player_id.playerID === auth.currentUser.uid);

        const display = user_team.map(data => 
            <div>
                <h1>{data.Name}</h1>
            </div>
        );

        
        return (
            <div>
                {display}
            </div>
        );
    }

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
                    <form style={{margin: 50}} onSubmit={submit}>
                        <h2>Team Name</h2>
                        <input type='text' onChange={(e) => {
                            name = e.target.value;
                        }} placeholder="Team Name" required/>
                        <h2>Description</h2>
                        <input type='text' placeholder="Description" onChange={(e) => {
                            description = e.target.value;
                        }} required/>
                        <h2>TEAM BANNER</h2>
                        <input type='file' style={{width: '95%'}} onChange={(e) => header = e.target.files[0]}/><br></br>
                        <div style=
                        {
                            {
                                display: "flex",
                                alignItems: 'center',
                                justifyContent: 'center'
                            }
                        }>
                            {loading ? <p style=
                            {
                                {
                                    marginTop: 50,
                                    cursor: 'progress'
                                }
                            }>LOADING...</p> : <button type="submit" style=
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
                            }>SUBMIT</button>}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
    
    const MainTeam = teams.map(data => data.player_id.playerID);
    const check = MainTeam.some(data => data === auth.currentUser.uid);

    return (
        <div className="Teams">
            {check ? (<DisplayTeam/>) : 
            (page === 1 ? <div style=
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
                    </div> : page === 3 ? <CreateATeam/> : page === 2 ? <SearchTeams/> : null)}
        </div>
    );
}

export default Teams