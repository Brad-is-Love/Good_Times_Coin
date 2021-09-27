import React from "react";
import './App.css'

function Nav(props) {

  return (
    <div>
      <nav className="navbar navbar-light fixed-top bg-light flex-md-nowrap p-2 shadow">
          <a          
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Good Times Coin
          </a>
          <a class="btn btn-outline-primary btn-block m-2" href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing">Whitepaper</a>
          <a class="btn btn-outline-primary btn-block m-2" href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5">Price Ticker</a>
          <a class="btn btn-outline-primary btn-block m-2" href="https://www.reddit.com/r/GoodTimesCoin/">Reddit</a>
          <a class="btn btn-outline-primary btn-block m-2" href="https://twitter.com/GoodTimesCoin">Twitter</a>


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
