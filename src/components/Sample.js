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
import logo8 from "../Samples/GoodNFTimer_8.png";
import logo9 from "../Samples/GoodNFTimer_9.png";


function Sample() {

const style = {

    }

    return (
        <div>
            <strong>Coming soon...</strong>
            <h3 style={{ color: '#283592' }}>Good NF Timers</h3>
            <h5>4269 Unique Collectibles on a 420x69 Pixel Canvas</h5>
            <p>
            Move your mouse over the image to explore</p>            

            <ReactFlashlight size={75} darkness={0.95}>
                <div class="container" style={style}>
                    <div class="row bg-dark">
                        <img class="responsive m-3" src={logo} alt="test"/>
                        <img class="responsive m-3" src={logo2} alt="test"/>
                        <img class="responsive m-3" src={logo3} alt="test"/>
                        <img class="responsive m-3" src={logo4} alt="test"/>
                        <img class="responsive m-3" src={logo5} alt="test"/>
                        <img class="responsive m-3" src={logo6} alt="test"/>
                        <img class="responsive m-3" src={logo7} alt="test"/>
                        <img class="responsive m-3" src={logo9} alt="test"/>
                    </div>                    
                
                </div>
            </ReactFlashlight>
        </div>
        
    );
  
}

export default Sample
