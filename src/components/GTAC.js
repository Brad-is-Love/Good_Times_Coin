import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import VotingForComp from '../abis/VotingForComp.json';

import entry1 from '../ArtComp/2Mars.png'
import entry2 from '../ArtComp/Art_Liberty.jpg'
import entry3 from '../ArtComp/GoodTimes.png'
import entry4 from '../ArtComp/Lazaro.jpg'
import entry5 from '../ArtComp/memellenial.png'
import entry6 from '../ArtComp/TheSon.png'

class GTAC extends Component {

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
    const networkData = VotingForComp.networks[networkId]
    if(networkData) {
      const abi = VotingForComp.abi
      const address = networkData.address
      const contract = new web3.eth.Contract(abi, address)
      this.setState({ contract })

            const votes = await contract.methods.seeVotes().call()
            this.setState({votes})

          } else {
      window.alert("You're on the wrong network, friend. Get on Harmony Mainnet to see everything this site has to offer")
      // Set up a function here that either outputs the button or outputs the error message
    }
  }

  vote = (option) => {
    this.state.contract.methods.vote(option).send({ from: this.state.account })
    }


constructor(props){
  super(props)
  this.state = {
    account: '',
    contract: null,
    votes: [],
    }

  }


  render() {
    return (
        <div>
            <h1 class="special">Good Times Art Competition</h1> 
            <div class="row px-2">
            
            <div class="justify-content-around text-center">
        <hr />
            <p>Some of the finest art from around the globe was submitted to The Good Times Art Competition.
                There are 5 prizes including ONE and GTC. <br /> The winning pictures will be added to the upcoming <a href="/good-nf-timers"> Good NF Timers
                NFT Collection.</a></p> <hr />
                <br />
            <strong>Voting closes on December 1st 2021. 6:00am GMT
                <br />
            </strong> 
            <p>One vote per wallet! If there's a tie, the prize will be split.</p>
            <br/>
    <h4 class="headings">Click on an Image to Vote for Your Favorite</h4>
                    </div>
            <br/> 
            
         </div>  

          <br />
        <div class="row text-center">
            <div class = "col-sm">
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(1)
                    }}><img class="flyerV pb-3" src={entry1} alt="" />
                </button> 
            </div>
            <div class = "col-sm"> 
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(3)
                    }}><img class="flyerV pb-3" src={entry3} alt="" />
                </button>
            </div>
            <div class = "col-sm">
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(2)
                    }}><img class="flyerV pb-3" src={entry2} alt="" />
                </button>
            </div>
            <div class = "col-sm">
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(4)
                    }}><img class="flyerH center pb-3" src={entry4} alt="" />
                </button>
            <br />
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(5)
                    }}><img class="flyerH center pb-3" src={entry5} alt="" />
                </button>
            <br />
                <button class="btn"  onClick={(event)=>{
                    event.preventDefault()
                    this.vote(6)
                    }}><img class="flyerH center pb-3" src={entry6} alt="" />
                </button>
            <br />
            </div>
            
         
            {/* {this.state.votes.map((vote, key) => {
            return(
            <div key={key}>{vote}</div>
            )
          })}   */}

        </div>
        </div>

    )}
    }

export default GTAC;