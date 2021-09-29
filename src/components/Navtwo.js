import React from "react";
import './App.css'

function Navtwo(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Good Times Coin</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-link">
          <a class="nav-item" href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing">Whitepaper</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5">Price Ticker</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.reddit.com/r/GoodTimesCoin/">Reddit</a>
          </li>
        <li class="nav-item">
          <a class="nav-link" href="https://twitter.com/GoodTimesCoin">Twitter</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
    );
  
}

export default Navtwo
