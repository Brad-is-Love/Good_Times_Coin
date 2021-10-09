import React from "react";
import About from "./About";
import './App.css'
import LifeAdvice from "./LifeAdvice";
import Sample from "./Sample";

function Home() {

    return (
        <div>
        <div class="row">
            
            <p class="specialMobile d-lg-none d-xl-none d-md-none">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            <p class="special d-none d-lg-block d-xl-block d-md-block">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            <br />
            <div class="col px-3">
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
            </div>
           
    </div>
    <LifeAdvice/>
    <Sample/>
    <About/>
</div>        
    );
    }

export default Home
