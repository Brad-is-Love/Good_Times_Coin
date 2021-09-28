import React from "react";
import './App.css'

function Nav(props) {

  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/home">Good Times Coin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing">Whitepaper</a>
            </li>
            <li class="nav-item">
              <a href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5">$Price$</a>
            </li>
            <li class="nav-item">
              <a href="https://www.reddit.com/r/GoodTimesCoin/">Reddit</a>
            </li>
          <li class="nav-item">
              <a href="https://twitter.com/GoodTimesCoin">Twitter</a>
              </li>
            </ul>
        </div>
      </nav>




{/* 


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
      </nav> */}
    </div>
    );
  
}

export default Nav
