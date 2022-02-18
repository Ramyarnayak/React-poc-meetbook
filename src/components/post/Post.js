import React from 'react'
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../Data/dummyData"
import { useState } from "react";
import {useAuth } from '../../contexts/AuthContext';


export default function Post({profilePic, image, username, timestamp, message, key, post1}) {
  const [like,setLike] = useState(1)
  const [isLiked,setIsLiked] = useState(false)
  const { currentUser, currentUserInfo , getUserInfo} = useAuth();
  let userInfo = getUserInfo()
  const likeHandler =()=>{
    
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    // <>
    // {/* {
    // userInfo && userInfo.map((info)=>(
    // info.data.email == currentUser.email ? ( */}
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
            <span className="postDate">{new Date(timestamp.toDate()).toUTCString()}</span>
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
            <span className="postCommentText">1 comments</span>
          </div>
        </div>
      </div>
    </div>
    
    //     {/* ) : null ))
    // }</> */}
  );
}
