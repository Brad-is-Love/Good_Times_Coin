import React from "react";
import About from "./About";
import './App.css'
import LifeAdvice from "./LifeAdvice";
import Sample from "./Sample";
import Roadmap from "./RoadMap";

function Home() {

    return (
        <div>
        <div class="container">
            
            <p class="specialMobile d-lg-none d-xl-none d-md-none">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            <p class="special d-none d-lg-block d-xl-block d-md-block">The only cryptocurrency exclusively focussed on bringing the Good Times.</p>
            
            <br />
            <hr />
            <p class="text-center px-5" >
                Get your&nbsp;<strong>free 68 GTC</strong> by messaging &nbsp;<a href="https://www.reddit.com/user/GoodTimesBradTimes" target="_blank" rel="noopener noreferrer">GoodTimesBradTimes</a> on reddit and get the good times rollin! <br />
                *your reddit account must've been created before September 18
            </p>
            <hr /><br />
            
                <div class="row justify-content-center">
                    <div class="col-lg col-md-12 border rounded m-3 p-3">
                        <p class="text-justify">
                            Good Times Coin is currently in the distribution phase. Where 68GTC is given to 1000 people via reddit. 
                            Check out the <a href="https://drive.google.com/file/d/1mGGZ02D6ULzOyikbOTPXzgC7BgJXjwBm/view?usp=sharing" target="_blank" rel="noopener noreferrer">whitepaper</a> for more info.
                        </p>
                    </div>
                    <div class="col-lg col-md-12 border rounded m-3 p-3">
                        <p class="text-justify">
                            If you need a little help getting the good times rolling, check out our <a href="/life-advice">Life Advice NFT generator.</a>
                        </p>
                    </div>
                    <div class="col-lg col-md-12 border rounded m-3 p-3">
                        <p class="text-justify">
                        The Good Times Coin NFT collection is coming soon. have a look at <a href="/good-nf-timers">Good NF Timers</a> and get ready for the airdrop!
                        </p>
                    </div>
            </div>
    </div>
    <br />
    <LifeAdvice/>
    <Sample/>
    <Roadmap/>
    <About/>
</div>        
    );
    }

export default Home
