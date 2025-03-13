import React, { useState } from "react";
import '../PROFILE/ProfileView.css';
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { auth, DB } from "../../firebase-config";

const ProfileView = () => {

    const [users, setUser] = useState('');

    const fetchUserData = async () => {
        const user = auth.currentUser.uid;
        const data = doc(DB, 'users', user);
        const userData = await getDoc(data);

        if (userData.exists()) {
            setUser(userData.data());
            console.log(users);
            return;
        } else {
            console.log('user not found');
        }
        
    }

    fetchUserData();

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
