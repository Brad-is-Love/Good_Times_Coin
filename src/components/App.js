import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
// import logo from '../GTC Full Logo.jpg';
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
import Navtwo from './Navtwo';
import Sample from './Sample';
import Home from './Home';
import About from './About.js';
//import NetworkError from './NetworkError';
import { BrowserRouter, Route} from 'react-router-dom';
import LifeAdvice from './LifeAdvice';
import siteIcon from "../NFTIcon.png"
import Roadmap from './RoadMap';
import MyNFTs from './MyNFTs';
import GTAC from './GTAC';

class App extends Component {

async componentWillMount(){
  await this.loadWeb3()
  await this.loadBlockchainData()
}

  async loadWeb3() {
    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentprovider)
  } else{
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = Color.networks[networkId]
    if(networkData) {
      const abi = Color.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })
      const totalSupply = await contract.methods.totalSupply().call()
      this.setState({ totalSupply })
      // Load Colors
      if(totalSupply<4){
      for (var i = 1; i <= totalSupply; i++) {
        const color = await contract.methods.colors(i - 1).call()
        this.setState({
          colors: [...this.state.colors, color]
        })
      }
    } else {
        for (var j = totalSupply-3; j <= totalSupply; j++) {
        const color = await contract.methods.colors(j - 1).call()
        this.setState({
          colors: [...this.state.colors, color]
        })
      }
      } 
    } else {
    }
  }
    mint = (color) => {
    this.state.contract.methods.mint(color).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({
        colors: [...this.state.colors, color]   
      })
    })
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
    account: '',
    contract: null,
    totalSupply: 0,
    colors: [],
    networkError: '',
    }

  }


  render() {
    return (
     <BrowserRouter>
        <div class="generalfont">
          <Navtwo />
          <div class="bg-white d-lg-none d-xl-none d-md-none text-end"><p class="psmall">Account: {this.state.account}</p></div>
          <div class="bg-white d-none d-lg-block d-xl-block d-md-block text-end"><p class="font-size: 2rem">Account: {this.state.account}</p></div>

          <div class="sitebackground pr-4 pl-4 pb-5">
        
                  <br /><br />
            <div class="container rounded shadow-lg bg-white mt-2 pt-2 px-4" >
              <div class="row">
              <div class="col">
              <h1 class="sitetitle">Good Times Coin</h1>
              </div>
              <div class="col ml-auto"><img class="float-right pr-2 pt-2" src={siteIcon} alt="Good NF Timer" /></div>
              </div>
              {/* <Switch>   */}
                <Route path = "/" component={Home} exact/>
                <Route path = "/home" component={Home} exact/>
                <Route path = "/good-nf-timers" component={Sample} exact/>
                <Route path = "/about" component={About} exact/>
                <Route path = "/life-advice" component={LifeAdvice} exact/>
                <Route path = "/roadmap" component={Roadmap} exact/>
                <Route path = "/mynfts" component={MyNFTs} exact/>
                <Route path = "/GTAC" component={GTAC} exact/>
              {/* </Switch> */}
              
            </div>
          </div>
        </div>

    </BrowserRouter>
    );
  }
}

export default App;
