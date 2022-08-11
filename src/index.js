import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Store from './components/StoreComponents/Store';

const mySiteURL = window.location.host.split(".");

if(mySiteURL[0] ==="store"){
    ReactDOM.render(<Store />, document.getElementById('root'));
}else{
    ReactDOM.render(<App />, document.getElementById('root'));
}
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
