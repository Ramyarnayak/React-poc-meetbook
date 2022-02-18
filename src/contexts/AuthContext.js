import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import db from './../firebase'
import firebase from 'firebase'
import { Posts } from "../Data/dummyData"
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
   const [id, setId] = useState("")
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([]);
  const [currentUserInfo, setCurrentUserInfo] = useState()
  const [users, setUsers] = useState([])
  const[ friends, setFriends] = useState([])
  const [addFriend, getAddFriend] = useState([])
  const [names, setUserNames] = useState([])
  const [currentUserName, setCurrentUserName] = useState("")
   var userArray=[];
  //  let id;
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function userInfo(firstname, lastname, email1, dob , gender, city ) {
    auth.onAuthStateChanged(user => {
      db.firestore().collection('userInfo').add({
        uid: user.uid,
        firstname: firstname,
        lastname: lastname,
        email: email1,
        dob: dob,
        gender: gender,
        city: city,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
  
    });
    })



  // db.ref("userInfo").set({
  //   firstname: firstname,
  //   lastname: lastname,
  //   email: email1,
  //   dob: dob,
  //   gender: gender,
  //   city: city,
  //   timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
  // }).catch(alert);
  }



  function getUserInfo(){
    db.firestore().collection("userInfo").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
    setCurrentUserInfo(
      snapshot.docs.map((doc) => ({ id: doc.id,
         data: doc.data()
       }))
    )
    );
  //     getFriendsList();
      
  //   db.firestore().collection("userInfo").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
  //   setCurrentUserInfo( 
  //     snapshot.docs.map((doc) => {
  //       if(currentUser.email){
  //         { id: doc.id;
  //        data: doc.data()
  //      }
  //     }})
  //   )
  // );
      }
  function getUserNames(){
    db.firestore().collection("userInfo").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
    setUserNames(
      snapshot.docs.map((doc) => (doc.data()['firstname']))
    )
  );
  getCurrentUserName()
  // currentUserInfo && currentUserInfo.map((user)=>{

  // })

  // return currentUserInfo;
  }

  function getCurrentUserName(){
  



  }
  console.log(currentUser)

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }
function addToFriendsList(id, friend){
  db.firestore().collection('friends').add({
    friends: friend,
    id: id
   })
}
  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function getFriendsList(){

      db.firestore().collection("friends").onSnapshot((snapshot) =>{
     
      setFriends(
        snapshot.docs.map((doc) => ({ id: doc.id,
           data: doc.data()
         }))
      )
        console.log(friends)
      }
    )
      
  }
    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }
function getPost(){
  db.firestore().collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
  setPosts(
    snapshot.docs.map((doc) => ({ id: doc.id,
       data: doc.data()
     }))
  )
);
return Posts;
} 
    

  useEffect(() => {

    getUserInfo();

   getUserNames();
   getCurrentUserName();
     getFriendsList();
 ;
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setId(user.uid)
     
      setLoading(false)
    })

    return unsubscribe
  }, [])
  console.log(id)

  const value = {
    getCurrentUserName,
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    userInfo, 
    getUserInfo,
    currentUserInfo,
    getPost,
    getFriendsList,
    addToFriendsList,
  names,
    users,
    id,
    friends, 
    currentUserName,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )

  }