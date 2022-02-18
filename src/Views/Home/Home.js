import React from 'react'

import './../Home/Home.css'
import Header from './../../components/Header/Header';
import Sidebar from './../../components/sidebar/Sidebar.js';
import Rightbar from './../../components/rightbar/Rightbar.js';
import Share from '../../components/share/Share';

import Feed from './../Feed/Feed';

function Home() {
    return (
       
        <>
        <Header />

        <div className="homeContainer">
       
          <Sidebar />
          <Feed/>
        <Share />
          {/* <Feed/> */}
          <Rightbar/>
        </div>
       
      </>
        
    )
}

export default Home



