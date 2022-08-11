import React, {useState} from 'react'
import Web3 from 'web3';
import ConnectMetamask from './ConnectMetamask';
import Navtwo from './Navtwo';
import Home from './Home';
import About from './About.js';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LifeAdvice from './LifeAdvice';
import Roadmap from './RoadMap';
import MyNFTs from './MyNFTs';
import GoodNFTimers from './GoodNFTimers';
import NotFound from './NotFound';

const BlockChainConnection = () => {

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

    var mySiteURL = window.location.host.split(".");
    var storeURL = window.location.protocol + "//store." + mySiteURL[0]

    return (
     <BrowserRouter>
        <div className="sitebackground pb-1">
        <div className="generalfont">
          <div className='row sticky-top'>
            <div className='col'>
              <Navtwo />
              <a className="btn btn-large shadow-sm buttonText m-3" href = {storeURL}>Good Times Store
                </a>
            </div>
            <div className='col'>
                
            </div>
            <div className='col'>
                <ConnectMetamask account={defaultAccount} connectToMeta={connectWalletHandler}/>
            </div>
          </div>  
                    <div className='errorMessage'>{errorMessage}</div>

                  <br /><br />
            <div className="container rounded bg-transparent px-4" >

              <Switch>  
                <Route path = "/" exact><Home account={defaultAccount} networkID={networkID}/></Route>
                <Route path = "/home" exact><Home account={defaultAccount} networkID={networkID}/></Route>
                <Route path = "/good-nf-timers" exact><GoodNFTimers account={defaultAccount} networkID={networkID}/></Route>
                <Route path = "/about" component={About} exact/>
                <Route path = "/life-advice" exact><LifeAdvice account={defaultAccount} networkID={networkID}/></Route>
                <Route path = "/roadmap" component={Roadmap} exact/>
                <Route path = "/mynfts" exact><MyNFTs account={defaultAccount} networkID={networkID}/></Route>
                <Route><NotFound/></Route>
              </Switch>
              
            </div>
          </div>
        </div>

    </BrowserRouter>
    )
        
}

export default BlockChainConnection