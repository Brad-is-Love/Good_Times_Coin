import React from "react";
import './App.css'
import flyer from '../GTCArtComp.png'


function GTAC() {

    return(
        
        <div class="row justify-content-around text-center">
            <h1 class="special">Good Times Art Competition</h1> 
            <p>Submit a 420x69 or 69x420 Pixel drawing, and be in to win:
            <br /><br />
                <strong>420 ONE + 68GTC for 1st prize!
                <br />
            69 ONE + 68 GTC for 2nd, and,
            <br/>
            68 GTC for 3rd to 5th place.</strong></p>
            <br/> <br />
            <p>Email submissions to <a href="mailto: goodtimesbradtimes69420@gmail.com">goodtimesbradtimes69420@gmail.com</a></p>

            <img class="flyer center pb-3" src={flyer} alt="Good Times Art Competition" />
            <p>Sumissions close <strong>November 22nd 2021</strong>. Judging by community vote.</p>
            <br />
            <br />
            <br />

        </div>

    )}

export default GTAC