// import React, { useState, useEffect } from 'react';
// import './Friend.css';
// import {Link} from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import { Button } from '@material-ui/core';
// import {addfriendList} from './FriendsList';

// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

// function Friend() {
// let pp;
//   const PAGE_ADD_FRIENDS='add-friends';
//   const PAGE_YOUR_FRIENDS='your-friends';
//   const [your_friends,setYourFriend]=useState([
//     {
//       name:"Deeksha"
//     },
//     {
//       name:"Hitha"
//     },
//     {
//       name:"Keerthi Mohan"
//     },
//     {
//       name:"Nishmitha"
//     },
//     {
//       name:"Nilesh"
//     },
//     {
//       name:"Prajwal"
//     },
//     {
//       name:"Shreeshail"
//     }
//   ]);
//   const [page,setPage]=useState(PAGE_ADD_FRIENDS);
//   const[add_friends,setProducts]=useState(addfriendList);
  
//   const removeFromFriends=(friendToRemove)=>{
//     setYourFriend(
//         your_friends.filter((add_friend)=> add_friend!==friendToRemove)
//     );
    
//     alert(friendToRemove.name+"is removed from your friend's list");
//   };
//   const navigateTo=(nextPage)=>{
//     setPage(nextPage);
//   };


//   function FriendsList() {
//     const {currentUser,  currentUserInfo, friends } = useAuth();
//     // const {addfriendList, setAddFriendList} = useState([])
//     let a = [];
//     currentUserInfo && currentUserInfo.map((user)=>{
//       friends && friends.map((friend)=>{
//         if((friend.data.friends != user.data.firstname) && (currentUser.email != user.data.email) ){
//          a.push({name: user.data.firstname})
//         }
//       })
//     })
// useEffect(() => {
//   setProducts(a.filter( (ele, ind) => ind === a.findIndex( elem => elem.name === ele.name )))
//  console.log("a"+ add_friends)
//  alert(add_friends)
// }, [])
// const addToFriends=(add_friend)=>{
//   let b;
//     pp.map((a)=>{
//       if(a!= add_friend){
//          b.push(add_friend)
//       }
//     })
//     console.log(b)
//     pp=b;
  
//     setYourFriend([...your_friends,{...add_friend}]);
//     //console.log("friend");
//     alert(add_friend.name+" is added to your friend list");
  
//   }; 
  

  
     
//     console.log(pp)
//     // setAddFriendList(a);
//     // console.log("list== "+ addfriendList )


//     return (
//       <>
//       <div className='friends'>
        
          
//       {pp.map((add_friend,id)=>(
//        <div className="friend" key={id}>
      
//       <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
//         <Paper >
//           <Grid container wrap="nowrap" spacing={1}>
//             <Grid item>
//               <Avatar>{add_friend.name.charAt(0)}ss</Avatar>
//             </Grid>
//             <Grid item xs zeroMinWidth>
//               <Typography noWrap>{add_friend.name}</Typography>
//             </Grid>
//             <Grid item xs zeroMinWidth>
  
//               <Button variant="contained" fill noWrap onClick={()=>{addToFriends(add_friend)}}>Add Friend</Button>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Box>
  
  
  
  
//      </div>
     
//       ))}
    
//       </div>
      
//       </>
      
//     )
//   }


//   const renderaddFriends=()=>(
//     <>
//     <div className='friends'>
      
        
//     {add_friends.map((add_friend,id)=>(
//      <div className="friend" key={id}>
//      <h3 className="add">{add_friend.name}</h3> 
//     <button className="addbutton" onClick={()=>{addToFriends(add_friend)}}>Add
//       </button>
//    </div>
//     ))}
  
//     </div>
    
//     </>

//   );
//   const renderyourFriends=()=>(
//     <>
    
//     <div className="myfriends">

//     {your_friends.map((your_friends,id)=>(
//       <div className="myfriend" key={id}>
    
//       <h3 className="your">{your_friends.name}</h3>
//     <button className="removebutton" onClick={()=>removeFromFriends(your_friends)}>Remove
//       </button>
      
//     </div>
  
//     ))}
//     </div>

//       </>

//   );
//   const navStyle=
//         {
//             color:'white'
//         };
//     return (
//       <Router>
//       <div className="App">
     
//         <header>
//         <Switch>
//           <nav>
//           <ul className="nav-links">
           
//           <Route path="/addfriends" component={renderyourFriends}/>
//             <Route path="/yourfriends" component={renderaddFriends}/>
//             <Link style={navStyle} to="your-friends">
//           < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
//           </Link>
//           <Link style={navStyle} to="add-friends">
//           <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
//           </Link>
          
//           </ul>
//           </nav>
//           </Switch>
//         </header>
        

//         {page===PAGE_ADD_FRIENDS && FriendsList()}
//         {page===PAGE_YOUR_FRIENDS && renderyourFriends()}
//         </div>
//         </Router>
//   );
// }

// export default Friend;





import React, { useState } from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Button } from '@material-ui/core';


import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

function Friend() {
  const PAGE_ADD_FRIENDS='add-friends';
  const PAGE_YOUR_FRIENDS='your-friends';
  const [your_friends,setYourFriend]=useState([
    {
      name:"Deeksha"
    },
    {
      name:"Hitha"
    },
    {
      name:"Keerthi Mohan"
    },
    {
      name:"Nishmitha"
    },
    {
      name:"Nilesh"
    },
    {
      name:"Prajwal"
    },
    {
      name:"Shreeshail"
    }
  ]);
  const [page,setPage]=useState(PAGE_ADD_FRIENDS);
  const[add_friends,setProducts]=useState([
    {
      name:"Aswathi"
    },
   {
    name:"Nethra"
   },
   {
     name:"Ramya"
   },
   {
     name:"Stafny"
   },
   {
     name:"Disha"
   },
   {
     name:"Sushanth"
   },
   {
     name:"Karthik"
   },
   {
     name:"Nikhitha"
   }


  ]);
  const addToFriends=(add_friend)=>{
    setProducts(add_friends.filter((p)=> (p!==add_friend)))
    setYourFriend([...your_friends,{...add_friend}]);
    //console.log("friend");
    alert(add_friend.name+" is added to your friend list");
  
  }; 
  const removeFromFriends=(friendToRemove)=>{
    setYourFriend(
        your_friends.filter((add_friend)=> add_friend!==friendToRemove)
    );
    
    alert(friendToRemove.name+"is removed from your friend's list");
  };
  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  };
  const renderaddFriends=()=>(
    <>
    <div className='friends'>
      
        
    {add_friends.map((add_friend,id)=>(
     <div className="friend" key={id}>
    
      <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
        <Paper >
          <Grid container wrap="nowrap" spacing={1}>
             <Grid item>
               <Avatar>{add_friend.name.charAt(0)}</Avatar>
             </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>{add_friend.name}</Typography>
            </Grid>
             <Grid item xs zeroMinWidth>
  
               <Button variant="contained" fill noWrap onClick={()=>{addToFriends(add_friend)}}>Add Friend</Button>
             </Grid>
         </Grid>
         </Paper>
       </Box>
  </div>
    ))}
    </div>

    
    </>

  );
  const renderyourFriends=()=>(
    <>
   <div className='friends'>
      
        
      {your_friends.map((add_friend,id)=>(
       <div className="friend" key={id}>
      
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
          <Paper >
            <Grid container wrap="nowrap" spacing={1}>
               <Grid item>
                 <Avatar>{add_friend.name.charAt[0]}</Avatar>
               </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{add_friend.name}</Typography>
              </Grid>
               <Grid item xs zeroMinWidth>
    
                 <Button variant="contained" fill noWrap onClick={()=>{removeFromFriends(add_friend)}}>Remove Friend</Button>
               </Grid>
           </Grid>
           </Paper>
         </Box>
    </div>
      ))}
      </div>
  

      </>

  );
  const navStyle=
        {
            color:'white'
        };
    return (
      <Router>
      <div className="App">
     
        <header>
        <Switch>
          <nav>
          <ul className="nav-links">
           
          <Route path="/addfriends" component={renderyourFriends}/>
            <Route path="/yourfriends" component={renderaddFriends}/>
            <Link style={navStyle} to="your-friends">
          < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
          </Link>
          <Link style={navStyle} to="add-friends">
          <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
          </Link>
          
          </ul>
          </nav>
          </Switch>
        </header>
        

        {page===PAGE_ADD_FRIENDS && renderaddFriends()}
        {page===PAGE_YOUR_FRIENDS && renderyourFriends()}
        </div>
        </Router>
  );
}

export default Friend;

