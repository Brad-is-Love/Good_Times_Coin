import React from "react";
import './App.css'

function Banner(props) {

    return(
        <div>
            <div class="container">
                <div class = "row">
                    <div class="col-5 ml-2">
                        <img src={props.logo} height="100em" alt="Good Times Coin Logo" />
                    </div>

                    <div class="col-6 d-none d-xl-block">
                        <h3 class="text-muted text-left">Good <br /> Times <br /> Coin</h3>
                    </div>
                </div>
                <p style={{ color: '#e01b84'}}>The only cryptocurrency <em>exclusively</em> focussed on bringing the good times</p>
            </div>
        </div>
    )}
export default Banner