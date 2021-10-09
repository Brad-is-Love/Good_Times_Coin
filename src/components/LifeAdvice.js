import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
// import logo from '../GTC Full Logo.jpg';
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';

class LifeAdvice extends Component {

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
    window.alert("There's awesome stuff on this site that only works with MetaMask, install it for full functionality")
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
      window.alert("You're on the wrong network, friend. Get on Harmony Mainnet to see everything this site has to offer")
      // Set up a function here that either outputs the button or outputs the error message
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
    }

  }


  render() {
    return (
      <div>
      <div class="row px-3">
      {/* this is the main sentence site */}
        <div class="col-s-8">
          <p class="special">Life Advice NFT Generator</p>
          <p>We all want good times, but sometimes we just don't know <em> how</em>. <br />
            <br /> This sophisticated algorithm generates accurate and relevant life advice, guaranteed to bring you good times.
            <br />These are text-based NFT's. There's no image. They're stored 100% on-chain, as opposed to most NFTs, that just point to an image URL
            <br /><br />The contract is <a href="https://explorer.harmony.one/address/0x8d1d098661856aa4a1143f68a882451d9b0e3f9a" target="_blank" rel="noopener noreferrer">here.</a>
            <br /><br />Mint yourself a <strong> free</strong> NFT on the Harmony Network!
          </p>
          

          {/* <h2>I'm not, like, a <em>qualified</em> counsellor, but...</h2> */}
        </div>
        {/* Button */}
        <div class="text-center mt-5 my-2">
          <button class="btn btn-large shadow-sm buttonText"  onClick={(event)=>{
              event.preventDefault()
              this.sentenceGenerator()
          }}>Mint Motivational NFT
          </button>
        </div>
        <br />
        <p class="primary text-center my-2">{this.state.totalSupply} out of 6969 Minted</p>
      </div>

      <div>
        <div classname="row text-center">
          {this.state.colors.slice(-1).reverse().map((color, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around">
                <div class="border rounded p-3 bg-light bg-gradient">
                  <center><h4>{color}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          <br />
          <div classname="row text-center">
          {this.state.colors.slice(-2,-1).reverse().map((color, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around faded">
                <div class="border rounded p-3 bg-light bg-gradient">
                  <center><h4>{color}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          <br />
          <div classname="row text-center">
          {this.state.colors.slice(-3,-2).reverse().map((color, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around moreFaded">
                <div class="border rounded p-3 bg-light bg-gradient">
                  <center><h4>{color}</h4></center>
                </div>
              </div>
            </div>
            )
          })}
      </div>
      <div class="row p-3">
       
        <p>
       <br />
       <hr />
       <br />
          If you want to go deeper, copy your ONE address and head to the 
          <a href="https://explorer.harmony.one/" target="_blank" rel="noopener noreferrer"> block explorer</a>,
          paste your address and click on the transaction hash of your last transaction. Then scroll down, copy the
          code from the "input" field, paste it into this <a href="https://www.duplichecker.com/hex-to-text.php" target="_blank" rel="noopener noreferrer">hex to text converter</a>,
          remove the 0x from the start and convert it. There is your NFT text straight from the blockchain!
        </p>
        </div>
      </div>          
      </div>
    );
  }
}

export default LifeAdvice;
