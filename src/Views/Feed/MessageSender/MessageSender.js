import React, { useEffect, useState } from "react";
import './MessageSender.css'
import firebase from 'firebase'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Comments  from './../utility/Comments';
// icons
import { Avatar } from '@material-ui/core'
import { useAuth } from './../../../contexts/AuthContext'

// context api
//  import { useStateValue } from '../../state/Provider'

// database
import db from './../../../firebase'


function MessageSender({posts}) {
    const {currentUser,  currentUserInfo} = useAuth();
    const [input,setInput] = useState("");  
    const [imageUrl, setImageUrl] = useState("");  
    const [openComments, setOpenComments] = useState(false);
    const [postUsername, setPostUsername] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {


      if (openComments) {
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.querySelector("body").style.overflow = "scroll";
      }
    }, [openComments]);


  const handleSubmit = (e) => {
    var firstname;
    currentUserInfo && currentUserInfo.map((user)=>{
      if( user.data.email == currentUser.email ){
firstname = user.data.firstname
      }
     })
    e.preventDefault();
    //Some DB stuff
    db.firestore().collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
    profilePic: firstname,
    username: firstname,
    image: imageUrl,
  
  });
  
    setInput("");   // After enter, set it blank again the text box
    setImageUrl("");
  };
  
      return (
        <>
      {
        currentUserInfo && currentUserInfo.map((user)=>(
          user.data.email == currentUser.email ?(
          <div className="messageSender">
          <div className="messageSender_top">
          <Avatar
                    src={user.data.firstname}
                    className="post-avatar"
                    style={{ marginRight: "1rem" }}
                  >
                    {
                
                user.data.firstname.toUpperCase()[0]}
                </Avatar>
            <form>
              <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
                className="messageSender_input"
                placeholder={`What's on your mind, ${user.data.firstname}?`}
              />
              <input 
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL (Optional)" />
              <button onClick={handleSubmit} type="submit">
                Hidden submit
              </button>
            </form>
          </div>
          <div className="messageSender_bottom">
            <div className="messageSender_option">
              <VideocamIcon style={{ color: "red" }} />
              <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
              <PhotoLibraryIcon style={{ color: "green" }} />
              <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option" 
            >
              <InsertEmoticonIcon style={{ color: "orange" }} />
              <h3>Add Comments</h3>
            </div>
          </div>
        {openComments && posts.map((post) =>(
         <div
          onClick={()=>{
         setSelectedPost(post.data);
         setPostUsername(post.data.username);
          }}>
          <Comments
   post_id={post.id}
  open={openComments}
  setOpen={setOpenComments}
  postUsername={post.data.username}
  selectedPost={selectedPost}
  />
  </div>))} 
      
        </div>
          ) : null ))
        
     
      } 
   </>
      );
          }
  export default MessageSender
  