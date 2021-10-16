import React from "react";
import './App.css';
import {ReactFlashlight} from "react-flashlight";
import logo from "../Samples/GoodNFTimer_1.png";
import logo2 from "../Samples/GoodNFTimer_2.png";
import logo3 from "../Samples/GoodNFTimer_3.png";
import logo4 from "../Samples/GoodNFTimer_10.png";
import logo5 from "../Samples/GoodNFTimer_7.png";
import logo6 from "../Samples/GoodNFTimer_6.png";
import logo7 from "../Samples/GoodNFTimer_11.png";
import logo9 from "../Samples/GoodNFTimer_9.png";


function Sample() {

const style = {

}

    return (
        <div class="row pb-5 px-2">

            <p class="font-size: 2rem"><strong>Coming soon...</strong></p>
            <p class="special">Good NF Timers</p>
            <p class="headings">4269 Unique Collectibles on a 420x69 Pixel Canvas</p>
            <br />
            <p>
                Good NF Timers is the first Good Times Coin artistic collectible. <br />
                The first 420 wallets to hold GTC will receive an airdropped NFT from the Good NF Timers collection. <br /><br />
                You'll get 10% off future GTC shop purchases for every Good NF Timer you hold, up to a maximum of 69% off. <br />
                Disclaimer: I'm only 90% sure I can figure out how to do this.                           
            </p>    
            <br />

            <h4>Move your mouse over the image to explore</h4>
                        
            <ReactFlashlight size={75} darkness={0.95}>
                <div class="container" style={style}>
                    <div class="row bg-dark justify-content-center">
                        <img class="responsive m-3 token" src={logo} alt="test"/>
                        <img class="responsive m-3 token" src={logo2} alt="test"/>
                        <img class="responsive m-3 token" src={logo3} alt="test"/>
                        <img class="responsive m-3 token" src={logo4} alt="test"/>
                        <img class="responsive m-3 token" src={logo5} alt="test"/>
                        <img class="responsive m-3 token" src={logo6} alt="test"/>
                        <img class="responsive m-3 token" src={logo7} alt="test"/>
                        <img class="responsive m-3 token" src={logo9} alt="test"/>
                    </div>     
                </div>
            </ReactFlashlight>               
            
        </div>
        
    );
  
}

export default Sample
