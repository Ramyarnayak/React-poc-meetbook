import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './../../firebase'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
// import Comments  from '../utility/Comments'
import StoryReel from './StoryReel/StoryReel'
import {useAuth } from './../../contexts/AuthContext'

function Feed({noStory, noShare, userPost}) {
  const { currentUser, currentUserInfo , getUserInfo, getUserName} = useAuth();
    const [posts, setPosts] = useState([]);


    const [postUsername, setPostUsername] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openComments, setOpenComments] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    var name;
//Fetching data from collection and listens any change in the collection(database)
    useEffect(() => {
     
    //   currentUserInfo.map((info)=>{
    //    if(info.data.email == currentUser.email){
    //      name = info.data.firstname
    //    }
    //  })
        db.firestore().collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            )
          );

          
    }, []);

    return (
      <div className="feed">
  
        {/* StoryReel */}
{ !noStory ? (<StoryReel />) : null
}

        <div className="feedWrapper">
        {/* MessageSender */}
        {
          !noShare ? (  <MessageSender  posts={posts}/>) : null
        }
      


      { userPost && posts.map((post) => ( 
      currentUserInfo && currentUserInfo.map((user)=>(
        user.data.firstname  === post.data.username  ? (
          <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          post1={post.data}
        />
        ) : null 
      )))
 

   )}


        {!userPost && posts.map((post) => ( 
     
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            post1={post.data}
          />

        ))}
        </div>

      </div>
    );
}

export default Feed

