import React from 'react'

import './../Home/Home.css'
import Header from './../../components/Header/Header';
import Sidebar from './../../components/sidebar/Sidebar.js';
import Rightbar from './../../components/rightbar/Rightbar.js';
import Dashboard from '../../components/Dashboard';

import NewsPage from './components/NewsPage';
function News() {
    return (
       
        <>
        <Header />

        <div className="homeContainer">
          {/* <Sidebar /> */}
          <NewsPage/>
          {/* <Feed/> */}
          {/* <Rightbar/> */}
        </div>
        {/* <Dashboard/> */}
      </>
        
    )
}

export default News


