import React from "react";
import './App.css'
import banner from '../CollectionSampleLong.jpg';

function Banner() {

    return (
        <div>
        <hr />
        <div className="banner">
            <img src={banner} alt="Good NF Timers Banner" />
            <div className="content">
                <h1>Good NF Timers</h1>
                <h2>2,420 Unique Collectibles - Coming Soon!</h2>
            </div>
        </div>
        </div>
    );  
}

export default Banner