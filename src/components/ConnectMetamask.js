import React from "react";

export default function ConnectMetamask(props) {
        let accountConditional; 
            if(props.account==="Not Connected"){
              accountConditional = 
              <button className="btn-large"
                onClick={(event)=>{
                event.preventDefault()
                props.connectToMeta()
          }}>Connect to MetaMask</button>}
          else{
          accountConditional = <p className="font-size: 2rem">{props.account}</p>
          }
          return (
          <div>
            <div className="mt-3 m-2 bg-transparent d-lg-none d-xl-none d-md-none text-end text-white sticky-top"><p className="psmall">{accountConditional}</p></div>
            <div className="mt-3 m-2 bg-transparent d-none d-lg-block d-xl-block d-md-block text-white text-end sticky-top">{accountConditional}</div>
        </div>
          )
}