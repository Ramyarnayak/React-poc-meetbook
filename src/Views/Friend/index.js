import React from 'react'

import './../Home/Home.css'
import Header from './../../components/Header/Header';
import Sidebar from './../../components/sidebar/Sidebar.js';
import Rightbar from './../../components/rightbar/Rightbar.js';
import Dashboard from '../../components/Dashboard';
import Feed from './../Feed/Feed';
import Friend from './Friend';
function Friends() {
    return (
       
        <>
        <Header />

        <div className="homeContainer">
          <Sidebar />
          <Friend/>
          {/* <Feed/> */}
          <Rightbar/>
        </div>
       
      </>
        
    )
}

export default Friends


