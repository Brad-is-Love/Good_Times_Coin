import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import GoodNFT from '../abis/GoodNFTimers.json'
import GTCLocal from '../abis/GTCLocal.json'
import { holdersList } from '../Holders';

class GoodNFTimers extends Component {

constructor(props){
  super(props)
  this.state = {
    account: 'Not Connected to MetaMask',
    contract: null,
    totalSupply: 0,
    NFTs: [],
    }

  }


async componentWillMount(){
  await this.loadWeb3()
  await this.loadBlockchainData()
}


async connectToWeb3(){
//await this.loadWeb3()
//await this.loadBlockchainData()
}


  async loadWeb3() {
    if (window.ethereum){
      window.web3 = new Web3(window.ethereum)
          const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"})
          this.setState ({account: accounts[0]})

          //, () => {console.log(this.state.account)}
          // window.ethereum.on("accountsChanged", () => {
          //   window.location.reload();
          // });
          
    } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentprovider)
  } else{
    window.alert("There's awesome stuff on this site that only works with MetaMask, install it for full functionality")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    let accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const NFTNetwork = GoodNFT.networks[networkId]
 
    if(NFTNetwork) {
      //NFT Smart contract
      const nftabi = GoodNFT.abi
      const nftaddress = NFTNetwork.address
      const nftcontract = new web3.eth.Contract(nftabi, nftaddress)
      this.setState({ nftcontract })            
      this.setState({nftaddress})

      let totalSupply = await nftcontract.methods.totalSupply().call()
      this.setState({ totalSupply })

      //GTC smart contract
      const GTCAbi = GTCLocal.abi
      const GTCAddress = '0x6e85399c21a62d9dc555c2c9b46c4854dd2416c5'
      this.setState({GTCAddress})
      const GTCContract = new web3.eth.Contract(GTCAbi, GTCAddress)
      this.setState({GTCContract}) 
      // console.log(GTCAddress)

      // Load NFTs
      for (var j = totalSupply-3; j <= totalSupply; j++) {
        const URI = await nftcontract.methods.tokenURI(j).call()
          let response = await fetch(URI);
          let responseJson = await response.json();
          let imageData = await responseJson.image;
          const NFT = 'https://gateway.pinata.cloud/ipfs/'+imageData.slice(7)
        this.setState({
          NFTs: [...this.state.NFTs, NFT]
        })
      }

    } else {
      window.alert("You're on the wrong network, friend. Get on Harmony Mainnet to see everything this site has to offer")
      // Set up a function here that either outputs the button or outputs the error message
    }
  }

    mint = () => {
    this.state.nftcontract.methods.mint(this.state.account, 1).send({ 
        from: this.state.account,
        value: window.web3.utils.toWei((420).toString(), "ether") 
    })
  }

  
  async getNextToken() {
    let index = await this.state.nftcontract.methods.totalSupply.call()
       const URI = await this.state.nftcontract.methods.tokenURI(index).call()
          let response = await fetch(URI);
          let responseJson = await response.json();
          let imageData = await responseJson.image;
          const NFT = 'https://gateway.pinata.cloud/ipfs/'+imageData.slice(7)
        this.setState({
          NFTs: [...this.state.NFTs, NFT]
        })
      }


    payGTC = () => {
      this.state.GTCContract.methods.approve(this.state.nftaddress, window.web3.utils.toWei((6.9).toString())).send({ 
        from: this.state.account})
        .once('receipt', (receipt) => {
          this.state.nftcontract.methods.GTCmint(
            this.state.account,
            "1").send({from: this.state.account})
    })
  }

  withdrawGTC = () => {
    this.state.nftcontract.methods.withdrawGTC().send({from: this.state.account})
  }
  withdrawONE = () => {
    this.state.nftcontract.methods.withdrawONE().send({from: this.state.account})
  }

  mintToHolders() {
    for (var h = 0; h <= holdersList.length; h++){
      console.log()
      this.state.nftcontract.methods.mint(holdersList[h], 1).send({ 
        from: this.state.account}) 
    }
  }


  render() {
    return (
      <div>
      <div class="row px-3">
      {/* this is the main sentence site */}
        <div class="col-s-8 ">
          <p class="special">Good NF Timers Generator</p>
           </div>
           
        <p class="primary text-center"> <hr/><strong>Mint yourself a beautiful, 420x69 pixel, Good NF Timer.</strong>
        <br/>They're not perfect, but they're Good NF.
        <hr/></p>

        {/* Button */}
        <div class="text-center mt-3 my-2">
          <p>There are two ways to mint: Pay 6.9GTC, or hold onto it and pay with ONE</p>
          <button class="btn btn-large shadow-sm buttonText mx-3"  onClick={(event)=>{
              event.preventDefault()
              this.mint()
          }}>Pay 420 ONE to mint
          </button>
          <button class="btn btn-large shadow-sm buttonText mx-3"  onClick={(event)=>{
              event.preventDefault()
              this.payGTC()
          }}>Pay 6.9 GTC to mint
          </button>
        </div>
        <br />
        <p class="primary text-center my-2">{this.state.totalSupply} out of 4269 Minted</p>
      </div>

          
      <div>
        <div classname="row text-center">
          <p class="primary text-center my-2">Here are the last 3 minted:</p>
          {this.state.NFTs.slice(-3).reverse().map((NFT, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around">
                <div class="p-3">
                  <center><img class="goodnft shadow" src={NFT} alt="check" /></center>
                </div>
              </div>
            </div>
            )
          })}
          </div>
          
          <br />

          {/* admin functions (to be moved) */}
            {/* <button class="btn btn-large shadow-sm buttonText mx-2"  onClick={(event)=>{
                event.preventDefault()
                this.mintToHolders()
            }}>Airdrop</button>
            <button class="btn btn-large shadow-sm buttonText mx-2"  onClick={(event)=>{
                event.preventDefault()
                this.withdrawGTC()
            }}>Withdraw GTC</button>
            <button class="btn btn-large shadow-sm buttonText mx-2"  onClick={(event)=>{
                event.preventDefault()
                this.withdrawONE()
            }}>Withdraw ONE</button>
           */}
      <div class="row p-3">
       
        </div>
      </div>          
      </div>
    );
  }
}

export default GoodNFTimers;
