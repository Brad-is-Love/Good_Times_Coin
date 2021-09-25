import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import logo from '../GTC Full Logo.jpg';
import { firstPart, secondPart, thirdPart, lastPart } from '../Arrays';
// import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Nav from './Nav';
import Sample from './Sample';
import Home from './Home';
import Banner from './Banner';
import Links from './Links';

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
        <Nav account={this.state.account}/>
        <br />

        <div class="container mt-5">
          <div class="row justify-content-end"> 
          <div class="col-2 position-fixed ml-3 mt-5">
            <div class="d-flex justify-content-around mt-2"><Banner logo={logo}/></div>
            <div class="d-flex justify-content-around mt-2"><Links /></div>
          </div>
          </div>

          <div class="row">              
          <div class="col-10">
          <div>
            <div >
            {/* this is the main sentence site */}

              <h2><em>Life Advice NFT Generator</em></h2>
            {/* Most NFT images are stored off-chain on a service like&nbsp;
            <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">IPFS</a>&nbsp;
            with just the URI stored in the on the blockchain itself and there's nothing <em>wrong</em> with that, 
            but what if you want a fully on-chain NFT? <br />  */}
            <br />
            <p>The sophisticated <em>Good Times Algorithm</em> generates relevant 
            life advice that's guaranteed to bring you good times. It mints it into an NFT on the Harmony Network, that's yours to keep forever,
            <strong> for free!</strong> <br />
            except the network fee, which is but a fraction of a cent.</p>
            <br />
            {/* If you want to go deeper, copy your ONE address and head to the 
            <a href="https://explorer.harmony.one/" target="_blank" rel="noopener noreferrer">block explorer</a>,
            paste your address and click on the transaction hash of your last transaction. Then scroll down, copy the
            code from the "input" field, paste it into this <a href="https://www.duplichecker.com/hex-to-text.php" target="_blank" rel="noopener noreferrer">hex to text converter</a>,
            remove the 0x from the start and convert it. There is your NFT text straight from the ch-zain! */}

            {/* <h2>I'm not, like, a <em>qualified</em> counsellor, but...</h2> */}

            <center><button class="btn btn-outline-primary" onClick={(event)=>{
                event.preventDefault()
                this.sentenceGenerator()
            }}>MINT MOTIVATIONAL NFT</button>
            </center>
            <br />
            </div>

            <div>
              <div classname="row text-center">
                {this.state.colors.slice(-4).reverse().map((color, key) => {
                  return(
                  <div key={key}>
                    <div><center><h4>{color}</h4></center><br /></div>
                  </div>
                  )
                })}
              </div>
            </div>
          </div>
          <Sample />
          <Home />
          </div>
 
          </div>
        </div>
      </div>  
    );
  }
}

export default App;
