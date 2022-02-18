import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import News from './../Views/NewsPage/index'
import Home from './../Views/Home/Home'
import Friends from './../Views/Friend/index'
import Covid from './../Views/Covid/App'
import Profile from "../Views/profile/Profile.js"
import Header from "./Header/Header"
function App() {
  return (
    <>
        <Router>
          <AuthProvider>
            <Switch>
            <PrivateRoute exact path="/" component={Home}/>
              <PrivateRoute exact path="/profile" component={Profile}/>
              <PrivateRoute  path="/news" component={News}/>      
              <PrivateRoute  path="/friends" component={Friends}/>   
              <PrivateRoute  path="/covid" component={Covid}/>           

              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>

    </>
  )
}

export default App
