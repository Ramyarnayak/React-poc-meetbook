import "./rightbar.css";
import { Users } from "../../Data/dummyData";
import Online from "../online/Online.js";
import React, {useEffect, useState} from 'react'
import { useAuth } from "../../contexts/AuthContext";
import {app, db, storage, database} from './../../firebase'
export default function Rightbar({ profile , user, userId}) {
  const [url, setURL] = useState("");
const {friends, currentUserInfo, currentUserNames} = useAuth();

useEffect(()=>{
  currentUserInfo && currentUserInfo.map((user)=>{
    friends.map(((friend)=>{
   if(friend.data.id === user.id){
 
    const ref = storage.ref(`/images/${user.id}`);
    ref
    .getDownloadURL()
    .then((url) => { 
      setURL(url);
      console.log("me")
      
    })
  }
  }))
 
  })
}, [url])

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        { currentUserInfo && currentUserInfo.map((user, id)=>(
            <Online key={id} user={user.data} />
        )) }
        
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
  
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">DOB:</span>
            <span className="rightbarInfoValue">{user.dob}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Gender:</span>
            <span className="rightbarInfoValue">{user.gender}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        {
          friends && friends.map((friend)=>(
            currentUserInfo.map((user)=>(
            (friend.data.id === user.id && friend.data.friends != user.firstname) ?
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={url}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{friend.data.friends}</span>
            </div>
          </div> : null
          ))))
   
        }
       
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
