import React, {useState} from 'react'
import Web3 from 'web3';
import ConnectMetamask from '../ConnectMetamask';
import NavStore from './NavStore';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Account from './Account';
import Heading from './Heading';
import NotFound from '../NotFound';

const ConnectionStore = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState('Not Connected');
    new Web3(window.ethereum)
    const [networkID, setNetworkID] = useState(null);

    const connectWalletHandler = () =>{
        if(window.ethereum) {
            window.ethereum.request({
            method: "eth_requestAccounts"}).then(result => {
                accountChangedHandler(result[0]);
            })
            window.ethereum.on('accountsChanged', accountChangedHandler);
            window.ethereum.on('chainChanged', chainChangedHandler);
        } else {
            setErrorMessage('Please install Metamask')
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        // getUserBalance(newAccount.toString());
        getChainID();
    }

    const chainChangedHandler = () => {
        window.location.reload();
    }

    const getChainID = () => {
        window.ethereum.request({ method: 'eth_chainId' })
        .then(chainID => compareChains(chainID))
    }
        
    const compareChains = (chainID) => {
        const networkId = Web3.utils.toBN(chainID).toString()
        setNetworkID(networkId)
        console.log("the network:" + networkId)
        if(networkId !== "1666600000") {
        setErrorMessage("You're on the wrong Network! Get on Harmony, Mate!")
        }
    }

    return (
     <BrowserRouter>
        <div className="sitebackground pb-1">
        <div className="generalfont">
          <div className='row sticky-top'>
            <div className='col'>
              <NavStore />
            </div>
            <div className='col'>
                <ConnectMetamask account={defaultAccount} connectToMeta={connectWalletHandler}/>
            </div>
          </div>  
            <div className='errorMessage'>{errorMessage}</div>
                <br /><br />
                <Switch>
                    <Route path = "/" exact><Heading/></Route>
                    <Route path = "/account" exact><Account account={defaultAccount} networkID={networkID}/></Route>
                    <Route><NotFound/></Route>
                </Switch>
                
          </div>
        </div>

    </BrowserRouter>
    )
        
}

export default ConnectionStore