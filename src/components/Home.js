import React from "react";
import './App.css'
import siteIcon from "../NFTIcon.png"

function Home() {

    return (
        <div>
        <div class="row">
            <div class="col">
            <h1 class="sitetitle">Good Times Coin</h1>
            </div>
            <div class="col ml-auto"><img class="float-right " src={siteIcon} alt="Good NF Timer" /></div>
            <p class="specialMobile d-lg-none d-xl-none d-md-none">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            <p class="special d-none d-lg-block d-xl-block d-md-block">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            <br />
            <ol> <p>
                <br />
                <li><strong>Planting the good times:</strong> <br />
                    The first step is to give 68GTC to 1000 Good Timers, via Reddit<br />
                </li>
                <br /> <br />
                <li><strong>Growing the good times:</strong> <br />
                    <ul>
                        <li>Check out the Life Advice NFT generator below, if you need a little help getting the good times rolling.</li>
                        <li>The Good Times Coin NFT collection is coming soon. Check it out below, get your GTC and get ready for the airdrop!</li>
                    </ul>
                    </li>
            </p>
            </ol>
            <br />
            <p>Get your 68 GTC by messaging u/goodtimesbradtimes on reddit (account must've been created before September 18) and get the good times rollin'.</p>
            {/* <br /><br /><strong>Contract Address: </strong>
            <p class="psmall"> 0x6E85399c21A62D9dc555c2C9b46c4854dD2416c5</p> </p> */}
            {/* <br />
        <div>
            <h3 style={{ color: '#283592' }}>Roadmap</h3>
            <p></p>
            <ol>
                <li>The first item on the roadmap is to give 68GTC to 1000 Good Timers, via Reddit <br /> - There are currently <strong style={{ color: '#e01b84'}}>232</strong> Good Timers</li>
                <li>The first 420 of these lucky folks will also receive an airdropped NFT from the <a href="/home">Good NF Timers collection</a></li>
            </ol>
        </div> */}
    </div>
</div>        
    );
  
}

export default Home
