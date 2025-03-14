import React, { useState } from "react";
import '../PROFILE/ProfileView.css';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, DB } from "../../firebase-config";

const ProfileView = () => {

    const [users, setUser] = useState('');
    const [tournaments, setTournaments] = useState([]); 

    const fetchUserData = async () => {
        const user = auth.currentUser.uid;
        const data = doc(DB, 'users', user);
        const userData = await getDoc(data);

        if (userData.exists()) {
            setUser(userData.data());
            return;
        } else {
            console.log('user not found');
        }
        
    }


    const fetchData = async () => { //eto yung pang fetch ng data sa firebase
        const tournas = collection(DB, 'tournaments');
            try {
                const data = await getDocs(tournas);
                const dataItems = data.docs.map(doc => ({
                    name: doc.id,
                    ...doc.data() 
                }));
                setTournaments(dataItems);
            } catch (error) {
                console.error(error.message);
            }
    };

    const filtered = tournaments.filter(t => t.owner === users.username);

    const tableData = filtered.map(items => //ETO MAG LALAGAY ITEMS SA TABLE TROPA
        <tr>
            <td>{items.name}</td>
            <td>{items.owner}</td>
            <td>{items.mode}</td>
            <td>{items.dateCreated}</td>
            <td>{items.status}</td>
        </tr>
    );
    fetchData();
    fetchUserData();

    const RenderTournaments = () => {
        return (
            <div className="Tournaments-container">
                <table className="blueTable">
                <thead>
                <tr>
                <th>Name</th>
                <th>Game</th>
                <th>Mode</th>
                <th>Date</th>
                <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {tableData}
                </tbody>
                </table>
            </div>
        );
    }

    const RenderDisplay = () => {
        return (
            <div className="profileview">
            <div className="header-image">
                <img src={require('../../images/qiyana.jpeg')} style={{width: '100%', height: 'inherit', display: 'flex'}}/>
                <div className="profile-picture">
                <img src={require('../../images/c4.png')} style={{width: '100%', height: 'inherit', borderRadius: '500px', position: 'inherit'}}/>
                </div>
            </div>
            <div className="user-infos">
                <h1 style={{margin: 0, paddingTop: 30}}>{users.username}</h1>
                <p style={{margin: 0, color: 'grey', marginBottom: 20}}>ID: {auth.currentUser.uid}</p>
            </div>
            <div className="more-info">
                <ul>
                    <li>FRIENDS</li>
                    <li>TOURNAMENTS</li>
                    <li>LINKS</li>
                </ul>
            </div>
            <div className="Main-Content">
                <RenderTournaments/>
            </div>
        </div>
        );
    }

    return (
        <>
        {users === '' ? 
        <div style=
        {
            {
                width: '100%',
                height: '100vh',
                backgroundColor: 'black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: ' white'
            }
        }>
            <h1>LOADING . . .</h1>
        </div> : <RenderDisplay/>}
        </>
    );
}

export default ProfileView
