import React, { useState } from "react";
import './ProfileView.css';
import { motion } from "motion/react";
import { doc, getDoc, setDoc, arrayUnion } from "firebase/firestore";
import { DB } from "../../firebase-config";


const DisplayUser = (data) => {

    const USER_DATA = [data.user];
    const CURRENT_USER = [data.currentUser];
    const [open, setOpen] = useState(false);
    const [follow, setFollow] = useState(false);
    const [isFriend, setIsFriend] = useState();
    
    // console.log(CURRENT_USER.map(data => data.friends));
        
    
    const RequestFriend = async (datas) => {
        try {
            const getSelectedData = (await getDoc(doc(DB, 'users', datas))).data();

            const check = getSelectedData.friends.some(datas => datas.id === data.currentUser.id);

            if (check) {
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

    return(
        <>
        {data.visible ? <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        className="display-user">
                <div className="user-card">
                    <div className="user-header">
                        <img src={require('../../images/qiyana.jpeg')} style={{width: '100%', height: 'inherit', display: 'flex'}}/>
                    </div>
                    <div className="header-profile">
                        <img src={require('../../images/c4.png')} style={{width: '100%', height: 'inherit', borderRadius: '500px', position: 'inherit'}}/>
                    </div>
                    <h1>
                        {data.user.username}
                    </h1>
                    {follow ? <button>UNFOLLOW</button> : <button onClick={() => RequestFriend(data.user.id)}>FOLLOW</button>}
                </div>
            </motion.div> : null}
        </>
    );
}


export default DisplayUser