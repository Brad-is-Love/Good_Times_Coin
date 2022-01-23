import React from "react";
import About from "./About";
import './App.css'
import LifeAdvice from "./LifeAdvice";
import Roadmap from "./RoadMap";
import GoodNFTimers from "./GoodNFTimers";
import logoTrans from "../logoTrans.png";
import InfoSection from "./InfoSection";
import CreatureAccross from "./CreatureAccross";
import creature0 from "../creatures/0.png"
import creature1 from "../creatures/1.png"
import creature2 from "../creatures/2.png"
import creature3 from "../creatures/3.png"
import creature4 from "../creatures/4.png"

function Home(props) {

    return (
        <div>
        <div class="container">
            <p className="siteHeading">
                Good Times Coin
            </p>

            <p className="sitetitle">
                IN GOOD WE TRUST
            </p>

            <div className="text-center">
                <img className="pb-5" src={logoTrans} alt="Good Times Coin Logo" />
            </div>
            <div className="largeBlue">
                Come for the Good Times, <br />
                Stay for the Good Times
            </div>
            <br />
            <br />
            
            <CreatureAccross creature = {creature0} divid = "0"/>
            
            <div className="my-5">
                <InfoSection
                    align = "left"
                    title = "An HRC-20 Token"
                    text1 = "On July 13 2021, times started to change, for the better."
                    text2 = "Good Times Coin was launched on the Harmony Network, to address the chronic, global shortage of Good Times."
                    text3 = "Using a combination of good feelings and ancient mathematical secrets, revolving around the golden numbers, Good Times Coin has been living up to it's name."
                />
            </div>

            <CreatureAccross creature = {creature1} divid = "1"/>
            
            <div className="my-5">
                <InfoSection
                    align = "right"
                    title = "Distribution"
                    text1 = "Good Times for All: 100% Fair Token Distribution"
                    text2 = "Good Times Coin is currently in the distribution phase. 68GTC is being given to 1000 people via reddit. Check out the whitepaper for more info."
                    text3 = "30% of GTC has been sent out so far. To get yours, message u/goodtimesbradtimes, on reddit, with an account created before 18 September 2021."
                />
            </div>
            {/* <ScrollAnimation/> */}
            <CreatureAccross creature = {creature2} divid = "2"/>
            <div className="my-5">
                <InfoSection 
                    align = "left"
                    title = "Life Advice NFTs"
                    text1 = "Good Times for You: Motivational NFTs"
                    text2 = "If you need a little help getting the good times rolling, check out our Life Advice NFT generator."
                    text3 = "Life advice NFTs are free to mint and stored 100% on-chain."
                />
            </div>
            <CreatureAccross creature = {creature3} divid = "3"/>
            <div className="my-5">
                <InfoSection 
                    align = "right"
                    title = "Good NF Timers"
                    text1 = "Your Ticket to Good Times: The NFT Collection"
                    text2 = "Good NF Timers are the first Good Times Coin NFT Collection. Original artwork by Brad Sandilands."
                    text3 = "Every Good NF Timer in your wallet will give you a 10% discount, when shopping with GTC on the future Good Times Store, up to a maximum of 69% off."
                />
            </div>
            <CreatureAccross creature = {creature4} divid = "4"/>
            {/* <br />
            <hr />
            <p class="text-center" >
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
                    The Good Times Coin NFT collection has just launched! have a look at <a href="/good-nf-timers">Good NF Timers</a>!
                    </p>
                </div>
            </div> */}
    </div>
    <br />
    <GoodNFTimers account={props.account} networkID={props.networkID}/>
    <LifeAdvice account={props.account} networkID={props.networkID}/>
    <Roadmap/>
    <About/>
</div>        
    );
    }

export default Home
