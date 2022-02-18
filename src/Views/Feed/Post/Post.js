import React, { useContext, useEffect, useState } from "react";import './Post.css'

// Icons
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useAuth } from './../../../contexts/AuthContext'
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';
// context api
// import { useStateValue } from '../../state/Provider'
import Comments from "./../utility/Comments";
import { MoreVert } from "@material-ui/icons";

function Post( {profilePic, image, username, timestamp, message, key, post1}) {

  const {currentUser, currentUserInfo} = useAuth();
  const [like,setLike] = useState(1)
  const [isLiked,setIsLiked] = useState(false)
  // const [{ user }, dispatch] = useStateValue(); 
  const [openComments, setOpenComments] = useState(false);
  const [postUsername, setPostUsername] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
    return (

      <>
      {
        currentUserInfo && currentUserInfo.map((user)=>(
          user.data.email == currentUser.email ?(
      <div className="post">
      <div className="postWrapper">

        
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              // src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              src={profilePic}
              alt=""
            /> */}
                       <Avatar
                    src={profilePic}
                    className="post-avatar"
                    style={{ marginRight: "1rem" }}
                  >
                    {
                
                user.data.firstname.toUpperCase()[0]}
                </Avatar>
            <span className="postUsername">
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
              {username}
            </span>
            <span className="postDate">{new Date(timestamp?.toDate()).toUTCString()}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{message}</span>
          <img className="postImg" src={image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"
             onClick={()=>{
           
                   setOpenComments(true);
                }}>comments</span>
          </div>
        </div>
      </div>
      {openComments && (
   <div
   onClick={()=>{
 setSelectedPost(message);
     setPostUsername(user.data);  
 }}>
  <Comments
  post_id = {key}
  open={openComments}
  setOpen={setOpenComments}
  postUsername={username}
  selectedPost={selectedPost}
  />
  )
    </div>
      )}
      </div>
       ) : null ))
        
     
      } 
   </>
      // {/* // <div className="post">
      //   <div className="post_top">
      //     <Avatar src={profilePic} className="post_avatar" />
      //     <div className="post_topInfo">
      //       <h3>{username}</h3>
      //       <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
      //     </div>
      //   </div>
      //   <div className="post_bottom">
      //     <p>{message}</p>
      //   </div>

      //   <div className="post_image">
      //     <img src={image} alt="" />
      //   </div>
      //   <div className="post_options">
      //     <div className="post_option">
      //       <ThumbUpIcon />
      //       <p>Like</p>
      //     </div>
      // //    <div className="post_option"  onClick={()=>{
      //       */}
      // {/* //      setOpenComments(true);
      // //   }}>
      // //       <ChatBubbleOutlineIcon />
      // //       <p>Comment</p>
      // //     </div> */}
      // {/* //     <div className="post_option">
      // //       <NearMeIcon />
      // //       <p>Share</p>
      // //     </div>
      // //     <div className="post_option">
      // //       <AccountCircleIcon />
      // //       <ExpandMoreIcon/>
      // //     </div>
      // //   </div> */} 
      
    );
    }

export default Post
