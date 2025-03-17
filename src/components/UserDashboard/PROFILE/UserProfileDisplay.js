import React, { useState } from "react";
import './ProfileView.css';
import { motion } from "motion/react";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import { DB } from "../../firebase-config";
import { IoIosGitPullRequest } from "react-icons/io";


const DisplayUser = (data) => {

    const USER_DATA = [data.user];
    const CURRENT_USER = [data.currentUser];
    const [open, setOpen] = useState(false);
    const [follow, setFollow] = useState(false);
    const [isFriend, setIsFriend] = useState();
    const [requested, setRequested] = useState(false);
    
    // console.log(CURRENT_USER.map(data => data.friends));
        
    
    const RequestFriend = async (datas) => {

        try {
            const getSelectedData = (await getDoc(doc(DB, 'users', datas))).data();

            const check = getSelectedData.friends.some(datas => datas.id === data.currentUser.id);

            if (check) {
                setIsFriend(check);
                return;
            } else {
                await setDoc(doc(DB, 'users', datas), {
                    ...getSelectedData,
                    friendRQ: arrayUnion(data.currentUser)
                },{merge:true} ).then(() => {
                    alert('success');
                });
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const isfollowing = async () => {
        const getSelectedData = (await getDoc(doc(DB, 'users', data.user.id))).data();

        const check = getSelectedData.friends.some(datas => datas.id === data.currentUser.id);
        const checkFR = data.currentUser.friendRQ.some(datas => datas.id == getSelectedData.id);
        setRequested(checkFR);
        setIsFriend(check);
    }

    isfollowing();

    return(
        <>
        {data.visible ? <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="display-user">
                <div className="user-card">
                    <div className="user-header">
                        <img src={require('../../images/qiyana.jpeg')} style={{width: '100%', height: 'inherit', display: 'flex', objectFit: 'cover'}}/>
                    </div>
                    <div className="header-profile">
                        <img src={require('../../images/c4.png')} style={{width: '100%', height: 'inherit', borderRadius: '500px', position: 'inherit', objectFit: 'cover'}}/>
                    </div>
                    <div style={{margin: 0}}>
                        <h1>
                            {data.user.username}
                        </h1>
                        <h3>WINS</h3>
                        <p>{data.user.wins}</p>
                        <h3>LOSSES</h3>
                        <p>{data.user.losses}</p>
                    </div>
                    <div style={{textAlign: 'center'}}>
                        {/* LAGYAN NG ACCEPT FOLLOW BUTTON PAG TRUE */}
                        {isFriend ? (
                        <button id="PD-btns">UNFOLLOW</button>
                        ) : requested ? (
                            <p>{String(data.user.username).toUpperCase()} SENT A FRIEND REQUEST</p>
                        ) : (
                            <button id="PD-btns" onClick={() => RequestFriend(data.user.id)}>FOLLOW</button>
                        )}
                    </div>
                </div>
            </motion.div> : null}
        </>
    );
}


export default DisplayUser