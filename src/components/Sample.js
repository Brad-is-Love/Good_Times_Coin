import React from "react";
import './App.css';
import {ReactFlashlight} from "react-flashlight";
import logo from "../GTC_Collection_Sample.png";

function Sample() {

const style = {
    display: "flex",
    backgroundImage: logo,  
    height: "405px",
    width: "870px",
}

    return (
        <div>
            <strong>Coming soon...</strong>
            <h3 style={{ color: '#283592' }}>Good NF Timers</h3>
            <h5>4269 Unique Collectibles on a 420x69 Pixel Canvas</h5>
            <p>
            Move your mouse over the image to explore</p>            

            <ReactFlashlight size={75} darkness={0.95}>
                <div style={style}>
                    <img src={logo} alt="test"/>
                </div>
            </ReactFlashlight>
        </div>
        
    );
  
}

export default Sample
