import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function Navtwo(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">GTC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/life-advice">Life Advice NFTs</Link>
        </li>
        <li class="nav-item">
           <Link class="nav-link" to="/sample">Good NF Timers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>

      <li class="nav-item dropdown">
        <div class="dropdown">
          <button class="btn btn-primary-outline dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Resources and Social
          </button>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a class="dropdown-item" href="https://tokenjenny.one/jennypaper/0x6E85399c21A62D9dc555c2C9b46c4854dD2416c5" target="_blank" rel="noopener noreferrer">JennyPaper</a>
          <a class="dropdown-item" href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5" target="_blank" rel="noopener noreferrer">Price</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="https://www.reddit.com/r/GoodTimesCoin/" target="_blank" rel="noopener noreferrer">Reddit</a>
          <a class="dropdown-item" href="https://twitter.com/GoodTimesCoin" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        </div>
      </li>
      
      </ul>
    </div>
  </div>
</nav>
    );
  
}

export default Navtwo
