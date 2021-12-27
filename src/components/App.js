import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
import Navtwo from './Navtwo';
import Home from './Home';
import About from './About.js';
import { BrowserRouter, Route} from 'react-router-dom';
import LifeAdvice from './LifeAdvice';
import siteIcon from "../NFTIcon.png"
import Roadmap from './RoadMap';
import MyNFTs from './MyNFTs';
import GoodNFTimers from './GoodNFTimers';

class App extends Component {

async componentWillMount(){
  // await this.loadWeb3()
  // await this.loadBlockchainData()
}

async connectToOne(){
  await this.loadWeb3()
  await this.loadBlockchainData()
}

  async loadWeb3() {
    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
          const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"})
          this.setState ({account: accounts[0]})
    } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentprovider)
  } else{
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    // Load networks
    const networkId = await web3.eth.net.getId()
    const networkData = Color.networks[networkId]
    if(!networkData) {
      window.alert("You're on the wrong Network!")
    }
  }

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
    networkError: '',
    }
  }


  render() {
    let accountConditional; 
            if(this.state.account==="Not Connected"){
              accountConditional = 
              <button className="btn-large"
                onClick={(event)=>{
                event.preventDefault()
                this.connectToOne()
          }}>Connect to MetaMask</button>}
          else{
          accountConditional = <p className="font-size: 2rem">Account: {this.state.account}</p>
          }
    return (
     <BrowserRouter>
        <div className="generalfont">
          <Navtwo />
          <div className="bg-white d-lg-none d-xl-none d-md-none text-end sticky-top"><p className="psmall">{accountConditional}</p></div>
          <div className="bg-white d-none d-lg-block d-xl-block d-md-block text-end sticky-top">{accountConditional}</div>

          <div className="sitebackground pr-4 pl-4 pb-5">
        
                  <br /><br />
            <div className="container rounded shadow-lg bg-white mt-2 pt-2 px-4" >
              <div className="row">
              <div className="col">
              <h1 className="sitetitle">Good Times Coin</h1>
              </div>
              <div className="col ml-auto"><img className="float-right pr-2 pt-2" src={siteIcon} alt="Good NF Timer" /></div>
              </div>
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
