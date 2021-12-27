import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Color from '../abis/Color.json'
import GoodNFT from '../abis/GoodNFTimers.json'

class MyNFTs extends Component {
        
    async componentWillMount(){
      if(this.props.account !== "Not Connected") {
        await this.loadBlockchainData()
      }
    }

    async componentDidUpdate (prevProps){
      if(this.props.account !== prevProps.account){
        await this.loadWeb3()
        await this.loadBlockchainData()
        console.log("MyNFTs Updated")
      }
    }

    async loadWeb3() {
        if (window.ethereum){
        window.web3 = new Web3(window.ethereum)
        } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentprovider)
      }
    }

    async loadBlockchainData() {
      const web3 = window.web3
      const account = this.props.account        
//My good NF timers:
        const nftabi = GoodNFT.abi
        const networkId = await web3.eth.net.getId()
        const NFTNetwork = GoodNFT.networks[networkId]
        if(NFTNetwork){
          const nftaddress = NFTNetwork.address
          const nftcontract = new web3.eth.Contract(nftabi, nftaddress)
          this.setState({nftcontract})            
          this.setState({nftaddress})

    //My life advice
          const networkData = Color.networks[networkId]      
          const abi = Color.abi
          const address = networkData.address
          const contract = new web3.eth.Contract(abi, address)
          this.setState({ contract })

          //Check for existing NFTS
          let balance = await contract.methods.balanceOf(account).call()
          this.setState({balance})
          for (var tokenId = 1; tokenId <=balance; tokenId++){
                  let tokenIndex = await contract.methods.tokenOfOwnerByIndex(account,tokenId-1).call()
                  let color = await contract.methods.colors(tokenIndex-1).call()
                  this.setState({
                  myTokens: [...this.state.myTokens, color]})
          }
          //GNFTs
          let nftBalance = await nftcontract.methods.balanceOf(account).call()
          this.setState({nftBalance})

          for (var nftIndex = 1; nftIndex <= nftBalance; nftIndex++) {
            let nftId = await nftcontract.methods.tokenOfOwnerByIndex(this.props.account,nftIndex-1).call()
            const URI = await nftcontract.methods.tokenURI(nftId).call()
              let response = await fetch(URI);
              let responseJson = await response.json();
              let imageData = await responseJson.image;
              const NFT = 'https://gateway.pinata.cloud/ipfs/'+imageData.slice(7)
              this.setState({
                myGNFTs: [...this.state.myGNFTs, NFT]
            })
          } 
      } else {
        window.alert("wrong Netty")// Set up a function here that either outputs the button or outputs the error message
        }
      }

constructor(props){
  super(props)
  this.state = {
    contract: null,
    color: '',
    myTokens: [],
    tokenIds: [],
    tokenIndexes: [],
    myGNFTs: [],
    }

  }


  render() {
    return (
        <div>
          <p class="specialMobile d-lg-none d-xl-none d-md-none">My NFT Inventory</p>
            <p class="special d-none d-lg-block d-xl-block d-md-block">My NFT Inventory</p>

          My {this.state.nftBalance} Good NF Timers pick me up when I'm feeling blue:
        <br />
        <div classname="row text-center">
          {this.state.myGNFTs.map((myGNFT, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around px-2 py-3">
                  <center><img class="goodnft shadow" src={myGNFT} alt="check" /></center>
                <br />
              </div>
            </div>
            )})}
        </div>
        <br />
        <br />

          These {this.state.balance} Life Advice NFTs guide me through the ups and downs of life:
        <br />

        <div classname="row text-center">
          {this.state.myTokens.map((myTokens, key) => {
            return(
            <div key={key}>
              <div class="row justify-content-around">
                <div class="border rounded p-3 bg-light bg-gradient">
                  <center><h4>{myTokens}</h4></center>
                  <br/>
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

export default MyNFTs