import React from "react";
import './App.css';
import {ReactFlashlight} from "react-flashlight";
import logo from "../GTC_Collection_Sample.png";

function Sample() {

const style = {
    backgroundImage: logo,  
    height: "69vh",
    width: "69vw",
}

 

    return (
        <ReactFlashlight size={30} darkness={1}>
            <div style={style}>
                <img src={logo} alt="test" />
            </div>
        </ReactFlashlight>
    );
  
}

export default Sample
