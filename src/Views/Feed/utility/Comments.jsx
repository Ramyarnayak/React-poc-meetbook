import React, { useContext, useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Divider,
  Tooltip,
  Avatar,
  CircularProgress,
} from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Link } from "react-router-dom";
import firebase  from "firebase";
import db from "./../../../firebase";
import CloseIcon from "@material-ui/icons/Close";
import PostDropdown from "./PostDropdown";
// context api
// import { useStateValue } from './../state/Provider'
import CommentBox from "./CommentBox";
import { useAuth } from './../../../contexts/AuthContext'
function Comments({
  post_id,

  selectedPost,
  open,
  setOpen,
  postUsername

}) {
  // const [{ user }, dispatch] = useStateValue();
  const [postUser, setPostUser] = useState(null);
  const [comments, setComments] = useState(null);
  const { currentUser, currentUserInfo } = useAuth();
  
  useEffect(() => {
      // currentUserInfo &&  currentUserInfo.map((info)=>{
    //   if(info.data.email == currentUser.email){
    //     user = info.data
    //   }
    // })
    fetchUser();
    // s
  }, []);

  const fetchUser = async () => {
      currentUserInfo &&  currentUserInfo.map((info)=>{
      if(info.data.email == currentUser.email){
       
        setPostUser(info.data);
      }
    })
   
  };
  useEffect(() => {
    db.firestore().collection("comments").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
        setComments(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        )
      );
}, []);
  

 function formSubmit(e) {
    e.preventDefault();
    const form= e.target;
    db.firestore().collection('comments').add({
     
     
     comment : e.target.elements.comment.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
    profilePic: "",
    username: postUsername,
    selectedPost_id : selectedPost,
  
  });

  // listComments();
  form.reset();
 
}


  const removePost = async () => {
    // handleDelete(selectedPost._id);
    setOpen(false);
  };

  return ( 
    <>
   {
        currentUserInfo && currentUserInfo.map((user)=>(
          user.data.email == currentUser.email ?(
            <div>
   <div className="blur-background"></div>
      <div className="comments-container">
        { !currentUser ? (
          <CircularProgress className="loading-gif" />
        ) : (
            <>
              <div className="post comment-post">
                <CloseIcon
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="close-comments"
                />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={user.data.firstname}
                    className="post-avatar"
                    style={{ marginRight: "1rem" }}
                  >
                    {
                
                      user.data.firstname.toUpperCase()[0]}
                  </Avatar>

                  <div>
                    <Typography
                      color="primary"
                      className="post-username"
                      variant="h5"
                    >
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "#1771E6",
                        }}
                        to={`/profile`}
                      >
                        {user.data.firstname}
                      </Link>
                    </Typography>




                  </div>
                  {/* {selectedPost.username === user.data.firstname && (
                    <PostDropdown post={selectedPost} handleDelete={removePost} />
                  )} */}
                </div>
               
               
               
              </div>
              <form onSubmit={formSubmit} className="comment-form">
                <TextField
                  id="comment-form-input"
                  name="comment"
                  fullWidth
                  variant="outlined"
                  placeholder="Type something.."
                />
                <Button
                  id="comment-form-input"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Send
              </Button>
              </form>

             <div className="comments">
                {comments ?   (comments.map((comment)=>
                 
                (
               
                  comment.data.selectedPost_id === selectedPost ? 
                  (
                  <CommentBox 
                  key={comment.id}
                  profilePic=""
                  content={comment.data.comment}
                   timestamp={comment.data.timestamp}
                  username={comment.data.username}
                
                  /> 
                  ) :  null
                  ) 
                 )) : null
                
                 
                  // <Typography variant="body1" className="no-comments-text">
                  //   No comments yet.
                  // </Typography>
                
                 }
               
              </div> 
            </>
          )}
      </div>
    
   
            </div>
   

         ) : null ))
        
     
          } 
    </>
  );
}

export default Comments;
