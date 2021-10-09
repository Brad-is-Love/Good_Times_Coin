import React from "react";
import './App.css'

function NetworkError(props) {
// // noMask
// //  = "wrongNetwork")
//   const networkError = props.networkError;

// if(networkError="noMask"){
//   <p>You can't see or mint NFTs because you don't have MetaMask. 
//     Check out <a href="https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet" target="_blank" rel="noopener noreferrer"> this link</a>
//     for instructions on installing it and hooking into the Harmony Mainnet.</p>
// }

    return (
      <div>
        <h1>{props.networkError}</h1>
      </div>
    );
  
}

export default NetworkError
