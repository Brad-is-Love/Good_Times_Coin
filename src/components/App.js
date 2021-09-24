import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import logo from '../GTC Full Logo.jpg';
// import About from './About';
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
// import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Nav from './Nav';
import Banner from './Banner';

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
    window.alert('install MetaMask')
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
        for (var j = totalSupply-4; j <= totalSupply; j++) {
        const color = await contract.methods.colors(j - 1).call()
        this.setState({
          colors: [...this.state.colors, color]
        })
      }
      } 
    } else {
      window.alert('Smart contract not on this network')
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
    colors: []
    }
  }


  

  render() {
    return (
      <div>
        <Nav account={this.state.account} logo={logo}/>
        <div>
        <center><h2>I'm not, like, a <em>qualified</em> counsellor, but...</h2></center>
          <center><button className="mintButton" onClick={(event)=>{
            event.preventDefault()
            this.sentenceGenerator()
          }}>MINT MOTIVATIONAL NFT</button>
          </center>
          <br />
        </div>
        <div>    
        <hr />
          <div classname="row text-center">
            {this.state.colors.slice(-4).reverse().map((color, key) => {
              return(
              <div key={key}>
                <div><center><h4>{color}</h4></center><br /></div>
              </div>
              )
            })}
          </div>
          <Banner />
          <br /><br />
        </div>
      </div>
    );
  }
}

export default App;
