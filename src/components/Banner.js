import React from "react";
import './App.css'

function Banner(props) {

    return(
        <div>
            <br /><br />
            <div class="d-flex flex-row">
                <div class="p-2"><img src={props.logo} className="App-logo" height="100em" padding-top="10px" alt="Good Times Coin Logo" />
                </div>
                <div class="p-2"><h1 style={{ color: '#283592' }}>Good Times Coin </h1>
                    <p style={{ color: '#e01b84', fontSize: 'larger'}}>The only cryptocurrency <em>exclusively</em> focussed on bringing the good times</p>
                </div>
            </div>
        </div>
    )}
export default Banner