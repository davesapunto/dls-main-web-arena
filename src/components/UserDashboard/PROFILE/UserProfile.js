import React from "react";
import '../PROFILE/ProfileView.css';
import { doc, getDoc, setDoc, collection } from "firebase/firestore";

const ProfileView = () => {

    const fetchUserData = () => {

    }

    return (
        <div className="profileview">
            <div className="header-image">
                <img src={require('../../images/background4.png')} style={{width: '100%', height: 'inherit'}}/>
            </div>
            <div className="profile-picture">
                {/* <img src={require('../../images/qiyana.jpeg')}/> */}
            </div>
        </div>
    );
}

export default ProfileView
