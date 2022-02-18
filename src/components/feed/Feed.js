import Post from "../post/Post.js";
import Share from '../share/Share.js';
import "./feed.css";
import { Posts } from "../../Data/dummyData"
import React, {useState, useEffect} from 'react'
import StoryReel from "../StoryReel/StoryReel";
import db from '../../firebase'

export default function Feed() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    
//  console.log(db)
    db.firestore().collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id,
             data: doc.data()
           }))
        )
      );
}, []);

  return (
    <div className="feed">
      <StoryReel/>
      <div className="feedWrapper">
        <Share />
        {posts ? posts.map((post) => (
          // <Post key={p.id} post={p} />
           
          <Post

            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            post1={post.data}
          />
        )): null}
      </div>
    </div>
  );
}
