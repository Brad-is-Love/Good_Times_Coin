import React from "react";
import './App.css'

function Nav(props) {

  return (
    <div>
      <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow">
          <a          
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Good Times Coin
          </a>
          <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-block">
            <small className="text-grey"><span id="account"> Your account: {props.account}</span></small>
          </li>
        </ul>
      </nav>
    </div>
    );
  
}

export default Nav
