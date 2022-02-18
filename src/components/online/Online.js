import "./online.css";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Button } from "@material-ui/core";
export default function Online({user}) {
  return (
    <>


       <div className="rightbarFriend" >
         {/* <div className="rightbarProfileImg"></div> */}
      <Avatar>{user.firstname.charAt(0)}</Avatar>
  
      <span className="rightbarUsername">{user.firstname}</span>
      </div>
   
    </>
  );
}
