import React, { useEffect, useState } from "react";
import '../PROFILE/ProfileView.css';
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { auth, DB } from "../../firebase-config";
import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";

const ProfileView = () => {

    const [users, setUser] = useState('');
    const [tournaments, setTournaments] = useState([]); 
    const [DISPLAYTOURNAMENTS, SETDISPLAY] = useState('');
    const [page, setPage] = useState(1);
    var searched = '';


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

    useEffect(() => { //load mga data isang beses lang
        fetchData();
        fetchUserData();
    }, []);

    const RenderTournaments = () => {

        const filtered = tournaments.filter(t => t.owner === users.username); //filters (ps. diko alam kung pede shortcutin to using if else eh sa iba ko nalang try)
        const NameFiltered = filtered.filter(i => i.name === DISPLAYTOURNAMENTS);

        const DataFiltered = NameFiltered.map((items, index) => 
            <motion.tr 
            initial={{opacity: 0, y: 75}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: `.${index}`, duration: .5}}>
                <td style={{fontWeight: 'bold', fontSize: 'large'}}>{items.name}</td>
                <td>{items.game}</td>
                <td>{items.mode}</td>
                <td>{items.dateCreated}</td>
                <td>{items.status}</td>
            </motion.tr>
        );


        const tableData = filtered.map((items,index) =>  //ETO MAG LALAGAY ITEMS SA TABLE TROPA
            <motion.tr 
            initial={{opacity: 0, y: 75}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: `.${index}`, duration: .5}}>
                <td style={{fontWeight: 'bold', fontSize: 'large'}}>{items.name}</td>
                <td>{items.game}</td>
                <td>{items.mode}</td>
                <td>{items.dateCreated}</td>
                <td>{items.status}</td>
            </motion.tr>
        );

        return (
            <div className="Tournaments-container">
                <motion.h1 
                initial={{opacity: 0, y: 75}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: .3, duration: .5}}
                style=
                {
                    {
                        marginTop: 0,
                        padding: 0,
                        color: 'white'
                    }
                }>
                    TOURNAMENTS
                </motion.h1>
                <motion.div 
                initial={{opacity: 0, y: 75}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: .5, duration: .5}}
                className="seach-tournament">
                    <input type="text" 
                    style=
                    {
                        {
                            width: '50%',
                            marginBottom: 20
                        }
                    } placeholder="Enter Tournament Name" onChange={(text) => 
                    {
                        searched = text.target.value;
                    }}/>
                    <FaSearch color="white" style={{marginLeft: 20, cursor: 'pointer'}} className="search" onClick={() => SETDISPLAY(searched)}/>
                </motion.div>
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
                {DISPLAYTOURNAMENTS === '' ? tableData:DataFiltered}
                </tbody>
                </table>
            </div>
        );
    }

        
    const RenderFriends = () => {
        return (
            <div>
                
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
                    <li onClick={() => setPage(1)}>FRIENDS</li>
                    <li onClick={() => setPage(2)}>TOURNAMENTS</li>
                    <li onClick={() => setPage(3)}>LINKS</li>
                </ul>
            </div>
            <div className="Main-Content-Profile">
                {page === 1 ? null : page === 2 ? <RenderTournaments/> : null}
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
