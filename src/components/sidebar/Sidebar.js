import React, {useState} from 'react'
import {useAuth} from '../../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  People
} from "@material-ui/icons";
import { Users } from "../../Data/dummyData"
import CloseFriend from "../closeFriend/CloseFriend.js";

export default function Sidebar() {


  const [error, setError] = useState("")
  const { currentUser, logout,  } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem" onClick={()=>{history.push('/friends')}}>
            <People className="sidebarIcon" />
            <span className="sidebarListItemText">Friends</span>
          </li>
          <li className="sidebarListItem" onClick={()=>{history.push('/news')}}>
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">News</span>
          </li>
        
       
       
          <li className="sidebarListItem" onClick={()=>{history.push('/covid')}}>
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">COVID-19 support</span>
          </li>
        
          <li className="sidebarListItem" onClick={handleLogout}>
            <School className="sidebarIcon" />
            <span  className="sidebarListItemText">Logout</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
