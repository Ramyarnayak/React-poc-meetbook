
  import React, {useState} from 'react'
  import { useAuth } from '../../contexts/AuthContext';

    const {currentUser,  currentUserInfo, friends } = useAuth();
    const {addfriendList, setAddFriendList} = useState([])
    let a = [];
    currentUserInfo && currentUserInfo.map((user)=>{
      friends && friends.map((friend)=>{
        if((friend.data.friends != user.data.firstname) && (currentUser.email != user.data.email) ){
         a.push({name: user.data.firstname})
        }
      })
    })
    setAddFriendList(a.filter( (ele, ind) => ind === a.findIndex( elem => elem.name === ele.name )))
    
  
  

  export  {  addfriendList};
