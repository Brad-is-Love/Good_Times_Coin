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
            let displayAccount = props.account;
            accountConditional = <div>My Account:<br/>{
              
              displayAccount.slice(0,4)+' . . . '+displayAccount.slice(displayAccount.length-4,displayAccount.length)
            }</div>
          }
          return (
          <div>
            <div className="mt-3 bg-transparent d-lg-none d-xl-none d-md-none text-end text-white sticky-top"><div className="psmall">{accountConditional}</div></div>
            <div className="mt-3 bg-transparent d-none d-lg-block d-xl-block d-md-block text-white text-end sticky-top">{accountConditional}</div>
        </div>
          )
}