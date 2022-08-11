import React from "react";
import './App.css'
import { useEffect } from "react";

function About() {

    useEffect(() => {
        window.scroll(0,0)
      }, [])


    return(
        <div className="redline my-5">
            <br />
            <p className="siteHeading pt-5">About</p> 
            <h4 className="headings">Good Times Coin:</h4> 
            When I was a kid my mum joked: “Hard work pays off in the future, but laziness pays off now!”
<br /> <br />
            I thought: What if we always made ourselves happy right now?
            Wouldn’t we always be happy? <br />
            That’s why I created Good Times Coin.
<br /> <br />
            Good Times Coin is an HRC-20 Token minted on TokenJenny, the main feature is a hard-cap of 69,420GTC.
<br /> <br />
            Good Times Coin was created to address a global shortage of good times that has intensified in 2020 and 2021. 
            Just remember that you can look at your GTC balance at any time, relax, and just give yourself permission to have good times.
<br /> <br />
            The power is YOURS!
<br /><br />
            <h4 className="headings">The "Team"</h4>
            I’m Brad Sandilands, AKA u/goodtimesbradtimes. I am the GTC team.
            <br /><br />
            I bought my first little piece of Bitcoin as a secret santa gift in about 2016 
            then played online poker for Bitcoin through 2017-2018. One thing led to another and next
            thing you know I was selling NFTs on DaVinci.Gallery.
<br /> <br />
            I fell in love with Harmony's functionality and community, learned to slap code together, 
            and created Good Times Coin; a way to combine my love of good times with my love of cryptocurrency.
<br /> <br />
            I hope you have as many Good Times using GTC as I had creating it!
<br /><br />
            Brad
<br /> <br />
        </div>
    )}

export default About