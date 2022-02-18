import React from 'react'
import './Header.css';
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Avatar } from '@material-ui/core'
import {useAuth } from './../../contexts/AuthContext'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Profile from '../../Views/profile/Profile';

function Header() {
  const history = useHistory();
  const {currentUser,  currentUserInfo} = useAuth();
 
    return (
      <>
      {
        currentUserInfo && currentUserInfo.map((user)=>(
          user.data.email == currentUser.email ?(

      <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">MeetBook</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        {/* <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/> */}
        <Avatar
                    src={user.data.firstname}
                    className="topbarImg"
                    style={{ marginRight: "1rem" }}
                    onClick= {()=>{
                       history.push('/profile')
                    }
                    
                    }>
                
               { user.data.firstname.toUpperCase()[0]}
                </Avatar>
      </div>
    </div>
      ) : null ))
        
     
    } 
 </>
      // <div className="header">
      //   {/* Left Header */}
      //   <div className="header_left">
      //     <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" />
      //     <div className="header_input">
      //       <SearchIcon />
      //       <input placeholder='Search meetBook' type="text" />
      //     </div>
      //   </div>
      //   {/* Middle Header */}
      //   <div className="header_center">
      //     <div className="header_option header_option--active">
      //       <HomeOutlinedIcon fontSize="large" />
      //     </div>
      //     <div className="header_option">
      //       <FlagOutlinedIcon fontSize="large" />
      //     </div>
      //     <div className="header_option">
      //       <SubscriptionsOutlinedIcon fontSize="large" />
      //     </div>
      //     <div className="header_option">
      //       <StorefrontOutlinedIcon fontSize="large" />
      //     </div>
      //     <div className="header_option">
      //       <SupervisedUserCircleOutlinedIcon fontSize="large" />
      //     </div>
      //   </div>

      //    <div className="header_right">
      //     <div className="header_info">
      //       <Avatar src={user.photoURL}/>
      //       <h4>{user.displayName}</h4>
      //     </div>
      //     <IconButton>
      //       <AddIcon />
      //     </IconButton>
      //     <IconButton>
      //       <ForumIcon />
      //     </IconButton>
      //     <IconButton>
      //       <NotificationsActiveIcon />
      //     </IconButton>
      //     <IconButton>
      //       <ExpandMoreIcon />
      //     </IconButton>
      //   </div>
      // </div> {/* Right Header */}
      
    );
}

export default Header
