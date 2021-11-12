import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Voting from '../abis/Color.json'

class VoteCounter extends Component {
        
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
        const networkData = Voting.networks[networkId]
        if(networkData) {
        const abi = Voting.abi
        const address = networkData.address
        const contract = new web3.eth.Contract(abi, address)
        this.setState({ contract })

        const totalSupply = await contract.methods.totalSupply().call()
        this.setState({ totalSupply })
        //Check for existing votes

        let balance = await contract.methods.balanceOf(accounts[0]).call()
        this.setState({balance})
        for (var tokenId = 1; tokenId <=balance; tokenId++){
                let tokenIndex = await contract.methods.tokenOfOwnerByIndex(accounts[0],tokenId-1).call()
                let color = await contract.methods.colors(tokenIndex-1).call()
                this.setState({
                myTokens: [...this.state.myTokens, color]})
        } 
        } else {
        window.alert("You're on the wrong network, friend. Get on Harmony Mainnet to see everything this site has to offer")
        // Set up a function here that either outputs the button or outputs the error message
        }
    }

constructor(props){
  super(props)
  this.state = {
    account: '',
    contract: null,
    totalSupply: 0,
    color: '',
    myTokens: [],
    tokenIds: [],
    tokenIndexes: [],
    
    }

  }


  render() {
    return (
        <div>I have: {this.state.balance} NFTs
        <br />

        <div classname="row text-center">
          {this.state.myTokens.map((myTokens, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around">
                <div class="border rounded p-3 bg-light bg-gradient">
                  <center><h4>{myTokens}</h4></center>
                </div>
                <br />
              </div>
            </div>
            )})}
        </div>
        <br />
        <br />
        </div>
        // find NFT where token owner = this address
    );
  }
}

export default VoteCounter