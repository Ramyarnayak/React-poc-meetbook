import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import configureStore from './Views/NewsPage/store/configureStore'

const store = configureStore();

ReactDOM.render(
   <Provider store={store}>
     <App /> 
  </Provider>
,
  document.getElementById("root")
)
