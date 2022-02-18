import "./profile.css";
import Header from '../../components/Header/Header'
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../Feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import React, {useState, useEffect} from 'react';
import { useAuth } from './../../contexts/AuthContext';
import {app, db, storage, database} from './../../firebase'
import firebase from "firebase";
import Home from "../Home/Home";
export default function Profile({userId}) {

  const {currentUser,  currentUserInfo} = useAuth();
 
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [coverUrl, setCoverURL] = useState("");
  const [coverFile, setCoverFile] = useState(null);
let id, surl;
  currentUserInfo &&  currentUserInfo.map((user)=>{
    if(user.data.email == currentUser.email) {
       id= user.id;
     
    }})
   
    const ref = storage.ref(`/images/${id}`);
    const coverRef = storage.ref(`/cover/${id}`);
    ref
      .getDownloadURL()
      .then((url) => { 
        setURL(url);
      });

      coverRef
      .getDownloadURL()
      .then((url) => { 
        setCoverURL(url);
      });


  function handleChange(id, file) {
    setFile(file);
  }

  function handleCoverChange(id, file) {
    setCoverFile(file);
  }

  function handleUpload(id, e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${id}`);
    const uploadTask = ref.put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }

 
  function handleCoverUpload(id, e) {
    e.preventDefault();
    const ref = storage.ref(`/cover/${id}`);
    const uploadTask = ref.put(coverFile);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((url) => {
          setCoverFile(null);
          setCoverURL(url);
        });
    });
  }
  return (
    <>
   
     {  
        currentUserInfo && currentUserInfo.map((user)=>(
          user.data.email == currentUser.email ?(
  
            <>
          
      <Header />

      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
           

             
                <img    className="profileCoverImg"
                src={coverUrl}
                   alt="" id="img" 
                />
               
               <div>
      <form onSubmit={(e)=>{handleCoverUpload(user.id, e)}}>
        <input type="file" onChange={(e)=>{handleCoverChange(user.id, e.target.files[0])}} />
        <button disabled={!coverFile}>upload cover to firebase</button>
      </form>
    </div>


              
<div onClick={(e) => {handleUpload(user.id, e)}}>
              <img
                className="profileUserImg"
                src={url}
                alt="no img"
              />
             
   <div>
      <form onSubmit={(e)=>{handleUpload(user.id, e)}}> 
        <input type="file"  onChange={(e)=>{handleChange(user.id, e.target.files[0])}} ></input>
         <button disabled={!file}>upload to firebase</button> 
      </form>
    </div>
    </div>

    <div onClick={(e) => {handleUpload(user.id, e)}}>
              <img
                className="profileUserImg"
                src={url}
                alt="no img"
              />
             
   <div>
      <form onSubmit={(e)=>{handleUpload(user.id, e)}}> 
        <input type="file"  onChange={(e)=>{handleChange(user.id, e.target.files[0])}} ></input>
         <button disabled={!file}>upload to firebase</button> 
      </form>
    </div>
    </div>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.data. firstname} { user.data.lastname}</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed noStory noShare userPost/>
            <Rightbar profile user={user.data} userId={userId} />
          </div>
        </div>
      </div>
      </>
              ) : null ))
        
     
            } 
    </>
  );
}


// import React, { useEffect, useState } from 'react';

// import './profile.css';

// import {
// Delete
// } from "@material-ui/icons";


// function Profile(props) {
//   const[picture,setPicture]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    
//   const imageHandler = (e) => {
//       setPicture(URL.createObjectURL(e.target.files[0]));
//     };
//   const [list, setList] = useState([]);
//   const [text, setText] = useState("");

//   const addItem = (e) => {
//       e.preventDefault();
//       const tempData=[...list];
//       tempData.push(text);
//       setList(tempData);
//       setText("");
//     }
//   const deleteItem = (key) => {
//     alert("Do you want to delete your post?")
//     let newData=[...list];
//     newData.splice(key,1);
//     setList(newData);
//   }

//   useEffect(()=> {
//     const data=localStorage.getItem("picture");
//     const comment=localStorage.getItem("comments");
//     if(data || comment) {
//       setPicture(JSON.parse(data));
//       setList(JSON.parse(comment));
//     }
//   },[]);

  
//   useEffect(() => {
//     localStorage.setItem("picture",JSON.stringify(picture)) 
//     localStorage.setItem("comments",JSON.stringify(list))  
//   });


//   return (
//     <div className="App">
//       <div className="container">
//         <div className="cover">
//             <div className="avatar">
//                 <img src="assets/post/1.jpeg" alt="coverpic"/>
//             </div>
//             <div className="name">
//                 <h2>{props.name} {props.last}</h2>
//             </div>
//         </div>
//         <div className="photo">
//             <div className="avatar2">
//                 <img src={props.imageURL} alt="" id="img" className="img" />
//             </div>
//             <div className="image-upload">
//               <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
//                 {/* <label className="image-upload" htmlFor="input">Choose your photo</label> */}
//             </div>
//         </div>
//       </div>
//       <div className="main">
//         <div className="card">
//             <h3>ABOUT</h3>
//             <div class="description">
//                 <h5>Web developer</h5> 
//                 <h5>Currently working in Y Media Labs</h5> 
//                 <h5>Hobbies: Travelling, Painting</h5> 
//                 <h5>Bangalore, India</h5>
//             </div>
//         </div>
//         <div class="container">
//             <form onSubmit={addItem}>
//                 <input className="input-container" placeholder="What's on your mind?" type="text" value={text} onChange={(e)=> setText(e.target.value)} />
//                 <button className="button-class" value="Submit">Add Comment</button>
//             </form>
//             <div className="add-item">
//             {
//                 list.map((item,key) => {
//                     return (
//                         <div className="comment-card" key={key}>{item}
//                           <span>
//                           <Delete onClick={deleteItem} className="sidebarIcon" />
//                           </span>
//                         </div>    
//                     )
//                 }) 
//             }  
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;