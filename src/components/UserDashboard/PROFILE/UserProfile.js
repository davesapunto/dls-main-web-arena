import React, { useEffect, useState } from "react";
import '../PROFILE/ProfileView.css';
import { doc, getDoc, collection, getDocs, setDoc } from "firebase/firestore";
import { auth, DB } from "../../firebase-config";
import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";

const ProfileView = () => {

    const [users, setUser] = useState('');
    const [tournaments, setTournaments] = useState([]); 
    const [DISPLAYTOURNAMENTS, SETDISPLAY] = useState('');
    const [page, setPage] = useState(1);
    const [allUsers, setAllUsers] = useState([]);
    var searched = '';
    var searchedUSER = '';

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

    const fetchAllUsers = async () => {
        try {
            const users = [{}];
            const data = collection(DB, 'users');
            const fetch = await getDocs(data);
            fetch.docs.map((data, index) => {
                users.push(data.data());
            });
            users.shift();
            setAllUsers(users);
        } catch (error) {
            console.log(error.message);
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
        fetchAllUsers();
    }, []);

    const RenderTournaments = () => {

        const filtered = tournaments.filter(t => t.id === users.id); //filters (ps. diko alam kung pede shortcutin to using if else eh sa iba ko nalang try)
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
    const friendFilter = allUsers.filter(friends => friends.id !== users.id);

    const RequestFriend = async (id) => { //add friend function
        let requests = [];
        const request = doc(DB, 'users', id);
        const fetch = await getDoc(request);
        const user = fetch.data().friendRQ; //get requests
        requests = user;

        const checkDuplicate = requests.some(data => data.id === users.id); //diko alam tong some nato HAHAH nisabi lang ng AI
        //pero yung some chinecheck niya each element kung may kaparehas ba
        if (checkDuplicate) {
            alert('REQUEST ALREADY SENT');
            return;
        } else {
            try {
                requests.push(users);
                // requests.shift();
                console.log(requests);
                await setDoc(doc(DB, 'users', id), { //push requests to DB
                    ...fetch.data(),    
                    friendRQ: requests
                }).then(() => {
                    console.log(fetch.data().friendRQ);
                    alert('Request Sent.');
                });
    
            } catch (error) {
                console.log('Error in line 163 UserProfile.js (fetch error)' + error.message);
            }
        }
    }

    const FindFriends = friendFilter.map((data, index) => 
        <motion.div 
        initial={{opacity: 0, y: 75}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: `.${index}`, duration: .5}}
        key={index} 
        onClick={() => 
            {
                RequestFriend(data.id);
            }}
        className="friend-card" style={{marginBottom: 50}}>
            <p style={{margin: 0, padding: 0, fontWeight: 'bold'}}>{data.username}</p>        
            <img src={require('../../images/icons8-person-96.png')}/>
        </motion.div>
    );

    const searchFriends = allUsers.filter((data,index) => data.username === 'TREK');

        return (
            <div className='friends-tab'>
                <motion.h1
                initial={{opacity: 0, y: 75}}   
                animate={{opacity: 1, y: 0}}
                transition={{delay: .3, duration: .5}} className="friend-selection">
                    FIND FRIENDS
                </motion.h1>
                <motion.h1
                initial={{opacity: 0, y: 75}}   
                animate={{opacity: 1, y: 0}}
                transition={{delay: .4, duration: .5}} className="friend-selection">
                    {Object.keys(users.friendRQ).length === 0 
                    ? 'FRIEND REQUEST (none)' : 
                    `FRIEND REQUESTS (${Object.keys(users.friendRQ).length})`}
                </motion.h1>
                <motion.div
                initial={{opacity: 0, y: 75}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: .4, duration: .5}}>
                <input type="text" 
                    style=
                    {
                        {
                            width: '50%',
                            marginBottom: 20
                        }
                    } placeholder="Enter ID or Name" onChange={(text) => 
                    {
                        searched = text.target.value;
                    }}/>
                    <FaSearch color="white" style={{marginLeft: 20, cursor: 'pointer'}} className="search" onClick={() => SETDISPLAY(searched)}/>
                </motion.div>
                <div className="friends-grid">
                    {FindFriends}
                </div>
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
                {page === 1 ? <RenderFriends/> : page === 2 ? <RenderTournaments/> : null}
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
