import "./share.css";
import React, {useState, useEffect} from 'react';
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import {useAuth } from './../../contexts/AuthContext';
import db from './../../firebase'
import firebase from 'firebase'



 
export default  function Share() {

  const { currentUser, currentUserInfo , getUserInfo, getUserName} = useAuth();


  


  const [input,setInput] = useState("");  
    const [imageUrl, setImageUrl] = useState("");  
    let userInfo = getUserInfo()

  const handleSubmit = (e) => {
    e.preventDefault();
    var name;
     currentUserInfo.map((info)=>{
      if(info.data.email == currentUser.email){
        name = info.data.firstname
      }
    })
    
    //Some DB stuff
    db.firestore().collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
    profilePic: "",
    username: name,
    image: "",
  
  }
  // console.log("did"));
    );
  setInput("");   // After enter, set it blank again the text box
  setImageUrl("");
};


  return (
    <>
    {
    userInfo && userInfo.map((info)=>(
    info.data.email == currentUser.email ? (
       <div className="share">
            <div className="shareWrapper">
              <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                  placeholder={`What's on your mind, ${info.data.firstname}?`}
                  className="shareInput"
                />
                  <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional)" />
              </div>
              <hr className="shareHr"/>
              <div className="shareBottom">
                  <div className="shareOptions">
                      <div className="shareOption">
                          <PermMedia htmlColor="tomato" className="shareIcon"/>
                          <span className="shareOptionText">Photo or Video</span>
                      </div>
                      <div className="shareOption">
                          <Label htmlColor="blue" className="shareIcon"/>
                          <span className="shareOptionText">Tag</span>
                      </div>
                      <div className="shareOption">
                          <Room htmlColor="green" className="shareIcon"/>
                          <span className="shareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                          <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                          <span className="shareOptionText">Feelings</span>
                      </div>
                  </div>
                  <button 
                  onClick={handleSubmit} type="submit"
                  className="shareButton">Share</button>
              </div>
            </div>
          </div>
    ) : null ))      
    }
     </>      
  );
}
