import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

var mySiteURL = window.location.host.split(".");
var returnTo = window.location.protocol + "//" + mySiteURL[1];

function NavStore(props) {

  return (
    <nav className="navbar navbar-light bg-transparent">
  <div className="container-fluid">
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link text-white" to="/">Store Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/account">Account</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href={returnTo}>Back to GTC</a>
        </li>


      <li className="nav-item  text-white">
        <div className="dropdown text-white bg-transparent">
          <button className="btn btn-primary-outline dropdown-toggle text-white bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Resources and Social
          </button>
        <div className="dropdown-menu text-white bg-transparent" aria-labelledby="navbarDropdown">
          <a className="dropdown-item text-white bg-transparent" href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Whitepaper</a>
          <a className="dropdown-item text-white bg-transparent" href="https://tokenjenny.one/jennypaper/0x6E85399c21A62D9dc555c2C9b46c4854dD2416c5" target="_blank" rel="noopener noreferrer">JennyPaper</a>
          <a className="dropdown-item text-white bg-transparent" href="https://info.viper.exchange/token/0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5" target="_blank" rel="noopener noreferrer">Price</a>
          <div className="dropdown-divider text-white bg-transparent"></div>
          <a className="dropdown-item text-white bg-transparent" href="https://www.reddit.com/r/GoodTimesCoin/" target="_blank" rel="noopener noreferrer">Reddit</a>
          <a className="dropdown-item text-white bg-transparent" href="https://twitter.com/GoodTimesCoin" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        </div>
      </li>
      
      </ul>
    </div>
  </div>
</nav>
    );
  
}

export default NavStore
