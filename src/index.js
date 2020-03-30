import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MainApp from './components/main-app/main-app.jsx'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
 
    //<App/>
    <MainApp />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
