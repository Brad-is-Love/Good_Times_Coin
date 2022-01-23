import React from "react";
import './App.css'
import { Link } from "react-router-dom";

function Navtwo(props) {

  return (
    <nav class="navbar navbar-light bg-transparent">
  <div class="container-fluid">
    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-white" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/life-advice">Life Advice NFTs</Link>
        </li>
        <li class="nav-item">
           <Link class="nav-link text-white" to="/good-nf-timers">Good NF Timers</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/roadmap">Roadmap</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/mynfts">My NFTs</Link>
        </li>

      <li class="nav-item  text-white bg-transparent">
        <div class="dropdown text-white bg-transparent">
          <button class="btn btn-primary-outline dropdown-toggle text-white bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Resources and Social
          </button>
        <div class="dropdown-menu text-white bg-transparent" aria-labelledby="navbarDropdown">
          <a class="dropdown-item text-white bg-transparent" href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a class="dropdown-item text-white bg-transparent" href="https://tokenjenny.one/jennypaper/0x6E85399c21A62D9dc555c2C9b46c4854dD2416c5" target="_blank" rel="noopener noreferrer">JennyPaper</a>
          <a class="dropdown-item text-white bg-transparent" href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5" target="_blank" rel="noopener noreferrer">Price</a>
          <div class="dropdown-divider text-white bg-transparent"></div>
          <a class="dropdown-item text-white bg-transparent" href="https://www.reddit.com/r/GoodTimesCoin/" target="_blank" rel="noopener noreferrer">Reddit</a>
          <a class="dropdown-item text-white bg-transparent" href="https://twitter.com/GoodTimesCoin" target="_blank" rel="noopener noreferrer">Twitter</a>
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
