import React, { Component, useEffect } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
import Navtwo from './Navtwo';
import Home from './Home';
import About from './About.js';
import { BrowserRouter, Route} from 'react-router-dom';
import LifeAdvice from './LifeAdvice';
//import siteIcon from "../NFTIcon.png"
import Roadmap from './RoadMap';
import MyNFTs from './MyNFTs';
import GoodNFTimers from './GoodNFTimers';
import ConnectMetamask from './ConnectMetamask';

class App extends Component {

async componentWillMount(){
}

connectaroo = () => {
  this.connectToOne()
}

async connectToOne(){
  await this.loadWeb3()
  await this.loadBlockchainData()
}

  async loadWeb3() {
    if (window.ethereum){
          const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"})
          this.setState ({account: accounts[0]})
    } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentprovider)
  } else{
    }
  }

  async loadBlockchainData() {
    // Load networks
    const chainID = await window.ethereum.request({ method: 'eth_chainId' })
    const networkId = Web3.utils.toBN(chainID).toString()
    const networkData = Color.networks[networkId]
    this.setState({networkData})
    this.setState({networkId})
    
    if(!networkData) {
      window.alert("You're on the wrong Network! Get on Harmony, Mate!")
    }
  }
//---------------
  getRandomInt(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
  }
  
  sentenceGenerator() {
    let firstWord = firstPart[this.getRandomInt(firstPart.length)]
    let secondWord = secondPart[this.getRandomInt(secondPart.length)]
    let thirdWord = thirdPart[this.getRandomInt(thirdPart.length)]
    let lastWord = lastPart[this.getRandomInt(lastPart.length)]
    let fifthWord = thirdPart[this.getRandomInt(thirdPart.length)]
    let sentence = '"'+firstWord+" "+secondWord+" "+thirdWord+" "+lastWord+" "+fifthWord+'"'
    this.mint(sentence)
  }

constructor(props){
  super(props)
  this.state = {
    account: 'Not Connected',
    contract: null,
    totalSupply: 0,
    colors: [],
    }
  }


  render() {
    return (
     <BrowserRouter>
        <div className="sitebackground pr-4 pl-4 pb-5">
        <div className="generalfont">
          <div className='row sticky-top'>
            <div className='col'>
              <Navtwo />
            </div>
            <div className='col'>
              <ConnectMetamask account={this.state.account} connectToMeta={this.connectaroo}/>
            </div>


          </div>
                  <br /><br />
            <div className="container rounded bg-transparent px-4" >

              {/* <Switch>   */}
                <Route path = "/" exact><Home account={this.state.account}/></Route>
                <Route path = "/home" exact><Home account={this.state.account}/></Route>
                <Route path = "/good-nf-timers" exact><GoodNFTimers account={this.state.account}/></Route>
                <Route path = "/about" component={About} exact/>
                <Route path = "/life-advice" exact><LifeAdvice account={this.state.account}/></Route>
                <Route path = "/roadmap" component={Roadmap} exact/>
                <Route path = "/mynfts" exact><MyNFTs account={this.state.account}/></Route>
              {/* </Switch> */}
              
            </div>
          </div>
        </div>

    </BrowserRouter>
    );
  }
}

export default App;
